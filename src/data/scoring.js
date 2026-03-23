/**
 * Scoring engine for Happy Equal Life
 *
 * Calculates a weighted match score for each country based on
 * the user's profile and preference weights.
 */

const EQUALDEX_API = 'https://www.equaldex.com/api/regions';
const EQUALDEX_API_KEY = import.meta.env.VITE_EQUALDEX_API_KEY;

/**
 * Fetch the latest LGBTQ data from Equaldex API.
 * Returns a map of { region_id -> { lgbtq_orient, lgbtq_social } }
 * or null on failure.
 */
export async function fetchEqualdexData() {
  try {
    const url = `${EQUALDEX_API}?apiKey=${EQUALDEX_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    // The API may return { regions: [...] } or an array directly
    const list = Array.isArray(json) ? json : (json.regions || json.data || []);
    const map = {};
    for (const item of list) {
      if (item.region_id) {
        map[item.region_id] = {
          ei:           item.ei ?? null,
          lgbtq_orient: item.ei_legal ?? null,
          lgbtq_social: item.ei_po ?? null,
        };
      }
    }
    return map;
  } catch (e) {
    console.warn('Equaldex API unavailable, using built-in data.', e.message);
    return null;
  }
}

/**
 * Merge live Equaldex data into the country list.
 * Only overwrites lgbtq_orient / lgbtq_social; keeps everything else.
 */
export function mergeEqualdexData(countries, equaldexMap) {
  if (!equaldexMap) return countries;
  return countries.map(c => {
    const live = equaldexMap[c.code];
    if (!live) return c;
    return {
      ...c,
      ei:           live.ei           ?? c.ei,
      lgbtq_orient: live.lgbtq_orient ?? c.lgbtq_orient,
      lgbtq_social: live.lgbtq_social ?? c.lgbtq_social,
    };
  });
}

/**
 * Determine which racial experience key to use for a person.
 */
export function racialKey(race) {
  return race || 'white';
}

/**
 * Is this person LGBTQ+?
 */
export function isLgbtq(orientation) {
  return ['gay', 'lesbian', 'bisexual', 'pansexual', 'asexual', 'other'].includes(orientation);
}

/**
 * Is this person transgender / non-binary?
 * (affects gender-specific LGBTQ legal score weight)
 */
export function isGenderDiverse(gender) {
  return ['nonbinary', 'other'].includes(gender);
}

/**
 * Calculate the climate match score (0–100).
 *
 * @param country     Country object
 * @param tempPref    User temperature preference: 0 = cold, 100 = hot
 * @param minSunHours Minimum daily sunshine hours the user wants
 */
export function climateScore(country, tempPref, minSunHours) {
  // Map country avg temp (-10 to 35°C) to 0–100
  const countryTempScore = Math.max(0, Math.min(100, ((country.avg_temp_c + 10) / 45) * 100));

  // Distance penalty — closer to preference = higher score
  const dist = Math.abs(countryTempScore - tempPref);
  const tempMatch = Math.max(0, 100 - dist * 1.2);

  // Sun penalty: if country sun hours < minimum, scale down
  const sunPenalty = country.sun_hours < minSunHours
    ? ((minSunHours - country.sun_hours) / minSunHours) * 60
    : 0;

  return Math.max(0, tempMatch - sunPenalty);
}

/**
 * Get racial experience score for one or two people.
 * For a couple, returns the lower of the two (most vulnerable).
 */
export function racialScore(country, persons) {
  const scores = persons
    .filter(p => p.race)
    .map(p => country.racial[racialKey(p.race)] ?? 60);
  if (scores.length === 0) return 70;
  return Math.min(...scores);
}

/**
 * Get LGBTQ orientation legal score, adjusted for person.
 * If person is straight, still factor in but reduce importance
 * (they may have LGBTQ friends/family, or plan to start a family).
 */
export function lgbtqOrientScore(country, persons) {
  const anyLgbtq = persons.some(p => isLgbtq(p.orientation));
  if (!anyLgbtq) return country.lgbtq_orient; // still show, but user can weight it down
  return country.lgbtq_orient;
}

/**
 * Get LGBTQ gender legal score.
 */
export function lgbtqGenderScore(country) {
  return country.lgbtq_gender;
}

/**
 * Compute the overall score for a country.
 *
 * @param country   Country object (with lgbtq data merged)
 * @param persons   Array of 1–2 person objects { gender, orientation, race }
 * @param weights   Object with keys matching DIMENSIONS
 * @param tempPref  0–100 temperature preference
 * @param minSun    Minimum sun hours per day
 * @returns { total, breakdown }
 */
export function scoreCountry(country, persons, weights, tempPref, minSun) {
  const breakdown = {
    climate:        climateScore(country, tempPref, minSun),
    lgbtq_orient:   country.lgbtq_orient ?? 50,
    lgbtq_gender:   country.lgbtq_gender ?? 50,
    lgbtq_social:   country.lgbtq_social ?? 50,
    racial:         racialScore(country, persons),
    safety:         country.safety,
    healthcare:     country.healthcare,
    cost_value:     country.cost_value,
    visa:           country.visa,
  };

  // Weighted sum
  let weightedSum = 0;
  let totalWeight = 0;
  for (const key of Object.keys(breakdown)) {
    const w = weights[key] ?? 0;
    weightedSum += breakdown[key] * w;
    totalWeight += w;
  }

  const total = totalWeight > 0 ? weightedSum / totalWeight : 0;

  return { total: Math.round(total), breakdown };
}

/**
 * Default weights — equal across all dimensions.
 */
export const DEFAULT_WEIGHTS = {
  climate:      50,
  lgbtq_orient: 50,
  lgbtq_gender: 50,
  lgbtq_social: 50,
  racial:       50,
  safety:       50,
  healthcare:   50,
  cost_value:   50,
  visa:         50,
};

/**
 * Suggest smart default weights based on profile.
 */
export function suggestWeights(persons) {
  const weights = { ...DEFAULT_WEIGHTS };

  const anyLgbtq = persons.some(p => isLgbtq(p.orientation));
  const anyGenderDiverse = persons.some(p => isGenderDiverse(p.gender));
  const isPoc = persons.some(p => p.race && p.race !== 'white');
  const isCouple = persons.length === 2;

  if (anyLgbtq) {
    weights.lgbtq_orient = 80;
    weights.lgbtq_social = 75;
  }
  if (anyGenderDiverse) {
    weights.lgbtq_gender = 85;
  }
  if (isPoc) {
    weights.racial = 80;
  }
  if (isCouple) {
    weights.visa = 65;
  }

  return weights;
}

/**
 * Dimension labels and descriptions shown in the UI.
 */
export const DIMENSIONS = [
  {
    key:         'climate',
    label:       'Climate',
    description: 'How well the country\'s typical climate matches your temperature preference and sunshine needs.',
  },
  {
    key:         'lgbtq_orient',
    label:       'LGBTQ+ Legal: Orientation',
    description: 'Legal protection based on sexual orientation — covering same-sex partnerships, marriage, adoption and anti-discrimination law. Data from Equaldex.',
  },
  {
    key:         'lgbtq_gender',
    label:       'LGBTQ+ Legal: Gender Identity',
    description: 'Legal gender recognition, protection from discrimination based on gender identity, and access to gender-affirming healthcare. Based on Rainbow Europe and ILGA World indices.',
  },
  {
    key:         'lgbtq_social',
    label:       'LGBTQ+ Social Acceptance',
    description: 'How accepted and visible LGBTQ+ people are in daily social life, measured by public attitude surveys. Data from Equaldex.',
  },
  {
    key:         'racial',
    label:       'Racial Experience',
    description: 'Estimated social comfort and safety for your racial background based on reported experiences, diversity research and colorism studies. Generalised — individual experiences vary.',
  },
  {
    key:         'safety',
    label:       'Safety',
    description: 'General personal safety including crime rates and political stability. Based on the Global Peace Index and other safety indices.',
  },
  {
    key:         'healthcare',
    label:       'Healthcare',
    description: 'Quality of and access to public healthcare. Based on WHO and Euro Health Consumer Index data.',
  },
  {
    key:         'cost_value',
    label:       'Cost / Value',
    description: 'Quality of life relative to cost of living. A high score means your money goes further without sacrificing quality.',
  },
  {
    key:         'visa',
    label:       'Visa / Residency',
    description: 'Ease of legally relocating — covering digital nomad visas, retirement visas, skilled worker routes and EU freedom of movement. Score reflects general accessibility for most Western passport holders.',
  },
];
