/**
 * Newman Library — Subject Synonym Map
 *
 * Each key is a canonical subject (from subjects.md).
 * Each value is an array of search terms that should resolve to that subject.
 * All terms are lowercase; the search should normalize user input to lowercase before matching.
 *
 * 72 canonical subjects | ~500 total search terms
 */

const synonymMap = {

  // ─── BUSINESS & ECONOMICS ──────────────────────────────────────────────────

  "Accounting": [
    "accounting", "accountancy", "auditing", "audit", "auditor",
    "financial reporting", "financial statements", "balance sheet", "income statement",
    "gaap", "ifrs", "fasb", "pcaob", "aicpa", "sec filings",
    "bookkeeping", "cpa", "cost accounting", "managerial accounting",
    "tax accounting", "forensic accounting"
  ],

  "Advertising": [
    "advertising", "ads", "ad", "advertisement", "commercials",
    "ad agency", "advertising agency", "media buying", "media planning",
    "digital advertising", "online advertising", "programmatic",
    "copywriting", "creative briefs", "ad campaigns", "marketing campaigns",
    "branding campaigns", "brand awareness", "promotions",
    "radio advertising", "television advertising", "print advertising",
    "outdoor advertising", "influencer marketing", "sponsorship"
  ],

  "Business": [
    "business", "commerce", "corporate", "enterprise", "firms", "companies",
    "entrepreneurship", "startups", "startup", "new business", "small business",
    "organization", "organizations", "business administration", "MBA",
    "business strategy", "business development", "business ethics",
    "business law", "business news", "business management"
  ],

  "Company Information": [
    "company information", "company profiles", "corporate data", "firm data",
    "company research", "corporate intelligence", "annual reports",
    "10-k", "10-q", "SEC filings", "business profiles", "company financials",
    "company news", "corporate history", "firm profiles", "public companies",
    "private companies", "company directories", "business directories",
    "S&P", "Compustat", "corporate records"
  ],

  "Computer Information Systems": [
    "computer information systems", "CIS", "MIS", "management information systems",
    "information technology", "IT", "enterprise systems", "ERP",
    "data systems", "database systems", "information systems",
    "systems analysis", "business technology", "digital transformation",
    "tech management", "technology management"
  ],

  "Economics": [
    "economics", "economy", "economic theory", "macroeconomics", "microeconomics",
    "economic policy", "economic history", "econometrics", "GDP",
    "inflation", "recession", "monetary policy", "fiscal policy",
    "labor economics", "development economics", "trade economics",
    "economic indicators", "economic data", "behavioral economics",
    "game theory", "public economics", "international economics",
    "economic analysis", "economic research", "economic growth"
  ],

  "Finance": [
    "finance", "financial markets", "investing", "investments", "stocks",
    "bonds", "equities", "securities", "stock market", "capital markets",
    "Wall Street", "banking", "asset management", "portfolio",
    "derivatives", "options", "futures", "hedge funds", "private equity",
    "venture capital", "IPO", "mergers and acquisitions", "M&A",
    "financial analysis", "financial data", "financial modeling",
    "fixed income", "corporate finance", "personal finance",
    "wealth management", "mutual funds", "ETF", "REIT",
    "financial risk", "risk management", "quantitative finance",
    "Bloomberg", "FactSet", "CRSP", "stock prices", "market data"
  ],

  "Industry Information": [
    "industry information", "industry analysis", "industry reports",
    "industry data", "sector analysis", "market research", "industry trends",
    "market size", "market share", "industry profiles", "industry overview",
    "IBISWorld", "Mintel", "industry statistics", "business sectors",
    "trade associations", "industry forecasts", "competitive landscape"
  ],

  "International Business": [
    "international business", "global business", "multinational", "MNC",
    "cross-border", "foreign business", "global trade", "international trade",
    "global markets", "emerging markets", "foreign markets", "global economy",
    "import", "export", "trade policy", "international management",
    "global strategy", "international marketing", "foreign direct investment",
    "globalization", "international finance"
  ],

  "Law": [
    "law", "legal", "legislation", "court cases", "regulations", "statutes",
    "case law", "legal research", "jurisprudence", "attorney", "judicial",
    "constitutional law", "criminal law", "civil law", "contract law",
    "corporate law", "business law", "tax law", "environmental law",
    "labor law", "international law", "federal law", "state law",
    "law review", "court decisions", "legal forms", "Westlaw", "HeinOnline",
    "Nexis Uni", "Supreme Court", "legal news"
  ],

  "Management": [
    "management", "leadership", "organizational behavior", "human resources",
    "HR", "operations management", "supply chain", "strategy",
    "corporate governance", "executive compensation", "organizational theory",
    "project management", "change management", "management consulting",
    "business strategy", "decision making", "team management",
    "organizational culture", "performance management"
  ],

  "Marketing": [
    "marketing", "market research", "consumer behavior", "branding",
    "digital marketing", "social media marketing", "marketing strategy",
    "product marketing", "content marketing", "SEO", "email marketing",
    "market analysis", "marketing analytics", "advertising",
    "brand strategy", "marketing campaigns", "customer behavior",
    "marketing communications", "public relations", "PR",
    "Simmons", "eMarketer", "WARC", "Mintel", "marketing data"
  ],

  "Real Estate": [
    "real estate", "property", "housing", "commercial real estate",
    "residential real estate", "mortgage", "property market", "NYC real estate",
    "real estate data", "REIT", "property investment", "real estate finance",
    "PropertyShark", "zoning", "property tax", "real estate development",
    "land use", "appraisal"
  ],

  "Taxation": [
    "taxation", "taxes", "tax law", "federal tax", "state tax",
    "tax policy", "IRS", "tax planning", "income tax", "corporate tax",
    "estate tax", "gift tax", "tax code", "tax reform",
    "Bloomberg Tax", "CCH AnswerConnect", "tax regulations",
    "tax research", "tax accounting", "sales tax", "capital gains tax"
  ],

  // ─── ETHNIC & GENDER STUDIES ───────────────────────────────────────────────

  "Asian Studies": [
    "asian studies", "asia", "asian american", "east asia", "south asia",
    "southeast asia", "china", "japan", "korea", "india", "asian history",
    "asian culture", "pacific islander", "asian diaspora", "orientalism",
    "asian pacific", "AAPI"
  ],

  "Black Studies": [
    "black studies", "african american", "black history", "black culture",
    "civil rights", "race", "racism", "racial justice", "racial inequality",
    "african american history", "harlem renaissance", "slavery",
    "HBCU", "black freedom", "black politics", "abolitionism",
    "segregation", "desegregation", "jim crow", "reconstruction",
    "black lives matter", "black power", "civil rights movement",
    "pan-africanism", "ebony", "jet", "amsterdam news", "chicago defender"
  ],

  "Caribbean Studies": [
    "caribbean studies", "caribbean", "caribbean history", "caribbean culture",
    "west indies", "cuba", "haiti", "jamaica", "puerto rico", "dominican republic",
    "trinidad", "barbados", "caribbean literature", "caribbean diaspora"
  ],

  "Latin American Studies": [
    "latin american studies", "latin america", "south america", "central america",
    "mexico", "hispanic studies", "iberian studies", "spain", "portugal",
    "brazil", "argentina", "colombia", "chile", "latin american history",
    "latin american culture", "latin american literature", "colonial latin america"
  ],

  "Latinx Studies": [
    "latinx studies", "latinx", "latino", "latina", "hispanic",
    "chicano", "chicana", "mexican american", "puerto rican",
    "cuban american", "latin american community", "undocumented",
    "immigration", "border studies", "arte publico", "barrio",
    "fuente academica"
  ],

  "LGBTQ Studies": [
    "lgbtq studies", "lgbtq", "lgbtq+", "lgbt", "gay", "lesbian",
    "transgender", "bisexual", "queer", "queer studies",
    "gender and sexuality", "same-sex", "sexuality studies",
    "gender identity", "sexual orientation", "nonbinary", "pride",
    "lgbtq history", "lgbtq rights"
  ],

  "Women's Studies": [
    "women's studies", "gender studies", "feminist studies", "feminism",
    "women's rights", "women's history", "gender equality", "gender roles",
    "women and society", "women's movement", "suffrage", "patriarchy",
    "gender and work", "women in politics", "gender bias", "sexism",
    "gender-based violence", "women's issues", "contemporary women's issues"
  ],

  // ─── SCIENCE & TECHNOLOGY ──────────────────────────────────────────────────

  "Biology": [
    "biology", "life sciences", "bioscience", "ecology", "genetics",
    "molecular biology", "zoology", "botany", "marine biology",
    "microbiology", "evolution", "organisms", "cell biology",
    "developmental biology", "neuroscience", "biochemistry",
    "bioinformatics", "wildlife", "biodiversity", "taxonomy"
  ],

  "Chemistry": [
    "chemistry", "chemical science", "organic chemistry", "inorganic chemistry",
    "biochemistry", "physical chemistry", "chemical engineering",
    "ACS", "materials science", "polymer chemistry", "analytical chemistry",
    "environmental chemistry", "pharmaceutical chemistry", "chemical reactions",
    "periodic table", "molecular science"
  ],

  "Environmental Science": [
    "environmental science", "environment", "ecology", "sustainability",
    "climate change", "global warming", "green", "conservation",
    "natural resources", "pollution", "renewable energy", "recycling",
    "environmental studies", "carbon emissions", "fossil fuels",
    "deforestation", "ocean acidification", "biodiversity loss",
    "environmental policy", "green building", "sustainable development",
    "GreenFILE"
  ],

  "Health": [
    "health", "healthcare", "medicine", "public health", "health policy",
    "medical research", "clinical", "disease", "wellness", "health sciences",
    "biomedicine", "epidemiology", "health care system", "mental health",
    "community health", "health disparities", "chronic disease",
    "health data", "medical journals", "MEDLINE", "PubMed",
    "health insurance", "pharmaceuticals", "drugs", "vaccines"
  ],

  "Nursing": [
    "nursing", "nurses", "allied health", "clinical nursing", "nursing practice",
    "evidence-based practice", "nursing education", "patient care",
    "CINAHL", "JBI", "nursing research", "nursing journals",
    "health sciences", "nursing administration", "bedside manner",
    "nursing home", "intensive care", "ICU"
  ],

  "Physics": [
    "physics", "physical science", "mechanics", "quantum mechanics",
    "thermodynamics", "optics", "astrophysics", "electromagnetism",
    "nuclear physics", "particle physics", "relativity", "cosmology",
    "condensed matter", "classical physics", "IOP", "Physical Review",
    "fluid dynamics", "acoustics"
  ],

  "Science": [
    "science", "scientific research", "natural sciences", "STEM",
    "multidisciplinary science", "applied science", "basic science",
    "science journals", "research methods", "laboratory", "empirical research",
    "Nature", "general science"
  ],

  // ─── HUMANITIES & SOCIAL SCIENCES ─────────────────────────────────────────

  "Anthropology": [
    "anthropology", "cultural anthropology", "ethnography", "archaeology",
    "social anthropology", "ethnology", "culture studies", "human culture",
    "physical anthropology", "forensic anthropology", "linguistic anthropology",
    "indigenous studies", "ritual", "kinship", "anthropological theory",
    "AnthroSource"
  ],

  "Art": [
    "art", "fine arts", "visual arts", "painting", "sculpture", "photography",
    "art history", "art criticism", "contemporary art", "museum studies",
    "studio art", "design", "graphic design", "architecture", "printmaking",
    "drawing", "illustration", "digital art", "art movements",
    "Artstor", "Grove Art Online", "art exhibitions", "abstract art",
    "impressionism", "modernism", "postmodernism"
  ],

  "Communication Studies": [
    "communication studies", "communications", "rhetoric", "speech",
    "interpersonal communication", "mass communication", "media studies",
    "organizational communication", "persuasion", "discourse",
    "communication theory", "public speaking", "nonverbal communication",
    "CIOS", "ComAbstracts", "communication research"
  ],

  "Education": [
    "education", "pedagogy", "teaching", "learning", "curriculum",
    "K-12", "higher education", "academic achievement", "school",
    "classroom", "instructional design", "educational research",
    "educational technology", "special education", "early childhood education",
    "college", "university", "ERIC", "Education Source",
    "teacher training", "school administration", "literacy", "reading"
  ],

  "English": [
    "english", "english literature", "literary studies", "literary criticism",
    "american literature", "british literature", "fiction", "poetry",
    "prose", "creative writing", "novel", "short story", "essays",
    "literary theory", "MLA", "authors", "writers", "books",
    "Gale Literature", "literature", "literary analysis"
  ],

  "Film Studies": [
    "film studies", "film", "movies", "cinema", "cinematography",
    "film history", "film criticism", "documentary", "hollywood",
    "filmmaking", "screenwriting", "directors", "film theory",
    "world cinema", "foreign film", "independent film", "Kanopy",
    "Digital Theatre+", "streaming video", "film analysis"
  ],

  "Government": [
    "government", "public administration", "governance", "government agencies",
    "federal government", "state government", "political institutions",
    "bureaucracy", "public sector", "elections", "voting",
    "congress", "senate", "executive branch", "legislative branch",
    "judicial branch", "govinfo", "government documents",
    "public policy", "municipal government", "local government"
  ],

  "History": [
    "history", "historical research", "historical studies", "historiography",
    "american history", "world history", "european history",
    "ancient history", "modern history", "primary sources",
    "archives", "historical documents", "colonial history",
    "civil war", "world war", "wwi", "wwii", "cold war",
    "revolution", "social history", "cultural history",
    "economic history", "political history", "oral history"
  ],

  "Information Studies": [
    "information studies", "library science", "information science",
    "librarianship", "information management", "knowledge management",
    "cataloging", "archives", "information retrieval", "metadata",
    "digital libraries", "records management", "information systems",
    "bibliometrics", "Library & Information Science Source"
  ],

  "Journalism": [
    "journalism", "news media", "reporters", "news writing",
    "investigative journalism", "press", "broadcast journalism",
    "online journalism", "photojournalism", "news coverage",
    "media industry", "editorial", "news organizations",
    "CIOS", "news articles", "newspapers", "magazines",
    "newsrooms", "media ethics"
  ],

  "Languages": [
    "languages", "linguistics", "foreign languages", "language learning",
    "multilingual", "second language", "translation", "language instruction",
    "spanish", "french", "chinese", "arabic", "german", "italian",
    "japanese", "russian", "portuguese", "mandarin", "cantonese",
    "hindi", "korean", "Mango Languages", "language acquisition",
    "computational linguistics", "sociolinguistics", "morphology", "syntax"
  ],

  "Mathematics": [
    "mathematics", "math", "statistics", "calculus", "algebra", "geometry",
    "applied mathematics", "quantitative methods", "mathematical analysis",
    "number theory", "topology", "probability", "discrete mathematics",
    "MathSciNet", "mathematical modeling", "numerical analysis",
    "linear algebra", "differential equations"
  ],

  "Music": [
    "music", "musicology", "music history", "music theory",
    "musical performance", "classical music", "jazz", "ethnomusicology",
    "music criticism", "opera", "orchestra", "composers",
    "Grove Music Online", "popular music", "rock", "hip hop",
    "music education", "instrument", "symphony", "song"
  ],

  "Performing Arts": [
    "performing arts", "dance", "performance", "stage", "performing arts history",
    "choreography", "ballet", "modern dance", "musical theater",
    "opera", "circus arts", "performance studies", "live performance"
  ],

  "Philosophy": [
    "philosophy", "philosophical inquiry", "ethics", "epistemology",
    "metaphysics", "logic", "political philosophy", "moral philosophy",
    "aesthetics", "philosophy of mind", "philosophy of language",
    "existentialism", "analytic philosophy", "continental philosophy",
    "Philosopher's Index", "Cambridge Companions"
  ],

  "Political Science": [
    "political science", "politics", "political theory", "elections",
    "voting", "democracy", "policy analysis", "comparative politics",
    "international relations", "foreign policy", "political parties",
    "congress", "legislation", "public opinion", "political economy",
    "PAIS Index", "CQ Researcher", "diplomacy", "political institutions",
    "political behavior", "geopolitics", "conflict studies"
  ],

  "Psychology": [
    "psychology", "mental health", "behavioral science", "clinical psychology",
    "cognitive psychology", "social psychology", "developmental psychology",
    "counseling", "therapy", "psychiatry", "psychotherapy",
    "mental disorders", "DSM", "APA PsycInfo", "personality",
    "emotional intelligence", "trauma", "anxiety", "depression",
    "neuroscience", "behavior", "motivation", "learning theory",
    "child psychology", "abnormal psychology"
  ],

  "Public and International Affairs": [
    "public affairs", "international affairs", "foreign policy",
    "diplomacy", "global governance", "international relations",
    "public policy", "geopolitics", "national security", "terrorism",
    "CIAO", "PAIS Index", "think tanks", "policy research",
    "international organizations", "UN", "NATO", "world politics",
    "global issues", "international security", "counter terrorism"
  ],

  "Religion": [
    "religion", "theology", "religious studies", "spirituality",
    "world religions", "faith", "church", "scripture", "ethics",
    "religious history", "christianity", "islam", "judaism",
    "hinduism", "buddhism", "bible", "quran", "religious texts",
    "HeinOnline", "Cambridge Companions", "religious movements"
  ],

  "Sociology": [
    "sociology", "social science", "social structures", "social theory",
    "social inequality", "community", "social movements", "race and society",
    "gender and society", "class", "stratification", "deviance",
    "criminology", "crime", "family sociology", "urban sociology",
    "SocINDEX", "Blackwell Encyclopedia of Sociology", "social research",
    "qualitative research", "survey research", "social policy"
  ],

  "Theatre": [
    "theatre", "theater", "drama", "stage", "plays", "theatrical production",
    "acting", "stagecraft", "dramaturgy", "playwriting", "Broadway",
    "off-Broadway", "Digital Theatre+", "dramatic literature",
    "performance", "directing", "theatre history", "Greek drama"
  ],

  // ─── GENERAL & REFERENCE ───────────────────────────────────────────────────

  "Biographies": [
    "biographies", "biography", "biographical information", "profiles",
    "famous people", "notable people", "notable figures", "life story",
    "biography reference", "Gale in Context: Biography",
    "Marquis Who's Who", "celebrity profiles", "political figures",
    "historical figures", "authors"
  ],

  "Book Reviews": [
    "book reviews", "book criticism", "literary reviews", "book recommendations",
    "Book Review Digest", "Gale Literature: Book Review Index",
    "Choice Reviews", "book evaluation"
  ],

  "Case Studies": [
    "case studies", "business cases", "case analysis", "company case studies",
    "Harvard Business Review", "Sage Business Cases",
    "Harvard cases", "business scenarios", "real-world examples"
  ],

  "Current Events": [
    "current events", "current affairs", "contemporary issues",
    "today's news", "breaking news", "recent news", "what's happening",
    "news today", "global events", "national events", "Gale in Context: College",
    "Gale in Context: Opposing Viewpoints", "CQ Researcher"
  ],

  "Demographics": [
    "demographics", "population data", "census", "population statistics",
    "demographic data", "household data", "community data",
    "data.census.gov", "Social Explorer", "Infoshare", "NYCData",
    "Neighborhood Change Database", "population trends",
    "age distribution", "income data", "race data", "ethnicity data",
    "urban data", "neighborhood data", "GIS"
  ],

  "Dictionaries & Encyclopedias": [
    "dictionaries", "encyclopedias", "reference", "encyclopedia entries",
    "dictionary", "definitions", "reference works", "background information",
    "Britannica Academic", "Oxford Reference", "Gale eBooks",
    "Cambridge Companions", "Grove Art Online", "Grove Music Online",
    "Oxford English Dictionary", "OED", "encyclopedia britannica"
  ],

  "Dissertations & Theses": [
    "dissertations", "theses", "graduate research", "doctoral dissertation",
    "masters thesis", "academic research", "ProQuest Dissertations",
    "CUNY Academic Works", "graduate theses", "phd research"
  ],

  "Ebooks": [
    "ebooks", "electronic books", "digital books", "online books",
    "Ebook Central", "eBook Collection", "O'Reilly", "Very Short Introductions",
    "Loeb Classical Library", "Oxford Handbooks Online",
    "full text books", "digital library"
  ],

  "News": [
    "news", "newspapers", "journalism", "current events", "press",
    "media coverage", "news articles", "daily news", "Factiva",
    "New York Times", "Wall Street Journal", "Financial Times",
    "Gale OneFile: News", "Nexis Uni", "news archives",
    "regional news", "international news", "Readers' Guide"
  ],

  "Primary Sources Databases": [
    "primary sources", "primary source databases", "archival documents",
    "historical documents", "original sources", "archives", "manuscripts",
    "primary research", "Gale Primary Sources", "historical newspapers",
    "historical records", "colonial documents", "19th century",
    "18th century", "17th century", "historical collections",
    "special collections"
  ],

  "Statistics": [
    "statistics", "statistical data", "data", "datasets", "quantitative data",
    "numerical data", "data analysis", "Statista", "UN Data",
    "World Bank data", "OECD", "Statistical Abstract",
    "economic statistics", "health statistics", "social statistics",
    "government data", "open data", "research data", "ICPSR",
    "market statistics", "global statistics"
  ],

  "Videos & Movies": [
    "videos", "movies", "streaming video", "films", "documentaries",
    "educational videos", "video content", "Academic Video Online",
    "Kanopy", "Digital Theatre+", "TV Choice", "JoVE",
    "Counseling & Therapy", "Bates' Visual Guides",
    "streaming", "online video", "film clips", "lectures"
  ]

};

export default synonymMap;
