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

  // ── Chile ──────────────────────────────────────────────────────────────────
  'CL': {
    climate: {
      text: 'Chile\'s climate varies dramatically across its 4,300 km length. The north (Atacama) is the driest desert on Earth — virtually no rainfall, intense sun, and extreme temperature swings between day and night. The centre around Santiago has a Mediterranean climate: warm dry summers (28–32°C) and mild wet winters, with over 2,800 sunshine hours per year. The Lake District and Patagonia in the south are cool, rainy, and windy year-round, with temperatures rarely exceeding 18°C. The coast is cooler than inland at every latitude due to the cold Humboldt Current.',
      sources: [
        { label: 'Chile climate — World Weather Online', url: 'https://www.worldweatheronline.com/chile-weather/cl.aspx' },
        { label: 'Climate of Chile — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Chile' },
      ],
    },
    lgbtq_orient: {
      text: 'Chile legalised same-sex marriage in March 2022, making it one of the most progressive countries in Latin America on LGBTQ+ legal rights. Same-sex couples can marry, adopt, and access the same legal rights as opposite-sex couples. Anti-discrimination law covers sexual orientation in employment and services. Civil unions had been available since 2015. Santiago has a visible, established LGBTQ+ scene, particularly in the Bellavista neighbourhood.',
      sources: [
        { label: 'Chile — Equaldex', url: 'https://www.equaldex.com/region/chile' },
        { label: 'Chile same-sex marriage — BBC News', url: 'https://www.bbc.com/news/world-latin-america-60101881' },
      ],
    },
    lgbtq_gender: {
      text: 'Chile passed a Gender Identity Law in 2018 allowing adults (and minors with parental consent) to legally change their name and gender marker through a civil registry process, without requiring surgery or medical diagnosis. Gender-affirming healthcare is available through both public and private providers, though waiting times in the public system are long. Non-binary identities are not yet formally recognised in law.',
      sources: [
        { label: 'Chile gender identity law — TGEU', url: 'https://transrightsmap.tgeu.org/home/' },
        { label: 'Ley de Identidad de Género — MOVILH', url: 'https://www.movilh.cl' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance has improved considerably in recent years, particularly among younger Chileans and in Santiago. A 2023 Equaldex survey placed Chilean public opinion as moderately accepting. Outside major cities — particularly in rural and heavily Catholic communities — attitudes can be more conservative. Same-sex couples are generally visible in Santiago without issue; the annual Marcha por la Diversidad draws large crowds. Patagonian and northern mining towns are less accepting.',
      sources: [
        { label: 'Chile social attitudes — Equaldex', url: 'https://www.equaldex.com/region/chile' },
        { label: 'MOVILH annual human rights report', url: 'https://www.movilh.cl/documentacion/' },
      ],
    },
    racial: {
      text: 'Chile\'s population is predominantly mestizo (mixed European and Indigenous) with a significant white European-descent minority. The country is less racially diverse than many of its neighbours. Indigenous Mapuche people face discrimination, particularly in the south where land conflicts persist. Black and mixed-race people are a small minority and may attract curiosity or occasional prejudice, though overt racism is less common than in some other Latin American countries. Asian people (particularly Korean and Chinese communities) are established in Santiago.',
      sources: [
        { label: 'Chile human rights report — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/chile/' },
        { label: 'INDH — Instituto Nacional de Derechos Humanos', url: 'https://www.indh.cl' },
      ],
    },
    safety: {
      text: 'Chile is among the safer countries in Latin America, though crime has increased in recent years. Santiago\'s wealthier eastern districts (Providencia, Las Condes, Vitacura) are very safe by regional standards. The city centre and some peripheral neighbourhoods have higher rates of petty theft and robberies. Street protests (related to ongoing political tensions since 2019) can occasionally affect travel. Valparaíso has higher crime than Santiago. The south of Chile is very safe. Femicide and gender-based violence remain concerns across Latin America.',
      sources: [
        { label: 'Chile — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Chile', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Chile' },
      ],
    },
    healthcare: {
      text: 'Chile has a dual healthcare system: the public FONASA scheme covers most residents, while ISAPRE private insurance plans offer faster and higher-quality care. The public system is functional but can involve long waits. Santiago\'s private clinics (Clínica Las Condes, Clínica Alemana) are among the best in Latin America. Outside the capital, quality drops noticeably. Expats are strongly advised to take out private health insurance. Mental health provision within the public system is limited.',
      sources: [
        { label: 'WHO Chile health profile', url: 'https://www.who.int/countries/chl/' },
        { label: 'FONASA — public health coverage', url: 'https://www.fonasa.cl' },
      ],
    },
    cost_value: {
      text: 'Santiago is the most expensive city in Latin America for expats, though still affordable compared to Western Europe or North America. Rent for a one-bedroom apartment in a central neighbourhood runs roughly USD 700–1,100/month. Outside Santiago, and particularly in smaller cities like Valdivia, La Serena, or Temuco, costs fall substantially. Eating out is affordable, and local markets are cheap. Imported goods are expensive due to taxes. Overall, Chile offers reasonable value given its infrastructure quality and safety by regional standards.',
      sources: [
        { label: 'Numbeo — cost of living in Chile', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Chile' },
        { label: 'Expatistan — Santiago cost of living', url: 'https://www.expatistan.com/cost-of-living/santiago' },
      ],
    },
    visa: {
      text: 'Chile is one of the easier Latin American countries to relocate to. EU, US, UK, Canadian, and Australian citizens can enter visa-free and stay up to 90 days. A Temporary Residence Visa is available for those with income or job offers, and a Rentista visa exists for those with passive income. Chile introduced a Digital Nomad Visa in 2023 for remote workers. Permanent residency is available after one year of temporary residence. The process is bureaucratic but manageable.',
      sources: [
        { label: 'Chile immigration — Extranjería', url: 'https://extranjeria.gob.cl' },
        { label: 'Chile Digital Nomad Visa', url: 'https://www.chileatiende.gob.cl' },
      ],
    },
  },

  // ── China ──────────────────────────────────────────────────────────────────
  'CN': {
    climate: {
      text: 'China\'s climate varies enormously across its vast territory. The northeast (Harbin, Beijing) has a harsh continental climate — bitterly cold winters (down to −20°C) and hot humid summers. Shanghai and the Yangtze Delta are humid subtropical: hot muggy summers (35°C+) and cool winters with occasional frost. Southern China (Guangzhou, Shenzhen, Hainan) is tropical and warm year-round, with a wet monsoon season May–September. The southwest (Yunnan, Chengdu) has milder climates with less extreme seasons. The northwest (Xinjiang, Tibet) is arid and extreme.',
      sources: [
        { label: 'Climate of China — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_China' },
        { label: 'China weather guide — World Weather Online', url: 'https://www.worldweatheronline.com/china-weather/cn.aspx' },
      ],
    },
    lgbtq_orient: {
      text: 'Same-sex relations were decriminalised in China in 1997 and removed from the official classification of mental disorders in 2001. However, no legal recognition exists for same-sex partnerships or marriage, and there is no national anti-discrimination law covering sexual orientation. The legal landscape has not advanced in over two decades and has arguably regressed — LGBTQ+ events, apps, and social media accounts face increasing censorship and restrictions. Openly operating LGBTQ+ organisations have been shut down.',
      sources: [
        { label: 'China — Equaldex', url: 'https://www.equaldex.com/region/china' },
        { label: 'ILGA World — China', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in China requires surgery and sterilisation, making it inaccessible or undesirable for many trans people. There is no self-declaration pathway. Gender-affirming surgeries are available in major cities through specialist hospitals but access is complicated by the legal requirements. Non-binary identities have no recognition in law. Trans people in China face significant legal and social barriers.',
      sources: [
        { label: 'TGEU — Trans rights map', url: 'https://transrightsmap.tgeu.org' },
        { label: 'China trans rights — ILGA World', url: 'https://ilga.org/trans-legal-mapping-report' },
      ],
    },
    lgbtq_social: {
      text: 'Social attitudes toward LGBTQ+ people in China are mixed and increasingly constrained by government policy. Major cities — particularly Shanghai, Beijing, and Chengdu — had relatively open LGBTQ+ bar and community scenes until a crackdown in the late 2010s. Pride events have been banned or cancelled under government pressure since 2019. Younger urban Chinese tend to be more accepting than older or rural populations, but the political environment now actively suppresses LGBTQ+ visibility. Discretion is strongly advisable.',
      sources: [
        { label: 'China LGBTQ+ crackdown — Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/china' },
        { label: 'Equaldex — China social acceptance', url: 'https://www.equaldex.com/region/china' },
      ],
    },
    racial: {
      text: 'China is ethnically dominated by Han Chinese (over 90% of the population). Foreign nationals — especially Black and dark-skinned people — can face significant racism, ranging from excessive curiosity and staring to overt discrimination in housing, employment, and entry to venues. Reports of anti-African sentiment have been documented, particularly following the COVID-19 pandemic when African nationals in Guangzhou faced evictions and discriminatory treatment. White Westerners generally experience more positive treatment but are still visibly "othered". South and Southeast Asian people face mixed experiences.',
      sources: [
        { label: 'Human Rights Watch — China 2024 report', url: 'https://www.hrw.org/world-report/2024/country-chapters/china' },
        { label: 'Anti-African discrimination in China — BBC', url: 'https://www.bbc.com/news/world-africa-52264740' },
      ],
    },
    safety: {
      text: 'China has very low rates of street crime and violent crime for its size. The country scores well on conventional crime metrics — robbery, assault, and murder rates are low. However, this must be weighed against a deeply surveillance-heavy environment: CCTV, facial recognition, and digital monitoring are pervasive. Political speech and activism are tightly controlled. Foreign nationals are occasionally detained for activities that would not be criminal elsewhere. The situation in Xinjiang, Tibet, and Hong Kong involves heightened political risk.',
      sources: [
        { label: 'China — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'China travel advisory — UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/china' },
      ],
    },
    healthcare: {
      text: 'China has a tiered healthcare system. Major international hospitals and top-tier public hospitals in Beijing and Shanghai provide high-quality care, often with English-speaking staff. Outside the major cities, quality drops considerably. The public system is accessible but crowded and underfunded in rural areas. International health insurance is strongly recommended for expats, covering treatment at private/international hospitals. Costs are moderate by Western standards in the private sector.',
      sources: [
        { label: 'WHO China health profile', url: 'https://www.who.int/countries/chn/' },
        { label: 'Healthcare in China — InterNations guide', url: 'https://www.internations.org/go/moving-to-china/healthcare' },
      ],
    },
    cost_value: {
      text: 'Costs vary widely by city. Shanghai and Beijing are expensive by Asian standards — comparable to mid-range European cities for rent and dining out. Tier-2 cities (Chengdu, Hangzhou, Xi\'an) are significantly cheaper. Locally produced food, public transport, and domestic goods are inexpensive. Imported products carry heavy tariffs and are costly. A comfortable expat life in Shanghai might cost USD 2,500–4,000/month; in a smaller city, half that is achievable.',
      sources: [
        { label: 'Numbeo — cost of living in China', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=China' },
        { label: 'Expatistan — Shanghai cost of living', url: 'https://www.expatistan.com/cost-of-living/shanghai' },
      ],
    },
    visa: {
      text: 'China has historically had limited visa options for long-term stays outside of employment. Work visas require employer sponsorship. A 10-year tourist visa (M or L type) is available for some nationalities but typically allows stays of only 30–90 days per entry. China introduced a new 144-hour visa-free transit policy for many nationalities in some cities. Permanent residency (the "Chinese Green Card") is granted sparingly and is very difficult to obtain. VPN usage is technically illegal, which affects everyday internet access for foreign nationals.',
      sources: [
        { label: 'China visa information — MOFCOM', url: 'http://www.mofcom.gov.cn' },
        { label: 'China visa guide — Visaguide.world', url: 'https://visaguide.world/asia/china-visa/' },
      ],
    },
  },

  // ── Colombia ───────────────────────────────────────────────────────────────
  'CO': {
    climate: {
      text: 'Colombia sits on the equator, but altitude determines climate more than season. Bogotá, at 2,600 m, is cool and overcast year-round (14–19°C) with two rainy seasons. Medellín, at 1,500 m, earns its nickname "City of Eternal Spring" — pleasant 22–28°C temperatures throughout the year. The Caribbean coast (Cartagena, Santa Marta) is hot and tropical (28–34°C) with a clear dry season December–April. The Pacific coast is one of the wettest places on Earth. The Amazon lowlands (Leticia) are hot and humid. Most expats settle in Bogotá, Medellín, or the coffee region.',
      sources: [
        { label: 'Climate of Colombia — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Colombia' },
        { label: 'Colombia weather — World Weather Online', url: 'https://www.worldweatheronline.com/colombia-weather/co.aspx' },
      ],
    },
    lgbtq_orient: {
      text: 'Colombia was a pioneer in Latin American LGBTQ+ rights. The Constitutional Court progressively expanded rights, and same-sex marriage was fully legalised in 2016. Same-sex couples can adopt, and anti-discrimination protections covering sexual orientation exist in law. Bogotá and Medellín have well-established LGBTQ+ communities and annual Pride events. The legal framework is strong; Bogotá\'s Chapinero neighbourhood is one of Latin America\'s most prominent LGBTQ+ districts.',
      sources: [
        { label: 'Colombia — Equaldex', url: 'https://www.equaldex.com/region/colombia' },
        { label: 'Colombia LGBTQ+ rights — Colombia Diversa', url: 'https://colombiadiversa.org' },
      ],
    },
    lgbtq_gender: {
      text: 'Colombia allows legal gender marker changes through a notarial declaration — no surgery or medical requirements are needed — making it one of the more progressive countries in the region. The process is relatively straightforward. Gender-affirming healthcare is available through EPS (public health system) following court rulings, though accessing it in practice can require legal advocacy. Non-binary legal recognition has been advancing through court cases.',
      sources: [
        { label: 'TGEU — Trans rights Colombia', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Gender recognition — Colombia Diversa', url: 'https://colombiadiversa.org' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance varies sharply by city and region. Bogotá and Medellín are relatively open and have large visible LGBTQ+ communities. Smaller cities, rural areas, and regions under influence of conservative Catholic or evangelical communities, as well as areas with paramilitary presence, are far less accepting. LGBTQ+ people — particularly trans women — face serious risks of violence in certain areas, especially outside major urban centres. Visibility in Bogotá and Medellín is broadly safe; elsewhere, local knowledge is essential.',
      sources: [
        { label: 'Colombia LGBTQ+ safety — Equaldex', url: 'https://www.equaldex.com/region/colombia' },
        { label: 'Colombia human rights — Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/colombia' },
      ],
    },
    racial: {
      text: 'Colombia is ethnically diverse with a large mestizo majority, significant Afro-Colombian (roughly 10%), indigenous, and small white populations. Afro-Colombians face significant structural inequality — concentrated in the Pacific coast (Chocó, Buenaventura) which are among the poorest and most violence-affected regions. In major cities, visible racism exists but is often more socioeconomic in nature. Black foreign visitors generally find Bogotá and Medellín manageable, though stares and curiosity are common in less cosmopolitan areas. The Caribbean coast, with its own African heritage, is more racially relaxed.',
      sources: [
        { label: 'Afro-Colombia — Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/colombia' },
        { label: 'Colombia human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/colombia/' },
      ],
    },
    safety: {
      text: 'Colombia\'s security situation has improved dramatically since the early 2000s but remains uneven. Bogotá and Medellín are broadly safe in residential and tourist areas, though petty theft, scopolamine drugging, and express kidnapping remain risks, especially at night. Some city districts and rural regions — particularly along drug trafficking routes (Cali\'s outskirts, Cauca, Chocó, parts of the Pacific coast and Venezuelan border) — carry serious risk. The 2016 peace deal with FARC reduced violence significantly, but armed group activity continues in some regions. Most expats in major cities live safely with standard urban precautions.',
      sources: [
        { label: 'Colombia — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Colombia travel advice — UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/colombia' },
      ],
    },
    healthcare: {
      text: 'Colombia has one of the better healthcare systems in Latin America, with both public (EPS) and private (prepagada) options. Bogotá and Medellín have excellent private hospitals and clinics with internationally trained doctors, often at a fraction of North American costs. The public system provides universal coverage but quality and waiting times vary. For expats, private insurance (around USD 100–250/month) is affordable and provides access to top facilities. Medical tourism is well established — dental and cosmetic care in particular are popular with visitors.',
      sources: [
        { label: 'WHO Colombia health profile', url: 'https://www.who.int/countries/col/' },
        { label: 'Healthcare in Colombia — InterNations', url: 'https://www.internations.org/go/moving-to-colombia/healthcare' },
      ],
    },
    cost_value: {
      text: 'Colombia offers excellent value, particularly in Medellín which has become one of the most popular expat cities in the world. A comfortable one-bedroom apartment in El Poblado (Medellín) runs around USD 500–900/month. Bogotá is slightly more expensive but still affordable by international standards. Eating out is very cheap — a full local meal for USD 3–5 is normal. Coffee, fruit, and local food are extremely affordable. Imported goods and electronics carry significant taxes. The strong US dollar and euro give foreign earners considerable purchasing power.',
      sources: [
        { label: 'Numbeo — cost of living in Colombia', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Colombia' },
        { label: 'Expatistan — Medellín cost of living', url: 'https://www.expatistan.com/cost-of-living/medellin' },
      ],
    },
    visa: {
      text: 'Colombia offers flexible visa options that have made it a top expat destination. Most Western nationalities can visit visa-free for 90 days (extendable to 180 days per year). The Migrant Visa (M) category covers digital nomads, retirees, and those with passive income. A Digital Nomad Visa introduced in 2022 allows stays of up to 2 years for remote workers earning above a threshold. The Resident Visa (R) is available after 2–5 years. The process is manageable, largely online, and Colombia actively welcomes foreign residents.',
      sources: [
        { label: 'Colombia visas — Migración Colombia', url: 'https://www.migracioncolombia.gov.co' },
        { label: 'Colombia Digital Nomad Visa guide', url: 'https://visaguide.world/south-america/colombia-visa/' },
      ],
    },
  },

  // ── Costa Rica ─────────────────────────────────────────────────────────────
  'CR': {
    climate: {
      text: 'Costa Rica is tropical but altitude and coast create distinct microclimates. The Central Valley (San José, Cartago, Heredia, Alajuela) sits at 1,000–1,500 m and enjoys a pleasant 20–26°C year-round, considered one of the best climates in the world for living. The Pacific coast (Guanacaste, Manuel Antonio) has a clear dry season November–April and a lush green season May–October with high heat. The Caribbean coast (Puerto Viejo, Tortuguero) has rain year-round, is more humid, and has no true dry season. The mountains can be cool and misty.',
      sources: [
        { label: 'Costa Rica climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Costa_Rica' },
        { label: 'Costa Rica weather guide', url: 'https://www.weather-atlas.com/en/costa-rica' },
      ],
    },
    lgbtq_orient: {
      text: 'Costa Rica legalised same-sex marriage in May 2020, becoming the first Central American country to do so, following a ruling by the Inter-American Court of Human Rights and a Supreme Court order. Same-sex couples have equal marriage rights, and the country has anti-discrimination protections in employment. San José has an established LGBTQ+ scene. Costa Rica is considered the most LGBTQ+-friendly country in Central America by a significant margin.',
      sources: [
        { label: 'Costa Rica — Equaldex', url: 'https://www.equaldex.com/region/costa-rica' },
        { label: 'Costa Rica same-sex marriage — BBC', url: 'https://www.bbc.com/news/world-latin-america-52533539' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in Costa Rica has been advancing through court orders. A 2018 Inter-American Court ruling required the state to allow gender marker changes. The process now allows for administrative change without surgery requirements, though implementation can be slow. Gender-affirming healthcare is available through the public CCSS system following court rulings, though access in practice requires persistence. Acceptance of trans and non-binary people in daily life lags behind the legal framework.',
      sources: [
        { label: 'TGEU — trans rights Costa Rica', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Letra S — Costa Rica LGBTQ news', url: 'https://www.letraese.org' },
      ],
    },
    lgbtq_social: {
      text: 'Costa Rica is more socially accepting of LGBTQ+ people than its Central American neighbours, but significant conservative Catholic and evangelical influence means acceptance is uneven. San José and tourist-heavy areas (Manuel Antonio, Tamarindo, Jacó) are openly welcoming. Rural and highland communities tend to be more conservative. Visibility in San José and resort areas is broadly fine. Manuel Antonio in particular has a long reputation as a welcoming beach destination for LGBTQ+ visitors.',
      sources: [
        { label: 'Equaldex — Costa Rica', url: 'https://www.equaldex.com/region/costa-rica' },
        { label: 'LGBT travel guide Costa Rica — IGLTA', url: 'https://www.iglta.org' },
      ],
    },
    racial: {
      text: 'Costa Rica\'s population is predominantly white or mestizo, with significant Afro-Costa Rican communities concentrated on the Caribbean coast (Limón province), descendants of Jamaican labourers brought in the 19th century. Indigenous communities make up about 2% of the population and face the greatest marginalisation. Afro-Costa Ricans and Indigenous people face socioeconomic inequality, though overt racism is less virulent than in some neighbouring countries. Black foreign visitors are generally treated respectfully, particularly on the Caribbean coast where Black culture is integral to local identity.',
      sources: [
        { label: 'Costa Rica human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/costa-rica/' },
        { label: 'Afro-Costa Rican culture — Limón province', url: 'https://en.wikipedia.org/wiki/Lim%C3%B3n_Province' },
      ],
    },
    safety: {
      text: 'Costa Rica is the safest country in Central America and ranks well regionally. The core expat zones — the Central Valley, Guanacaste Pacific coast, and Manuel Antonio — are safe for day-to-day living. San José has pockets of higher crime (downtown, La Carpio, some outer districts) where petty theft and muggings occur. The Caribbean coast has had elevated gang-related violence in parts of Limón. Burglaries targeting expat homes are the most common crime type. Road safety is a real concern — accident rates are high due to poor road conditions and driving standards.',
      sources: [
        { label: 'Costa Rica — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Costa Rica crime overview — OIJ', url: 'https://www.poder-judicial.go.cr/oij/' },
      ],
    },
    healthcare: {
      text: 'Costa Rica has the best public healthcare system in Central America, run by the Caja Costarricense de Seguro Social (CCSS). Residents — including legal foreign residents — are required to contribute to and can use the CAJA system. Quality in major CAJA hospitals (Hospital México, Hospital Nacional) is reasonable, though waits are long for non-emergency procedures. Private hospitals (CIMA, Bíblica, Clínica Católica) are excellent and affordable by North American standards, and medical tourism is a major industry. Dental and specialist care attract visitors from across the Americas.',
      sources: [
        { label: 'WHO Costa Rica health profile', url: 'https://www.who.int/countries/cri/' },
        { label: 'CCSS — Costa Rica public healthcare', url: 'https://www.ccss.sa.cr' },
      ],
    },
    cost_value: {
      text: 'Costa Rica is the most expensive country in Central America for expats and costs have risen significantly as the country has become more popular. Rent in the upscale Central Valley suburbs (Santa Ana, Escazú) runs USD 900–1,800/month for a comfortable apartment. The beach zones and smaller mountain towns are cheaper. Locally grown food and eating at sodas (traditional restaurants) is inexpensive. Imported goods, cars, and electronics carry steep import taxes. Overall it is affordable compared to the US or Northern Europe, but not the bargain that some South American countries offer.',
      sources: [
        { label: 'Numbeo — cost of living in Costa Rica', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Costa+Rica' },
        { label: 'Expatistan — San José cost of living', url: 'https://www.expatistan.com/cost-of-living/san-jose--costa-rica' },
      ],
    },
    visa: {
      text: 'Costa Rica is one of the easiest countries in the world to retire to or settle in long-term. Most Western nationals can enter visa-free for up to 90 days. The popular Pensionado (retiree) visa requires proof of a lifetime pension income of at least USD 1,000/month. The Rentista visa requires a guaranteed monthly income of USD 2,500 or a USD 60,000 deposit. A Digital Nomad Visa introduced in 2021 is valid for 1 year (renewable) and requires remote income. Permanent residency is available after 3 years. Costa Rica actively courts foreign retirees and remote workers.',
      sources: [
        { label: 'Costa Rica immigration — DGME', url: 'https://www.migracion.go.cr' },
        { label: 'Costa Rica Digital Nomad Visa guide', url: 'https://visaguide.world/central-america/costa-rica-visa/' },
      ],
    },
  },

  // ── Croatia ────────────────────────────────────────────────────────────────
  'HR': {
    climate: {
      text: 'Croatia has two distinct climate zones. The Dalmatian coast and islands (Dubrovnik, Split, Hvar) enjoy a classic Mediterranean climate: hot dry summers of 28–34°C and warm sunny autumns, with mild wet winters. It is one of the sunniest coastlines in Europe with over 2,700 sunshine hours in Split. Inland Croatia (Zagreb, Slavonia) has a continental climate — hot summers, cold winters with snow, and a larger temperature range. The Istrian peninsula combines Mediterranean coast with cooler inland areas. Most expats and digital nomads settle on the coast.',
      sources: [
        { label: 'Croatia climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Croatia' },
        { label: 'Croatian Meteorological Service', url: 'https://meteo.hr/index_en.php' },
      ],
    },
    lgbtq_orient: {
      text: 'Croatia recognises same-sex civil unions (life partnerships) since 2014, giving most of the same legal rights as marriage, but same-sex marriage is not legally available — the 2013 constitution explicitly defines marriage as between a man and a woman. Adoption by same-sex couples has faced legal challenges. Anti-discrimination law covers sexual orientation. As an EU member since 2013, Croatia is subject to EU equality directives. Zagreb has an active LGBTQ+ scene and Pride (which has faced protest but operates freely). Split Pride has a history of violent opposition from far-right groups.',
      sources: [
        { label: 'Croatia — Equaldex', url: 'https://www.equaldex.com/region/croatia' },
        { label: 'Rainbow Europe — Croatia', url: 'https://rainbowmap.ilga-europe.org/countries/croatia/' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in Croatia requires a medical diagnosis, hormonal treatment, and psychiatric evaluation — surgical requirements were removed from the law in 2014. The process remains medicalised and complex. Non-binary gender recognition does not exist. Gender-affirming healthcare is available through the public system in Zagreb at the University Hospital Rebro, though it is limited in scope and waiting times are long.',
      sources: [
        { label: 'TGEU — trans rights Croatia', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Croatia', url: 'https://rainbowmap.ilga-europe.org/countries/croatia/' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance is mixed and divided along urban/rural and generational lines. Zagreb has a visible, established LGBTQ+ scene and Pride is well attended. The Croatian coast has become increasingly LGBTQ+ welcoming for tourists — Hvar and Dubrovnik are popular destinations. However, outside major cities and the tourist coast, conservative Catholic social values dominate, particularly in Slavonia and inland Dalmatia. Split Pride has historically faced significant hostile counter-protests. Visibility in Zagreb and coastal tourist areas is generally fine.',
      sources: [
        { label: 'Rainbow Europe — Croatia', url: 'https://rainbowmap.ilga-europe.org/countries/croatia/' },
        { label: 'Equaldex — Croatia', url: 'https://www.equaldex.com/region/croatia' },
      ],
    },
    racial: {
      text: 'Croatia is ethnically relatively homogeneous (over 90% Croatian). Non-white people are a small minority and may attract curiosity, particularly outside Zagreb and the tourist coast. Black and Asian visitors report occasional stares and isolated incidents of discrimination, but serious racism is not a dominant experience in tourist areas or Zagreb. The coast is accustomed to international visitors. Roma people face significant discrimination and marginalisation. EU anti-racism frameworks apply.',
      sources: [
        { label: 'Croatia human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/croatia/' },
        { label: 'ENAR — racism in Croatia', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Croatia is one of the safer countries in southeastern Europe. Violent crime is low and Zagreb and the tourist coast are very safe in everyday terms. The main concern for visitors and residents is petty theft in tourist-heavy areas in summer (Dubrovnik, Split old town, Hvar). Drink driving and road accidents are notable risks on mountain coastal roads. Croatia joined the Schengen Area in 2023, marking a significant step in its integration with the EU\'s security infrastructure.',
      sources: [
        { label: 'Croatia — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Croatia', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Croatia' },
      ],
    },
    healthcare: {
      text: 'Croatia has a functional public healthcare system (HZZO) accessible to residents including EU citizens. Hospitals in Zagreb are of reasonable quality. The coast has adequate emergency facilities but limited specialist capacity outside the capital. Private clinics exist in Zagreb and major coastal cities and are affordable by Western European standards. EU citizens benefit from EHIC card coverage. Dental care is a popular draw for medical tourism — high quality at substantially lower prices than Northern Europe.',
      sources: [
        { label: 'WHO Croatia health profile', url: 'https://www.who.int/countries/hrv/' },
        { label: 'HZZO — Croatian Health Insurance Fund', url: 'https://www.hzzo.hr' },
      ],
    },
    cost_value: {
      text: 'Croatia has become noticeably more expensive since joining the EU\'s Schengen zone and switching to the euro in 2023, particularly on the Dalmatian coast during summer. Zagreb is still affordable by Western European standards — rents for a one-bedroom apartment run roughly €500–900/month. Coastal towns (Dubrovnik especially) are expensive in tourist season but much cheaper in winter. Food in local konobas (restaurants) and markets remains good value. Overall Croatia offers excellent quality of life for the price outside peak tourist season.',
      sources: [
        { label: 'Numbeo — cost of living in Croatia', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Croatia' },
        { label: 'Expatistan — Zagreb cost of living', url: 'https://www.expatistan.com/cost-of-living/zagreb' },
      ],
    },
    visa: {
      text: 'As an EU member, Croatia is straightforward for EU/EEA citizens who have the right of free movement. Non-EU citizens can enter visa-free for 90 days under Schengen rules (Croatia joined Schengen in January 2023). Croatia introduced a Digital Nomad Visa in January 2021 — one of Europe\'s first — allowing remote workers to stay for up to 1 year (non-renewable, but re-applicable after 6 months outside). Temporary residence is available for employment, family reunification, and study. The digital nomad visa requires proof of remote work and monthly income of at least €2,539.',
      sources: [
        { label: 'Croatia digital nomad visa — MUP', url: 'https://mup.gov.hr' },
        { label: 'Croatia visa guide', url: 'https://visaguide.world/europe/croatia-visa/' },
      ],
    },
  },

  // ── Cuba ───────────────────────────────────────────────────────────────────
  'CU': {
    climate: {
      text: 'Cuba has a tropical climate moderated by trade winds. Havana and the west are warm year-round, averaging 26°C, with a dry season November–April and a wetter, hotter season May–October. Temperatures rarely exceed 35°C on the coast. The east (Santiago de Cuba, Holguín) is slightly hotter and more humid. Hurricane season runs June–November and Cuba sits directly in the Atlantic hurricane belt — major storms affect the island every few years. Humidity is high year-round, particularly in summer.',
      sources: [
        { label: 'Cuba climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Cuba' },
        { label: 'Cuba weather overview', url: 'https://www.weather-atlas.com/en/cuba' },
      ],
    },
    lgbtq_orient: {
      text: 'Cuba approved same-sex marriage by popular referendum in September 2022. The new Family Code also allows same-sex adoption, surrogacy, and recognises diverse family structures. LGBTQ+ relations had been decriminalised since 1979. Cuba\'s National Centre for Sex Education (CENESEX), long led by Mariela Castro, has been a government-backed driver of reform. Havana has a visible, if informal, LGBTQ+ scene.',
      sources: [
        { label: 'Cuba — Equaldex', url: 'https://www.equaldex.com/region/cuba' },
        { label: 'Cuba same-sex marriage referendum — BBC', url: 'https://www.bbc.com/news/world-latin-america-63056309' },
      ],
    },
    lgbtq_gender: {
      text: 'Cuba allows legal gender marker changes through a process managed by the Ministry of Justice, following gender-affirming surgery. The 2022 Family Code improved the framework. Gender-affirming surgeries (including state-funded options) have been available since 2008 through CENESEX-affiliated clinics. Non-binary recognition remains limited. Cuba\'s approach to trans rights is notably ahead of most Caribbean and Latin American nations.',
      sources: [
        { label: 'CENESEX — Cuba gender policy', url: 'http://www.cenesex.org' },
        { label: 'TGEU — trans rights Cuba', url: 'https://transrightsmap.tgeu.org' },
      ],
    },
    lgbtq_social: {
      text: 'Social attitudes are improving, particularly in Havana, but machismo culture and Afro-Cuban religious traditions mean acceptance is uneven. Havana\'s Calle 23 (La Rampa) area has a visible informal LGBTQ+ presence. Annual Jornadas Cubanas contra la Homofobia events draw significant public participation. Outside Havana — in provincial cities and rural areas — conservative attitudes persist. Same-sex public affection is broadly acceptable in Havana without issue in most contexts.',
      sources: [
        { label: 'CENESEX — Cuba LGBTQ+ education', url: 'http://www.cenesex.org' },
        { label: 'Equaldex — Cuba', url: 'https://www.equaldex.com/region/cuba' },
      ],
    },
    racial: {
      text: 'Cuba is one of the most racially mixed countries in the Caribbean, with a population that is approximately 64% mixed-race or Black and 26% white. Racial inequality persists despite the revolution\'s commitment to equality — white Cubans are disproportionately represented in higher-income sectors. Afro-Cubans face ongoing socioeconomic disadvantage, but interracial relationships are common and normalised, and anti-Black racism is less overt than in many Latin American countries. Black foreign visitors often describe Cuba as relatively comfortable.',
      sources: [
        { label: 'Cuba race relations — Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/cuba' },
        { label: 'Cuba human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/cuba/' },
      ],
    },
    safety: {
      text: 'Cuba has a low violent crime rate by Caribbean and Latin American standards. The main safety concerns for foreigners are petty theft and tourist-targeted scams in Havana. The economic crisis since 2019 has increased desperation and petty crime. Politically, Cuba is an authoritarian single-party state — freedoms of speech, assembly, and press are severely restricted, and political activism carries serious legal risk. Protests since 2021 have been met with arrests and prison sentences.',
      sources: [
        { label: 'Cuba — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Cuba travel advice — UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/cuba' },
      ],
    },
    healthcare: {
      text: 'Cuba\'s public healthcare system is well-known for its breadth of coverage and the number of doctors per capita. All residents receive free healthcare. However, the economic crisis has severely depleted medical supplies, medicines, and equipment — shortages are widespread. The tourist Servimed clinics offer better-stocked facilities for foreigners at international prices. Bring all prescription medications with you as local availability cannot be relied upon.',
      sources: [
        { label: 'WHO Cuba health profile', url: 'https://www.who.int/countries/cub/' },
        { label: 'Cuba healthcare reality — Amnesty International', url: 'https://www.amnesty.org/en/location/americas/caribbean/cuba/' },
      ],
    },
    cost_value: {
      text: 'Cuba operates a dual economy: a peso economy for Cubans and a US dollar/MLC economy for tourists and the private sector. For foreign visitors paying in hard currency, accommodation and eating out in the tourist sector are moderate in cost. The economic system is complex, unstable, and subject to rapid change. For most foreigners, Cuba is effectively a tourist destination — long-term financial planning is constrained by sanctions and Cuban state control.',
      sources: [
        { label: 'Numbeo — cost of living Cuba', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Cuba' },
        { label: 'Cuba economy overview — BBC', url: 'https://www.bbc.com/news/world-latin-america-19585497' },
      ],
    },
    visa: {
      text: 'Most nationalities require a Tourist Card (tarjeta del turista) to enter Cuba, allowing stays of 30 days extendable once to 60 days total. Long-term residence is very difficult and not available to most foreign nationals. US citizens face additional restrictions under the ongoing US embargo. Cuba does not have digital nomad or retirement visa options. It is effectively a tourist-only destination for the vast majority of non-Cuban nationals.',
      sources: [
        { label: 'Cuba visa guide — Visaguide.world', url: 'https://visaguide.world/caribbean/cuba-visa/' },
      ],
    },
  },

  // ── Cyprus ─────────────────────────────────────────────────────────────────
  'CY': {
    climate: {
      text: 'Cyprus has one of the sunniest climates in Europe, with over 3,300 sunshine hours per year — more than almost anywhere else in the EU. Summers (June–September) are hot and dry, regularly reaching 35–40°C inland. The coast is cooled by sea breezes. Winters are short and mild, rarely dropping below 5°C on the coast. The Troodos Mountains offer a cooler escape in summer and occasional snowfall in winter. Limassol, Paphos, and Larnaca are the most popular expat areas and enjoy classic Mediterranean conditions.',
      sources: [
        { label: 'Cyprus Meteorological Service', url: 'https://www.moa.gov.cy/moa/ms/ms.nsf/index_en/index_en' },
        { label: 'Cyprus climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Cyprus' },
      ],
    },
    lgbtq_orient: {
      text: 'Cyprus decriminalised homosexuality in 1998 following EU accession pressure. Civil unions for same-sex couples were introduced in 2015, offering most of the same rights as marriage. Same-sex marriage is not yet legally available. Anti-discrimination law covers sexual orientation in employment and services. Limassol and Nicosia have established LGBTQ+ communities, and annual Pride events operate freely. Cyprus has been improving its Rainbow Index score but remains below the EU average.',
      sources: [
        { label: 'Cyprus — Equaldex', url: 'https://www.equaldex.com/region/cyprus' },
        { label: 'Rainbow Europe — Cyprus', url: 'https://rainbowmap.ilga-europe.org/countries/cyprus/' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in Cyprus requires surgery and a court process — among the more restrictive in the EU. There is no self-declaration pathway and non-binary identities have no legal recognition. Gender-affirming healthcare is available through private providers. The TGEU Trans Rights Index ranks Cyprus in the lower half of European countries on trans rights. EU-level pressure continues to push for reform.',
      sources: [
        { label: 'TGEU — trans rights Cyprus', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Cyprus', url: 'https://rainbowmap.ilga-europe.org/countries/cyprus/' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance in Cyprus is moderate and improving among younger and urban Cypriots. The Orthodox Church retains significant social influence and has actively opposed LGBTQ+ equality measures. Rural areas and older communities are more conservative. Limassol has a cosmopolitan, internationally diverse expat population and is the most accepting city. Tourist areas (Ayia Napa, Paphos) are broadly welcoming. Cyprus Pride has grown steadily in recent years without significant opposition.',
      sources: [
        { label: 'Equaldex — Cyprus', url: 'https://www.equaldex.com/region/cyprus' },
        { label: 'Accept LGBTQ+ Cyprus', url: 'https://www.accept.org.cy' },
      ],
    },
    racial: {
      text: 'Cyprus has a predominantly Greek Cypriot population in the internationally recognised south. The country has a large population of foreign workers and expats, particularly from the Philippines, Sri Lanka, and Eastern Europe. Racism toward migrant workers and asylum seekers has been documented. Black visitors and residents report mixed experiences — not systematically hostile, but stares and occasional discrimination occur. Limassol\'s large international community makes it more comfortable for diverse groups.',
      sources: [
        { label: 'Cyprus human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/cyprus/' },
        { label: 'ENAR — racism in Cyprus', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Cyprus is one of the safest countries in Europe. Violent crime is very low. Petty theft in tourist areas (bag snatching, car break-ins) is the main concern. The unresolved division of the island — with the Turkish-occupied north outside the control of the Republic of Cyprus — creates a politically sensitive situation but does not affect safety in the south for residents and visitors.',
      sources: [
        { label: 'Cyprus — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Cyprus', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Cyprus' },
      ],
    },
    healthcare: {
      text: 'Cyprus launched a General Healthcare System (GESY) in 2020, extending public healthcare to all legal residents. The public system is improving but still developing. Private healthcare is of good quality — many doctors trained in the UK or other EU countries. Limassol and Nicosia have the best facilities. English is widely spoken in medical settings. For chronic conditions or specialist care, private insurance is recommended.',
      sources: [
        { label: 'GESY — Cyprus General Healthcare System', url: 'https://www.gesy.org.cy' },
        { label: 'WHO Cyprus health profile', url: 'https://www.who.int/countries/cyp/' },
      ],
    },
    cost_value: {
      text: 'Cyprus offers reasonable value by Western European standards. Rent in Limassol has risen sharply due to an influx of tech sector and Israeli expats — a one-bedroom can run €1,200–2,000/month centrally. Paphos and Larnaca are noticeably cheaper. Eating out, local food, and utilities are affordable. The low corporate tax rate (12.5%) attracts businesses and the expat workforce that follows them.',
      sources: [
        { label: 'Numbeo — cost of living Cyprus', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Cyprus' },
        { label: 'Expatistan — Limassol cost of living', url: 'https://www.expatistan.com/cost-of-living/limassol' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have free movement rights. Non-EU citizens can enter for 90 days (Cyprus is EU but not Schengen, so its own rules apply). Cyprus introduced a Digital Nomad Visa in 2022, allowing stays of up to 1 year (renewable for a second year), requiring proof of remote employment outside Cyprus and minimum monthly income of €3,500. Standard temporary and permanent residence routes are available for employment and family reunification.',
      sources: [
        { label: 'Cyprus Digital Nomad Visa — Civil Registry', url: 'https://www.moi.gov.cy' },
        { label: 'Cyprus immigration guide', url: 'https://visaguide.world/europe/cyprus-visa/' },
      ],
    },
  },

  // ── Czechia ────────────────────────────────────────────────────────────────
  'CZ': {
    climate: {
      text: 'Czechia has a temperate continental climate with four distinct seasons. Prague has warm summers (24–28°C in July), colourful autumns, cold winters (averaging −1°C in January, with snow most years), and mild springs. The south and lowlands (South Moravia, Olomouc) are slightly warmer and sunnier. The mountainous border regions (Krkonoše, Šumava) receive more snow and are colder. Sunshine is moderate — around 1,700 hours per year in Prague. Brno is slightly warmer and is the centre of Czech wine country.',
      sources: [
        { label: 'Czech Hydrometeorological Institute', url: 'https://www.chmi.cz' },
        { label: 'Climate of Czechia — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_the_Czech_Republic' },
      ],
    },
    lgbtq_orient: {
      text: 'Czechia has recognised registered partnerships since 2006, offering financial and next-of-kin rights, though not full marriage equality. A bill to open civil marriage to same-sex couples enjoys majority public support and has been debated in parliament. Anti-discrimination law covers sexual orientation. Prague is one of Central Europe\'s most LGBTQ+-friendly cities, with a large Pride parade and a well-established scene centred on the Vinohrady district.',
      sources: [
        { label: 'Czech Republic — Equaldex', url: 'https://www.equaldex.com/region/czech-republic' },
        { label: 'Rainbow Europe — Czechia', url: 'https://rainbowmap.ilga-europe.org/countries/czechia/' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in Czechia currently requires surgery and sterilisation — one of the most restrictive requirements in the EU. A Constitutional Court ruling has called for changes and legislation has been debated, but reform has not yet been enacted. Non-binary gender recognition does not exist in law. Gender-affirming care is available through specialist centres at major hospitals. TGEU ranks Czechia poorly on trans rights specifically due to the surgery requirement.',
      sources: [
        { label: 'TGEU — trans rights Czechia', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Czechia', url: 'https://rainbowmap.ilga-europe.org/countries/czechia/' },
      ],
    },
    lgbtq_social: {
      text: 'Czech society is notably secular and generally tolerant, especially in Prague. Public opinion polls consistently show majority support for same-sex marriage. Prague\'s Vinohrady neighbourhood has been an established LGBTQ+ hub for decades. Outside the capital, acceptance decreases somewhat in smaller towns and rural Moravia, but Czechia remains one of the more socially accepting countries in Central and Eastern Europe. Prague Pride is large, well-organised, and peaceful.',
      sources: [
        { label: 'Equaldex — Czech Republic', url: 'https://www.equaldex.com/region/czech-republic' },
        { label: 'Prague Pride', url: 'https://www.praguepride.cz/en/' },
      ],
    },
    racial: {
      text: 'Czechia is ethnically homogeneous — over 90% Czech. Roma people face serious entrenched discrimination in housing, education, and employment, making it one of the worst countries in Europe for Roma rights. For non-white foreign visitors and residents, experiences vary. Prague is internationally diverse and generally welcoming in tourist and expat contexts. Black and Asian visitors report occasional stares and isolated incidents but broadly manageable experiences in cities. EU anti-discrimination law applies.',
      sources: [
        { label: 'Czechia human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/czechia/' },
        { label: 'ENAR — racism in Czechia', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Czechia is one of the safest countries in Europe. Prague has very low violent crime rates. The main issues are tourist-area pickpocketing in the historic centre and taxi or restaurant scams targeting visitors. Prague and other Czech cities are safe to walk at night. The country has strong political stability and low terrorism risk.',
      sources: [
        { label: 'Czech Republic — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Czech Republic', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Czech+Republic' },
      ],
    },
    healthcare: {
      text: 'Czechia has a good public healthcare system with universal coverage for residents, including legal foreign residents who contribute to social security. Hospitals in Prague and Brno are of solid quality. English is widely spoken in medical settings in major cities. Specialist care can involve waits in the public system; private clinics offer faster access. Medical care is significantly cheaper than in Western Europe. Dental care is excellent value and attracts medical tourists from across Europe.',
      sources: [
        { label: 'WHO Czechia health profile', url: 'https://www.who.int/countries/cze/' },
        { label: 'VZP — Czech public health insurance', url: 'https://www.vzp.cz/en' },
      ],
    },
    cost_value: {
      text: 'Czechia — particularly Prague — offers excellent value compared to Western Europe, though costs have risen significantly in recent years. Rent in Prague centre runs roughly €700–1,300/month for a one-bedroom. Brno and other cities are 20–30% cheaper. Eating out and local food are very affordable. Public transport is cheap and efficient. The country uses the Czech koruna, not the euro, which gives some exchange rate advantage for euro earners.',
      sources: [
        { label: 'Numbeo — cost of living in Czech Republic', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Czech+Republic' },
        { label: 'Expatistan — Prague cost of living', url: 'https://www.expatistan.com/cost-of-living/prague' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Non-EU citizens can stay 90 days under the Schengen Agreement. Czechia introduced a Long-term Visa for Remote Workers in 2021. Standard temporary residence permits are available for employment and study. Permanent residence is available after 5 years of legal residence. The EU Blue Card applies for highly qualified workers.',
      sources: [
        { label: 'Czech immigration — Ministry of Interior', url: 'https://www.mvcr.cz/mvcren/' },
        { label: 'Czech visa guide', url: 'https://visaguide.world/europe/czech-republic-visa/' },
      ],
    },
  },

  // ── Denmark ────────────────────────────────────────────────────────────────
  'DK': {
    climate: {
      text: 'Denmark has a temperate maritime climate with mild but overcast conditions year-round. Summers are warm rather than hot — Copenhagen averages 20–23°C in July, rarely exceeding 30°C. Winters are cold and dark (averaging 2°C in January) with frequent rain, occasional snow, and very short days. The country is flat and windy throughout the year. Sunshine totals around 1,800 hours per year. Grey overcast skies are the norm for much of autumn and winter. The west coast of Jutland is windier and rainier than Copenhagen.',
      sources: [
        { label: 'Danish Meteorological Institute (DMI)', url: 'https://www.dmi.dk/en/' },
        { label: 'Climate of Denmark — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Denmark' },
      ],
    },
    lgbtq_orient: {
      text: 'Denmark is a world leader in LGBTQ+ rights. It was the first country in the world to legally recognise same-sex partnerships (1989) and the first Nordic country to legalise same-sex marriage (2012). Denmark has comprehensive anti-discrimination protections, same-sex adoption rights, and joint parentage rights. Copenhagen\'s LGBTQ+ scene — centred on Vesterbro and the annual Copenhagen Pride — is one of the oldest and most vibrant in Europe. The Equaldex index consistently ranks Denmark among the top five countries in the world.',
      sources: [
        { label: 'Denmark — Equaldex', url: 'https://www.equaldex.com/region/denmark' },
        { label: 'Rainbow Europe — Denmark', url: 'https://rainbowmap.ilga-europe.org/countries/denmark/' },
      ],
    },
    lgbtq_gender: {
      text: 'Denmark introduced legal gender self-determination in 2014 — one of the first countries in the world to do so — allowing adults to change their legal gender marker through a simple administrative declaration, with no surgery, hormonal treatment, or medical diagnosis required. A non-binary gender marker (X) was introduced in 2023. Gender-affirming healthcare is provided through the public system, though waiting times at gender clinics are long. Denmark is a global benchmark on trans rights.',
      sources: [
        { label: 'TGEU — trans rights Denmark', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Denmark', url: 'https://rainbowmap.ilga-europe.org/countries/denmark/' },
      ],
    },
    lgbtq_social: {
      text: 'Denmark is among the most socially accepting countries in the world for LGBTQ+ people. Public opinion polls show 85–90% support for same-sex marriage. Copenhagen is one of the most queer-friendly cities in Europe — WorldPride has been hosted there twice. Same-sex couples are fully visible in everyday life without issue. Even in smaller towns and rural Jutland, hostility is rare. Danish culture prizes individual freedom and privacy, creating a broadly tolerant social environment.',
      sources: [
        { label: 'Equaldex — Denmark', url: 'https://www.equaldex.com/region/denmark' },
        { label: 'Copenhagen Pride', url: 'https://www.copenhagenpride.dk/en/' },
      ],
    },
    racial: {
      text: 'Denmark is predominantly white, though it has significant immigrant and second-generation communities from Turkey, the Middle East, South Asia, and Somalia. Denmark has some of the most restrictive immigration policies in the EU, and integration debates are central to its politics. People of African, Middle Eastern, and South Asian descent report discrimination in housing and employment. Copenhagen is cosmopolitan and overt racism in day-to-day street interactions is uncommon, but structural discrimination is documented.',
      sources: [
        { label: 'Denmark human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/denmark/' },
        { label: 'ENAR — racism in Denmark', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Denmark is one of the safest countries in the world. Violent crime is very low. Copenhagen is generally safe to walk at night. The main concerns are bicycle theft (endemic) and pickpocketing in tourist areas. Gang-related shootings in certain Copenhagen suburbs occasionally make headlines but rarely affect visitors or expats. Denmark ranks consistently in the top five of the Global Peace Index.',
      sources: [
        { label: 'Denmark — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Denmark', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Denmark' },
      ],
    },
    healthcare: {
      text: 'Denmark has an excellent universal public healthcare system (sundhedsvæsenet), funded through taxation and free at point of use for all legal residents. Quality is high and English is universally spoken in Danish medical settings. Dental care is not fully covered by the public system for adults. Private health insurance can speed access to specialists. The system is one of the best-funded in Europe.',
      sources: [
        { label: 'Danish Health Authority', url: 'https://www.sst.dk/en' },
        { label: 'WHO Denmark health profile', url: 'https://www.who.int/countries/dnk/' },
      ],
    },
    cost_value: {
      text: 'Denmark is among the most expensive countries in Europe. Copenhagen consistently ranks in the top ten most expensive cities globally. Rent for a one-bedroom in central Copenhagen runs roughly €1,340–2,150/month. Eating out costs €25–45 per meal. However, Danish wages are among the highest in Europe and the social safety net — free education, healthcare, generous parental leave — adds significant non-monetary value. Smaller cities outside Copenhagen are noticeably cheaper.',
      sources: [
        { label: 'Numbeo — cost of living in Denmark', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Denmark' },
        { label: 'Expatistan — Copenhagen cost of living', url: 'https://www.expatistan.com/cost-of-living/copenhagen' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Non-EU citizens can stay 90 days under Schengen rules. Denmark does not currently have a dedicated digital nomad visa, but the EU Blue Card applies for highly skilled workers, and a Pay Limit Scheme Work Permit is available for those earning above a salary threshold. Permanent residency requires 8 years of residence — one of the longer requirements in Europe. Denmark has strict rules on family reunification.',
      sources: [
        { label: 'Danish Immigration Service', url: 'https://www.nyidanmark.dk/en-GB' },
        { label: 'Denmark visa guide', url: 'https://visaguide.world/europe/denmark-visa/' },
      ],
    },
  },

  // ── Ecuador ────────────────────────────────────────────────────────────────
  'EC': {
    climate: {
      text: 'Ecuador straddles the equator and has no true seasons — instead, altitude and region define the climate. Quito sits at 2,850 m and has a mild, spring-like climate year-round (14–20°C), with an afternoon rain season roughly October–May. Guayaquil on the Pacific coast is hot and humid (28–34°C) with a dry season June–November. The Galápagos Islands have a warm tropical climate with a cooler, drier season June–November. The Amazon lowlands (Puyo, Tena) are hot and wet year-round. The high Andes (above 3,000 m) can be cold at night year-round.',
      sources: [
        { label: 'Ecuador climate — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Ecuador' },
        { label: 'Ecuador weather — World Weather Online', url: 'https://www.worldweatheronline.com/ecuador-weather/ec.aspx' },
      ],
    },
    lgbtq_orient: {
      text: 'Ecuador legalised same-sex marriage in June 2019 following a Constitutional Court ruling. Same-sex adoption has been progressing through the courts. Anti-discrimination protections covering sexual orientation exist in the constitution. Quito and Guayaquil have visible LGBTQ+ communities and annual Pride events. Ecuador is considered one of the more progressive countries in the Andean region on LGBTQ+ legal rights, though social acceptance lags behind the legal framework.',
      sources: [
        { label: 'Ecuador — Equaldex', url: 'https://www.equaldex.com/region/ecuador' },
        { label: 'Ecuador same-sex marriage — BBC', url: 'https://www.bbc.com/news/world-latin-america-48709964' },
      ],
    },
    lgbtq_gender: {
      text: 'Ecuador allows legal gender marker changes through a civil registry process that does not require surgery, following court rulings. The process is administrative but can be slow. Gender-affirming healthcare is available through private providers. Non-binary legal recognition is not established. The situation is improving but trans people still face significant discrimination in practice.',
      sources: [
        { label: 'TGEU — trans rights Ecuador', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Equaldex — Ecuador', url: 'https://www.equaldex.com/region/ecuador' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance is improving, particularly in Quito and Guayaquil, but conservative Catholic and evangelical influence is strong, especially in smaller cities, the coast, and rural highlands. Public same-sex affection is broadly acceptable in LGBTQ+-friendly areas of Quito (La Mariscal, La Floresta). Outside urban areas, discretion is advisable. Ecuador has a strong tradition of religious conservatism and machismo that sits alongside the progressive legal framework.',
      sources: [
        { label: 'Equaldex — Ecuador', url: 'https://www.equaldex.com/region/ecuador' },
        { label: 'Ecuador human rights — Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/ecuador' },
      ],
    },
    racial: {
      text: 'Ecuador\'s population is predominantly mestizo, with significant Indigenous (about 7%), Afro-Ecuadorian (about 7%), and small white and montubio populations. Afro-Ecuadorians are concentrated in Esmeraldas province and the Chota Valley, and face systemic socioeconomic disadvantage and discrimination. Indigenous communities face land rights issues and marginalisation. Black foreign visitors generally find Ecuador manageable in cities, though stares are common. The coastal provinces — particularly Esmeraldas — have a strong Afro-Ecuadorian cultural identity.',
      sources: [
        { label: 'Ecuador human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/ecuador/' },
        { label: 'CODAE — Afro-Ecuadorian development', url: 'https://www.ecuadorencifras.gob.ec' },
      ],
    },
    safety: {
      text: 'Ecuador\'s security situation has deteriorated significantly since 2022 due to a surge in gang violence linked to drug trafficking, particularly in coastal cities (Guayaquil, Esmeraldas, Manta). The government declared an internal armed conflict in 2024. Quito is generally safer than Guayaquil and the coastal provinces, though petty crime, robbery, and express kidnapping remain risks in all major cities. The historic centre of Quito and tourist areas (Baños, Cuenca) remain relatively safer zones. The situation is evolving rapidly — check current travel advisories before visiting.',
      sources: [
        { label: 'Ecuador travel advice — UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/ecuador' },
        { label: 'Ecuador — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
      ],
    },
    healthcare: {
      text: 'Ecuador has a public healthcare system (IESS for social security contributors, MSP for general public) that provides free basic care. Quality is uneven — major hospitals in Quito and Guayaquil are reasonable; rural facilities are limited. Private clinics in Quito (Hospital Metropolitano, Hospital de los Valles) are of good quality and affordable by Western standards. Private health insurance is strongly recommended. Cuenca is popular with retirees partly due to its accessible, affordable private healthcare.',
      sources: [
        { label: 'WHO Ecuador health profile', url: 'https://www.who.int/countries/ecu/' },
        { label: 'IESS — Ecuadorian Social Security', url: 'https://www.iess.gob.ec' },
      ],
    },
    cost_value: {
      text: 'Ecuador is one of the best value countries in South America. Quito is affordable — a one-bedroom apartment in a safe, well-located neighbourhood runs USD 400–700/month. Cuenca, popular with retirees, is even cheaper. Locally grown food (Ecuador is a major banana and flower exporter) and eating at local restaurants is very inexpensive. Ecuador uses the US dollar as its currency, which removes exchange rate risk for US earners and provides stability. International Living has repeatedly ranked Ecuador among the world\'s top retirement destinations.',
      sources: [
        { label: 'Numbeo — cost of living in Ecuador', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Ecuador' },
        { label: 'Expatistan — Quito cost of living', url: 'https://www.expatistan.com/cost-of-living/quito' },
      ],
    },
    visa: {
      text: 'Ecuador is welcoming to long-term visitors and retirees. Most Western nationals can enter visa-free for 90 days (extendable). Ecuador\'s Pensioner/Retiree Visa requires proof of a lifetime pension of at least USD 800/month. The Rentista Visa requires passive income of USD 800/month. A Professional Visa for remote workers exists, and Ecuador is considering a dedicated digital nomad visa. Permanent residency is available after 21 months of legal temporary residence.',
      sources: [
        { label: 'Ecuador immigration — Ministerio de Relaciones Exteriores', url: 'https://www.cancilleria.gob.ec' },
        { label: 'Ecuador visa guide', url: 'https://visaguide.world/south-america/ecuador-visa/' },
      ],
    },
  },

  // ── Estonia ────────────────────────────────────────────────────────────────
  'EE': {
    climate: {
      text: 'Estonia has a cool temperate climate influenced by both maritime and continental conditions. Summers are mild and pleasant — Tallinn averages 20–22°C in July, with long daylight hours (up to 18 hours at midsummer). Winters are cold and dark, averaging −4°C in January, with snow typically covering the ground from December to March. Spring and autumn are short but beautiful. Sunshine totals around 1,800 hours per year — comparable to London. The islands (Saaremaa, Hiiumaa) are slightly milder and windier than the mainland.',
      sources: [
        { label: 'Estonian Environment Agency — climate', url: 'https://www.ilmateenistus.ee/kliima/?lang=en' },
        { label: 'Climate of Estonia — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Estonia' },
      ],
    },
    lgbtq_orient: {
      text: 'Estonia became the first country in the former Soviet Union to legalise same-sex marriage, which came into force in January 2024. It had recognised registered partnerships since 2016. Anti-discrimination law covers sexual orientation in employment. Tallinn has a small but growing LGBTQ+ scene and an annual Baltic Pride (shared with Latvia and Lithuania on rotation). Estonia\'s legal progress has been faster than its social acceptance curve, but as an EU and NATO member it is firmly aligned with European values.',
      sources: [
        { label: 'Estonia — Equaldex', url: 'https://www.equaldex.com/region/estonia' },
        { label: 'Estonia same-sex marriage — BBC', url: 'https://www.bbc.com/news/world-europe-64207884' },
      ],
    },
    lgbtq_gender: {
      text: 'Legal gender recognition in Estonia requires surgery and medical diagnosis, making the process among the more restrictive in the EU. Reform has been discussed but not yet enacted. Non-binary identities have no legal recognition. The 2024 marriage equality law improved the broader legal landscape but gender recognition specifically lags. Gender-affirming healthcare is available through private providers and some public services.',
      sources: [
        { label: 'TGEU — trans rights Estonia', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Estonia', url: 'https://rainbowmap.ilga-europe.org/countries/estonia/' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance in Estonia is moderate and improving, particularly among younger urban Estonians. Tallinn is the most accepting city — the old town and Kalamaja district have a cosmopolitan, tolerant atmosphere. Baltic Pride, when held in Tallinn, is peaceful and well-attended. Outside Tallinn, rural areas and the Russian-speaking northeast (Narva, Ida-Viru) are notably more conservative. Overall acceptance is lower than in Scandinavia but improving steadily.',
      sources: [
        { label: 'Equaldex — Estonia', url: 'https://www.equaldex.com/region/estonia' },
        { label: 'Rainbow Europe — Estonia', url: 'https://rainbowmap.ilga-europe.org/countries/estonia/' },
      ],
    },
    racial: {
      text: 'Estonia\'s population is about 69% ethnic Estonian and 25% Russian, with a small number of other minorities. The Russian minority has faced integration challenges and political tensions. Non-white people are a very small minority and attract strong curiosity, particularly outside Tallinn. Black and Asian visitors in Tallinn report manageable experiences overall, though stares are common. Rural areas and smaller cities have little experience of racial diversity. EU anti-discrimination frameworks apply.',
      sources: [
        { label: 'Estonia human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/estonia/' },
        { label: 'ENAR — racism in Estonia', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Estonia is a safe country with low violent crime rates. Tallinn is safe to walk at night in most areas, including the old town. Petty theft in tourist areas is the main concern. The country\'s eastern border with Russia has been a source of geopolitical concern since Russia\'s invasion of Ukraine, and Estonia has significantly increased its defence spending as a NATO member. Day-to-day security for residents is unaffected by this geopolitical context.',
      sources: [
        { label: 'Estonia — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Estonia', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Estonia' },
      ],
    },
    healthcare: {
      text: 'Estonia has a universal public healthcare system funded by social health insurance (Haigekassa). Quality in Tallinn is good — Tallinn\'s North Estonia Medical Centre and Tartu University Hospital are modern, well-equipped facilities. English is widely spoken in medical settings. The system is efficient by EU standards with shorter waiting times than many Western European countries. Private clinics are available and affordable. E-health infrastructure is among the most advanced in Europe.',
      sources: [
        { label: 'Estonian Health Insurance Fund', url: 'https://www.haigekassa.ee/en' },
        { label: 'WHO Estonia health profile', url: 'https://www.who.int/countries/est/' },
      ],
    },
    cost_value: {
      text: 'Estonia is one of the more affordable EU countries, though prices have risen following high inflation in 2022–2023. Tallinn old town is tourist-priced; residential neighbourhoods are far more reasonable — a one-bedroom apartment runs roughly €600–1,000/month. Outside Tallinn (Tartu, Pärnu, Narva) costs fall further. Food and eating out are affordable. Estonia uses the euro. The country\'s digital infrastructure and e-residency programme make it attractive for tech workers and entrepreneurs.',
      sources: [
        { label: 'Numbeo — cost of living in Estonia', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Estonia' },
        { label: 'Expatistan — Tallinn cost of living', url: 'https://www.expatistan.com/cost-of-living/tallinn' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Non-EU citizens can stay 90 days under Schengen rules. Estonia pioneered the world\'s first e-Residency programme (2014), which provides a digital identity for running EU-based businesses but is not a residency or immigration permit. A Digital Nomad Visa was introduced in 2020, allowing remote workers to live and work in Estonia for up to 1 year. Standard temporary and permanent residence are available for employment and family reunification.',
      sources: [
        { label: 'Estonia Digital Nomad Visa — Police and Border Guard', url: 'https://www.politsei.ee/en/instructions/digital-nomad-visa' },
        { label: 'e-Residency Estonia', url: 'https://e-resident.gov.ee' },
      ],
    },
  },

  // ── Fiji ───────────────────────────────────────────────────────────────────
  'FJ': {
    climate: {
      text: 'Fiji has a tropical oceanic climate with two seasons: a warm wet season November–April (27–32°C, high humidity, cyclone risk) and a cooler dry season May–October (24–28°C, lower humidity). The larger islands (Viti Levu, Vanua Levu) have a marked difference between the wet (southeast) and dry (northwest) coasts. Suva, on the wet southeast coast, is one of the wettest capitals in the Pacific. Nadi and the Coral Coast on the drier northwest are sunnier and more popular with tourists and expats. Cyclone season is a real consideration — Fiji averages a significant cyclone roughly every 3–5 years.',
      sources: [
        { label: 'Fiji Meteorological Service', url: 'https://www.met.gov.fj' },
        { label: 'Climate of Fiji — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Fiji' },
      ],
    },
    lgbtq_orient: {
      text: 'Fiji decriminalised homosexuality in 2010 and the 2013 constitution explicitly prohibits discrimination based on sexual orientation — a remarkable provision for a Pacific nation. However, same-sex partnerships are not legally recognised and same-sex marriage is not available. Anti-discrimination protections in employment and services exist on paper. In practice, enforcement is inconsistent and social stigma limits visibility.',
      sources: [
        { label: 'Fiji — Equaldex', url: 'https://www.equaldex.com/region/fiji' },
        { label: 'ILGA World — Pacific report', url: 'https://ilga.org/state-sponsored-homophobia-report' },
      ],
    },
    lgbtq_gender: {
      text: 'Fiji has limited legal gender recognition. The constitution\'s anti-discrimination clause offers some protection, but there is no formal pathway to change legal gender markers. Gender-affirming healthcare is not systematically available through the public system. Trans people in Fiji face significant social challenges, though the Indo-Fijian concept of a "third gender" (hijra-adjacent) creates some social space in certain communities.',
      sources: [
        { label: 'TGEU — trans rights Pacific', url: 'https://transrightsmap.tgeu.org' },
        { label: 'ILGA World — trans legal mapping', url: 'https://ilga.org/trans-legal-mapping-report' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance of LGBTQ+ people in Fiji is limited despite the relatively progressive legal framework. Both indigenous Fijian (Christian) and Indo-Fijian (Hindu and Muslim) communities hold largely conservative views on sexuality and gender. LGBTQ+ people generally live discreetly. Visibility is low in public life. Tourist resort areas (Denarau, Mamanuca islands) are more cosmopolitan and generally welcoming to international visitors regardless of orientation.',
      sources: [
        { label: 'Equaldex — Fiji', url: 'https://www.equaldex.com/region/fiji' },
        { label: 'Pacific Community LGBTQ+ resources', url: 'https://www.spc.int' },
      ],
    },
    racial: {
      text: 'Fiji has a complex racial dynamic between indigenous Fijians (iTaukei, roughly 57% of the population) and Indo-Fijians (descended from indentured labourers brought by the British, roughly 37%). Historical political tension between these two groups — including coups in 1987 and 2000 partly framed around racial politics — has shaped the country deeply. Black foreign visitors and Western expats generally receive a warm welcome as tourists. Asian visitors may experience mixed perceptions depending on context. White Western visitors are broadly treated as welcome guests.',
      sources: [
        { label: 'Fiji Bureau of Statistics', url: 'https://www.statsfiji.gov.fj' },
        { label: 'Fiji human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/fiji/' },
      ],
    },
    safety: {
      text: 'Fiji is generally safe for tourists and expats in resort areas. Violent crime is relatively low overall but petty theft, opportunistic robbery, and home break-ins are concerns in urban areas, particularly parts of Suva. Suva has a higher crime rate than resort areas and requires normal urban precautions. Natural disaster risk (cyclones, flooding) is significant and should factor into any relocation plan. The 2006 military coup was the last major political upheaval; the political situation has been stable since the 2013 constitution.',
      sources: [
        { label: 'Fiji — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Fiji travel advice — UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/fiji' },
      ],
    },
    healthcare: {
      text: 'Healthcare in Fiji is limited by Pacific standards. Public hospitals (Colonial War Memorial Hospital in Suva, Lautoka Hospital) provide free basic care but are under-resourced and can struggle with serious or complex cases. Private clinics in Suva and Nadi/Lautoka are of better quality and have English-speaking staff. International-quality care is not reliably available — serious medical conditions typically require evacuation to Australia or New Zealand. Comprehensive travel and evacuation insurance is essential.',
      sources: [
        { label: 'WHO Fiji health profile', url: 'https://www.who.int/countries/fji/' },
        { label: 'Fiji Ministry of Health', url: 'https://www.health.gov.fj' },
      ],
    },
    cost_value: {
      text: 'Fiji is not as cheap as its Pacific location might suggest — many goods are imported and carry high costs. Resort accommodation is priced at international tourist rates. However, living like a local in a residential area (rather than a resort) is considerably cheaper. Rent for a modest house in Nadi or Suva runs roughly FJD 800–1,500/month (USD 350–680). Local food from markets is inexpensive. Imported goods, electronics, and cars are expensive. Overall Fiji offers moderate value — good for those seeking a tropical lifestyle, but not a budget destination.',
      sources: [
        { label: 'Numbeo — cost of living Fiji', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Fiji' },
        { label: 'Fiji cost of living guide — Expatistan', url: 'https://www.expatistan.com/cost-of-living/suva' },
      ],
    },
    visa: {
      text: 'Most Western nationalities can enter Fiji visa-free for 4 months (extendable up to 6 months per year). Long-term residency options are limited. Fiji has a Retirement Visa (for those over 45 with proven income) and investment-based residency schemes. There is no digital nomad visa. Permanent residency is available through marriage to a Fijian citizen or long-term investment. Fiji citizenship requires a lengthy residency period and is not easily accessible.',
      sources: [
        { label: 'Fiji Immigration Department', url: 'https://www.immigration.gov.fj' },
        { label: 'Fiji visa guide', url: 'https://visaguide.world/asia/fiji-visa/' },
      ],
    },
  },

  // ── Finland ────────────────────────────────────────────────────────────────
  'FI': {
    climate: {
      text: 'Finland has a subarctic to humid continental climate. Southern Finland (Helsinki) has cold winters averaging −4°C in January, with snow from December to March, and warm summers (22–25°C in July) with very long days. Northern Finland (Lapland) has an extreme subarctic climate — winters can drop to −30°C and below, with polar night in December. The midnight sun (continuous daylight) occurs in summer above the Arctic Circle. Helsinki averages around 1,800 sunshine hours per year, but winter days are very short. Seasonal mood and light exposure is a real factor for many residents.',
      sources: [
        { label: 'Finnish Meteorological Institute', url: 'https://www.ilmatieteenlaitos.fi/en/' },
        { label: 'Climate of Finland — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Finland' },
      ],
    },
    lgbtq_orient: {
      text: 'Finland legalised same-sex marriage in 2017, having recognised registered partnerships since 2002. Same-sex couples have full adoption rights and equal legal standing. Anti-discrimination law comprehensively covers sexual orientation. Helsinki has a well-established LGBTQ+ scene — Helsinki Pride is one of the largest events in the Nordic region. Equaldex and the Rainbow Index consistently rank Finland among the top 10 countries in the world for LGBTQ+ legal rights.',
      sources: [
        { label: 'Finland — Equaldex', url: 'https://www.equaldex.com/region/finland' },
        { label: 'Rainbow Europe — Finland', url: 'https://rainbowmap.ilga-europe.org/countries/finland/' },
      ],
    },
    lgbtq_gender: {
      text: 'Finland introduced a self-identification-based gender recognition law in 2023, removing the previous requirement for medical treatment or sterilisation. Adults can now legally change their gender marker through an administrative declaration. Non-binary gender recognition has been advancing. Gender-affirming healthcare is provided through the public system, though waiting times at gender clinics have been long. The 2023 law was a significant step that brought Finland in line with the most progressive Nordic countries.',
      sources: [
        { label: 'TGEU — trans rights Finland', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Finland', url: 'https://rainbowmap.ilga-europe.org/countries/finland/' },
      ],
    },
    lgbtq_social: {
      text: 'Finland is one of the most socially accepting countries in Europe for LGBTQ+ people. Public opinion surveys show strong majority support for equality. Helsinki Pride draws hundreds of thousands of participants. Urban Finland — particularly Helsinki, Tampere, and Turku — is fully open and inclusive. Northern and rural Finland is more conservative, but hostility is rare. Finnish culture values reserved personal space, which means public expression of affection of any kind is generally low-key — same-sex couples fit naturally into this norm.',
      sources: [
        { label: 'Equaldex — Finland', url: 'https://www.equaldex.com/region/finland' },
        { label: 'Helsinki Pride', url: 'https://helsinkipride.fi/en/' },
      ],
    },
    racial: {
      text: 'Finland is ethnically homogeneous — over 90% Finnish. It has smaller communities of Swedes, Russians, Somalis, and other immigrants. Finland has faced criticism for discrimination against its Romani population and for institutional racism toward non-white immigrants. Non-white people — particularly Black Africans and people of Middle Eastern origin — report discrimination in employment and housing, and occasional verbal harassment. That said, Helsinki and other cities are cosmopolitan and day-to-day experiences for visible minorities are generally manageable. EU anti-discrimination law applies.',
      sources: [
        { label: 'Finland human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/finland/' },
        { label: 'ENAR — racism in Finland', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Finland is one of the safest countries in the world. Violent crime is very low. Helsinki is safe to walk at night across virtually all neighbourhoods. Alcohol-related antisocial behaviour exists but rarely affects visitors. Finland has consistently ranked in the top five of the Global Peace Index. Since joining NATO in 2023, the country\'s geopolitical orientation has shifted, though day-to-day security for residents is not affected.',
      sources: [
        { label: 'Finland — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Finland', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Finland' },
      ],
    },
    healthcare: {
      text: 'Finland has a high-quality universal public healthcare system funded through municipal taxes and national social insurance (Kela). Coverage is available to all residents. Waiting times in the public system for non-urgent care can be long. Private healthcare is available in major cities for faster access. English is widely spoken in Finnish medical settings. Finland has one of the highest healthcare expenditures per capita in Europe and ranks consistently among the best-performing systems.',
      sources: [
        { label: 'Kela — Finnish Social Insurance', url: 'https://www.kela.fi/web/en' },
        { label: 'WHO Finland health profile', url: 'https://www.who.int/countries/fin/' },
      ],
    },
    cost_value: {
      text: 'Finland is moderately expensive by EU standards, with Helsinki being the most expensive city. Rent for a one-bedroom apartment in Helsinki centre runs roughly €1,100–1,800/month. Outside Helsinki — in Tampere, Turku, Oulu, or Jyväskylä — costs are 20–40% lower. Eating out is expensive. However, the social safety net (free university education, excellent public healthcare, generous parental leave) adds enormous non-monetary value. The tax burden is high but the return in public services is clear.',
      sources: [
        { label: 'Numbeo — cost of living in Finland', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Finland' },
        { label: 'Expatistan — Helsinki cost of living', url: 'https://www.expatistan.com/cost-of-living/helsinki' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Non-EU citizens can stay 90 days under Schengen rules. Finland does not have a specific digital nomad visa, but a self-employment residence permit is available. The EU Blue Card applies for highly qualified workers. A startup permit exists for entrepreneurs. Permanent residency is available after 4 years of continuous legal residence. Finland actively recruits skilled workers and international graduates.',
      sources: [
        { label: 'Finnish Immigration Service (Migri)', url: 'https://migri.fi/en/home' },
        { label: 'Finland visa guide', url: 'https://visaguide.world/europe/finland-visa/' },
      ],
    },
  },

  // ── France ─────────────────────────────────────────────────────────────────
  'FR': {
    climate: {
      text: 'France has striking regional climate diversity. Paris and the north have a temperate oceanic climate — mild, often grey, with moderate rainfall year-round (14–24°C in summer, 4–8°C in winter). The Alps and Pyrenees have a mountain climate with cold snowy winters and cool summers. The Loire Valley and southwest are warm and sunny. The Mediterranean south (Côte d\'Azur, Languedoc, Provence) has a classic Mediterranean climate: hot dry summers of 28–35°C and over 2,800 sunshine hours per year. Alsace has a continental climate with colder winters and warmer, drier summers than Paris. For those prioritising sunshine, the south is far ahead of Paris.',
      sources: [
        { label: 'Météo-France', url: 'https://meteofrance.fr' },
        { label: 'Climate of France — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_France' },
      ],
    },
    lgbtq_orient: {
      text: 'France legalised same-sex marriage in 2013 (Mariage pour tous). Same-sex couples can marry, adopt jointly, and access medically assisted reproduction (PMA, since 2021). Anti-discrimination law comprehensively covers sexual orientation. Paris has one of the world\'s most famous LGBTQ+ scenes — Le Marais district is a historic centre of queer culture. Equaldex ranks France consistently among the top 15 globally. Lyon, Bordeaux, and Montpellier also have established LGBTQ+ communities.',
      sources: [
        { label: 'France — Equaldex', url: 'https://www.equaldex.com/region/france' },
        { label: 'Rainbow Europe — France', url: 'https://rainbowmap.ilga-europe.org/countries/france/' },
      ],
    },
    lgbtq_gender: {
      text: 'France introduced a simplified legal gender recognition process in 2016, allowing adults to change their gender marker through a court declaration without requiring surgery or sterilisation — though the process remains judicial rather than purely administrative. Non-binary identities have not been formally recognised in law; France requires a binary marker. Gender-affirming healthcare is available through the public system, though access to specialist teams involves waiting times. TGEU ranks France in the mid-range of European countries on trans rights.',
      sources: [
        { label: 'TGEU — trans rights France', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — France', url: 'https://rainbowmap.ilga-europe.org/countries/france/' },
      ],
    },
    lgbtq_social: {
      text: 'France is broadly socially accepting of LGBTQ+ people, particularly in Paris and major cities. Paris Pride (Marche des Fiertés) draws hundreds of thousands. Le Marais in Paris remains a historic LGBTQ+ hub, though the scene has spread more broadly. Rural France and some immigrant communities maintain more conservative views. Anti-LGBTQ+ violence and incidents are reported but not systematic in urban areas. France values secularism (laïcité), which provides a cultural basis for tolerance though the reality is nuanced.',
      sources: [
        { label: 'Equaldex — France', url: 'https://www.equaldex.com/region/france' },
        { label: 'SOS Homophobie — annual report', url: 'https://www.sos-homophobie.org' },
      ],
    },
    racial: {
      text: 'France has a large and long-established population of African, North African, and Caribbean descent, particularly in Paris, Lyon, and Marseille. Racism and Islamophobia are significant social and political issues. People of Maghrebi (North African Arab and Berber) descent face documented employment discrimination and police profiling. Afro-French people experience racism in daily life, though the experience varies considerably by city and neighbourhood. Paris can be both cosmopolitan and hostile. France\'s republican model of colour-blindness (laïcité) officially prohibits ethnic monitoring, which makes structural discrimination harder to address. The Côte d\'Azur and cities with long diverse histories are more comfortable zones.',
      sources: [
        { label: 'France human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/france/' },
        { label: 'ENAR — racism in France', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'France has moderate safety by Western European standards. Paris has pockets of higher crime — particularly pickpocketing and phone snatching on the metro and around tourist sites (Eiffel Tower, Sacré-Cœur, CDG airport). Certain suburbs (banlieues) in Paris and other cities have higher crime and social tensions. France has experienced several serious terrorist attacks since 2015, and security presence in public spaces is high. Outside major cities and tourist areas, France is very safe. The south (Provence, Brittany, Dordogne) is generally quiet and safe for residents.',
      sources: [
        { label: 'France — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in France', url: 'https://www.numbeo.com/crime/country_result.jsp?country=France' },
      ],
    },
    healthcare: {
      text: 'France is widely regarded as having one of the best healthcare systems in the world. The public system (Assurance Maladie / Sécu) provides near-universal coverage, reimbursing a large proportion of medical costs. Most residents use a combination of the public system and a private top-up (mutuelle). Quality of care is high — French hospitals, particularly teaching hospitals (CHU), are world-class. English is spoken in medical settings in Paris and tourist areas but less reliably in rural France. The system is accessible, affordable, and high quality.',
      sources: [
        { label: 'Assurance Maladie — French public healthcare', url: 'https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-hors-france/votre-protection-sociale-en-france' },
        { label: 'WHO France health profile', url: 'https://www.who.int/countries/fra/' },
      ],
    },
    cost_value: {
      text: 'Cost varies enormously by region. Paris is expensive — a one-bedroom apartment in a central arrondissement runs €1,400–2,500/month. The rest of France is significantly more affordable: comparable housing in Lyon costs €700–1,200, in Bordeaux €700–1,100, in Montpellier €650–1,000, and in rural areas far less. Food in local markets and boulangeries is very affordable. The quality of life, cultural richness, excellent food, and healthcare system offer outstanding value outside Paris. Many expats specifically choose the regions over the capital.',
      sources: [
        { label: 'Numbeo — cost of living in France', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=France' },
        { label: 'Expatistan — Paris vs regional cities', url: 'https://www.expatistan.com/cost-of-living/paris' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. France introduced a Digital Nomad Visa (talent passport / passeport talent) for remote workers and entrepreneurs. The Carte de Séjour (residence permit) system covers work, family, and retirement scenarios. A "Retraité" visa is available for non-EU retirees. France participates in the EU Long-Term Resident Directive. Permanent residency is available after 5 years. French bureaucracy can be slow and document-heavy — professional assistance is often recommended.',
      sources: [
        { label: 'France immigration — Service-Public.fr', url: 'https://www.service-public.fr/particuliers/vosdroits/N109' },
        { label: 'France visa guide', url: 'https://visaguide.world/europe/france-visa/' },
      ],
    },
  },

  // ── Germany ────────────────────────────────────────────────────────────────
  'DE': {
    climate: {
      text: 'Germany has a temperate continental climate. Berlin and the northeast are the most continental — cold winters (−1°C average in January, regular snowfall), warm summers (up to 28–30°C in July), with relatively modest rainfall. The Rhine Valley and southwest (Baden-Württemberg, Bavaria\'s lowlands) are the warmest and sunniest parts of Germany, with good wine-growing conditions. The northwest (Hamburg, Cologne) is more maritime — milder winters, cooler summers, and considerable rainfall. The Bavarian Alps have a mountain climate with heavy snowfall and cool summers. Germany averages around 1,600–1,800 sunshine hours per year depending on region.',
      sources: [
        { label: 'Deutscher Wetterdienst (DWD)', url: 'https://www.dwd.de/EN/climate_environment/climatemonitoring/climatemonitoring_node.html' },
        { label: 'Climate of Germany — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Germany' },
      ],
    },
    lgbtq_orient: {
      text: 'Germany legalised same-sex marriage in October 2017. Same-sex couples have full marriage rights including adoption. Anti-discrimination law (AGG — Allgemeines Gleichbehandlungsgesetz) covers sexual orientation in employment and goods and services. Germany has a long and proud LGBTQ+ history — Berlin\'s Christopher Street Day (CSD) is one of the world\'s largest Pride events. Cologne, Hamburg, Munich, and Frankfurt also have large established LGBTQ+ communities. The Equaldex index consistently ranks Germany in the top 15 globally.',
      sources: [
        { label: 'Germany — Equaldex', url: 'https://www.equaldex.com/region/germany' },
        { label: 'Rainbow Europe — Germany', url: 'https://rainbowmap.ilga-europe.org/countries/germany/' },
      ],
    },
    lgbtq_gender: {
      text: 'Germany passed a Self-Determination Act (SBGG) in 2024, allowing adults to legally change their gender marker and first name through a simple declaration at the registry office, without requiring medical diagnosis or surgery. This replaced the previous highly restrictive 1980 Transsexuellengesetz law. Non-binary identities can be recorded as "diverse" (divers) on official documents. Gender-affirming healthcare is covered by statutory health insurance (GKV), though waiting times for specialist services are long.',
      sources: [
        { label: 'Germany Self-Determination Act — TGEU', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Germany', url: 'https://rainbowmap.ilga-europe.org/countries/germany/' },
      ],
    },
    lgbtq_social: {
      text: 'Germany is broadly socially accepting of LGBTQ+ people, particularly in major cities. Berlin is globally renowned as one of the most queer-friendly cities in the world — from its history as the birthplace of modern gay rights movements to its contemporary club and culture scene. Cologne, Hamburg, and Munich have equally vibrant communities. Eastern German states (former GDR) and rural areas tend to be more conservative — AfD (far-right) political strength correlates with lower acceptance in some regions. Overall, urban Germany is highly accepting; rural areas are improving but more variable.',
      sources: [
        { label: 'Equaldex — Germany', url: 'https://www.equaldex.com/region/germany' },
        { label: 'Berlin CSD', url: 'https://csd-berlin.de' },
      ],
    },
    racial: {
      text: 'Germany has a large and long-established population of Turkish, Southern and Eastern European, and increasingly African and Middle Eastern descent. Racism — particularly anti-Black racism and Islamophobia — is documented in employment, housing, and interactions with police and public institutions. The AfD\'s rise in politics reflects a significant minority of Germans holding exclusionary views on immigration and race. That said, major cities like Berlin, Hamburg, and Frankfurt are highly cosmopolitan and multicultural in daily life, with non-white residents well-integrated in many contexts. Overt racial harassment on the street is not typical in cities, though it is more common in parts of eastern Germany.',
      sources: [
        { label: 'Germany human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/germany/' },
        { label: 'ENAR — racism in Germany', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Germany is a safe country overall. Violent crime rates are low. Major cities are safe to walk at night in most areas. Petty theft exists in tourist areas and on public transport in Berlin and other large cities. Political violence from far-right extremists is a documented concern — hate crimes against minorities have increased in recent years, particularly in eastern Germany. Counter-terrorism measures have been robust since the 2016 Berlin market attack. Overall, Germany ranks well on the Global Peace Index.',
      sources: [
        { label: 'Germany — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Germany', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Germany' },
      ],
    },
    healthcare: {
      text: 'Germany has a world-class healthcare system. All employed residents are covered by statutory health insurance (GKV — gesetzliche Krankenversicherung), with the option to use private insurance (PKV) for higher earners. The system provides excellent quality of care, good access to specialists, and state-of-the-art hospital facilities. Wait times are generally short in Germany compared to other European countries. English is spoken in most urban medical settings. Dental coverage exists but involves significant co-payments for premium options.',
      sources: [
        { label: 'GKV-Spitzenverband — statutory health insurance', url: 'https://www.gkv-spitzenverband.de/english/statutory_health_insurance/statutory_health_insurance.jsp' },
        { label: 'WHO Germany health profile', url: 'https://www.who.int/countries/deu/' },
      ],
    },
    cost_value: {
      text: 'Germany is moderately priced by Western European standards, with significant variation by city. Munich is the most expensive — a one-bedroom apartment in the centre runs €1,400–2,200/month. Frankfurt, Hamburg, and Düsseldorf are similarly pricey. Berlin, though rising rapidly, remains more affordable than these: roughly €1,000–1,600/month centrally. Smaller cities (Leipzig, Dresden, Cologne) are cheaper still. Eating out is reasonable, public transport is excellent and affordable, and the strong social infrastructure (healthcare, education) adds enormous non-monetary value.',
      sources: [
        { label: 'Numbeo — cost of living in Germany', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Germany' },
        { label: 'Expatistan — Berlin cost of living', url: 'https://www.expatistan.com/cost-of-living/berlin' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Germany introduced a Freelancer Visa (Freiberufler) suitable for remote workers, and a new Opportunity Card (Chancenkarte) in 2024 for skilled workers to come to Germany to search for work. The EU Blue Card is widely used by skilled non-EU workers. A Retirement Visa is available for non-EU retirees with sufficient income. Permanent residency (Niederlassungserlaubnis) is available after 5 years (or 3 for EU Blue Card holders). Germany actively recruits skilled international workers to address labour shortages.',
      sources: [
        { label: 'Germany immigration — Make it in Germany', url: 'https://www.make-it-in-germany.com/en/visa-residence' },
        { label: 'Germany visa guide', url: 'https://visaguide.world/europe/germany-visa/' },
      ],
    },
  },

  // ── Greece ─────────────────────────────────────────────────────────────────
  'GR': {
    climate: {
      text: 'Greece has a Mediterranean climate, though it varies by region. Athens and the southern mainland are hot and dry in summer (35–38°C in July), very sunny (over 2,800 hours/year), and mild in winter (rarely below 5°C). The islands — particularly the Cyclades (Santorini, Mykonos), Dodecanese (Rhodes, Kos), and Crete — have the most classic Mediterranean weather: reliably hot dry summers and short mild winters. Northern Greece (Thessaloniki, Macedonia) has a more continental influence — hotter summers but also snowier winters. Crete is the warmest part of Greece year-round, rarely dropping below 10°C even in January. The Ionian Islands (Corfu) receive more winter rain than the Aegean side.',
      sources: [
        { label: 'Hellenic National Meteorological Service', url: 'https://www.hnms.gr/emy/en/' },
        { label: 'Climate of Greece — Wikipedia', url: 'https://en.wikipedia.org/wiki/Climate_of_Greece' },
      ],
    },
    lgbtq_orient: {
      text: 'Greece legalised same-sex marriage in February 2024, becoming the first Orthodox-majority country in the world to do so. Civil unions had been available since 2015. Same-sex couples can now marry and have access to the same legal rights as opposite-sex couples, though some aspects of family law (adoption, parental recognition) are still being worked through. Anti-discrimination law covers sexual orientation. Athens has a visible LGBTQ+ scene centred on Gazi/Metaxourgeio, and the islands (Mykonos in particular) have long been iconic LGBTQ+ tourist destinations.',
      sources: [
        { label: 'Greece — Equaldex', url: 'https://www.equaldex.com/region/greece' },
        { label: 'Greece same-sex marriage — BBC', url: 'https://www.bbc.com/news/world-europe-68049699' },
      ],
    },
    lgbtq_gender: {
      text: 'Greece introduced a self-identification-based gender recognition law in 2017, allowing adults to change their legal gender marker through a court declaration without surgery or medical requirements, though the process is judicial rather than purely administrative. Non-binary gender recognition is not established in law. Gender-affirming healthcare is available through private providers and select public hospitals. Trans people in Greece face more social stigma than in Northern Europe, and practical support for gender-affirming care is limited outside Athens.',
      sources: [
        { label: 'TGEU — trans rights Greece', url: 'https://transrightsmap.tgeu.org' },
        { label: 'Rainbow Europe — Greece', url: 'https://rainbowmap.ilga-europe.org/countries/greece/' },
      ],
    },
    lgbtq_social: {
      text: 'Social acceptance of LGBTQ+ people in Greece is improving but uneven. Athens and the major tourist islands (Mykonos, Santorini, Rhodes, Corfu) are very welcoming — Mykonos in particular has been an iconic global LGBTQ+ destination for decades. The Greek Orthodox Church remains socially influential and has vocally opposed LGBTQ+ rights. Rural areas and northern Greece are considerably more conservative. Pride events in Athens (Athens Pride) are large and well-established; Thessaloniki Pride has faced opposition. For daily life, urban areas are broadly comfortable; villages and small towns require more discretion.',
      sources: [
        { label: 'Equaldex — Greece', url: 'https://www.equaldex.com/region/greece' },
        { label: 'Athens Pride', url: 'https://www.athenspride.eu' },
      ],
    },
    racial: {
      text: 'Greece is predominantly ethnically Greek. The country has experienced significant immigration from Albania, the Middle East, South Asia, and Sub-Saharan Africa, often under difficult conditions. Racism and xenophobia are documented concerns — Greece has received criticism for treatment of migrants and asylum seekers at its borders. Black and South Asian visitors and residents in cities generally find Athens manageable in tourist and professional contexts. The islands\' tourist culture creates a cosmopolitan environment that is broadly welcoming to international visitors. Rural areas and parts of northern Greece are less accustomed to diversity.',
      sources: [
        { label: 'Greece human rights — US State Dept.', url: 'https://www.state.gov/reports/2023-country-reports-on-human-rights-practices/greece/' },
        { label: 'ENAR — racism in Greece', url: 'https://www.enar-eu.org' },
      ],
    },
    safety: {
      text: 'Greece is generally safe for residents and tourists. Violent crime is low. Athens has areas of higher petty crime — pickpocketing around Omonia Square, Monastiraki, and the port of Piraeus, and some deprived neighbourhoods in the centre. The islands are very safe. Natural disaster risk (earthquakes, forest fires) is a real factor — Greece sits on an active seismic zone and summer wildfires have affected areas including Attica and Rhodes in recent years. Road safety is poor by EU standards. Overall Greece ranks reasonably well on European safety indices.',
      sources: [
        { label: 'Greece — Global Peace Index', url: 'https://www.visionofhumanity.org/maps/' },
        { label: 'Numbeo — crime in Greece', url: 'https://www.numbeo.com/crime/country_result.jsp?country=Greece' },
      ],
    },
    healthcare: {
      text: 'Greece has a national healthcare system (ESY) providing free public care to all legal residents, but it suffered severely during the 2010–2018 debt crisis — significant cuts, brain drain of medical professionals, and under-investment left the public system weakened. Private clinics and hospitals in Athens and major cities are of much better quality and are preferred by most expats. Medical care is affordable by Northern European standards. On the islands, public healthcare facilities are basic outside the main island capitals. Medical evacuation cover is advisable for remote islands. English is widely spoken in private clinics.',
      sources: [
        { label: 'WHO Greece health profile', url: 'https://www.who.int/countries/grc/' },
        { label: 'ESY — Greek National Health System', url: 'https://www.moh.gov.gr/en/' },
      ],
    },
    cost_value: {
      text: 'Greece offers excellent value, particularly outside Athens and the premium tourist islands. Athens is affordable by EU capital standards — a one-bedroom apartment in central neighbourhoods (Koukaki, Exarcheia, Pangrati) runs roughly €600–1,000/month. The non-tourist islands and mainland towns are significantly cheaper. Eating out at local tavernas is very affordable — a full meal with wine for €12–18 per person is standard. The islands in high season (July–August) charge tourist prices for accommodation; living there off-season costs a fraction of the summer peak. Overall Greece offers excellent Mediterranean quality of life at relatively low cost.',
      sources: [
        { label: 'Numbeo — cost of living in Greece', url: 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=Greece' },
        { label: 'Expatistan — Athens cost of living', url: 'https://www.expatistan.com/cost-of-living/athens' },
      ],
    },
    visa: {
      text: 'EU/EEA citizens have full freedom of movement. Greece introduced a Digital Nomad Visa in 2021, available to non-EU nationals who work remotely for employers or clients outside Greece, requiring proof of remote employment and minimum monthly income of €3,500. A Golden Visa (investor residency) programme exists for property buyers above a threshold (recently raised to €500,000+ in prime areas). The Retirement Visa is available with proof of stable income. Permanent residency is available after 5 years of legal residence. Greece has been actively improving its digital nomad and expat residency infrastructure.',
      sources: [
        { label: 'Greece Digital Nomad Visa — Enterprise Greece', url: 'https://www.enterprisegreece.gov.gr' },
        { label: 'Greece immigration guide', url: 'https://visaguide.world/europe/greece-visa/' },
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
