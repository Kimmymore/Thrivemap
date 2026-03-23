/**
 * Country dataset for Happy Equal Life
 *
 * Includes only countries where same-sex relations are legal for
 * both male and female (or are in a legal grey zone / decriminalized).
 *
 * LGBTQ scores (lgbtq_orient, lgbtq_social) are sourced from Equaldex
 * (equaldex.com) and refreshed via API when an API key is provided.
 *
 * Supplementary scores (lgbtq_gender, climate, racial, safety,
 * healthcare, cost_value, visa) are compiled from public indices
 * (Global Peace Index, WHO, Numbeo, Rainbow Europe, ILGA World).
 *
 * All scores are 0–100. Higher is always better/more welcoming.
 * Racial scores reflect the reported social experience of that
 * ethnic group in each country — they are generalisations based on
 * aggregate research and do not reflect every individual's experience.
 */

export const COUNTRIES = [
  // ── NORTHERN EUROPE ─────────────────────────────────────────────
  {
    code: 'IS', name: 'Iceland', flag: '🇮🇸', region: 'Northern Europe',
    ei: 93, lgbtq_orient: 96, lgbtq_social: 90, lgbtq_gender: 95,
    avg_temp_c: 4, sun_hours: 4.5,
    racial: { white: 90, black: 72, mixed_bw: 74, asian: 72, south_asian: 70, hispanic: 75, mena: 68 },
    safety: 98, healthcare: 82, cost_value: 22, visa: 72,
  },
  {
    code: 'NO', name: 'Norway', flag: '🇳🇴', region: 'Northern Europe',
    ei: 87, lgbtq_orient: 88, lgbtq_social: 87, lgbtq_gender: 88,
    avg_temp_c: 2, sun_hours: 4.7,
    racial: { white: 88, black: 70, mixed_bw: 72, asian: 72, south_asian: 70, hispanic: 72, mena: 65 },
    safety: 95, healthcare: 84, cost_value: 20, visa: 72,
  },
  {
    code: 'SE', name: 'Sweden', flag: '🇸🇪', region: 'Northern Europe',
    ei: 75, lgbtq_orient: 85, lgbtq_social: 65, lgbtq_gender: 84,
    avg_temp_c: 6, sun_hours: 5.0,
    racial: { white: 85, black: 68, mixed_bw: 70, asian: 72, south_asian: 68, hispanic: 72, mena: 62 },
    safety: 82, healthcare: 86, cost_value: 45, visa: 72,
  },
  {
    code: 'FI', name: 'Finland', flag: '🇫🇮', region: 'Northern Europe',
    ei: 76, lgbtq_orient: 86, lgbtq_social: 66, lgbtq_gender: 82,
    avg_temp_c: 4, sun_hours: 4.5,
    racial: { white: 88, black: 65, mixed_bw: 67, asian: 70, south_asian: 65, hispanic: 70, mena: 60 },
    safety: 90, healthcare: 79, cost_value: 50, visa: 72,
  },
  {
    code: 'DK', name: 'Denmark', flag: '🇩🇰', region: 'Northern Europe',
    ei: 82, lgbtq_orient: 94, lgbtq_social: 69, lgbtq_gender: 93,
    avg_temp_c: 9, sun_hours: 5.0,
    racial: { white: 88, black: 68, mixed_bw: 70, asian: 72, south_asian: 68, hispanic: 72, mena: 63 },
    safety: 92, healthcare: 79, cost_value: 38, visa: 72,
  },
  {
    code: 'EE', name: 'Estonia', flag: '🇪🇪', region: 'Northern Europe',
    ei: 58, lgbtq_orient: 73, lgbtq_social: 44, lgbtq_gender: 60,
    avg_temp_c: 7, sun_hours: 4.5,
    racial: { white: 87, black: 52, mixed_bw: 54, asian: 58, south_asian: 52, hispanic: 60, mena: 50 },
    safety: 88, healthcare: 68, cost_value: 70, visa: 72,
  },
  {
    code: 'LV', name: 'Latvia', flag: '🇱🇻', region: 'Northern Europe',
    ei: 46, lgbtq_orient: 58, lgbtq_social: 35, lgbtq_gender: 38,
    avg_temp_c: 8, sun_hours: 4.5,
    racial: { white: 85, black: 45, mixed_bw: 47, asian: 52, south_asian: 45, hispanic: 55, mena: 42 },
    safety: 78, healthcare: 65, cost_value: 70, visa: 72,
  },
  {
    code: 'LT', name: 'Lithuania', flag: '🇱🇹', region: 'Northern Europe',
    ei: 47, lgbtq_orient: 66, lgbtq_social: 28, lgbtq_gender: 30,
    avg_temp_c: 8, sun_hours: 4.5,
    racial: { white: 85, black: 45, mixed_bw: 47, asian: 52, south_asian: 45, hispanic: 55, mena: 42 },
    safety: 80, healthcare: 65, cost_value: 70, visa: 72,
  },

  // ── WESTERN EUROPE ───────────────────────────────────────────────
  {
    code: 'NL', name: 'Netherlands', flag: '🇳🇱', region: 'Western Europe',
    ei: 76, lgbtq_orient: 87, lgbtq_social: 64, lgbtq_gender: 85,
    avg_temp_c: 10, sun_hours: 4.5,
    racial: { white: 88, black: 65, mixed_bw: 68, asian: 72, south_asian: 68, hispanic: 72, mena: 62 },
    safety: 87, healthcare: 88, cost_value: 40, visa: 72,
  },
  {
    code: 'BE', name: 'Belgium', flag: '🇧🇪', region: 'Western Europe',
    ei: 74, lgbtq_orient: 88, lgbtq_social: 61, lgbtq_gender: 88,
    avg_temp_c: 10, sun_hours: 4.0,
    racial: { white: 85, black: 65, mixed_bw: 68, asian: 70, south_asian: 68, hispanic: 70, mena: 60 },
    safety: 82, healthcare: 87, cost_value: 50, visa: 72,
  },
  {
    code: 'DE', name: 'Germany', flag: '🇩🇪', region: 'Western Europe',
    ei: 80, lgbtq_orient: 100, lgbtq_social: 60, lgbtq_gender: 90,
    avg_temp_c: 10, sun_hours: 5.0,
    racial: { white: 85, black: 65, mixed_bw: 68, asian: 70, south_asian: 68, hispanic: 70, mena: 60 },
    safety: 88, healthcare: 90, cost_value: 55, visa: 72,
  },
  {
    code: 'AT', name: 'Austria', flag: '🇦🇹', region: 'Western Europe',
    ei: 71, lgbtq_orient: 82, lgbtq_social: 60, lgbtq_gender: 72,
    avg_temp_c: 9, sun_hours: 5.5,
    racial: { white: 85, black: 60, mixed_bw: 63, asian: 68, south_asian: 65, hispanic: 68, mena: 58 },
    safety: 91, healthcare: 85, cost_value: 55, visa: 72,
  },
  {
    code: 'CH', name: 'Switzerland', flag: '🇨🇭', region: 'Western Europe',
    ei: 70, lgbtq_orient: 76, lgbtq_social: 64, lgbtq_gender: 70,
    avg_temp_c: 9, sun_hours: 5.5,
    racial: { white: 87, black: 62, mixed_bw: 65, asian: 70, south_asian: 65, hispanic: 68, mena: 60 },
    safety: 93, healthcare: 91, cost_value: 28, visa: 65,
  },
  {
    code: 'LU', name: 'Luxembourg', flag: '🇱🇺', region: 'Western Europe',
    ei: 67, lgbtq_orient: 82, lgbtq_social: 52, lgbtq_gender: 80,
    avg_temp_c: 10, sun_hours: 5.0,
    racial: { white: 85, black: 65, mixed_bw: 68, asian: 70, south_asian: 65, hispanic: 68, mena: 62 },
    safety: 88, healthcare: 88, cost_value: 32, visa: 72,
  },
  {
    code: 'FR', name: 'France', flag: '🇫🇷', region: 'Western Europe',
    ei: 74, lgbtq_orient: 90, lgbtq_social: 58, lgbtq_gender: 82,
    avg_temp_c: 14, sun_hours: 6.0,
    racial: { white: 82, black: 68, mixed_bw: 70, asian: 68, south_asian: 65, hispanic: 70, mena: 62 },
    safety: 75, healthcare: 89, cost_value: 55, visa: 72,
  },
  {
    code: 'IE', name: 'Ireland', flag: '🇮🇪', region: 'Western Europe',
    ei: 70, lgbtq_orient: 80, lgbtq_social: 59, lgbtq_gender: 80,
    avg_temp_c: 10, sun_hours: 3.8,
    racial: { white: 88, black: 70, mixed_bw: 72, asian: 72, south_asian: 70, hispanic: 72, mena: 65 },
    safety: 88, healthcare: 78, cost_value: 38, visa: 72,
  },
  {
    code: 'GB', name: 'United Kingdom', flag: '🇬🇧', region: 'Western Europe',
    ei: 68, lgbtq_orient: 82, lgbtq_social: 55, lgbtq_gender: 70,
    avg_temp_c: 11, sun_hours: 3.7,
    racial: { white: 85, black: 72, mixed_bw: 75, asian: 70, south_asian: 72, hispanic: 72, mena: 65 },
    safety: 80, healthcare: 82, cost_value: 42, visa: 65,
  },

  // ── SOUTHERN EUROPE ──────────────────────────────────────────────
  {
    code: 'PT', name: 'Portugal', flag: '🇵🇹', region: 'Southern Europe',
    ei: 77, lgbtq_orient: 94, lgbtq_social: 60, lgbtq_gender: 88,
    avg_temp_c: 18, sun_hours: 7.0,
    racial: { white: 82, black: 70, mixed_bw: 72, asian: 68, south_asian: 65, hispanic: 75, mena: 65 },
    safety: 85, healthcare: 76, cost_value: 68, visa: 78,
  },
  {
    code: 'ES', name: 'Spain', flag: '🇪🇸', region: 'Southern Europe',
    ei: 83, lgbtq_orient: 100, lgbtq_social: 67, lgbtq_gender: 87,
    avg_temp_c: 17, sun_hours: 7.0,
    racial: { white: 82, black: 63, mixed_bw: 65, asian: 65, south_asian: 62, hispanic: 78, mena: 62 },
    safety: 82, healthcare: 78, cost_value: 65, visa: 78,
  },
  {
    code: 'IT', name: 'Italy', flag: '🇮🇹', region: 'Southern Europe',
    ei: 66, lgbtq_orient: 73, lgbtq_social: 59, lgbtq_gender: 45,
    avg_temp_c: 16, sun_hours: 6.0,
    racial: { white: 80, black: 58, mixed_bw: 60, asian: 62, south_asian: 58, hispanic: 68, mena: 58 },
    safety: 78, healthcare: 77, cost_value: 60, visa: 72,
  },
  {
    code: 'GR', name: 'Greece', flag: '🇬🇷', region: 'Southern Europe',
    ei: 66, lgbtq_orient: 92, lgbtq_social: 40, lgbtq_gender: 50,
    avg_temp_c: 19, sun_hours: 7.5,
    racial: { white: 78, black: 55, mixed_bw: 57, asian: 60, south_asian: 57, hispanic: 65, mena: 60 },
    safety: 78, healthcare: 72, cost_value: 68, visa: 72,
  },
  {
    code: 'MT', name: 'Malta', flag: '🇲🇹', region: 'Southern Europe',
    ei: 80, lgbtq_orient: 100, lgbtq_social: 61, lgbtq_gender: 95,
    avg_temp_c: 20, sun_hours: 8.0,
    racial: { white: 82, black: 62, mixed_bw: 64, asian: 65, south_asian: 62, hispanic: 68, mena: 65 },
    safety: 88, healthcare: 78, cost_value: 65, visa: 72,
  },
  {
    code: 'CY', name: 'Cyprus', flag: '🇨🇾', region: 'Southern Europe',
    ei: 58, lgbtq_orient: 79, lgbtq_social: 36, lgbtq_gender: 55,
    avg_temp_c: 21, sun_hours: 8.5,
    racial: { white: 80, black: 58, mixed_bw: 60, asian: 62, south_asian: 60, hispanic: 65, mena: 62 },
    safety: 82, healthcare: 72, cost_value: 65, visa: 72,
  },
  {
    code: 'AD', name: 'Andorra', flag: '🇦🇩', region: 'Southern Europe',
    ei: 80, lgbtq_orient: 86, lgbtq_social: 74, lgbtq_gender: 80,
    avg_temp_c: 12, sun_hours: 6.0,
    racial: { white: 85, black: 60, mixed_bw: 62, asian: 65, south_asian: 60, hispanic: 72, mena: 60 },
    safety: 95, healthcare: 80, cost_value: 58, visa: 60,
  },
  {
    code: 'SM', name: 'San Marino', flag: '🇸🇲', region: 'Southern Europe',
    ei: 67, lgbtq_orient: 63, lgbtq_social: 71, lgbtq_gender: 60,
    avg_temp_c: 14, sun_hours: 6.5,
    racial: { white: 82, black: 55, mixed_bw: 57, asian: 60, south_asian: 55, hispanic: 65, mena: 55 },
    safety: 95, healthcare: 78, cost_value: 55, visa: 60,
  },

  // ── CENTRAL EUROPE ───────────────────────────────────────────────
  {
    code: 'CZ', name: 'Czechia', flag: '🇨🇿', region: 'Central Europe',
    ei: 72, lgbtq_orient: 80, lgbtq_social: 64, lgbtq_gender: 65,
    avg_temp_c: 9, sun_hours: 5.0,
    racial: { white: 88, black: 45, mixed_bw: 47, asian: 55, south_asian: 50, hispanic: 58, mena: 45 },
    safety: 88, healthcare: 72, cost_value: 72, visa: 72,
  },
  {
    code: 'SI', name: 'Slovenia', flag: '🇸🇮', region: 'Central Europe',
    ei: 65, lgbtq_orient: 81, lgbtq_social: 48, lgbtq_gender: 60,
    avg_temp_c: 12, sun_hours: 5.5,
    racial: { white: 88, black: 48, mixed_bw: 50, asian: 55, south_asian: 50, hispanic: 58, mena: 48 },
    safety: 88, healthcare: 72, cost_value: 68, visa: 72,
  },
  {
    code: 'SK', name: 'Slovakia', flag: '🇸🇰', region: 'Central Europe',
    ei: 49, lgbtq_orient: 65, lgbtq_social: 33, lgbtq_gender: 35,
    avg_temp_c: 9, sun_hours: 5.0,
    racial: { white: 85, black: 38, mixed_bw: 40, asian: 45, south_asian: 40, hispanic: 50, mena: 38 },
    safety: 85, healthcare: 70, cost_value: 72, visa: 72,
  },
  {
    code: 'PL', name: 'Poland', flag: '🇵🇱', region: 'Central Europe',
    ei: 51, lgbtq_orient: 58, lgbtq_social: 43, lgbtq_gender: 20,
    avg_temp_c: 9, sun_hours: 4.5,
    racial: { white: 85, black: 40, mixed_bw: 42, asian: 48, south_asian: 42, hispanic: 50, mena: 38 },
    safety: 80, healthcare: 68, cost_value: 75, visa: 72,
  },
  {
    code: 'HU', name: 'Hungary', flag: '🇭🇺', region: 'Central Europe',
    ei: 49, lgbtq_orient: 57, lgbtq_social: 40, lgbtq_gender: 15,
    avg_temp_c: 11, sun_hours: 5.5,
    racial: { white: 82, black: 38, mixed_bw: 40, asian: 45, south_asian: 40, hispanic: 48, mena: 38 },
    safety: 78, healthcare: 70, cost_value: 72, visa: 72,
  },

  // ── EASTERN EUROPE ───────────────────────────────────────────────
  {
    code: 'RO', name: 'Romania', flag: '🇷🇴', region: 'Eastern Europe',
    ei: 47, lgbtq_orient: 60, lgbtq_social: 33, lgbtq_gender: 30,
    avg_temp_c: 11, sun_hours: 6.0,
    racial: { white: 80, black: 38, mixed_bw: 40, asian: 45, south_asian: 40, hispanic: 48, mena: 38 },
    safety: 72, healthcare: 65, cost_value: 75, visa: 72,
  },
  {
    code: 'BG', name: 'Bulgaria', flag: '🇧🇬', region: 'Eastern Europe',
    ei: 42, lgbtq_orient: 57, lgbtq_social: 27, lgbtq_gender: 28,
    avg_temp_c: 12, sun_hours: 6.5,
    racial: { white: 78, black: 38, mixed_bw: 40, asian: 45, south_asian: 40, hispanic: 48, mena: 40 },
    safety: 72, healthcare: 65, cost_value: 78, visa: 72,
  },
  {
    code: 'RS', name: 'Serbia', flag: '🇷🇸', region: 'Eastern Europe',
    ei: 49, lgbtq_orient: 65, lgbtq_social: 33, lgbtq_gender: 30,
    avg_temp_c: 12, sun_hours: 5.5,
    racial: { white: 78, black: 38, mixed_bw: 40, asian: 45, south_asian: 40, hispanic: 48, mena: 38 },
    safety: 72, healthcare: 62, cost_value: 78, visa: 62,
  },
  {
    code: 'HR', name: 'Croatia', flag: '🇭🇷', region: 'Eastern Europe',
    ei: 57, lgbtq_orient: 80, lgbtq_social: 33, lgbtq_gender: 45,
    avg_temp_c: 15, sun_hours: 6.5,
    racial: { white: 80, black: 45, mixed_bw: 47, asian: 50, south_asian: 45, hispanic: 55, mena: 45 },
    safety: 85, healthcare: 68, cost_value: 68, visa: 72,
  },
  {
    code: 'AL', name: 'Albania', flag: '🇦🇱', region: 'Eastern Europe',
    ei: 47, lgbtq_orient: 67, lgbtq_social: 28, lgbtq_gender: 32,
    avg_temp_c: 16, sun_hours: 6.5,
    racial: { white: 78, black: 40, mixed_bw: 42, asian: 45, south_asian: 40, hispanic: 50, mena: 45 },
    safety: 72, healthcare: 55, cost_value: 80, visa: 62,
  },
  {
    code: 'ME', name: 'Montenegro', flag: '🇲🇪', region: 'Eastern Europe',
    ei: 55, lgbtq_orient: 75, lgbtq_social: 35, lgbtq_gender: 40,
    avg_temp_c: 14, sun_hours: 6.0,
    racial: { white: 78, black: 42, mixed_bw: 44, asian: 48, south_asian: 42, hispanic: 52, mena: 45 },
    safety: 75, healthcare: 60, cost_value: 75, visa: 62,
  },
  {
    code: 'MK', name: 'North Macedonia', flag: '🇲🇰', region: 'Eastern Europe',
    ei: 48, lgbtq_orient: 64, lgbtq_social: 33, lgbtq_gender: 30,
    avg_temp_c: 13, sun_hours: 6.0,
    racial: { white: 75, black: 38, mixed_bw: 40, asian: 45, south_asian: 38, hispanic: 48, mena: 42 },
    safety: 70, healthcare: 58, cost_value: 80, visa: 60,
  },
  {
    code: 'UA', name: 'Ukraine', flag: '🇺🇦', region: 'Eastern Europe',
    ei: 48, lgbtq_orient: 58, lgbtq_social: 39, lgbtq_gender: 35,
    avg_temp_c: 9, sun_hours: 5.5,
    racial: { white: 78, black: 38, mixed_bw: 40, asian: 45, south_asian: 38, hispanic: 48, mena: 38 },
    safety: 25, healthcare: 55, cost_value: 80, visa: 55,
    note: 'Active conflict zone — safety score reflects ongoing war.',
  },

  // ── NORTH AMERICA ────────────────────────────────────────────────
  {
    code: 'CA', name: 'Canada', flag: '🇨🇦', region: 'North America',
    ei: 79, lgbtq_orient: 96, lgbtq_social: 61, lgbtq_gender: 92,
    avg_temp_c: 5, sun_hours: 4.5,
    racial: { white: 85, black: 72, mixed_bw: 75, asian: 78, south_asian: 78, hispanic: 72, mena: 68 },
    safety: 85, healthcare: 83, cost_value: 50, visa: 52,
  },
  {
    code: 'US', name: 'United States', flag: '🇺🇸', region: 'North America',
    ei: 68, lgbtq_orient: 80, lgbtq_social: 56, lgbtq_gender: 55,
    avg_temp_c: 12, sun_hours: 6.0,
    racial: { white: 82, black: 62, mixed_bw: 65, asian: 68, south_asian: 68, hispanic: 68, mena: 60 },
    safety: 68, healthcare: 72, cost_value: 55, visa: 40,
  },
  {
    code: 'MX', name: 'Mexico', flag: '🇲🇽', region: 'Central America',
    ei: 70, lgbtq_orient: 84, lgbtq_social: 57, lgbtq_gender: 68,
    avg_temp_c: 23, sun_hours: 7.5,
    racial: { white: 72, black: 65, mixed_bw: 72, asian: 65, south_asian: 62, hispanic: 90, mena: 60 },
    safety: 48, healthcare: 65, cost_value: 80, visa: 82,
  },

  // ── CENTRAL AMERICA & CARIBBEAN ─────────────────────────────────
  {
    code: 'CR', name: 'Costa Rica', flag: '🇨🇷', region: 'Central America',
    ei: 69, lgbtq_orient: 85, lgbtq_social: 54, lgbtq_gender: 65,
    avg_temp_c: 25, sun_hours: 5.5,
    racial: { white: 70, black: 68, mixed_bw: 72, asian: 65, south_asian: 60, hispanic: 88, mena: 60 },
    safety: 70, healthcare: 68, cost_value: 72, visa: 82,
  },
  {
    code: 'CU', name: 'Cuba', flag: '🇨🇺', region: 'Caribbean',
    ei: 79, lgbtq_orient: 92, lgbtq_social: 66, lgbtq_gender: 70,
    avg_temp_c: 26, sun_hours: 8.0,
    racial: { white: 70, black: 82, mixed_bw: 85, asian: 70, south_asian: 65, hispanic: 85, mena: 62 },
    safety: 72, healthcare: 75, cost_value: 70, visa: 55,
  },
  {
    code: 'BB', name: 'Barbados', flag: '🇧🇧', region: 'Caribbean',
    ei: 55, lgbtq_orient: 38, lgbtq_social: 71, lgbtq_gender: 35,
    avg_temp_c: 28, sun_hours: 8.5,
    racial: { white: 72, black: 90, mixed_bw: 88, asian: 70, south_asian: 72, hispanic: 75, mena: 65 },
    safety: 72, healthcare: 68, cost_value: 52, visa: 65,
  },
  {
    code: 'BZ', name: 'Belize', flag: '🇧🇿', region: 'Central America',
    ei: 50, lgbtq_orient: 56, lgbtq_social: 44, lgbtq_gender: 40,
    avg_temp_c: 26, sun_hours: 7.0,
    racial: { white: 68, black: 78, mixed_bw: 80, asian: 68, south_asian: 68, hispanic: 82, mena: 60 },
    safety: 52, healthcare: 55, cost_value: 65, visa: 78,
  },

  // ── SOUTH AMERICA ────────────────────────────────────────────────
  {
    code: 'AR', name: 'Argentina', flag: '🇦🇷', region: 'South America',
    ei: 74, lgbtq_orient: 87, lgbtq_social: 61, lgbtq_gender: 95,
    avg_temp_c: 17, sun_hours: 7.0,
    racial: { white: 75, black: 62, mixed_bw: 65, asian: 65, south_asian: 62, hispanic: 88, mena: 65 },
    safety: 58, healthcare: 70, cost_value: 82, visa: 75,
  },
  {
    code: 'UY', name: 'Uruguay', flag: '🇺🇾', region: 'South America',
    ei: 87, lgbtq_orient: 100, lgbtq_social: 74, lgbtq_gender: 88,
    avg_temp_c: 18, sun_hours: 7.0,
    racial: { white: 75, black: 68, mixed_bw: 70, asian: 65, south_asian: 62, hispanic: 88, mena: 65 },
    safety: 75, healthcare: 70, cost_value: 72, visa: 75,
  },
  {
    code: 'CL', name: 'Chile', flag: '🇨🇱', region: 'South America',
    ei: 80, lgbtq_orient: 100, lgbtq_social: 60, lgbtq_gender: 72,
    avg_temp_c: 14, sun_hours: 6.5,
    racial: { white: 72, black: 58, mixed_bw: 60, asian: 62, south_asian: 58, hispanic: 85, mena: 62 },
    safety: 70, healthcare: 72, cost_value: 65, visa: 72,
  },
  {
    code: 'BR', name: 'Brazil', flag: '🇧🇷', region: 'South America',
    ei: 75, lgbtq_orient: 93, lgbtq_social: 56, lgbtq_gender: 75,
    avg_temp_c: 26, sun_hours: 6.5,
    racial: { white: 72, black: 80, mixed_bw: 82, asian: 72, south_asian: 65, hispanic: 85, mena: 62 },
    safety: 45, healthcare: 62, cost_value: 72, visa: 72,
  },
  {
    code: 'CO', name: 'Colombia', flag: '🇨🇴', region: 'South America',
    ei: 71, lgbtq_orient: 92, lgbtq_social: 50, lgbtq_gender: 80,
    avg_temp_c: 22, sun_hours: 5.5,
    racial: { white: 68, black: 72, mixed_bw: 75, asian: 65, south_asian: 60, hispanic: 88, mena: 60 },
    safety: 50, healthcare: 62, cost_value: 80, visa: 82,
  },
  {
    code: 'EC', name: 'Ecuador', flag: '🇪🇨', region: 'South America',
    ei: 65, lgbtq_orient: 89, lgbtq_social: 42, lgbtq_gender: 65,
    avg_temp_c: 22, sun_hours: 5.0,
    racial: { white: 68, black: 70, mixed_bw: 72, asian: 65, south_asian: 60, hispanic: 88, mena: 60 },
    safety: 52, healthcare: 60, cost_value: 78, visa: 80,
  },
  {
    code: 'PE', name: 'Peru', flag: '🇵🇪', region: 'South America',
    ei: 54, lgbtq_orient: 64, lgbtq_social: 44, lgbtq_gender: 50,
    avg_temp_c: 20, sun_hours: 6.5,
    racial: { white: 68, black: 65, mixed_bw: 68, asian: 68, south_asian: 60, hispanic: 88, mena: 58 },
    safety: 55, healthcare: 60, cost_value: 78, visa: 78,
  },
  {
    code: 'BO', name: 'Bolivia', flag: '🇧🇴', region: 'South America',
    ei: 62, lgbtq_orient: 87, lgbtq_social: 38, lgbtq_gender: 60,
    avg_temp_c: 18, sun_hours: 7.0,
    racial: { white: 62, black: 58, mixed_bw: 60, asian: 60, south_asian: 55, hispanic: 85, mena: 55 },
    safety: 55, healthcare: 55, cost_value: 82, visa: 78,
  },
  {
    code: 'SR', name: 'Suriname', flag: '🇸🇷', region: 'South America',
    ei: 41, lgbtq_orient: 59, lgbtq_social: 23, lgbtq_gender: 38,
    avg_temp_c: 27, sun_hours: 6.0,
    racial: { white: 65, black: 80, mixed_bw: 82, asian: 72, south_asian: 75, hispanic: 72, mena: 60 },
    safety: 55, healthcare: 58, cost_value: 65, visa: 68,
  },

  // ── OCEANIA ──────────────────────────────────────────────────────
  {
    code: 'AU', name: 'Australia', flag: '🇦🇺', region: 'Oceania',
    ei: 78, lgbtq_orient: 95, lgbtq_social: 61, lgbtq_gender: 85,
    avg_temp_c: 22, sun_hours: 7.5,
    racial: { white: 82, black: 68, mixed_bw: 70, asian: 72, south_asian: 70, hispanic: 70, mena: 65 },
    safety: 85, healthcare: 84, cost_value: 48, visa: 45,
  },
  {
    code: 'NZ', name: 'New Zealand', flag: '🇳🇿', region: 'Oceania',
    ei: 77, lgbtq_orient: 88, lgbtq_social: 65, lgbtq_gender: 88,
    avg_temp_c: 13, sun_hours: 5.5,
    racial: { white: 80, black: 70, mixed_bw: 72, asian: 72, south_asian: 70, hispanic: 72, mena: 65 },
    safety: 88, healthcare: 76, cost_value: 45, visa: 42,
  },
  {
    code: 'FJ', name: 'Fiji', flag: '🇫🇯', region: 'Oceania',
    ei: 55, lgbtq_orient: 55, lgbtq_social: 50, lgbtq_gender: 45,
    avg_temp_c: 27, sun_hours: 7.0,
    racial: { white: 70, black: 75, mixed_bw: 72, asian: 70, south_asian: 72, hispanic: 65, mena: 60 },
    safety: 65, healthcare: 55, cost_value: 65, visa: 68,
  },

  // ── EAST ASIA ────────────────────────────────────────────────────
  {
    code: 'JP', name: 'Japan', flag: '🇯🇵', region: 'East Asia',
    ei: 53, lgbtq_orient: 57, lgbtq_social: 50, lgbtq_gender: 40,
    avg_temp_c: 15, sun_hours: 5.5,
    racial: { white: 68, black: 55, mixed_bw: 58, asian: 88, south_asian: 65, hispanic: 62, mena: 58 },
    safety: 92, healthcare: 92, cost_value: 62, visa: 38,
  },
  {
    code: 'KR', name: 'South Korea', flag: '🇰🇷', region: 'East Asia',
    ei: 46, lgbtq_orient: 53, lgbtq_social: 39, lgbtq_gender: 30,
    avg_temp_c: 13, sun_hours: 6.0,
    racial: { white: 65, black: 48, mixed_bw: 52, asian: 87, south_asian: 58, hispanic: 58, mena: 52 },
    safety: 88, healthcare: 82, cost_value: 65, visa: 38,
  },
  {
    code: 'TW', name: 'Taiwan', flag: '🇹🇼', region: 'East Asia',
    ei: 59, lgbtq_orient: 68, lgbtq_social: 51, lgbtq_gender: 55,
    avg_temp_c: 23, sun_hours: 5.0,
    racial: { white: 70, black: 52, mixed_bw: 55, asian: 88, south_asian: 60, hispanic: 62, mena: 55 },
    safety: 90, healthcare: 80, cost_value: 68, visa: 48,
  },
  {
    code: 'CN', name: 'China', flag: '🇨🇳', region: 'East Asia',
    ei: 52, lgbtq_orient: 39, lgbtq_social: 66, lgbtq_gender: 30,
    avg_temp_c: 13, sun_hours: 5.5,
    racial: { white: 65, black: 48, mixed_bw: 52, asian: 85, south_asian: 58, hispanic: 58, mena: 52 },
    safety: 72, healthcare: 75, cost_value: 65, visa: 35,
  },

  // ── SOUTHEAST ASIA ───────────────────────────────────────────────
  {
    code: 'TH', name: 'Thailand', flag: '🇹🇭', region: 'Southeast Asia',
    ei: 65, lgbtq_orient: 63, lgbtq_social: 67, lgbtq_gender: 55,
    avg_temp_c: 28, sun_hours: 7.0,
    racial: { white: 72, black: 55, mixed_bw: 58, asian: 82, south_asian: 65, hispanic: 60, mena: 62 },
    safety: 72, healthcare: 78, cost_value: 82, visa: 72,
    note: 'Marriage equality legislation passed in 2024.',
  },
  {
    code: 'VN', name: 'Vietnam', flag: '🇻🇳', region: 'Southeast Asia',
    ei: 51, lgbtq_orient: 50, lgbtq_social: 53, lgbtq_gender: 40,
    avg_temp_c: 25, sun_hours: 7.0,
    racial: { white: 68, black: 50, mixed_bw: 52, asian: 82, south_asian: 58, hispanic: 58, mena: 55 },
    safety: 72, healthcare: 62, cost_value: 85, visa: 68,
  },
  {
    code: 'PH', name: 'Philippines', flag: '🇵🇭', region: 'Southeast Asia',
    ei: 54, lgbtq_orient: 49, lgbtq_social: 59, lgbtq_gender: 45,
    avg_temp_c: 27, sun_hours: 7.0,
    racial: { white: 70, black: 62, mixed_bw: 65, asian: 85, south_asian: 65, hispanic: 72, mena: 60 },
    safety: 52, healthcare: 60, cost_value: 78, visa: 72,
  },
  {
    code: 'KH', name: 'Cambodia', flag: '🇰🇭', region: 'Southeast Asia',
    ei: 46, lgbtq_orient: 41, lgbtq_social: 51, lgbtq_gender: 35,
    avg_temp_c: 28, sun_hours: 7.0,
    racial: { white: 65, black: 50, mixed_bw: 52, asian: 80, south_asian: 58, hispanic: 58, mena: 55 },
    safety: 62, healthcare: 50, cost_value: 85, visa: 78,
  },
  {
    code: 'SG', name: 'Singapore', flag: '🇸🇬', region: 'Southeast Asia',
    ei: 44, lgbtq_orient: 39, lgbtq_social: 49, lgbtq_gender: 35,
    avg_temp_c: 27, sun_hours: 6.0,
    racial: { white: 78, black: 62, mixed_bw: 65, asian: 88, south_asian: 78, hispanic: 68, mena: 65 },
    safety: 95, healthcare: 88, cost_value: 30, visa: 32,
    note: 'Decriminalized same-sex relations in 2022. No marriage recognition yet.',
  },
  {
    code: 'LA', name: 'Laos', flag: '🇱🇦', region: 'Southeast Asia',
    ei: 45, lgbtq_orient: 40, lgbtq_social: 50, lgbtq_gender: 35,
    avg_temp_c: 26, sun_hours: 7.0,
    racial: { white: 62, black: 45, mixed_bw: 48, asian: 78, south_asian: 55, hispanic: 55, mena: 50 },
    safety: 68, healthcare: 45, cost_value: 85, visa: 72,
  },

  // ── SOUTH ASIA ───────────────────────────────────────────────────
  {
    code: 'IN', name: 'India', flag: '🇮🇳', region: 'South Asia',
    ei: 55, lgbtq_orient: 56, lgbtq_social: 53, lgbtq_gender: 50,
    avg_temp_c: 25, sun_hours: 7.5,
    racial: { white: 65, black: 55, mixed_bw: 58, asian: 70, south_asian: 82, hispanic: 60, mena: 62 },
    safety: 55, healthcare: 58, cost_value: 88, visa: 55,
    note: 'Supreme Court decriminalized same-sex relations in 2018.',
  },
  {
    code: 'NP', name: 'Nepal', flag: '🇳🇵', region: 'South Asia',
    ei: 69, lgbtq_orient: 71, lgbtq_social: 68, lgbtq_gender: 70,
    avg_temp_c: 18, sun_hours: 7.0,
    racial: { white: 65, black: 52, mixed_bw: 55, asian: 72, south_asian: 80, hispanic: 58, mena: 60 },
    safety: 72, healthcare: 55, cost_value: 88, visa: 68,
    note: 'Progressive constitution — same-sex marriage registration began 2023.',
  },

  // ── MIDDLE EAST ──────────────────────────────────────────────────
  {
    code: 'IL', name: 'Israel', flag: '🇮🇱', region: 'Middle East',
    ei: 62, lgbtq_orient: 73, lgbtq_social: 51, lgbtq_gender: 68,
    avg_temp_c: 20, sun_hours: 9.0,
    racial: { white: 72, black: 62, mixed_bw: 65, asian: 65, south_asian: 62, hispanic: 68, mena: 72 },
    safety: 52, healthcare: 85, cost_value: 42, visa: 55,
  },

  // ── AFRICA ───────────────────────────────────────────────────────
  {
    code: 'ZA', name: 'South Africa', flag: '🇿🇦', region: 'Southern Africa',
    ei: 67, lgbtq_orient: 77, lgbtq_social: 57, lgbtq_gender: 70,
    avg_temp_c: 18, sun_hours: 7.5,
    racial: { white: 70, black: 85, mixed_bw: 82, asian: 72, south_asian: 72, hispanic: 68, mena: 65 },
    safety: 45, healthcare: 65, cost_value: 75, visa: 62,
  },
  {
    code: 'BW', name: 'Botswana', flag: '🇧🇼', region: 'Southern Africa',
    ei: 56, lgbtq_orient: 60, lgbtq_social: 51, lgbtq_gender: 45,
    avg_temp_c: 24, sun_hours: 8.5,
    racial: { white: 68, black: 88, mixed_bw: 85, asian: 68, south_asian: 65, hispanic: 62, mena: 60 },
    safety: 68, healthcare: 60, cost_value: 72, visa: 65,
  },
  {
    code: 'NA', name: 'Namibia', flag: '🇳🇦', region: 'Southern Africa',
    ei: 41, lgbtq_orient: 49, lgbtq_social: 33, lgbtq_gender: 38,
    avg_temp_c: 22, sun_hours: 9.0,
    racial: { white: 68, black: 85, mixed_bw: 82, asian: 65, south_asian: 60, hispanic: 60, mena: 58 },
    safety: 62, healthcare: 58, cost_value: 72, visa: 62,
  },
  {
    code: 'CV', name: 'Cape Verde', flag: '🇨🇻', region: 'West Africa',
    ei: 68, lgbtq_orient: 55, lgbtq_social: 80, lgbtq_gender: 52,
    avg_temp_c: 24, sun_hours: 8.0,
    racial: { white: 68, black: 88, mixed_bw: 88, asian: 65, south_asian: 60, hispanic: 72, mena: 65 },
    safety: 78, healthcare: 55, cost_value: 65, visa: 70,
  },
  {
    code: 'SC', name: 'Seychelles', flag: '🇸🇨', region: 'East Africa',
    ei: 61, lgbtq_orient: 55, lgbtq_social: 66, lgbtq_gender: 50,
    avg_temp_c: 27, sun_hours: 7.5,
    racial: { white: 72, black: 85, mixed_bw: 85, asian: 72, south_asian: 72, hispanic: 68, mena: 65 },
    safety: 78, healthcare: 65, cost_value: 40, visa: 68,
  },
  {
    code: 'MZ', name: 'Mozambique', flag: '🇲🇿', region: 'Southern Africa',
    ei: 51, lgbtq_orient: 55, lgbtq_social: 47, lgbtq_gender: 40,
    avg_temp_c: 25, sun_hours: 7.5,
    racial: { white: 60, black: 88, mixed_bw: 85, asian: 62, south_asian: 58, hispanic: 58, mena: 55 },
    safety: 45, healthcare: 45, cost_value: 75, visa: 65,
  },
  {
    code: 'AO', name: 'Angola', flag: '🇦🇴', region: 'Central Africa',
    ei: 42, lgbtq_orient: 50, lgbtq_social: 35, lgbtq_gender: 35,
    avg_temp_c: 26, sun_hours: 7.0,
    racial: { white: 62, black: 88, mixed_bw: 85, asian: 62, south_asian: 55, hispanic: 60, mena: 55 },
    safety: 45, healthcare: 45, cost_value: 62, visa: 55,
  },
];

/**
 * Racial group keys and their display labels.
 */
export const RACIAL_GROUPS = {
  white:       'White / Caucasian',
  black:       'Black / African',
  mixed_bw:    'Mixed Black & White',
  asian:       'East / Southeast Asian',
  south_asian: 'South Asian',
  hispanic:    'Hispanic / Latino',
  mena:        'Middle Eastern / North African',
};

/**
 * Gender options
 */
export const GENDER_OPTIONS = [
  { value: 'male',       label: 'Male' },
  { value: 'female',     label: 'Female' },
  { value: 'nonbinary',  label: 'Non-binary' },
  { value: 'other',      label: 'Other / Prefer not to say' },
];

/**
 * Sexual orientation options
 */
export const ORIENTATION_OPTIONS = [
  { value: 'straight',   label: 'Straight / Heterosexual' },
  { value: 'gay',        label: 'Gay / Lesbian' },
  { value: 'bisexual',   label: 'Bisexual' },
  { value: 'pansexual',  label: 'Pansexual' },
  { value: 'asexual',    label: 'Asexual' },
  { value: 'other',      label: 'Other / Prefer not to say' },
];
