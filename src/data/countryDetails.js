/**
 * Country-specific dimension details for ThriveMap
 *
 * Covers the first 20% of countries alphabetically (Albania → Cape Verde).
 * For countries without a specific entry, getDetail() returns a score-based
 * fallback and getSources() returns the standard dimension sources.
 *
 * Data reflects conditions as of early 2025. Always verify before relocating.
 */

// ── Standard sources always appended per dimension ───────────────────────────
export const STANDARD_SOURCES = {
  climate: [
    { label: 'World Weather Online', url: 'https://www.worldweatheronline.com' },
  ],
  lgbtq_orient: [
    { label: 'LGBTQ+ rights index — Equaldex', url: 'https://www.equaldex.com' },
    { label: 'ILGA World — State-Sponsored Homophobia report', url: 'https://ilga.org/state-sponsored-homophobia-report' },
  ],
  lgbtq_gender: [
    { label: 'TGEU — Trans rights map', url: 'https://transrightsmap.tgeu.org' },
    { label: 'ILGA World — Trans legal mapping report', url: 'https://ilga.org/trans-legal-mapping-report' },
  ],
  lgbtq_social: [
    { label: 'Equaldex — social acceptance data', url: 'https://www.equaldex.com' },
    { label: 'Pew Research — Global attitudes on homosexuality', url: 'https://www.pewresearch.org/topic/religion-and-public-life/lgbt-acceptance/' },
  ],
  racial: [
    { label: 'US State Dept. — Country Human Rights Reports', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
    { label: 'ENAR — European Network Against Racism', url: 'https://www.enar-eu.org' },
  ],
  safety: [
    { label: 'Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
    { label: 'Numbeo — crime index by country', url: 'https://www.numbeo.com/crime/rankings_by_country.jsp' },
  ],
  healthcare: [
    { label: 'WHO country health profiles', url: 'https://www.who.int/countries' },
    { label: 'Numbeo — healthcare quality index', url: 'https://www.numbeo.com/health-care/rankings_by_country.jsp' },
  ],
  cost_value: [
    { label: 'Numbeo — cost of living by country', url: 'https://www.numbeo.com/cost-of-living/rankings_by_country.jsp' },
    { label: 'Expatistan — cost of living comparison', url: 'https://www.expatistan.com/cost-of-living/index' },
  ],
  visa: [
    { label: 'Visaguide.world — visa & residency guide', url: 'https://visaguide.world/' },
    { label: 'Nomad List — visa & legal info', url: 'https://nomadlist.com' },
  ],
};

// ── Per-country per-dimension details ────────────────────────────────────────
export const COUNTRY_DETAILS = {

  // ── Albania ────────────────────────────────────────────────────────────────
  'AL': {
    climate: {
      text: 'Albania has a Mediterranean climate along the Adriatic and Ionian coasts — hot, dry summers (28–34°C) and mild, wet winters. Inland and in the mountains (Albanian Alps, Valbonë), the climate becomes continental and alpine: cold snowy winters and cooler summers. Tirana, the capital, sits in a valley and averages around 16°C annually with around 1,400 hours of sunshine per year. The southern Riviera coastline is the sunniest and most popular destination for relocation.',
      sources: [
        { label: 'Albania climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Albania' },
        { label: 'Albania weather overview', url: 'https://www.weather-atlas.com/en/albania' },
      ],
    },
    lgbtq_orient: {
      text: 'Homosexuality has been legal in Albania since 1995, and anti-discrimination laws covering employment and services were adopted partly through EU candidacy requirements. However, there is no legal recognition of same-sex partnerships or marriages as of 2025. Albania is an EU candidate country, and LGBTQ+ legal progress has been incremental but ongoing.',
      sources: [
        { label: 'Albania — Equaldex', url: 'https://www.equaldex.com/region/al' },
        { label: 'ILGA Europe — Albania', url: 'https://www.ilga-europe.org/country/albania/' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition exists in Albania but requires psychiatric diagnosis and medical procedures — there is no self-identification pathway. Non-binary identities have no legal recognition. Access to gender-affirming healthcare is limited and largely private.',
      sources: [
        { label: 'TGEU — Albania profile', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Albania — Equaldex', url: 'https://www.equaldex.com/region/al' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance of LGBTQ+ people in Albania is low overall but is growing in Tirana, where annual Pride marches have taken place since 2012. Outside the capital, conservative religious and cultural attitudes (both Catholic and Muslim traditions) dominate, and public visibility for LGBTQ+ people carries real risk. Younger urban Albanians tend to be significantly more accepting.',
      sources: [
        { label: 'Albania — Equaldex social acceptance', url: 'https://www.equaldex.com/region/al' },
        { label: 'ILGA Europe — Albania rainbow map', url: 'https://www.ilga-europe.org/country/albania/' },
      ],
    },
    racial: {
      text: 'Albania is one of Europe\'s most ethnically homogeneous countries — roughly 82% ethnic Albanian, with Greek and Macedonian minorities. Visible minorities are very uncommon, and people of colour may attract significant curiosity, particularly outside Tirana. There is no culture of organised racism, but staring and occasional remarks are reported by non-white visitors and residents. The ECRI has noted limited anti-discrimination infrastructure.',
      sources: [
        { label: 'ECRI report on Albania', url: 'https://www.coe.int/en/web/european-commission-against-racism-and-intolerance/albania' },
        { label: 'Albania human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
      ],
    },
    safety: {
      text: 'Albania has improved significantly in stability since the 1990s. Petty crime and pickpocketing exist in tourist areas and Tirana. Blood feuds, though rare, persist in northern rural areas. Corruption in institutions is a concern. Tirana and coastal tourist areas are generally safe for visitors.',
      sources: [
        { label: 'Global Peace Index — Albania', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Albania crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Albania' },
      ],
    },
    healthcare: {
      text: 'Albania\'s public healthcare system is underfunded and inconsistent in quality. Private clinics in Tirana are of significantly better quality and affordable by European standards. Many Albanians and expats use private healthcare. Serious cases are often referred to Italy or North Macedonia.',
      sources: [
        { label: 'WHO Albania health profile', url: 'https://www.who.int/countries/alb/' },
      ],
    },
    cost_value: {
      text: 'Albania is one of the cheapest countries in Europe, with Tirana being particularly affordable. Rent, food, and local services cost a fraction of Western European prices. Quality of infrastructure has improved substantially in recent years, making it genuinely good value for digital nomads and retirees.',
      sources: [
        { label: 'Albania cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Albania' },
      ],
    },
    visa: {
      text: 'EU and Schengen citizens can enter Albania without a visa and stay up to 90 days. Many other nationalities also have visa-free access. Albania is an EU candidate country. There is no dedicated digital nomad visa, but a one-year temporary residence permit can be obtained by demonstrating income or employment.',
      sources: [
        { label: 'Albania immigration — UNHCR', url: 'https://visaguide.world/europe/albania-visa/' },
      ],
    },
  },

  // ── Andorra ────────────────────────────────────────────────────────────────
  'AD': {
    climate: {
      text: 'Andorra has a high-altitude mountain climate — almost the entire country sits above 900 metres in the eastern Pyrenees. Winters are cold and snowy (perfect for skiing at Grandvalira, one of the largest ski areas in southern Europe), with temperatures often below freezing from December to February. Summers are pleasantly cool (18–24°C), dry, and sunny. The capital Andorra la Vella, at 1,023 metres, is the highest capital city in Europe. There is no coastal area and no heat-island effect. Expect significant UV exposure year-round due to altitude.',
      sources: [
        { label: 'Andorra climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Andorra#Geography_and_climate' },
        { label: 'Andorra la Vella weather', url: 'https://www.weather-atlas.com/en/andorra' },
      ],
    },
    lgbtq_orient: {
      text: 'Andorra passed same-sex marriage legislation in 2023, making it one of the later European nations to do so. Adoption rights for same-sex couples are now also recognised. The country previously had civil unions (stable unions) since 2014. Andorra does not have a comprehensive anti-discrimination law across all areas of life as of 2025.',
      sources: [
        { label: 'Andorra — Equaldex', url: 'https://www.equaldex.com/region/ad' },
        { label: 'Same-sex marriage in Andorra — ILGA Europe', url: 'https://www.ilga-europe.org/country/andorra/' },
      ],
    },
    lgbtq_gender: {
      text: 'Andorra\'s legal framework for gender identity recognition is less developed than most of Western Europe. Legal gender change requires administrative and medical steps. Non-binary legal gender recognition is not currently available. The country\'s small size means specialist gender-affirming healthcare is not available domestically.',
      sources: [
        { label: 'TGEU — Andorra', url: 'https://transrightsmap.tgeu.org/home/' },
      ],
    },
    lgbtq_social: {
      text: 'Andorra is a small Catholic-influenced microstate, and while attitudes have modernised — especially among younger generations — it lacks the established LGBTQ+ community spaces found in larger European cities. There is no regular Pride event. Social acceptance is growing but more conservative than in neighbouring Spain or France.',
      sources: [
        { label: 'Andorra — Equaldex social', url: 'https://www.equaldex.com/region/ad' },
      ],
    },
    racial: {
      text: 'Andorra has a uniquely diverse resident population for its size — only about 48% of residents hold Andorran citizenship, with the rest being Spanish, French, Portuguese, and other nationals. Visible ethnic minorities are a small proportion. There are no significant reports of organised racism, though the country\'s institutions are not well documented by major anti-discrimination monitoring bodies.',
      sources: [
        { label: 'Andorra demographics — Wikipedia', url: 'https://en.wikipedia.org/wiki/Demographics_of_Andorra' },
      ],
    },
    safety: {
      text: 'Andorra is one of the safest countries in the world, consistently near the top of the Global Peace Index. There is no army; the police force is small. Crime is extremely rare. The main safety considerations are mountain weather hazards for hikers and skiers.',
      sources: [
        { label: 'Global Peace Index — Andorra', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Healthcare is provided through the CASS (Caixa Andorrana de Seguretat Social). Residents and workers contribute to the system and access high-quality services. The main hospital is the Hospital Nostra Senyora de Meritxell. Complex cases are referred to France or Spain. Quality is good for a country of its size.',
      sources: [
        { label: 'CASS Andorra', url: 'https://www.cass.ad' },
      ],
    },
    cost_value: {
      text: 'Andorra is a tax haven — there is no personal income tax and VAT is just 4.5%, making it extremely attractive financially. Shopping is popular due to cheaper electronics, alcohol, and tobacco. Property and rental costs are moderate. The standard of living is high and the country is very clean and well-managed.',
      sources: [
        { label: 'Andorra cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Andorra' },
      ],
    },
    visa: {
      text: 'Andorra is not in the EU or the Schengen Area, but it shares open borders with Spain and France in practice. There is no visa required for short stays for most nationalities. Residency (passive or active) requires proof of financial means or employment in Andorra. There is no digital nomad visa.',
      sources: [
        { label: 'Andorra residency — government portal', url: 'https://www.govern.ad/immigracio' },
      ],
    },
  },

  // ── Angola ─────────────────────────────────────────────────────────────────
  'AO': {
    climate: {
      text: 'Angola has a tropical climate in the north and a semi-arid to desert climate in the south (Namib desert reaches the coast). Luanda, the capital, is hot and humid year-round (25–32°C) with a short dry season (June–September, the "cacimbo" — cool, foggy mornings). The Benguela Current keeps the southwestern coast unusually cool for a tropical country. The central highlands (Huambo, Huíla province) are significantly milder at 1,700 metres, with temperatures of 15–25°C — one of the most liveable climates in the country. The northeast (Malanje, Uíge) is hotter and wetter.',
      sources: [
        { label: 'Angola climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Angola' },
        { label: 'Angola weather overview', url: 'https://www.weather-atlas.com/en/angola' },
      ],
    },
    lgbtq_orient: {
      text: 'Angola decriminalised same-sex relations in 2019 as part of a comprehensive new penal code revision, making it one of the few sub-Saharan African countries to explicitly remove sodomy laws. Anti-discrimination protections based on sexual orientation were added at the same time. There is no recognition of same-sex partnerships or marriages. This is a significant and recent legal milestone for the region.',
      sources: [
        { label: 'Angola — Equaldex', url: 'https://www.equaldex.com/region/ao' },
        { label: 'Angola decriminalisation 2019 — ILGA', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'There is no legal framework for gender identity recognition in Angola. Trans people have no formal pathway to change legal documents and face significant legal and social barriers. Gender-affirming healthcare is not accessible through the public system.',
      sources: [
        { label: 'TGEU — Angola', url: 'https://transrightsmap.tgeu.org/home/' },
      ],
    },
    lgbtq_social: {
      text: 'Despite legal decriminalisation, social acceptance of LGBTQ+ people in Angola is very low. Traditional values, religious influence (Catholic and evangelical), and cultural norms mean that LGBTQ+ people are expected to be discreet. There is no established Pride culture or visible LGBTQ+ community spaces. Discrimination in daily life is common.',
      sources: [
        { label: 'Angola — Equaldex social', url: 'https://www.equaldex.com/region/ao' },
      ],
    },
    racial: {
      text: 'Angola has a predominantly Black African population (Bantu-speaking groups including Ovimbundu ~37%, Mbundu ~25%, Bakongo ~13%). A small community of white Angolans (predominantly Portuguese-descended) and mestiços (mixed heritage) exists and has historically been economically privileged. Colorism is present. For Black visitors and residents from outside, Angola is not a typical expat destination, and infrastructure rather than racial dynamics tends to be the primary challenge.',
      sources: [
        { label: 'Angola human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
      ],
    },
    safety: {
      text: 'Angola has been stable since the end of its civil war in 2002, but crime in Luanda is significant — robbery, vehicle theft, and violent crime are reported. The capital has substantial inequality, which drives crime. Outside the main cities, infrastructure and security services are sparse. Some border areas retain landmine risks from the civil war era.',
      sources: [
        { label: 'Angola crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Angola' },
        { label: 'Global Peace Index — Angola', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Angola\'s healthcare infrastructure is severely underdeveloped relative to its oil wealth. Public hospitals are overcrowded and undersupplied. Private clinics in Luanda serve the expat and wealthy local community at a higher standard. Medical evacuation insurance is strongly recommended. Malaria, cholera, and yellow fever are real health risks.',
      sources: [
        { label: 'WHO — Angola health profile', url: 'https://www.who.int/countries/ago/' },
      ],
    },
    cost_value: {
      text: 'Luanda has historically ranked as one of the most expensive cities in the world for expats, driven by a reliance on imported goods and high demand from the oil industry. Costs have moderated somewhat as the economy has contracted, but imported goods remain expensive. Local markets and locally produced food offer much better value.',
      sources: [
        { label: 'Angola cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Angola' },
      ],
    },
    visa: {
      text: 'Angola requires visas for most nationalities, but an e-visa system was introduced, simplifying the process. Work permits are required for employment. There is no digital nomad visa. SADC nationals have easier access arrangements. The process can be bureaucratic and processing times vary.',
      sources: [
        { label: 'Angola e-visa portal', url: 'https://www.smevisa.gov.ao' },
      ],
    },
  },

  // ── Argentina ──────────────────────────────────────────────────────────────
  'AR': {
    climate: {
      text: 'Argentina spans an extraordinary range of climates. Buenos Aires has a humid subtropical climate: hot, humid summers (28–35°C, November–March) and mild winters (8–15°C). The northwest (Salta, Jujuy, Tucumán) is mountainous and semi-arid with a dramatic landscape. The wine region of Mendoza is semi-arid and sunny. The northeast (Misiones, Corrientes, Chaco) is hot and tropical. Patagonia (south of Río Negro) becomes progressively colder, windier, and more arid — Ushuaia, the world\'s southernmost city, is cold and grey year-round. The Andes provide world-class skiing in Bariloche and Las Leñas. Most expats settle in Buenos Aires, Mendoza, or Córdoba.',
      sources: [
        { label: 'Argentina climate — SMN (national met)', url: 'https://www.smn.gob.ar' },
        { label: 'Argentina climate overview — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Argentina' },
      ],
    },
    lgbtq_orient: {
      text: 'Argentina was the first country in Latin America to legalise same-sex marriage, in 2010. Full adoption rights are equal. LGBTQ+ people can serve openly in the military. Anti-discrimination legislation at federal level covers sexual orientation. Buenos Aires is internationally known as one of the most LGBTQ+-welcoming cities in the world.',
      sources: [
        { label: 'Argentina — Equaldex', url: 'https://www.equaldex.com/region/ar' },
        { label: 'ILGA — Argentina', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Argentina\'s 2012 Gender Identity Law (Ley de Identidad de Género) is considered the most progressive trans rights law in the world. It allows legal gender self-determination without any medical requirements, surgery, or court approval — simply via administrative declaration. A 2021 update introduced a non-binary (X) gender marker. The government also has an employment quota for trans people in the public sector (Cupo Laboral Trans).',
      sources: [
        { label: 'Argentina Gender Identity Law — TGEU', url: 'https://tgeu.org/country/argentina/' },
        { label: 'Argentina — Equaldex gender', url: 'https://www.equaldex.com/region/ar' },
      ],
    },
    lgbtq_social: {
      text: 'Buenos Aires is one of the most LGBTQ+-accepting cities globally, with a vibrant gay neighbourhood (Palermo/San Telmo), major Pride parade, and high-visibility queer culture. Urban Argentina broadly is tolerant. Rural and more conservative provinces (especially in the northwest, strongly Catholic) are less accepting. The political climate has periodically shifted, but LGBTQ+ rights remain broadly supported by the legal system regardless of government.',
      sources: [
        { label: 'Argentina — Equaldex social', url: 'https://www.equaldex.com/region/ar' },
        { label: 'Buenos Aires Pride', url: 'https://marchaorgullo.com.ar' },
      ],
    },
    racial: {
      text: 'Argentina presents itself as a predominantly white European-descended country (~97% self-identify as white or mixed European), but this masks a more complex reality. Afro-Argentines exist and were historically erased from the national narrative. Indigenous communities (Mapuche, Quechua, Guaraní, and others) are present and face ongoing discrimination and land rights disputes. Colorism is a real social phenomenon — darker skin is often associated with lower socioeconomic status and indigenous heritage. Black visitors from Africa or the Caribbean may encounter curiosity, microaggressions, or occasional racist incidents, though Buenos Aires is cosmopolitan and exposure to diversity is growing.',
      sources: [
        { label: 'Argentina human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
        { label: 'Afro-Argentines — Wikipedia', url: 'https://en.wikipedia.org/wiki/Afro-Argentines' },
      ],
    },
    safety: {
      text: 'Buenos Aires has a moderate crime rate with significant petty theft, pickpocketing, and "express kidnappings" (secuestro exprés — forced ATM withdrawals). Some poorer neighbourhoods (La Boca at night, parts of the conurbano) should be avoided. The economic crisis has increased crime in some areas. Outside Buenos Aires, most cities and rural areas are significantly safer. Political protests are common and can disrupt transport.',
      sources: [
        { label: 'Argentina crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Argentina' },
        { label: 'Global Peace Index — Argentina', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Argentina has a mixed public/social security/private healthcare system. The public system (hospitales públicos) is free for everyone but can be overwhelmed. Obras sociales (employer-based insurance) cover most formal workers. Private prepaid healthcare (OSDE, Swiss Medical, etc.) offers good quality at relatively affordable cost. Buenos Aires has internationally trained specialists. Expats are advised to take private coverage.',
      sources: [
        { label: 'WHO — Argentina health profile', url: 'https://www.who.int/countries/arg/' },
        { label: 'Argentina healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Argentina' },
      ],
    },
    cost_value: {
      text: 'Argentina offers outstanding value for those earning in hard currency. The exchange rate gap between official and informal rates (blue dollar) can make living costs exceptionally low for foreigners. Buenos Aires offers European-quality restaurants, culture, and infrastructure at a fraction of the price. High inflation (historically one of the world\'s highest) does impact locals and medium-term planning. Ensure you understand the currency situation before moving.',
      sources: [
        { label: 'Argentina cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Argentina' },
        { label: 'Expatistan — Buenos Aires', url: 'https://www.expatistan.com/cost-of-living/buenos-aires' },
      ],
    },
    visa: {
      text: 'Most Western nationalities receive 90-day tourist entry on arrival, extendable once for another 90 days by briefly crossing to Uruguay. Argentina introduced a Digital Nomad Visa in 2022 (Rentista/Digital Nomad category). The permanent residency process includes options for retirees with a pension, those with Argentine family ties, and economic investment. Processing has historically been slow.',
      sources: [
        { label: 'Argentina immigration — Dirección Nacional de Migraciones', url: 'https://www.argentina.gob.ar/interior/migraciones' },
      ],
    },
  },

  // ── Australia ──────────────────────────────────────────────────────────────
  'AU': {
    climate: {
      text: 'Australia is vast and has multiple distinct climate zones. The tropical north (Darwin, Cairns, Broome) has two seasons: a hot, very wet monsoon season (October–April, cyclone risk) and a dry, sunny season (May–September, 25–32°C). Queensland\'s Sunshine Coast and Gold Coast are subtropical: warm year-round with good sunshine. Sydney (NSW) has a temperate oceanic climate: warm summers (~28°C), mild winters (~13°C), and year-round sunshine. Melbourne (Victoria) is famous for its unpredictable weather — "four seasons in one day" — with temperate conditions but cool winters and occasional heatwaves. Adelaide is Mediterranean: hot dry summers, mild wet winters. Perth (WA) has the best Mediterranean climate in Australia: warm dry summers, mild winters, and consistently high sunshine. Tasmania is cooler and wetter, with four distinct seasons. The inland Outback is arid desert — extreme heat (40–50°C in summer) and very cold nights in winter. UV radiation is extremely high throughout Australia — sun protection is essential.',
      sources: [
        { label: 'Australian Bureau of Meteorology', url: 'http://www.bom.gov.au/climate/' },
        { label: 'Australia climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Australia' },
      ],
    },
    lgbtq_orient: {
      text: 'Australia legalised same-sex marriage nationally in December 2017 following a postal survey. Anti-discrimination protections at the federal level cover sexual orientation in employment. State and territory laws add further protections. LGBTQ+ people can serve openly in the Australian Defence Force. Adoption rights are equal in all states and territories.',
      sources: [
        { label: 'Australia — Equaldex', url: 'https://www.equaldex.com/region/au' },
        { label: 'Australian Human Rights Commission — LGBTI rights', url: 'https://humanrights.gov.au/our-work/lgbti-rights' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition varies by state and territory but has been progressively improving. Most states allow gender marker change on identification documents, and non-binary (X) markers are available on Australian passports. Some states (such as the ACT and Victoria) have streamlined self-identification processes. Access to gender-affirming healthcare varies by state; waiting lists can be long for the public system.',
      sources: [
        { label: 'TGEU — Australia', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Australia — Equaldex gender', url: 'https://www.equaldex.com/region/au' },
      ],
    },
    lgbtq_social: {
      text: 'Australia has a strong and visible LGBTQ+ culture. Sydney\'s Gay and Lesbian Mardi Gras is one of the world\'s oldest and largest LGBTQ+ events. Sydney (particularly Oxford Street/Darlinghurst), Melbourne (Fitzroy, South Yarra), and Brisbane all have established LGBTQ+ neighbourhoods and communities. Social acceptance is high in major cities. Regional and rural areas can be significantly more conservative. First Nations communities have diverse traditions around gender and sexuality that exist alongside mainstream Australian LGBTQ+ culture.',
      sources: [
        { label: 'Sydney Mardi Gras', url: 'https://www.mardigras.org.au' },
        { label: 'Australia — Equaldex social', url: 'https://www.equaldex.com/region/au' },
      ],
    },
    racial: {
      text: 'Australia is a multicultural country with large East Asian, South Asian, and Southeast Asian communities (particularly in Sydney and Melbourne) and a significant Pacific Islander community. Aboriginal and Torres Strait Islander peoples (~3.2% of the population) face deep structural disadvantages including significantly lower life expectancy, over-representation in the criminal justice system, and the ongoing trauma of policies such as the Stolen Generations. Anti-Asian racism increased visibly during COVID-19. Black Africans (mostly refugees and migrants from East Africa, concentrated in Melbourne) report higher rates of police contact and discrimination. South Asians are well-integrated in cities but experience workplace discrimination. The experience of people of colour varies significantly by city, suburb, and individual context.',
      sources: [
        { label: 'Australian Human Rights Commission — Racism Report', url: 'https://humanrights.gov.au/our-work/race-discrimination' },
        { label: 'Racism. It Stops With Me — Australian Government', url: 'https://itstopswithme.humanrights.gov.au' },
      ],
    },
    safety: {
      text: 'Australia is very safe by global standards, with low rates of violent crime. Natural hazards are the primary safety concern: bushfires (increasingly severe), floods, cyclones in the north, and strong ocean currents (swim between the flags). Shark and jellyfish warnings apply to coastal areas. Petty crime exists in major city centres but violent crime against tourists is rare.',
      sources: [
        { label: 'Australia crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Australia' },
        { label: 'Global Peace Index — Australia', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Australia\'s Medicare system provides universal healthcare to citizens and permanent residents, covering GP visits, public hospital treatment, and subsidised medicines (PBS). Quality of care is excellent. Expats and temporary visa holders must have Overseas Visitor Health Cover (OVHC) or adequate private insurance. Waiting times for some specialist and elective procedures can be long in the public system. Private health insurance is common and recommended for comprehensive coverage.',
      sources: [
        { label: 'Medicare — Australian Government', url: 'https://www.servicesaustralia.gov.au/medicare' },
        { label: 'Australia healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Australia' },
      ],
    },
    cost_value: {
      text: 'Australia is expensive, particularly Sydney and Melbourne for housing — both consistently rank among the world\'s least affordable housing markets. Groceries, utilities, and eating out are moderately expensive. Wages are high for residents. The quality of life is excellent when affordability is not the primary concern. Perth and Adelaide are more affordable than Sydney and Melbourne.',
      sources: [
        { label: 'Australia cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Australia' },
        { label: 'Expatistan — Sydney', url: 'https://www.expatistan.com/cost-of-living/sydney' },
      ],
    },
    visa: {
      text: 'Australia has a strict points-based immigration system. The main pathways are the Skilled Migration programme (SkillSelect/Expression of Interest), the Global Talent Visa, the Partner Visa, and the Working Holiday Visa (ages 18–35 for eligible nationalities, extendable up to 3 years). Student visas allow work. There is no dedicated digital nomad visa. Processing times for permanent residency can be years. Australia does not make immigration easy for those without specific qualifications or family ties.',
      sources: [
        { label: 'Australia immigration — Department of Home Affairs', url: 'https://immi.homeaffairs.gov.au' },
      ],
    },
  },

  // ── Austria ────────────────────────────────────────────────────────────────
  'AT': {
    climate: {
      text: 'Austria\'s climate varies considerably between its Alpine west and the flatter east. Vienna (east) has a continental climate: cold winters (average -1°C in January, occasional cold snaps to -10°C), warm dry summers (average 25°C in July), and moderate rainfall spread throughout the year. Western Austria — Tyrol, Vorarlberg, and Salzburg — is dominated by the Alps, with heavy snowfall from December to March (excellent skiing), cool summers, and significant precipitation. The south (Carinthia, southern Styria) is warmer with Mediterranean influences — the warmest region in the country, popular for lakeside summers. The Wachau valley and Burgenland in the east are wine-producing regions with more sunshine. Föhn winds can cause rapid temperature changes in Alpine valleys.',
      sources: [
        { label: 'ZAMG — Austrian meteorology', url: 'https://www.zamg.ac.at/cms/en/climate' },
        { label: 'Austria climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Austria' },
      ],
    },
    lgbtq_orient: {
      text: 'Austria legalised same-sex marriage in January 2019 following a 2017 Constitutional Court ruling that found the existing differentiation unconstitutional. Joint adoption rights followed. Anti-discrimination protections cover employment, housing, and services. Vienna has a well-established LGBTQ+ community and the Wiener Regenbogenparade (Rainbow Parade) is one of Europe\'s largest Pride events.',
      sources: [
        { label: 'Austria — Equaldex', url: 'https://www.equaldex.com/region/at' },
        { label: 'ILGA Europe — Austria', url: 'https://www.ilga-europe.org/country/austria/' },
      ],
    },
    lgbtq_gender: {
      text: 'Austria\'s Constitutional Court ruled in 2018 that trans people could change their legal gender without surgery or sterilisation. A third, non-binary gender option ("divers") was introduced in 2019, making Austria an early adopter in the EU. Access to gender-affirming healthcare through the public system exists but can involve bureaucratic delays.',
      sources: [
        { label: 'TGEU — Austria', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Austria — Equaldex gender', url: 'https://www.equaldex.com/region/at' },
      ],
    },
    lgbtq_social: {
      text: 'Vienna is welcoming and has a thriving LGBTQ+ scene, particularly in districts like Naschmarkt, Mariahilf, and the 6th district. The annual Wiener Regenbogenparade draws hundreds of thousands. Outside Vienna, Alpine rural areas and more religious communities (particularly in Tyrol) hold more traditional views. Overall, social acceptance has improved significantly over the past decade and is broadly positive in urban settings.',
      sources: [
        { label: 'Wiener Regenbogenparade', url: 'https://www.regenbogenparade.at' },
        { label: 'Austria — Equaldex social', url: 'https://www.equaldex.com/region/at' },
      ],
    },
    racial: {
      text: 'Austria has a significant migrant population — over 20% of residents were born abroad, primarily from Turkey, Serbia, Bosnia, and Germany. Vienna is cosmopolitan and diverse. However, racism and discrimination are documented: Afro-Austrians and people of visible minority backgrounds report racial profiling by police, discrimination in housing and employment, and hostile public discourse, particularly connected to the rhetoric of the FPÖ (Freedom Party of Austria), a major political force. ECRI and the European Union Agency for Fundamental Rights (FRA) document persistent racial discrimination. Vienna and Graz are significantly more diverse and accepting than rural areas.',
      sources: [
        { label: 'ECRI report on Austria', url: 'https://www.coe.int/en/web/european-commission-against-racism-and-intolerance/austria' },
        { label: 'FRA — Being Black in the EU', url: 'https://fra.europa.eu/en/publication/2023/being-black-eu' },
      ],
    },
    safety: {
      text: 'Austria is very safe, consistently ranking in the top tier of the Global Peace Index. Violent crime rates are low. Vienna is one of the safest capital cities in Europe. The main concerns for visitors are pickpocketing in tourist areas (Vienna\'s inner city, Schönbrunn) and winter mountain hazards (avalanches, ice).',
      sources: [
        { label: 'Austria crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Austria' },
        { label: 'Global Peace Index — Austria', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Austria has a high-quality universal healthcare system based on mandatory health insurance contributions (Sozialversicherung). Anyone in formal employment contributes and has full access to public healthcare. The system covers GPs, specialists, hospitals, and most medicines. Private supplementary insurance is popular for faster access to certain specialists. The overall quality of care is excellent.',
      sources: [
        { label: 'WHO — Austria health profile', url: 'https://www.who.int/countries/aut/' },
        { label: 'Austrian social insurance', url: 'https://www.sozialversicherung.at' },
      ],
    },
    cost_value: {
      text: 'Vienna is one of the most liveable cities in the world (consistently ranked #1 or #2 by the Economist Intelligence Unit) and is moderately expensive by Western European standards — cheaper than Zurich, London, or Paris, but more expensive than Madrid or Lisbon. Housing costs in Vienna have risen significantly. Regional cities like Linz, Graz, and Salzburg are more affordable. Public transport is excellent and affordable.',
      sources: [
        { label: 'Austria cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Austria' },
        { label: 'EIU Global Liveability Index', url: 'https://www.eiu.com/n/campaigns/global-liveability-index-2024/' },
      ],
    },
    visa: {
      text: 'EU citizens can live and work in Austria freely. Non-EU nationals: Austria offers the Red-White-Red Card for skilled workers, recent graduates, and key workers, as well as an EU Blue Card for highly qualified workers. Austria is a Schengen member. There is no dedicated digital nomad visa but a freelancer/self-employed pathway exists under certain conditions.',
      sources: [
        { label: 'Austria immigration — Migration.gv.at', url: 'https://www.migration.gv.at/en/' },
        { label: 'Red-White-Red Card', url: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/red-white-red-card/' },
      ],
    },
  },

  // ── Barbados ───────────────────────────────────────────────────────────────
  'BB': {
    climate: {
      text: 'Barbados enjoys a tropical maritime climate that is moderated year-round by the northeast trade winds, making it more comfortable than many Caribbean islands. Temperatures are consistent: 25–30°C throughout the year, with the coolest period being January–February. There are two seasons: dry (December–May) and wet (June–November). The hurricane season peaks August–October — Barbados sits at the southernmost edge of the hurricane belt and is struck less often than more northerly Caribbean islands, though major storms (like Hurricane Ivan in 2004) have affected the island. The east (Atlantic) coast is rougher and windier; the west and south coasts (Caribbean side) are calmer and clearer. Sunshine is abundant year-round.',
      sources: [
        { label: 'Barbados Meteorological Services', url: 'https://www.barbadosweather.org' },
        { label: 'Barbados climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Barbados#Climate' },
      ],
    },
    lgbtq_orient: {
      text: 'In 2022, the Barbados High Court struck down colonial-era buggery laws (section 9 of the Sexual Offences Act) in a landmark ruling in the case of Ayers-Caesar v. AG. This made Barbados the most LGBTQ+-progressive Eastern Caribbean nation legally. There is no same-sex civil union or marriage recognition as of 2025, but the direction of legal reform has been positive. Barbados\'s constitution does not explicitly protect against discrimination based on sexual orientation.',
      sources: [
        { label: 'Barbados — Equaldex', url: 'https://www.equaldex.com/region/bb' },
        { label: 'Barbados decriminalisation 2022 — ILGA', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'There is very limited legal framework for transgender recognition in Barbados. No formal pathway exists for legal gender change. Gender-affirming healthcare is not available through the public system.',
      sources: [
        { label: 'Barbados — Equaldex gender', url: 'https://www.equaldex.com/region/bb' },
      ],
    },
    lgbtq_social: {
      text: 'Despite legal reform, social acceptance of LGBTQ+ people in Barbados remains mixed. Conservative Caribbean cultural attitudes and religious influence (predominantly Protestant Christian) shape daily life. LGBTQ+ people are advised to be discreet in public, particularly outside tourist areas. Tourist-oriented areas on the west and south coasts tend to be more accepting.',
      sources: [
        { label: 'Barbados — Equaldex social', url: 'https://www.equaldex.com/region/bb' },
      ],
    },
    racial: {
      text: 'Barbados has an approximately 90% Black/Afro-Caribbean population, reflecting its history as one of the most intensively colonised islands in the Caribbean. White Bajans and mixed-race individuals are a small minority, though white families historically dominated economically. Colorism (lighter skin being associated with higher status) exists as a social dynamic. For Black visitors and residents from Africa or the diaspora, there is often a strong sense of shared cultural heritage and pride. The "Little England" moniker reflects deep British colonial influence alongside African identity.',
      sources: [
        { label: 'Barbados demographics — Wikipedia', url: 'https://en.wikipedia.org/wiki/Demographics_of_Barbados' },
        { label: 'Barbados human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
      ],
    },
    safety: {
      text: 'Barbados is relatively safe for the Caribbean region. Crime, including some violent crime, has been present — particular areas of Bridgetown and certain inland communities experience higher crime rates. Tourist areas (Holetown, St. Lawrence Gap, Speightstown) are generally safe. Exercise normal urban awareness, particularly at night.',
      sources: [
        { label: 'Barbados crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Barbados' },
        { label: 'Global Peace Index — Barbados', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Barbados has the Queen Elizabeth Hospital as the main public facility, which is free for citizens and residents. The standard is reasonable by Caribbean standards. Private clinics and the Barbados Fertility Centre offer specialist services. Comprehensive travel/health insurance is recommended for expats. Serious cases may require medical evacuation to the US, Canada, or UK.',
      sources: [
        { label: 'WHO — Barbados health profile', url: 'https://www.who.int/countries/brb/' },
      ],
    },
    cost_value: {
      text: 'Barbados is one of the more expensive Caribbean destinations, partly due to its high standard of infrastructure and reliance on imported goods. Housing — particularly for expats — can be very expensive. The 12-month "Welcome Stamp" visa is targeted at remote workers who can sustain the cost. Day-to-day local food and rum are affordable; imported and restaurant food is pricier.',
      sources: [
        { label: 'Barbados cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Barbados' },
      ],
    },
    visa: {
      text: 'Barbados launched the "Barbados Welcome Stamp" in 2020, a 12-month (renewable) remote work visa for those earning at least USD 50,000 per year. CARICOM nationals have freedom of movement. Most other nationalities receive a tourist entry for 28 days (often extendable). Long-term residency requires proof of income, employment, or retirement funds. CARICOM citizenship by investment is also available.',
      sources: [
        { label: 'Barbados Welcome Stamp', url: 'https://barbadoswelcomestamp.bb' },
        { label: 'Barbados immigration — BIS', url: 'https://immigration.gov.bb' },
      ],
    },
  },

  // ── Belgium ────────────────────────────────────────────────────────────────
  'BE': {
    climate: {
      text: 'Belgium has a temperate maritime climate — cool, cloudy, and frequently wet year-round. Brussels averages about 10°C annually. Summers are mild (20–25°C, with occasional heat waves in recent years reaching 35°C+). Winters are grey, damp, and cool, rarely falling below -5°C, with snow possible but unreliable. The coastal strip along the North Sea is windier and receives Atlantic weather. The Ardennes in the south and east is hillier with colder winters, more precipitation, and occasional snow. Belgium receives very limited sunshine compared to southern Europe — roughly 1,700 hours per year, concentrated in summer. The low sun hours are a notable factor for those sensitive to winter darkness.',
      sources: [
        { label: 'Royal Meteorological Institute of Belgium', url: 'https://www.meteo.be/en' },
        { label: 'Belgium climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Belgium' },
      ],
    },
    lgbtq_orient: {
      text: 'Belgium was the second country in the world to legalise same-sex marriage, in June 2003. Adoption rights are fully equal. LGBTQ+ people can serve openly in the military. Federal anti-discrimination law (Loi Antidiscrimination / Antidiscriminatiewet) comprehensively covers sexual orientation in employment, housing, and goods and services. Belgium is consistently ranked among the top countries in Europe for LGBTQ+ legal rights.',
      sources: [
        { label: 'Belgium — Equaldex', url: 'https://www.equaldex.com/region/be' },
        { label: 'ILGA Europe — Belgium rainbow map', url: 'https://www.ilga-europe.org/country/belgium/' },
      ],
    },
    lgbtq_gender: {
      text: 'Belgium reformed its legal gender recognition law in 2018, moving to a self-declaration model without requiring any medical procedures or psychiatric diagnosis. A person can change their legal gender marker via a declaration at the municipal registry, with a reflection period of three months. Non-binary legal recognition is not yet available. Access to gender-affirming healthcare through the public system (RIZIV/INAMI) has improved but waiting times can be significant.',
      sources: [
        { label: 'TGEU — Belgium', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Belgium — Equaldex gender', url: 'https://www.equaldex.com/region/be' },
      ],
    },
    lgbtq_social: {
      text: 'Belgium has a very open and established LGBTQ+ culture. Brussels hosts the Belgian Pride (one of the largest in Benelux), and cities like Antwerp and Ghent have vibrant LGBTQ+ communities. Same-sex couples are highly visible and generally socially accepted in urban settings. More conservative communities exist in rural Flanders and Wallonia, and certain immigrant communities hold more traditional views. Brussels, as the de facto capital of the EU, has an internationally diverse and open social environment.',
      sources: [
        { label: 'Belgian Pride Brussels', url: 'https://pride.be' },
        { label: 'Belgium — Equaldex social', url: 'https://www.equaldex.com/region/be' },
      ],
    },
    racial: {
      text: 'Belgium is home to large North African (predominantly Moroccan), Turkish, and Sub-Saharan African communities, concentrated particularly in Brussels, Liège, and Antwerp. Brussels is among the most diverse cities in Europe. Despite this diversity, structural racism is well-documented: North Africans and Black Africans report the highest rates of employment and housing discrimination. The neighbourhood of Molenbeek (Brussels) has faced stigmatisation following terrorist attacks. Antwerp has a more pronounced politically far-right presence through the Vlaams Belang party. The FRA\'s "Being Black in the EU" study noted significant discrimination experienced by Black Belgians.',
      sources: [
        { label: 'FRA — Being Black in the EU (Belgium)', url: 'https://fra.europa.eu/en/publication/2023/being-black-eu' },
        { label: 'ECRI report on Belgium', url: 'https://www.coe.int/en/web/european-commission-against-racism-and-intolerance/belgium' },
      ],
    },
    safety: {
      text: 'Belgium has a moderate safety profile. Brussels city centre has pickpocketing issues in tourist areas (Grand Place, metro stations). Certain communes in Brussels (Molenbeek, Anderlecht) have higher property crime. Belgium experienced major terrorist attacks in 2016 (Brussels airport and metro). Overall violent crime rates are low. Bruges, Ghent, and Antwerp are generally very safe.',
      sources: [
        { label: 'Belgium crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Belgium' },
        { label: 'Global Peace Index — Belgium', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Belgium has an excellent universal healthcare system. Residents must register with a health insurance fund (mutualité / ziekenfonds) once employed or resident, which provides access to highly subsidised medical care. The patient pays a portion (ticket modérateur) and is reimbursed for most of the rest. Hospital care, specialist visits, and medicines are all covered. Dental and optical are partially covered. The overall quality is very high.',
      sources: [
        { label: 'RIZIV/INAMI — Belgian health insurance', url: 'https://www.riziv.fgov.be' },
        { label: 'Belgium healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Belgium' },
      ],
    },
    cost_value: {
      text: 'Belgium is moderately priced by Western European standards — cheaper than the Netherlands, UK, or Nordics, but not as affordable as Portugal or Eastern Europe. Brussels is the most expensive city. Housing in Brussels has become more expensive, but outside the capital, costs are lower. Belgian chocolate, beer, and local food are affordable. Public transport is reasonable.',
      sources: [
        { label: 'Belgium cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Belgium' },
      ],
    },
    visa: {
      text: 'EU citizens can live and work freely. Non-EU nationals: Belgium has a professional card (carte professionnelle) for self-employed individuals, and standard employer-sponsored work permit routes. EU Blue Card available for highly qualified workers. Belgium participates in the Schengen Area. There is no dedicated digital nomad visa, though Belgium is considering one. Expats in Brussels often benefit from EU institutions providing employment pathways.',
      sources: [
        { label: 'Belgium immigration — DVZ/OE', url: 'https://dofi.ibz.be/en' },
      ],
    },
  },

  // ── Belize ─────────────────────────────────────────────────────────────────
  'BZ': {
    climate: {
      text: 'Belize has a subtropical and tropical climate with significant regional variation. The north (Corozal, Orange Walk) is drier, receiving around 1,500mm of rain per year. The south (Toledo district, Punta Gorda) is one of the wettest areas in Central America, receiving up to 4,000mm annually. Coastal areas and the Cayes benefit from sea breezes. Temperatures are warm year-round: 25–33°C. The hurricane season runs June to November — Belize has been struck by major hurricanes including Hurricane Lisa (2022, which hit Belize City). The Maya Mountains in the west are cooler. The Cayes and reef areas have the most tourism-friendly climate.',
      sources: [
        { label: 'Belize Meteorological Service', url: 'https://www.hydromet.gov.bz' },
        { label: 'Belize climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Belize#Climate' },
      ],
    },
    lgbtq_orient: {
      text: 'Belize\'s Supreme Court struck down colonial-era sodomy laws (section 53 of the Criminal Code) in a landmark 2019 ruling (Rainbow Alliance of Belize v. Attorney General). This ended the criminalisation of same-sex relations after a prolonged legal battle. There is no same-sex civil union or marriage recognition as of 2025, and the political climate remains socially conservative. The legal victory was hard-won against strong church opposition.',
      sources: [
        { label: 'Belize — Equaldex', url: 'https://www.equaldex.com/region/bz' },
        { label: 'Belize decriminalisation 2019 — ILGA', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'There is no legal framework for gender identity recognition in Belize. Trans people cannot change their legal gender documents and face social and legal invisibility. Gender-affirming healthcare is not available through the public system.',
      sources: [
        { label: 'Belize — Equaldex gender', url: 'https://www.equaldex.com/region/bz' },
      ],
    },
    lgbtq_social: {
      text: 'Belizean society is socially conservative despite legal decriminalisation. The Catholic Church and evangelical denominations have significant influence. LGBTQ+ people are advised to be discreet, particularly outside Belize City. The Rainbow Alliance Belize is the primary advocacy organisation working to shift public attitudes.',
      sources: [
        { label: 'Belize — Equaldex social', url: 'https://www.equaldex.com/region/bz' },
        { label: 'Rainbow Alliance Belize', url: 'https://www.rainbowalliancebelize.org' },
      ],
    },
    racial: {
      text: 'Belize has one of Central America\'s most diverse populations: approximately 25% Mestizo (Spanish-Maya), 25% Creole (Afro-Belizean), 11% Maya, 6% Garifuna (Afro-indigenous Caribbean), 5% East Indian, plus smaller Chinese, Lebanese, and Mennonite communities. Racial relations are generally described as harmonious, though economic stratification along racial lines exists. The Garifuna people, with their distinctive language and culture, are celebrated particularly in southern Belize. Belize\'s ethnic diversity means that people of colour are not outliers and the experience of visible minorities differs from more homogeneous neighbouring countries.',
      sources: [
        { label: 'Belize demographics — Wikipedia', url: 'https://en.wikipedia.org/wiki/Demographics_of_Belize' },
      ],
    },
    safety: {
      text: 'Belize City has a serious gang violence and homicide problem, giving Belize one of the higher murder rates in Central America. Tourist areas — particularly Ambergris Caye, Caye Caulker, Placencia, and San Ignacio — are significantly safer and have good tourist safety records. Caution in Belize City, especially at night and in the southside, is strongly advised. The rural interior is generally safe.',
      sources: [
        { label: 'Belize crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Belize' },
        { label: 'Global Peace Index — Belize', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Healthcare in Belize is limited, particularly outside Belize City and San Ignacio. Karl Heusner Memorial Hospital is the main public referral hospital. Private clinics in Belize City and tourist areas are adequate for non-emergency care. Medical evacuation to Chetumal (Mexico), Mérida, or the United States is often used for serious cases. Comprehensive medical evacuation insurance is essential.',
      sources: [
        { label: 'WHO — Belize health profile', url: 'https://www.who.int/countries/blz/' },
      ],
    },
    cost_value: {
      text: 'Belize offers moderate value. In local areas, accommodation and food are affordable. However, many goods — particularly electronics and certain foods — are imported and therefore expensive. Tourist areas (Ambergris Caye especially) are priced comparably to Caribbean resort destinations. The Qualified Retired Persons (QRP) programme provides tax incentives for retirees.',
      sources: [
        { label: 'Belize cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Belize' },
      ],
    },
    visa: {
      text: 'US, UK, EU, and many other nationals can enter Belize visa-free for 30 days, extendable to a maximum of 6 months at an immigration office. The Qualified Retired Persons (QRP) programme offers permanent residency for retirees who receive at least USD 2,000/month from abroad. There is no dedicated digital nomad visa, but long stays via extensions are common.',
      sources: [
        { label: 'Belize QRP programme', url: 'https://belizetourism.org/qualified-retired-persons-incentive-program/' },
        { label: 'Belize immigration', url: 'https://www.immigration.gov.bz' },
      ],
    },
  },

  // ── Bolivia ────────────────────────────────────────────────────────────────
  'BO': {
    climate: {
      text: 'Bolivia has one of the most varied climates in the world due to its extreme altitudinal range. The Altiplano (high plateau, 3,500–4,000m), where La Paz and Oruro sit, is cold year-round: La Paz averages 8°C, with cold nights (near 0°C) even in summer. Rainfall is concentrated December–March. Sucre (2,800m) and Cochabamba (2,500m) are milder and more spring-like. The Yungas (eastern Andean slopes) are subtropical and lush. The Amazon lowlands (Beni, Pando) are hot and tropical: 30–35°C with heavy rain. Santa Cruz de la Sierra (east) has a hot tropical climate with wet summers and a mild "surazo" cold front arriving in winter (June–August) that can drop temperatures to 10°C briefly. Altitude sickness (soroche) is a real concern for new arrivals in La Paz — acclimatise before exerting yourself.',
      sources: [
        { label: 'Bolivia climate — SENAMHI', url: 'https://senamhi.gob.bo' },
        { label: 'Bolivia climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Bolivia' },
      ],
    },
    lgbtq_orient: {
      text: 'Bolivia\'s 2009 Constitution prohibits discrimination based on sexual orientation, and same-sex civil unions have been recognised through Supreme Court interpretations of family law, though no formal same-sex marriage law has been enacted. The legal situation has fluctuated — some lower courts have registered same-sex unions while others have refused. Bolivia is more legally progressive than most of its neighbours but implementation is inconsistent.',
      sources: [
        { label: 'Bolivia — Equaldex', url: 'https://www.equaldex.com/region/bo' },
        { label: 'Bolivia — ILGA', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Bolivia\'s 2016 Gender Identity Law (Ley 807) allows legal gender and name change without requiring surgery or psychiatric evaluation, making it one of the more progressive trans rights frameworks in South America. The process is administrative. Non-binary identity is not legally recognised.',
      sources: [
        { label: 'Bolivia Gender Identity Law — TGEU', url: 'https://tgeu.org/country/bolivia/' },
        { label: 'Bolivia — Equaldex gender', url: 'https://www.equaldex.com/region/bo' },
      ],
    },
    lgbtq_social: {
      text: 'Bolivia has visible LGBTQ+ communities in La Paz and Santa Cruz, with annual Pride events. Social acceptance has grown, especially among younger urban populations. However, Catholic and evangelical religious influence is strong, and attitudes in rural and indigenous communities vary widely. Public displays of same-sex affection may attract unwanted attention outside urban centres.',
      sources: [
        { label: 'Bolivia — Equaldex social', url: 'https://www.equaldex.com/region/bo' },
      ],
    },
    racial: {
      text: 'Bolivia has the highest proportion of indigenous population in South America (approximately 41% indigenous, 32% mestizo/cholo). Indigenous identity has been politically elevated under the Evo Morales era. Despite this, discrimination against indigenous people in urban settings persists — the concept of "choleo" (insulting indigenous-identifying people) is a recognised social problem. Afro-Bolivians, a small community in the Yungas, have faced centuries of marginalisation. Black and mixed-race visitors from outside South America are relatively uncommon, and experiences vary between curiosity and occasional discrimination.',
      sources: [
        { label: 'Bolivia human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
        { label: 'IWGIA — Indigenous peoples of Bolivia', url: 'https://www.iwgia.org/en/bolivia.html' },
      ],
    },
    safety: {
      text: 'Bolivia has moderate crime levels. La Paz and Santa Cruz have areas with higher petty crime and occasional violent crime. Political instability and road blockades (bloqueos) are common and can strand travellers for days. Mining regions and certain border areas have specific security concerns. Altitude itself is a health consideration rather than a safety risk. Tourist areas are generally safe.',
      sources: [
        { label: 'Bolivia crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Bolivia' },
        { label: 'Global Peace Index — Bolivia', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Bolivia\'s public healthcare system is underfunded and uneven in quality, particularly outside major cities. The Seguro Universal de Salud (SUS) provides free coverage to uninsured residents, but facilities vary. Private clinics in La Paz and Santa Cruz are better equipped and affordable by international standards. Altitude-related health considerations (cardiovascular stress, hypoxia) are a real factor for newcomers.',
      sources: [
        { label: 'WHO — Bolivia health profile', url: 'https://www.who.int/countries/bol/' },
      ],
    },
    cost_value: {
      text: 'Bolivia is one of the cheapest countries in South America. La Paz and Sucre offer outstanding value — local restaurants, transport, and accommodation are very inexpensive. Even private healthcare and expat-oriented services cost a fraction of Western prices. This makes it an attractive long-term destination for those on modest foreign incomes.',
      sources: [
        { label: 'Bolivia cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Bolivia' },
      ],
    },
    visa: {
      text: 'Bolivia offers 30-day tourist entry on arrival for most nationalities, extendable to 90 days total per year. For longer stays, residency options include a rentier visa (for those with passive income), a work permit for employed individuals, or pensioner residency. Bolivia does not have a digital nomad visa. Documentation requirements and processing can be bureaucratic.',
      sources: [
        { label: 'Bolivia immigration — DIGEMIG', url: 'https://www.migracion.gob.bo' },
      ],
    },
  },

  // ── Botswana ───────────────────────────────────────────────────────────────
  'BW': {
    climate: {
      text: 'Botswana has a semi-arid to arid climate dominated by the Kalahari Basin. Summer (November–March) is hot — temperatures in the Central Kalahari regularly reach 35–42°C, with afternoon thunderstorms bringing most of the annual rainfall. Winter (May–August) is the dry season: warm and sunny during the day (20–25°C) but cold at night, with temperatures dropping below 5°C and occasionally near freezing in the Kalahari. The unique Okavango Delta is fed by distant Angolan rainfall and floods during the dry season (peaking July–August), making it paradoxically lush while the rest of the country is driest. The Chobe region and Kasane in the north are slightly wetter and greener. Botswana is one of the sunniest countries in Africa.',
      sources: [
        { label: 'Botswana Meteorological Services', url: 'https://www.gov.bw/ministries/ministry-environment-natural-resources-conservation-and-tourism/departments/botswana-meteorological-services' },
        { label: 'Botswana climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Botswana#Climate' },
      ],
    },
    lgbtq_orient: {
      text: 'In a landmark 2019 ruling, the Botswana High Court decriminalised same-sex relations in the case of Letsweletse Motshidiemang v. Attorney General, striking down sections 164 and 167 of the Penal Code that dated from the colonial era. The ruling was upheld by the Court of Appeal in 2021. Botswana became a beacon of legal progress in sub-Saharan Africa. There is no same-sex union or marriage recognition as of 2025.',
      sources: [
        { label: 'Botswana — Equaldex', url: 'https://www.equaldex.com/region/bw' },
        { label: 'Botswana decriminalisation ruling — ILGA', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition for transgender people in Botswana has had a complex history. Courts have issued some rulings supporting gender marker changes, but there is no clear legislative framework. The situation remains uncertain and case-dependent.',
      sources: [
        { label: 'Botswana — Equaldex gender', url: 'https://www.equaldex.com/region/bw' },
      ],
    },
    lgbtq_social: {
      text: 'Despite significant legal progress, social acceptance of LGBTQ+ people in Botswana remains limited. Traditional Tswana values and strong Christian religious influence shape public attitudes, and open LGBTQ+ expression in public carries social risk. LEGABIBO (Lesbians, Gays and Bisexuals of Botswana) is the principal civil society organisation doing advocacy work.',
      sources: [
        { label: 'LEGABIBO', url: 'https://legabibo.org.bw' },
        { label: 'Botswana — Equaldex social', url: 'https://www.equaldex.com/region/bw' },
      ],
    },
    racial: {
      text: 'Botswana has a predominantly Black African population, with the Tswana ethnic group making up about 79% and the Kalanga about 11%. There is a small white Botswanan community (including descendants of British settlers and South African immigrants) and a small Asian and Indian community. The San (Bushmen/Basarwa) indigenous peoples have faced significant marginalisation, including displacement from the Central Kalahari Game Reserve. Racial tensions are modest compared to neighbouring South Africa, and the country has maintained relative political and social stability since independence.',
      sources: [
        { label: 'Botswana human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
        { label: 'Botswana demographics — Wikipedia', url: 'https://en.wikipedia.org/wiki/Demographics_of_Botswana' },
      ],
    },
    safety: {
      text: 'Botswana is one of Africa\'s safest and most politically stable countries, with functioning multiparty democracy and a well-regarded rule of law. Crime rates are low by African standards, though petty theft in Gaborone exists. Wildlife areas carry natural hazards — encounters with elephants, hippos, and lions require care. HIV/AIDS has one of the highest prevalence rates globally, though the government\'s antiretroviral treatment programme is strong.',
      sources: [
        { label: 'Botswana crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Botswana' },
        { label: 'Global Peace Index — Botswana', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Botswana has invested significantly in healthcare through its diamond revenues. The main public hospitals (Princess Marina in Gaborone, Nyangabgwe in Francistown) provide good-quality care by African standards, and antiretroviral treatment is free. Private clinics in Gaborone offer good care. Specialist treatment may require referral to South Africa.',
      sources: [
        { label: 'WHO — Botswana health profile', url: 'https://www.who.int/countries/bwa/' },
      ],
    },
    cost_value: {
      text: 'Botswana has a moderate cost of living by African standards — Gaborone is not cheap. Safari tourism in the Okavango and Chobe is expensive (among the highest-end ecotourism in the world). Day-to-day living for residents is more affordable. The country has a middle-income economy thanks to diamond exports.',
      sources: [
        { label: 'Botswana cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Botswana' },
      ],
    },
    visa: {
      text: 'Most nationalities receive 30–90 days on arrival. SADC nationals have easier access. For longer stays, Botswana offers a Retired Person Residence Permit, a self-employment permit, and standard work permits. There is no digital nomad visa. Botswana is considering expanded work visa pathways to attract skilled migrants.',
      sources: [
        { label: 'Botswana immigration — Department of Immigration', url: 'https://www.gov.bw/immigration' },
      ],
    },
  },

  // ── Brazil ─────────────────────────────────────────────────────────────────
  'BR': {
    climate: {
      text: 'Brazil is enormous and has five main climate zones. The Amazon Basin (north, covering 60% of the country) is equatorial: hot (26–32°C), extremely humid, and rainy year-round, with a distinct wet season varying by subregion. The Northeast (Bahia coast, Recife, Fortaleza, Natal) is tropical semi-humid on the coast and semi-arid in the interior sertão (drought-prone). Rio de Janeiro and São Paulo (Southeast) have a humid subtropical climate: hot, humid summers (November–March, 28–38°C with frequent heavy storms) and mild, drier winters (June–August, 15–22°C). The South (Curitiba, Porto Alegre, Florianópolis) is subtropical with distinct seasons — snowfall occurs in highland areas of Santa Catarina and Rio Grande do Sul in winter. The Central-West (Mato Grosso, Goiás) has a tropical savanna (cerrado) climate: very wet summers and dry winters. Most international expats settle in São Paulo, Rio de Janeiro, Florianópolis, or Recife.',
      sources: [
        { label: 'INMET — Brazilian meteorology', url: 'https://portal.inmet.gov.br' },
        { label: 'Brazil climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Brazil' },
      ],
    },
    lgbtq_orient: {
      text: 'Brazil legalised same-sex marriage nationwide in 2013 via a Supreme Court (STF) resolution. Anti-discrimination legislation based on sexual orientation was declared a crime (equivalent to racism) by the STF in 2019. Equal adoption rights apply. Brazil is constitutionally one of the most legally protected countries for LGBTQ+ people — however, legal protections coexist with serious social and political tensions, particularly under conservative administrations.',
      sources: [
        { label: 'Brazil — Equaldex', url: 'https://www.equaldex.com/region/br' },
        { label: 'ILGA — Brazil', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Brazil\'s STF ruled in 2018 that trans people could change their legal gender and name without requiring surgery, sterilisation, or psychiatric diagnosis — a purely administrative process. Brazil has one of the largest trans populations in the world and the Trans Pride parade in São Paulo is one of the world\'s largest. However, Brazil also records the highest absolute number of trans murders globally (predominantly trans women of colour). The legal/social contrast is stark and important to understand.',
      sources: [
        { label: 'Brazil — Equaldex gender', url: 'https://www.equaldex.com/region/br' },
        { label: 'TGEU — Trans murder monitoring (Brazil)', url: 'https://transrespect.org/en/trans-murder-monitoring/' },
      ],
    },
    lgbtq_social: {
      text: 'São Paulo\'s annual Pride parade is the largest in the world by attendance (millions of participants). Rio de Janeiro, Recife, and Salvador have major LGBTQ+ cultures. São Paulo\'s Vila Madalena and Jardins neighbourhoods are LGBTQ+ friendly. However, violence against LGBTQ+ people — especially trans women of colour and gay men in less urban settings — is among the highest in the world. The political climate has at times been hostile at the federal level. Social acceptance is sharply split between progressive urban centres and conservative evangelical/rural communities.',
      sources: [
        { label: 'São Paulo Pride', url: 'https://paradasp.org.br' },
        { label: 'Brazil — Equaldex social', url: 'https://www.equaldex.com/region/br' },
      ],
    },
    racial: {
      text: 'Brazil has one of the world\'s most complex racial demographics. Approximately 43% identify as pardo (mixed race), 43% as branco (white), and 10% as preto (Black). The myth of "racial democracy" has been historically pervasive but is now widely contested — Afro-Brazilians face significantly higher poverty rates, police violence, incarceration, and social marginalisation. Colorism is deeply embedded: skin tone correlates strongly with socioeconomic status. Black Brazilians are highly politicised around these inequalities. For Black visitors from Africa or the diaspora, Brazil may feel simultaneously culturally connected (particularly in Bahia, which has a strong Afro-Brazilian culture) and racially stratified. São Paulo has large Japanese-Brazilian (~1.5 million), Chinese, Jewish, and Lebanese communities. Indigenous peoples face ongoing land rights and violence threats.',
      sources: [
        { label: 'Brazil human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
        { label: 'IBGE — Race/colour data Brazil', url: 'https://www.ibge.gov.br/en/statistics/social/population.html' },
      ],
    },
    safety: {
      text: 'Brazil has a serious violent crime problem — one of the highest absolute homicide rates in the world, driven by gang violence, drug trafficking, and economic inequality. Major cities have very safe and very unsafe neighbourhoods within kilometres of each other. Rio de Janeiro\'s favelas in some areas have active gang control; the Zona Sul (Ipanema, Leblon, Copacabana) is generally safer. São Paulo\'s wealthy neighbourhoods (Jardins, Itaim Bibi, Vila Madalena) are relatively safe. Fortaleza, Natal, Salvador, and Recife have elevated murder rates. Petty crime, phone snatching, and "arrastão" (mass muggings) occur in tourist-heavy areas. Female travellers face heightened risks of harassment. Stay aware and seek local advice.',
      sources: [
        { label: 'Brazil crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Brazil' },
        { label: 'Global Peace Index — Brazil', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Brazil has the SUS (Sistema Único de Saúde), a fully public universal health system that is free for everyone — including foreigners. Quality and availability vary dramatically: world-class in São Paulo\'s USP hospitals, severely underfunded in rural areas. Private healthcare (plano de saúde, e.g., Amil, Bradesco Saúde, SulAmérica) is recommended for expats — it is good quality and affordable by international standards, particularly in major cities. São Paulo has internationally recognised private hospitals.',
      sources: [
        { label: 'WHO — Brazil health profile', url: 'https://www.who.int/countries/bra/' },
        { label: 'Brazil healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Brazil' },
      ],
    },
    cost_value: {
      text: 'Brazil offers excellent value for those earning in foreign currency at current exchange rates. São Paulo\'s restaurant scene, culture, and infrastructure rival European cities at a fraction of the cost. Local transport, domestic food, and everyday services are inexpensive. Imported goods (electronics, branded clothing) attract high tariffs and are expensive. São Paulo and Rio are the most expensive cities; Florianópolis and Recife offer better value.',
      sources: [
        { label: 'Brazil cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Brazil' },
      ],
    },
    visa: {
      text: 'Brazil introduced a Digital Nomad Visa (VITEM XIV) in 2022 for remote workers earning at least USD 1,500/month from foreign sources, valid for 1 year and renewable. EU, UK, US, and most Western nationals can enter visa-free for 90 days as tourists. Permanent residency routes include: retirement pension holders, those with Brazilian family ties, and skilled workers. Brazil has reciprocal agreements with many South American countries (MERCOSUR).',
      sources: [
        { label: 'Brazil immigration — Polícia Federal', url: 'https://www.gov.br/pf/pt-br/assuntos/estrangeiros' },
        { label: 'Brazil Digital Nomad Visa', url: 'https://visaguide.world/south-america/brazil-visa/digital-nomad/' },
      ],
    },
  },

  // ── Bulgaria ───────────────────────────────────────────────────────────────
  'BG': {
    climate: {
      text: 'Bulgaria has a continental climate in inland areas and a Black Sea climate on the eastern coast. Sofia (capital, 550m altitude) has cold winters (average -1°C in January, with cold snaps to -15°C) and hot summers (average 29°C in July). The Rhodope and Balkan mountain ranges receive heavy snowfall in winter — Bansko and Borovets are major ski resorts. The southern lowlands (Plovdiv, Stara Zagora) are warmer and more Mediterranean-influenced. The Black Sea coast (Varna, Burgas) has mild winters and warm summers (25–30°C from June to September), making it popular for tourism. Bulgaria gets significantly more sunshine than much of Central Europe, particularly in summer.',
      sources: [
        { label: 'NIMH — Bulgarian meteorology', url: 'https://www.meteo.bg' },
        { label: 'Bulgaria climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Bulgaria' },
      ],
    },
    lgbtq_orient: {
      text: 'Same-sex relations have been legal in Bulgaria since 1968. Anti-discrimination legislation was adopted in 2003 as part of EU accession requirements. However, Bulgaria\'s Constitutional Court ruled against same-sex marriage recognition in 2009, and there is no civil union or partnership recognition as of 2025. Bulgaria lags behind most EU member states on LGBTQ+ legal rights.',
      sources: [
        { label: 'Bulgaria — Equaldex', url: 'https://www.equaldex.com/region/bg' },
        { label: 'ILGA Europe — Bulgaria rainbow map', url: 'https://www.ilga-europe.org/country/bulgaria/' },
      ],
    },
    lgbtq_gender: {
      text: 'Bulgaria has no clear legal pathway for legal gender recognition. Trans people face significant bureaucratic barriers and must navigate a court process that can be lengthy and inconsistent. Non-binary identities have no legal recognition. The country is among the most legally restrictive in the EU for trans rights.',
      sources: [
        { label: 'TGEU — Bulgaria', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Bulgaria — Equaldex gender', url: 'https://www.equaldex.com/region/bg' },
      ],
    },
    lgbtq_social: {
      text: 'Bulgaria is one of the least accepting EU countries toward LGBTQ+ people. Sofia Pride has taken place since 2008 but faces regular counter-demonstrations from far-right and nationalist groups. Outside Sofia, LGBTQ+ people generally live very privately. Surveys consistently show Bulgaria among the EU\'s lowest rankings for social acceptance of LGBTQ+ people. The Bulgarian Orthodox Church and nationalist political parties actively oppose LGBTQ+ rights.',
      sources: [
        { label: 'Bulgaria — Equaldex social', url: 'https://www.equaldex.com/region/bg' },
        { label: 'ILGA Europe — Bulgaria', url: 'https://www.ilga-europe.org/country/bulgaria/' },
      ],
    },
    racial: {
      text: 'Bulgaria is approximately 85% ethnic Bulgarian (Slavic). The Turkish/Muslim minority (~8%, concentrated in southern and eastern regions) faces ongoing political discrimination and anti-Muslim sentiment. The Roma community (~5%) faces severe and documented systemic discrimination in education, employment, and housing, and is frequently subjected to police violence and hate speech. The European Commission Against Racism and Intolerance (ECRI) has repeatedly criticised Bulgaria\'s treatment of minorities. Black and Asian visitors are uncommon outside Sofia and tourist areas; staring and occasional hostile remarks are reported.',
      sources: [
        { label: 'ECRI report on Bulgaria', url: 'https://www.coe.int/en/web/european-commission-against-racism-and-intolerance/bulgaria' },
        { label: 'FRA — Roma conditions in Bulgaria', url: 'https://fra.europa.eu/en/country/bulgaria' },
      ],
    },
    safety: {
      text: 'Bulgaria has moderate safety levels. Sofia is generally safe for daily life and tourism. Traffic accidents are among the worst in the EU. Organised crime and corruption in institutions are concerns. Pick-pocketing in tourist areas (Sofia\'s historic centre, Plovdiv, Black Sea resorts) is common in summer. Violent crime against tourists is low.',
      sources: [
        { label: 'Bulgaria crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Bulgaria' },
        { label: 'Global Peace Index — Bulgaria', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Bulgaria has a public health insurance system (NHIF / НЗОК) for residents and employed persons. The quality of public hospitals varies significantly — better in Sofia and larger cities, underfunded in rural areas. Many doctors are skilled but facilities can be old. Emigration of healthcare workers to Western Europe is a structural problem. Private hospitals in Sofia (Tokuda, Acibadem City Clinic) provide better care. Expats typically take private health insurance.',
      sources: [
        { label: 'WHO — Bulgaria health profile', url: 'https://www.who.int/countries/bgr/' },
        { label: 'Bulgaria healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Bulgaria' },
      ],
    },
    cost_value: {
      text: 'Bulgaria is the cheapest country in the EU by cost of living. Sofia, Plovdiv, and the Black Sea coast offer excellent value — rent, food, and services cost a fraction of Western Europe. This makes Bulgaria particularly attractive for digital nomads and retirees on modest foreign incomes. The quality of European infrastructure (roads, EU consumer protections) paired with very low prices is a significant draw.',
      sources: [
        { label: 'Bulgaria cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Bulgaria' },
      ],
    },
    visa: {
      text: 'EU citizens can live and work freely. Non-EU nationals: Bulgaria is not yet in the Schengen Area (though accession was progressing as of 2025) — this means a separate Bulgarian residence permit is required. Standard work permit and business permit routes exist. Many digital nomads use Bulgaria\'s low cost of living as a long-term base under a standard residence permit. Bulgaria is expected to join Schengen which will simplify movement.',
      sources: [
        { label: 'Bulgaria immigration — SAE', url: 'https://www.mvr.bg/en' },
      ],
    },
  },

  // ── Cambodia ───────────────────────────────────────────────────────────────
  'KH': {
    climate: {
      text: 'Cambodia has a tropical monsoon climate with two distinct seasons. The wet season (May–October) brings heavy afternoon rains, high humidity, and temperatures of 28–35°C; the Mekong River and Tonle Sap Lake flood dramatically, sustaining one of the world\'s most productive freshwater fisheries. The dry season (November–April) is hot and sunny, with the hottest period in March–May before the monsoon arrives (temperatures reaching 38–40°C in April). Siem Reap (Angkor Wat) and Phnom Penh experience this full cycle. The coastal provinces (Sihanoukville, Kampot, Kep) are moderated by sea breezes and slightly cooler. Cambodia is flat — there is no mountainous climate variation except in the Cardamom and Elephant Mountains in the southwest.',
      sources: [
        { label: 'Cambodia Meteorological Department', url: 'http://www.cambodiameteo.com' },
        { label: 'Cambodia climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Cambodia#Climate' },
      ],
    },
    lgbtq_orient: {
      text: 'Cambodia never criminalised same-sex relations (unlike most of its colonial-era neighbours). There are no laws against LGBTQ+ people but equally no formal legal recognition of same-sex partnerships. Royal family members have made supportive statements, and same-sex marriage legislation has been discussed at the government level, though not passed as of 2025.',
      sources: [
        { label: 'Cambodia — Equaldex', url: 'https://www.equaldex.com/region/kh' },
        { label: 'ILGA — Cambodia', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'There is no formal legal framework for gender identity recognition in Cambodia. Trans women (often referred to as "srey sros" in Khmer) have some social visibility, particularly in entertainment contexts, but no legal status. Gender-affirming healthcare is not available through the public system.',
      sources: [
        { label: 'Cambodia — Equaldex gender', url: 'https://www.equaldex.com/region/kh' },
      ],
    },
    lgbtq_social: {
      text: 'Cambodia is generally tolerant of LGBTQ+ people in practice — notably more so than its legal framework would suggest. Phnom Penh has LGBTQ+-friendly bars and cafés. The local Buddhist cultural tradition tends toward pragmatic acceptance rather than explicit condemnation. However, social acceptance varies widely — urban areas are significantly more relaxed than rural communities, and the government has shown more conservative tendencies in recent years on "family values" discourse.',
      sources: [
        { label: 'Cambodia — Equaldex social', url: 'https://www.equaldex.com/region/kh' },
        { label: 'RoCK — Rainbow Community Kampuchea', url: 'https://rockcambodia.org' },
      ],
    },
    racial: {
      text: 'Cambodia is approximately 90% Khmer. Ethnic Chinese Cambodians (~5%) have significant economic influence. The Vietnamese minority (Khmer Krom) has historically faced tension and land discrimination. The indigenous hill tribes (Khmer Loeu) in the northeast face land rights issues and marginalisation. Western expats are common and treated with commercial warmth. Black visitors and South Asian visitors may experience more curiosity in rural areas, though hostility is uncommon. Phnom Penh and Siem Reap are well-used to diverse visitors.',
      sources: [
        { label: 'Cambodia human rights — US State Dept.', url: 'https://www.state.gov/reports-bureau-of-democracy-human-rights-and-labor/country-reports-on-human-rights-practices/' },
      ],
    },
    safety: {
      text: 'Cambodia is generally safe for tourists and expats in main cities and tourist areas. The most common risks are grab-and-snatch theft (phone or bag theft from motorbikes or tuk-tuks) in Phnom Penh and Siem Reap. Landmines remain a hazard in some rural and northwestern areas near the Thai border — never walk off marked paths outside major population centres. Traffic is chaotic. The political environment under Hun Manet (following Hun Sen) remains authoritarian, and political criticism carries legal risk.',
      sources: [
        { label: 'Cambodia crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Cambodia' },
        { label: 'Cambodia Landmine Monitor', url: 'https://www.cmac.gov.kh' },
      ],
    },
    healthcare: {
      text: 'Healthcare in Cambodia is improving but limited, particularly outside Phnom Penh. The best options for expats are private international clinics in Phnom Penh: Royal Phnom Penh Hospital, Calmette Hospital (French), and Raffles Medical. Public hospitals are underfunded. Medical evacuation to Bangkok (Thailand) is the standard approach for serious or complex conditions. Medical evacuation insurance is essential.',
      sources: [
        { label: 'WHO — Cambodia health profile', url: 'https://www.who.int/countries/khm/' },
      ],
    },
    cost_value: {
      text: 'Cambodia is one of Asia\'s most affordable countries. Phnom Penh and Siem Reap offer excellent value — comfortable apartments, local food, and transport are very cheap. Even Western-style restaurants and expat-oriented services are inexpensive by any international standard. The Cambodian riel circulates alongside the US dollar, which is widely accepted.',
      sources: [
        { label: 'Cambodia cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Cambodia' },
      ],
    },
    visa: {
      text: 'Cambodia offers an e-visa for most nationalities (USD 30, single entry, 30 days). Business visas are available on arrival or online and can be extended indefinitely through visa agents (monthly fee) — many long-term expats live on rolling business visa extensions. There is no formal digital nomad visa. ASEAN nationals have easier access. The government has discussed a retirement visa but no formal programme exists as of 2025.',
      sources: [
        { label: 'Cambodia e-visa — official portal', url: 'https://www.evisa.gov.kh' },
        { label: 'Cambodia immigration', url: 'https://www.immigration.gov.kh' },
      ],
    },
  },

  // ── Canada ─────────────────────────────────────────────────────────────────
  'CA': {
    climate: {
      text: 'Canada has one of the world\'s most varied climates. Vancouver and Victoria (British Columbia coast) enjoy a mild oceanic climate: rainy, grey winters (3–8°C, rarely snowing in the city) and warm dry summers (22–28°C) — the most temperate major city in Canada. Toronto and the Golden Horseshoe have a humid continental climate: cold snowy winters (-5°C average January, cold snaps to -20°C), hot humid summers (27°C+). Montreal is similar but harsher in winter with heavier snow. Calgary has a continental climate with famous "chinooks" — sudden warm winds in winter that can push temperatures from -20°C to +15°C in hours. Prairie cities (Winnipeg, Saskatoon, Regina) experience extreme continental temperatures: bitterly cold winters (-20 to -35°C) and hot dry summers (30°C+). Halifax and Maritime provinces have Atlantic weather: cold snowy winters, cool foggy summers. Northern Canada (above 60°N) has subarctic and arctic climates — permafrost, months of darkness, brief warm summers. Most immigrants settle in Vancouver, Toronto, Montreal, Calgary, or Ottawa.',
      sources: [
        { label: 'Environment and Climate Change Canada', url: 'https://www.canada.ca/en/environment-climate-change.html' },
        { label: 'Canada climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Canada' },
      ],
    },
    lgbtq_orient: {
      text: 'Canada legalised same-sex marriage nationwide in July 2005, among the first countries in the world to do so. Federal anti-discrimination legislation (the Canadian Human Rights Act and Criminal Code) comprehensively covers sexual orientation. LGBTQ+ people have served openly in the military since 1992. Adoption rights are equal across all provinces. Canada is consistently ranked among the world\'s most legally inclusive countries for LGBTQ+ rights.',
      sources: [
        { label: 'Canada — Equaldex', url: 'https://www.equaldex.com/region/ca' },
        { label: 'Canadian Human Rights Act', url: 'https://laws-lois.justice.gc.ca/eng/acts/H-6/' },
      ],
    },
    lgbtq_gender: {
      text: 'Canada has comprehensive trans rights at the federal and provincial levels. The Canadian Human Rights Act was amended in 2017 to include gender identity and gender expression as protected grounds. Federal passports have offered an "X" gender marker since 2017. Provincial laws vary slightly but all allow legal gender change. Access to gender-affirming healthcare is covered by provincial health plans, though waiting lists vary by province.',
      sources: [
        { label: 'Canada — Equaldex gender', url: 'https://www.equaldex.com/region/ca' },
        { label: 'TGEU — Canada', url: 'https://tgeu.org/country/canada/' },
      ],
    },
    lgbtq_social: {
      text: 'Canada has a strong and visible LGBTQ+ culture. Toronto\'s Church-Wellesley Village is one of North America\'s largest gay villages. Vancouver\'s Davie Village, Montreal\'s Le Village, and Ottawa\'s Bank Street are established LGBTQ+ districts. WorldPride has been held in Toronto twice (2014, 2025). Social acceptance is very high in major cities and most suburban areas. Some rural communities and certain religious communities are more conservative. First Nations peoples have their own diverse traditions around gender (Two-Spirit) that are distinct from mainstream LGBTQ+ discourse.',
      sources: [
        { label: 'Pride Toronto', url: 'https://www.pridetoronto.com' },
        { label: 'Canada — Equaldex social', url: 'https://www.equaldex.com/region/ca' },
      ],
    },
    racial: {
      text: 'Canada is officially multicultural, with about 26% of the population being foreign-born — the highest proportion among G7 countries. South Asians are the largest visible minority (~5.1%), particularly in Greater Toronto (Brampton, Mississauga) and Metro Vancouver (Surrey). East Asians are a major community in Vancouver and Richmond. The experience of people of colour varies significantly by city and neighbourhood. Indigenous peoples (First Nations, Métis, Inuit, ~5% of population) face deep structural inequalities — the Truth and Reconciliation Commission documented centuries of harms, and systemic issues continue in housing, health, and justice. Anti-Black racism is documented in policing, housing, and employment in major cities. Anti-Asian hate crimes increased visibly during COVID-19. Microaggressions are a common experience for most non-white Canadians, even in major cities. Canada is genuinely diverse in daily life but racism — systemic and interpersonal — persists.',
      sources: [
        { label: 'Canadian Race Relations Foundation', url: 'https://www.crrf-fcrr.ca' },
        { label: 'Statistics Canada — diversity data', url: 'https://www.statcan.gc.ca/en/subjects-start/immigration_and_ethnocultural_diversity' },
      ],
    },
    safety: {
      text: 'Canada is very safe by global standards, with low violent crime rates compared to the US. Gun violence, while lower than the US, has risen in some cities (Toronto, Surrey). Property crime and vehicle theft have increased in some urban areas. Indigenous communities experience disproportionately high crime rates alongside underfunded policing and justice resources. Natural hazards include winter driving conditions, wildfires (increasingly severe in BC, Alberta, and Ontario), and flooding.',
      sources: [
        { label: 'Canada crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Canada' },
        { label: 'Global Peace Index — Canada', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Canada\'s Medicare system provides universal public healthcare to citizens and permanent residents, administered provincially. GP visits and hospital treatment are free at point of use. Waiting times for specialist care and elective procedures can be significant (weeks to months). Dental and vision care are not universally covered — some provinces are expanding dental coverage. Temporary residents and visitors must have private health insurance. Prescription drug coverage varies by province.',
      sources: [
        { label: 'Health Canada', url: 'https://www.canada.ca/en/health-canada.html' },
        { label: 'Canada healthcare — Numbeo', url: 'https://www.numbeo.com/health-care/country_result.jsp?country=Canada' },
      ],
    },
    cost_value: {
      text: 'Canada has become increasingly expensive, with Vancouver and Toronto ranking among the world\'s least affordable housing markets — a home ownership crisis affects many residents. Groceries and dining are moderately expensive. Wages are high for formal workers in major industries. Edmonton, Calgary, and Halifax offer better housing value than Vancouver or Toronto. The quality of life outside the cost-of-living pressure is high — excellent public services, clean cities, and strong social infrastructure.',
      sources: [
        { label: 'Canada cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Canada' },
        { label: 'Demographia housing affordability survey', url: 'https://www.demographia.com/dhi.pdf' },
      ],
    },
    visa: {
      text: 'Canada has a points-based Express Entry immigration system for skilled workers. Provincial Nominee Programs (PNPs) offer additional pathways. The International Experience Canada (IEC) Working Holiday visa is available for 18–35 year olds from eligible countries, with up to 2 years work authorisation. Start-Up Visa for entrepreneurs. Spousal sponsorship. Canada recently launched a Digital Nomad initiative allowing some remote workers to extend stays. Processing times for permanent residency can be 1–3 years. Canada does not make immigration straightforward for those without specific qualifications.',
      sources: [
        { label: 'IRCC — Canada immigration', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
        { label: 'Express Entry — Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html' },
      ],
    },
  },

  // ── Cape Verde ─────────────────────────────────────────────────────────────
  'CV': {
    climate: {
      text: 'Cape Verde is an Atlantic archipelago of 10 islands with a subtropical semi-arid climate. Temperatures are stable year-round: 22–29°C, moderated by the constant northeast trade winds (alísios). There are two seasons: a dry season (December–June) and a slightly wetter season (July–November). Rainfall is scarce — Santiago (capital Praia) and Fogo (volcanic) receive the most rain; Santo Antão has lush valleys fed by mist and altitude. The northern and eastern islands (Sal, Boa Vista, Maio) are drier and flatter, with consistent strong winds that attract kitesurfers and windsurfers. São Vicente (Mindelo) is the cultural hub and is slightly cooler. The dusty Harmattan winds from the Sahara (buia or bruma seca) can reduce visibility and air quality November–February. Sunshine is abundant throughout the year.',
      sources: [
        { label: 'Instituto Nacional de Meteorologia e Geofísica — Cape Verde', url: 'https://www.inmg.gov.cv' },
        { label: 'Cape Verde climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Cape_Verde#Climate' },
      ],
    },
    lgbtq_orient: {
      text: 'Same-sex relations were never criminalised in Cape Verde (since independence from Portugal in 1975). The constitution prohibits discrimination, interpreted to include sexual orientation. There is no formal same-sex civil union or marriage law, but Cape Verde is considered one of the most tolerant and progressive African nations regarding LGBTQ+ rights. The country\'s legal environment is notably more relaxed than most of West Africa.',
      sources: [
        { label: 'Cape Verde — Equaldex', url: 'https://www.equaldex.com/region/cv' },
        { label: 'ILGA — Cape Verde', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'There is limited formal legal framework for gender identity recognition in Cape Verde. The country\'s progressive culture makes it more tolerant than its legal framework might suggest, but formal pathways for trans rights are undeveloped.',
      sources: [
        { label: 'Cape Verde — Equaldex gender', url: 'https://www.equaldex.com/region/cv' },
      ],
    },
    lgbtq_social: {
      text: 'Cape Verde\'s creole (kriolu) culture tends toward pragmatic openness rather than organised conservatism. The islands lack the strongly religious anti-LGBTQ+ movements found on the African mainland. Social attitudes are generally relaxed, particularly in Mindelo (São Vicente), which has a cosmopolitan arts culture, and in tourist areas. Rural areas may be more traditional. There is no formal Pride event, but LGBTQ+ life is relatively low-profile rather than actively suppressed.',
      sources: [
        { label: 'Cape Verde — Equaldex social', url: 'https://www.equaldex.com/region/cv' },
      ],
    },
    racial: {
      text: 'Cape Verde is a proudly creole nation — the population is predominantly of mixed African and Portuguese heritage (mestiço ~71%), alongside Black African (Africanos ~28%) and a small white minority. The identity of being Cape Verdean is inherently bound up with racial mixing and African-Atlantic heritage. There is no systematic anti-Black racism as the country is itself a Black majority creole society. For mixed-race Black/white individuals, Cape Verde may feel particularly affirming due to the centrality of creole identity in the national consciousness. For East Asian or South Asian visitors, you may attract curiosity.',
      sources: [
        { label: 'Cape Verde demographics — Wikipedia', url: 'https://en.wikipedia.org/wiki/Demographics_of_Cape_Verde' },
      ],
    },
    safety: {
      text: 'Cape Verde is one of Africa\'s safest countries. Crime is generally low; some petty theft in tourist areas of Sal (Santa Maria), Praia, and Mindelo is reported. There is no significant political violence or instability. The country has maintained multiparty democracy since 1991. Natural hazards: Fogo volcano is active (last major eruption 2014–2015) and sea conditions around the islands can be treacherous.',
      sources: [
        { label: 'Cape Verde crime — Numbeo', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Cape+Verde' },
        { label: 'Global Peace Index — Cape Verde', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Healthcare facilities are limited compared to European standards. The main hospitals are Hospital Agostinho Neto in Praia (Santiago) and Hospital Baptista de Sousa in Mindelo. Outer islands have basic health centres. Serious and complex cases are evacuated to Lisbon (Portugal) or the Canary Islands (Spain). Private travel/health insurance is important for expats. Malaria is not present in Cape Verde (eradicated), but dengue fever is a risk.',
      sources: [
        { label: 'WHO — Cape Verde health profile', url: 'https://www.who.int/countries/cpv/' },
      ],
    },
    cost_value: {
      text: 'Cape Verde offers moderate value — cheaper than mainland Portugal or Spain but more expensive than mainland West Africa. Tourist island prices (Sal, Boa Vista) are higher than non-tourist islands. Santiago (Praia) and São Vicente (Mindelo) are more affordable for daily living. The currency (Cape Verdean escudo) is pegged to the euro at a fixed rate, providing stability. Local markets, local restaurants (especially cachupa stew), and domestic transport are affordable.',
      sources: [
        { label: 'Cape Verde cost of living — Numbeo', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Cape+Verde' },
      ],
    },
    visa: {
      text: 'Cape Verde has a Digital Nomad Remote Working Programme — a visa designed for remote workers allowing a 6-month stay (renewable). EU and many other nationals can visit Cape Verde for up to 30 days without a visa. ECOWAS nationals have easier movement rights. Long-term residency is available through work permits and investment. The digital nomad visa requires proof of remote income and health insurance.',
      sources: [
        { label: 'Cape Verde Digital Nomad Visa', url: 'https://www.caboverde-remote.cv' },
        { label: 'Cape Verde immigration — DGRNI', url: 'https://www.dgrni.gov.cv' },
      ],
    },
  },

};

// ── Helper: get detail text for a country / dimension ──────────────────────
export function getDetail(countryCode, dimension, score) {
  const country = COUNTRY_DETAILS[countryCode];
  if (country && country[dimension] && country[dimension].text) {
    return country[dimension].text;
  }
  return getFallbackText(dimension, score);
}

// ── Helper: get sources for a country / dimension ──────────────────────────
export function getSources(countryCode, dimension) {
  const country = COUNTRY_DETAILS[countryCode];
  const specific = (country && country[dimension] && country[dimension].sources) || [];
  const standard = STANDARD_SOURCES[dimension] || [];
  // Deduplicate by URL
  const seen = new Set();
  return [...specific, ...standard].filter(s => {
    if (seen.has(s.url)) return false;
    seen.add(s.url);
    return true;
  });
}

// ── Fallback text by score range ───────────────────────────────────────────
function getFallbackText(dimension, score) {
  const level = score >= 75 ? 'high' : score >= 55 ? 'medium' : score >= 35 ? 'low' : 'very low';

  const fallbacks = {
    climate: {
      high: 'This country\'s climate closely matches your preferences for temperature and sunshine.',
      medium: 'This country\'s climate is a reasonable match for your preferences, with some variation from your ideal.',
      low: 'This country\'s climate differs notably from your preferences — consider the seasonal variation before committing.',
      'very low': 'This country\'s climate is a poor match for your stated preferences. Temperature or sunshine levels may be significantly outside your comfort range.',
    },
    lgbtq_orient: {
      high: 'This country has strong legal protections for LGBTQ+ people based on sexual orientation, including partnership or marriage recognition and anti-discrimination law.',
      medium: 'This country has some legal protections for LGBTQ+ people, though the framework may be incomplete. Same-sex relations are legal but full equality may not yet be achieved.',
      low: 'Legal protections are limited. Same-sex relations may be legal but there is little formal anti-discrimination protection and no partnership recognition.',
      'very low': 'LGBTQ+ legal protections are very limited or absent. Exercise caution and check current conditions before travelling or relocating.',
    },
    lgbtq_gender: {
      high: 'This country has progressive legal gender recognition, including self-declaration pathways and good access to gender-affirming healthcare.',
      medium: 'Some legal recognition for trans and non-binary people exists, though the process may require medical involvement or carry limitations.',
      low: 'Legal gender recognition is limited or bureaucratically difficult. Trans people face significant legal and practical hurdles.',
      'very low': 'Very little or no legal gender recognition exists. Trans people are largely invisible in law and may face significant discrimination.',
    },
    lgbtq_social: {
      high: 'LGBTQ+ people are broadly accepted and visible in daily social life. Public same-sex affection is normal and Pride culture is established.',
      medium: 'Social acceptance is moderate. Urban areas tend to be more accepting; rural and traditional communities may be less so. Discretion may be advisable outside major cities.',
      low: 'Social acceptance is low. LGBTQ+ people generally live privately and public visibility carries risk. Significant conservative religious or cultural opposition exists.',
      'very low': 'Social acceptance is very low. LGBTQ+ people face widespread discrimination and hostility. Public visibility is strongly inadvisable.',
    },
    racial: {
      high: 'Based on reported experiences and diversity research, people of your racial background generally find this country welcoming and inclusive.',
      medium: 'Experiences for people of your racial background are mixed. Some discrimination exists but it is not the dominant experience in most situations.',
      low: 'People of your racial background may face notable discrimination or social challenges in this country. Harassment, though not universal, is reported by many.',
      'very low': 'Significant racial discrimination is reported for people of your background. This country has a poor track record for racial inclusion for this group.',
    },
    safety: {
      high: 'This country ranks among the world\'s safest, with very low violent crime rates and strong political stability.',
      medium: 'Safety is reasonable but not exceptional. Exercise normal urban awareness — petty crime and some areas of concern exist.',
      low: 'Crime rates are elevated, with some risk of violent crime in certain areas. Research specific neighbourhoods and take active precautions.',
      'very low': 'Serious safety concerns exist — high crime rates, political instability, or active conflict. Carefully research current conditions.',
    },
    healthcare: {
      high: 'Excellent healthcare system with universal coverage, high quality of care, and good access for residents and expats.',
      medium: 'Reasonable healthcare quality, though public provision may be uneven. Private health insurance is recommended for expats.',
      low: 'Healthcare quality and coverage are limited. Private clinics in major cities are better than the public system. Travel insurance with evacuation cover is strongly advised.',
      'very low': 'Very limited healthcare infrastructure. Medical evacuation insurance is essential. Do not rely on local facilities for serious conditions.',
    },
    cost_value: {
      high: 'Excellent value for money — a high quality of life is achievable at low cost. Particularly attractive for those earning in stronger currencies.',
      medium: 'Reasonable value. Costs are moderate — not a bargain destination, but not prohibitively expensive.',
      low: 'Cost of living is relatively high compared to what\'s on offer. Budget carefully for housing in particular.',
      'very low': 'Very high cost of living relative to quality or income levels. This country is expensive even by international standards.',
    },
    visa: {
      high: 'Strong visa and residency options available, including dedicated remote worker or digital nomad visas. Relatively accessible for most nationalities.',
      medium: 'Reasonable visa options available, including longer-stay possibilities, though dedicated remote work visas may not exist.',
      low: 'Limited visa pathways for long-term stays. Work permits may be difficult to obtain and bureaucratic processes can be slow.',
      'very low': 'Very limited visa access. Long-term residency is difficult and restricted. Processes are often complex, slow, or opaque.',
    },
  };

  return (fallbacks[dimension] && fallbacks[dimension][level]) ||
    'No specific detail is available for this country and dimension. Check the sources below for more information.';
}
