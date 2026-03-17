/**
 * Newman Library — Databases
 * Each entry: name, description, url, subjects (canonical keys from subjects-synonyms.js)
 */

const databases = [

  // ── A ──────────────────────────────────────────────────────────────────────

  {
    name: "ABI/INFORM Global",
    description: "Find articles from trade journals and magazines, scholarly journals, and general interest magazines covering accounting, advertising, business, company information, industry information, management, marketing, real estate, economics, finance, human resources, and international business.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156258",
    subjects: ["Accounting","Advertising","Business","Company Information","Industry Information","Management","Marketing","Real Estate","Economics","Finance","International Business"]
  },
  {
    name: "Academic Search Complete",
    description: "Contains full text access to nearly 3,200 magazines and journals covering academic areas of study including social sciences, humanities, education, computer sciences, engineering, language and linguistics, arts & literature, medical sciences, and ethnic studies. Part of EBSCOhost.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156259",
    subjects: ["Education","English","History","Sociology","Anthropology","Art","Health","Languages","Communication Studies","Science","Biology","Chemistry","Physics","Black Studies","Women's Studies","LGBTQ Studies","Environmental Science","Political Science","Psychology","Mathematics","Music","Philosophy","Religion","Film Studies","Journalism"]
  },
  {
    name: "Academic Video Online (Alexander Street Press)",
    description: "More than 70,000 streaming video titles spanning a range of subject areas including anthropology, business, counseling, film, health, history, music, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-53484405",
    subjects: ["Anthropology","Business","Film Studies","Health","History","Music","Videos & Movies","Psychology"]
  },
  {
    name: "ACS Publications",
    description: "Access to 25 journals from the American Chemical Society including Biochemistry, Environmental Science & Technology, Journal of the American Chemical Society, Journal of Organic Chemistry, and Journal of Physical Chemistry A&B.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156264",
    subjects: ["Chemistry","Biology","Environmental Science","Science"]
  },
  {
    name: "African American Historical Serials Collection",
    description: "Full text of magazines, newspapers, reports, and annuals from 1816-1922 from churches and educational and service institutions.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-67443414",
    subjects: ["Black Studies","History","Primary Sources Databases"]
  },
  {
    name: "African American Newspapers (Readex)",
    description: "Full text of articles from 1827-1998 from 270 newspapers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-69109658",
    subjects: ["Black Studies","History","News","Primary Sources Databases"]
  },
  {
    name: "Alt-Press Watch",
    description: "Newspaper and magazine articles from the alternative and independent press.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156262",
    subjects: ["News","Journalism","Current Events"]
  },
  {
    name: "America: History & Life",
    description: "The core database for locating journal articles, book and media reviews, and dissertations on the history and culture of the United States and Canada.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156263",
    subjects: ["History","Primary Sources Databases"]
  },
  {
    name: "America in Protest: Records of Anti-Vietnam War Organizations, The Vietnam Veterans Against the War",
    description: "FBI reports dealing with every aspect of antiwar work carried out by the Vietnam Veterans Against the War. Also includes surveillance on a variety of other antiwar groups and individuals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156501",
    subjects: ["History","Political Science","Primary Sources Databases","Government"]
  },
  {
    name: "American Antiquarian Society Historical Periodicals Collection",
    description: "Full text of magazine and newspaper articles from thousands of American periodicals published from 1693-1877.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-43386759",
    subjects: ["History","Primary Sources Databases","News"]
  },
  {
    name: "American Fiction, 1774-1920",
    description: "Novels, short stories, romances, fictitious biographies, travel accounts, allegories, and tract-like tales.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-19470554",
    subjects: ["English","History","Primary Sources Databases"]
  },
  {
    name: "American Periodicals",
    description: "Digitized images of 1,500 American periodicals, both popular and scholarly, published between 1740 and 1940.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156266",
    subjects: ["History","News","Primary Sources Databases","Journalism"]
  },
  {
    name: "Amsterdam News (1922-1993)",
    description: "Full text of the Amsterdam News from 1922 through 1993.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-36383031",
    subjects: ["Black Studies","News","History","Journalism"]
  },
  {
    name: "Annual Reviews",
    description: "Essays by scholars discuss current trends and recent important research in the fields of science, psychology, sociology, political science and anthropology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156267",
    subjects: ["Science","Psychology","Sociology","Political Science","Anthropology"]
  },
  {
    name: "AnthroSource",
    description: "Current issues of American Anthropological Association's journals and bulletins as well as archived issues of all the AAA's journals, newsletters, and bulletins.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156268",
    subjects: ["Anthropology"]
  },
  {
    name: "APA Books",
    description: "All books published by the American Psychological Association (APA) from 2001 to 2013 (including the APA Handbooks series).",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156433",
    subjects: ["Psychology","Ebooks"]
  },
  {
    name: "APA Handbooks",
    description: "Comprehensive reference works detailing psychology subdisciplines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156483",
    subjects: ["Psychology","Dictionaries & Encyclopedias"]
  },
  {
    name: "APA PsycInfo",
    description: "The place to begin any search for sources in the field of psychology. Over 5 million records for journal articles, book chapters, and dissertations. Formerly known as PsycINFO.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156385",
    subjects: ["Psychology","Health"]
  },
  {
    name: "Applied Science & Business Periodicals Retrospective",
    description: "Indexing of articles in business and science magazines from 1913-1983.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-81704822",
    subjects: ["Business","Science","History"]
  },
  {
    name: "Applied Science & Technology Source",
    description: "Covers every area of science, engineering, and technology. Sources include trade and industrial publications, journals issued by professional and technical societies, and specialized subject journals. Coverage back to 1913.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156269",
    subjects: ["Science","Computer Information Systems","Physics","Chemistry","Biology"]
  },
  {
    name: "Archives of Latin American and Caribbean History, Sixteenth to Twentieth Century",
    description: "Primary source material, academic journal articles, maps, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156508",
    subjects: ["Latin American Studies","Caribbean Studies","History","Primary Sources Databases"]
  },
  {
    name: "Art Abstracts",
    description: "Art Abstracts contains article citations and abstracts published in art publications from around the world and provides a comprehensive record of art reproductions appearing in the indexed publications.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156434",
    subjects: ["Art"]
  },
  {
    name: "Arte Publico Hispanic Historical Collections",
    description: "Archival collections documenting the history of Latinx and Hispanic culture in the United States from the colonial era to 1960. Includes advertisements, books, broadsides and pamphlets, editorials, essays, letters and telegrams, newspapers, photographs, poems, short stories, and speeches.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-55653020",
    subjects: ["Latinx Studies","Latin American Studies","History","Primary Sources Databases"]
  },
  {
    name: "Arts and Humanities Citation Index",
    description: "Analyze who cites whom in arts and humanities journals from 1975 to the present. Part of the Web of Science database.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156271",
    subjects: ["Art","History","English","Music","Philosophy","Religion","Theatre","Performing Arts"]
  },
  {
    name: "Artstor",
    description: "Over 1.8 million digital images in the arts, architecture, humanities, and sciences.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-8807138",
    subjects: ["Art","History"]
  },
  {
    name: "Audit Analytics",
    description: "Detailed audit information on over 1,500 accounting firms and 20,000 publicly registered companies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156272",
    subjects: ["Accounting","Company Information"]
  },

  // ── B ──────────────────────────────────────────────────────────────────────

  {
    name: "BankFocus (BVD)",
    description: "Financial data for 25,000 public and private banks around the world.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156273",
    subjects: ["Finance","Economics","Company Information"]
  },
  {
    name: "BankFocus (WRDS)",
    description: "Sourced by Bureau van Dijk from annual reports, information providers and regulatory sources. Detailed info on 43,000 banks (US and non-US). Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-48163659",
    subjects: ["Finance","Economics","Company Information"]
  },
  {
    name: "Bank Regulatory (formerly FDIC)",
    description: "Includes datasets for accounting data for bank-holding companies, commercial banks, savings banks, and savings and loans institutions. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156324",
    subjects: ["Finance","Accounting","Economics"]
  },
  {
    name: "Baruch College Archives",
    description: "Materials documenting the history, mission, and daily functioning of Baruch College, as well as unique collections on topics such as the history of finance and the life of Bernard Baruch.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7812600",
    subjects: ["History","Primary Sources Databases"]
  },
  {
    name: "Baruch Geoportal",
    description: "Hosted by the Newman Library and providing geospatial data and resources, primarily for use with geographic information systems (GIS) software.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156274",
    subjects: ["Demographics","Statistics"]
  },
  {
    name: "Bates' Visual Guides to Physical Examination",
    description: "Videos of clinical skills required for physical exams. Includes OSCE (Objective Structural Clinical Examination) videos.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-35204939",
    subjects: ["Nursing","Health","Videos & Movies"]
  },
  {
    name: "Bibliography of the History of Art (BHA) and Répertoire international de la littérature de l'art (RILA)",
    description: "Covers European and American visual arts from antiquity to the present. Indexes and abstracts of art-related books, conference proceedings, dissertations, exhibition and dealers' catalogs, and articles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156436",
    subjects: ["Art","History"]
  },
  {
    name: "Biography Reference Bank",
    description: "Profiles of celebrities, politicians, business people, writers, actors, sports figures, artists, scientists, and others from the issues of Current Biography magazine.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156275",
    subjects: ["Biographies"]
  },
  {
    name: "Biography Reference Center",
    description: "Brief biographies from reference works.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156459",
    subjects: ["Biographies"]
  },
  {
    name: "BIOSIS Citation Index",
    description: "Journal articles in life sciences and biomedicine.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-24662164",
    subjects: ["Biology","Health","Science"]
  },
  {
    name: "Birds of the World",
    description: "Image and video galleries showing behaviors, habitat, nests, eggs and nestlings, and recordings of bird songs and calls. A project of the Cornell Lab of Ornithology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156277",
    subjects: ["Biology","Science"]
  },
  {
    name: "Black Economic Empowerment: The National Negro Business League",
    description: "Documents from the National Negro Business League, an organization founded by Booker T. Washington in 1900.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156502",
    subjects: ["Black Studies","History","Business","Primary Sources Databases"]
  },
  {
    name: "Black Freedom Struggle in the United States",
    description: "A collection of primary sources from 1790 to the present.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-58544425",
    subjects: ["Black Studies","History","Primary Sources Databases"]
  },
  {
    name: "Black Thought and Culture",
    description: "Essays, letters and other papers from over 1100 African American authors that document historic events and contemporary culture.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156278",
    subjects: ["Black Studies","History","English"]
  },
  {
    name: "Blackwell Encyclopedia of Sociology",
    description: "Over 1800 entries / 3.5 million words on all aspects of sociology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156279",
    subjects: ["Sociology","Dictionaries & Encyclopedias"]
  },
  {
    name: "Bloomberg Businessweek Archive",
    description: "All issues from 1929-2000.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-20301854",
    subjects: ["Business","Finance","News","History"]
  },
  {
    name: "Bloomberg Professional",
    description: "Available in the Subotnick Financial Services Center. Provides real-time and historical access to data, analytics, news, and other information related to financial asset classes: equities, FX, money, fixed income, commodities and energy.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156472",
    subjects: ["Finance","Economics","Company Information"]
  },
  {
    name: "Bloomberg Tax",
    description: "Federal and state court decisions, rulings and regulations on income, estates and gifts, foreign income, and real estate taxes; tax planning sources for international taxes; and BNA TAX portfolios.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-22520136",
    subjects: ["Taxation","Law","Accounting"]
  },
  {
    name: "Book Review Digest Plus",
    description: "A convenient way to find just book reviews published as early as 1903. An EBSCOhost database.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156280",
    subjects: ["Book Reviews"]
  },
  {
    name: "Books@Ovid",
    description: "Books in evidence-based practice for medicine, nursing, and allied health.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156510",
    subjects: ["Nursing","Health","Ebooks"]
  },
  {
    name: "Britannica Academic",
    description: "Access to the Encyclopedia Britannica and Merriam-Webster's Collegiate Dictionary.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-33153771",
    subjects: ["Dictionaries & Encyclopedias"]
  },
  {
    name: "BrowZine",
    description: "Browse the table of contents for scholarly journals we have access to.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-44670552",
    subjects: ["Information Studies"]
  },
  {
    name: "Business Expert Press (iG Library)",
    description: "Ebook collection focused on topics in business, management, etc.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156495",
    subjects: ["Business","Management","Ebooks"]
  },
  {
    name: "Business Source Complete",
    description: "Search over 3,000 business magazines and trade journals covering management, economics, finance, accounting, and international business.",
    url: "https://guides.newman.baruch.cuny.edu/databases/A-B#s-lg-content-7156283",
    subjects: ["Business","Economics","Finance","Accounting","Management","Marketing","International Business"]
  },

  // ── C ──────────────────────────────────────────────────────────────────────

  {
    name: "Calcbench",
    description: "Financial data platform providing company financials and fundamental research for over 12,000 listed public companies. Includes financials, footnotes, and source documents of every 10-K, 10-Q, Earnings Releases, proxy statements, 8-Ks, and SEC comment letters.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-63756585",
    subjects: ["Finance","Accounting","Company Information"]
  },
  {
    name: "Cambridge Companions",
    description: "Best for literature, philosophy, religion (overviews of concepts, themes, characters, authors, and more). Includes thousands of articles from 400 authoritative guides from Cambridge University Press.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156437",
    subjects: ["English","Philosophy","Religion","History","Dictionaries & Encyclopedias"]
  },
  {
    name: "CCH Accounting Research Manager",
    description: "FASB Codification of Accounting Standards; pre-Codification and other accounting standards and auditing standards from AICPA, EITF, IASB, PCAOB and government agencies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156286",
    subjects: ["Accounting","Taxation","Law"]
  },
  {
    name: "CCH AnswerConnect",
    description: "Topical research guide covering tax, antitrust, securities and business law; integrates current law and regulations with relevant case law, administrative materials and authored articles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156420",
    subjects: ["Taxation","Law","Business","Accounting"]
  },
  {
    name: "Center for Research Libraries",
    description: "Newspapers, journals, documents, archives, and other traditional and digital resources from a global network of sources.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156491",
    subjects: ["History","Primary Sources Databases"]
  },
  {
    name: "Chicago Defender (1909-2010)",
    description: "Full text access to all content (articles, ads, etc.) from 1909 to 2010.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-67471982",
    subjects: ["Black Studies","News","History","Journalism"]
  },
  {
    name: "Chicago Manual of Style",
    description: "Full text to the latest edition of The Chicago Manual of Style.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-78595523",
    subjects: ["English","Journalism","Information Studies"]
  },
  {
    name: "Choice Reviews",
    description: "Reviews of academic books, electronic media, and internet resources of interest to those in higher education.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156287",
    subjects: ["Book Reviews"]
  },
  {
    name: "CIAO: Columbia International Affairs Online",
    description: "Reports from think tanks and research organizations covering issues related to world politics, diplomacy, social issues and the economy.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156288",
    subjects: ["Public and International Affairs","Political Science","Sociology","Government"]
  },
  {
    name: "CINAHL Complete",
    description: "Largest collection of journal articles covering the field of nursing and allied health. Includes coverage of health services administration.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156289",
    subjects: ["Nursing","Health"]
  },
  {
    name: "CIOS",
    description: "Covers communication studies, rhetoric, journalism, mass communication, and speech.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156290",
    subjects: ["Communication Studies","Journalism"]
  },
  {
    name: "ComAbstracts",
    description: "Find articles and books in communication studies and allied fields.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156291",
    subjects: ["Communication Studies"]
  },
  {
    name: "Communication & Mass Media Complete",
    description: "A comprehensive index to more than 690 journals in communication, mass media, and other closely-related fields.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156292",
    subjects: ["Communication Studies","Journalism"]
  },
  {
    name: "COMPUSTAT Global and Emerging Markets",
    description: "Financial and market data on more than 13,000 international companies in more than 80 countries. Produced by Standard & Poor's. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156293",
    subjects: ["Finance","Economics","Company Information","International Business"]
  },
  {
    name: "COMPUSTAT North America",
    description: "Standardized financial data from the SEC filings of U.S. and Canadian companies. Includes twenty years of annual and quarterly balance sheets, income statements and cash flow statements. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156294",
    subjects: ["Finance","Accounting","Company Information"]
  },
  {
    name: "Computing Reviews",
    description: "Reviews of computer science literature, including books, articles, conference proceedings, theses, and technical reports. Published by the Association for Computing Machinery.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156295",
    subjects: ["Computer Information Systems","Science"]
  },
  {
    name: "Conference Board",
    description: "An independent research organization that provides economic analysis of the U.S. economy, surveys of Fortune 500 companies, case studies, and research on management issues such as training, HR, compensation and corporate governance.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156296",
    subjects: ["Economics","Management","Business","Industry Information"]
  },
  {
    name: "Counseling & Therapy",
    description: "Videos for the study of social work, psychotherapy, psychology, and psychiatric counseling. Includes counseling sessions and demonstrations; consultations; lectures; presentations; interviews.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156482",
    subjects: ["Psychology","Health","Videos & Movies"]
  },
  {
    name: "CQ Researcher",
    description: "Research current, emerging and controversial topics. Reports include milestone dates, the merits of opposite viewpoints, and sources for further research.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156299",
    subjects: ["Current Events","Political Science","Government","Public and International Affairs","Environmental Science","Sociology","Health","Education","Law","Economics"]
  },
  {
    name: "CRSP",
    description: "Historical descriptive information and market data for issues listed on the NYSE (1925-), AMEX (1962-) and Nasdaq (1972-). Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156301",
    subjects: ["Finance","Economics","Statistics"]
  },
  {
    name: "CRSP/Compustat Merged",
    description: "Provides concurrent access to CRSP price, distribution and total return data and Compustat fundamental data. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156302",
    subjects: ["Finance","Economics","Company Information"]
  },
  {
    name: "CUNY Academic Works",
    description: "A repository of the scholarly, creative, and pedagogical works authored by members of the Baruch College community: articles, book chapters, conference papers, working papers, datasets, master's theses, undergraduate honors theses, and capstone projects.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-26226169",
    subjects: ["Dissertations & Theses"]
  },

  // ── D ──────────────────────────────────────────────────────────────────────

  {
    name: "data.census.gov",
    description: "Population data from the U.S. Census Bureau, including the decennial census, American Community Survey, Business Patterns, Economic Census, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156265",
    subjects: ["Demographics","Statistics","Government"]
  },
  {
    name: "Data Citation Index",
    description: "Find datasets and the number of times they have been cited.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-24662223",
    subjects: ["Statistics","Information Studies"]
  },
  {
    name: "DealScan (WRDS)",
    description: "Details on global loan market deals, high-yield bond and private placement data covering over 200,000 transactions. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156305",
    subjects: ["Finance","Economics"]
  },
  {
    name: "Derwent Innovations Index",
    description: "Find patents and how often they have been cited.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-24662287",
    subjects: ["Science","Computer Information Systems"]
  },
  {
    name: "Digital Media Library",
    description: "Streaming videos of Baruch College events, tutorials, and lectures by Baruch faculty, and other locally produced digital media.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-47988294",
    subjects: ["Videos & Movies"]
  },
  {
    name: "Digital Theatre+",
    description: "Streaming video of theatrical productions along with video documentaries, commentaries, and interviews. Also includes lesson plans, essays, guides, and other written materials.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-64100009",
    subjects: ["Theatre","Performing Arts","Film Studies","Videos & Movies"]
  },
  {
    name: "Directory of Open Access Books",
    description: "Full text of ebooks freely available online.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156466",
    subjects: ["Ebooks"]
  },
  {
    name: "Directory of Open Access Journals",
    description: "Directory that indexes and provides access to quality open access, peer-reviewed journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156306",
    subjects: ["Information Studies"]
  },
  {
    name: "Dow Jones Averages",
    description: "Daily data on the Dow Jones Industrial Average, the Dow Jones Transportation Average, and the Dow Jones Utility Average. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-7156308",
    subjects: ["Finance","Statistics","Economics"]
  },
  {
    name: "DSM Library",
    description: "Includes the full text of the DSM-5 (the latest edition of the Diagnostic and Statistical Manual of Mental Disorders) from the American Psychiatric Association.",
    url: "https://guides.newman.baruch.cuny.edu/databases/C-D#s-lg-content-35105629",
    subjects: ["Psychology","Health"]
  },

  // ── E ──────────────────────────────────────────────────────────────────────

  {
    name: "Ebony Magazine Archive",
    description: "Full text access to Ebony from November 1945 to June 2014.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-67443474",
    subjects: ["Black Studies","History","News"]
  },
  {
    name: "Ebook Central",
    description: "A collection of over 150,000 ebooks on a wide range of subjects.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156309",
    subjects: ["Ebooks"]
  },
  {
    name: "eBook Collection",
    description: "This ebook collection covers all subject areas.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156366",
    subjects: ["Ebooks"]
  },
  {
    name: "EBSCOhost Databases",
    description: "From this page, you can pick one or more databases from EBSCOhost to search one at a time or as a group.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156480",
    subjects: ["Information Studies"]
  },
  {
    name: "EconLit with Full-text",
    description: "Indexes over 450 of the top journals in economics, economic theory and economic history.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156310",
    subjects: ["Economics","History"]
  },
  {
    name: "Economist Historical Archive, 1843-2015",
    description: "A complete searchable copy of every issue of The Economist from 1843 to 2015.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156439",
    subjects: ["Economics","News","History","Current Events","International Business"]
  },
  {
    name: "Education Source",
    description: "One of the two main databases indexing the literature of education (the other is ERIC). Includes scholarly journal articles, articles from professional publications, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156311",
    subjects: ["Education"]
  },
  {
    name: "Eighteenth Century Collections Online",
    description: "Digital images of every page of 180,000 books published during the 18th century in the fields of history, literature, religion, law, fine arts, science and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156314",
    subjects: ["History","Primary Sources Databases","English","Law","Religion","Art"]
  },
  {
    name: "eMarketer",
    description: "Sources on digital marketing, advertising, media, and e-commerce.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156424",
    subjects: ["Marketing","Advertising","Industry Information"]
  },
  {
    name: "Emerald Insight",
    description: "Collection of over 130 journals concentrated in the fields of management, HR, marketing, operations, and training.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156315",
    subjects: ["Management","Marketing","Business"]
  },
  {
    name: "EMIS",
    description: "News from emerging market countries along with company profiles and industry information from analysts, rating agencies, stock exchanges, government agencies and independent consulting firms.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156341",
    subjects: ["International Business","Company Information","Economics","Industry Information"]
  },
  {
    name: "ERIC (EBSCOhost)",
    description: "The premier database to find scholarly journal articles, research reports, and articles in professional journals in education and allied fields.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156316",
    subjects: ["Education"]
  },
  {
    name: "Essay & General Literature Index",
    description: "Index to essays and other collections of articles published in books.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156317",
    subjects: ["English","History","Philosophy","Sociology"]
  },
  {
    name: "Ethnic NewsWatch",
    description: "Articles from newspapers and magazines of the ethnic minority and native press with a special focus on African-American, Hispanic, Latino, Chicano, Native American, Asian-American, Jewish, Arab-American and European-American news.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156318",
    subjects: ["Black Studies","Latinx Studies","Asian Studies","News","Journalism"]
  },
  {
    name: "European Views of the Americas: 1493 to 1760",
    description: "Comprehensive guide to printed records about the Americas written in Europe before 1750.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156499",
    subjects: ["History","Latin American Studies","Primary Sources Databases"]
  },
  {
    name: "Eventus",
    description: "Perform event studies using CRSP data to measure security changes resulting from mergers, acquisitions, and other corporate events. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156469",
    subjects: ["Finance","Statistics"]
  },
  {
    name: "ExecuComp (COMPUSTAT)",
    description: "Three years of compensation history for directors, and one year for executives, for companies within the S&P 1500. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156320",
    subjects: ["Finance","Management","Company Information","Accounting"]
  },

  // ── F ──────────────────────────────────────────────────────────────────────

  {
    name: "Factiva",
    description: "Provides global news, business, and financial information from newspapers, magazines, newswires, and trade journals. Includes information on companies and industries, and financial profiles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156321",
    subjects: ["Business","Finance","News","Company Information","Current Events","Industry Information","Environmental Science","Political Science","Public and International Affairs"]
  },
  {
    name: "FactSet",
    description: "Current and historical global financial analytics for over 70,000 public and private companies worldwide. Monitor global markets with real-time quotes and data.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156517",
    subjects: ["Finance","Economics","Company Information"]
  },
  {
    name: "FAITS (Faulkner Advisory for IT Studies)",
    description: "Market research reports covering industry sectors in information technology, telecommunications, and the Internet.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156323",
    subjects: ["Computer Information Systems","Industry Information"]
  },
  {
    name: "FASB Accounting Standards Codification",
    description: "The basic version of the FASB Codification of Accounting Standards.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156440",
    subjects: ["Accounting"]
  },
  {
    name: "Financial Times - FT.com",
    description: "Access to all articles at FT.com including web-only content not found in library databases.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-81488184",
    subjects: ["Finance","Business","Economics","News","Current Events"]
  },
  {
    name: "Financial Times Historical Archive, 1888-2010",
    description: "Articles from the Financial Times published between 1888-2010.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156441",
    subjects: ["Finance","Business","Economics","History","News"]
  },
  {
    name: "Fitch Solutions BMI (formerly FitchConnect)",
    description: "Industry profiles, country risk assessment, economic and political analysis, financial market reports, and company profiles with SWOT analysis. Covers 20+ industry sectors in 200+ global markets.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-7156282",
    subjects: ["Economics","Industry Information","International Business","Company Information","Finance"]
  },
  {
    name: "Forbes Archive",
    description: "All issues from 1917-2000.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-20301873",
    subjects: ["Business","Finance","News","History"]
  },
  {
    name: "Fortune Magazine Archive",
    description: "Full text access to Fortune from 1930 to the present.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-67443538",
    subjects: ["Business","Finance","News","Company Information","History"]
  },
  {
    name: "Fuente Académica",
    description: "Full text of 450 scholarly journals from Latin America, Portugal and Spain.",
    url: "https://guides.newman.baruch.cuny.edu/databases/E-F#s-lg-content-67443622",
    subjects: ["Latin American Studies","Latinx Studies","Languages"]
  },

  // ── G ──────────────────────────────────────────────────────────────────────

  {
    name: "Gale Academic OneFile",
    description: "Articles from magazines and scholarly journals from a wide range of subjects.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156432",
    subjects: ["Current Events","News","History","Sociology","Science","Business"]
  },
  {
    name: "Gale Books and Authors",
    description: "Looking for a recommendation for a novel to read? Enter a book you like to find similar titles or just browse by genre.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-77456352",
    subjects: ["English","Book Reviews"]
  },
  {
    name: "Gale Business: Entrepreneurship",
    description: "Source of practical and background information on how to plan, fund, start, and manage a new business. Includes sample business plans.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-77456587",
    subjects: ["Business","Management"]
  },
  {
    name: "Gale Business: Insights",
    description: "Company and industry information: profiles, news articles, chronologies, rankings, SWOT analyses, market share, market size, etc.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156473",
    subjects: ["Business","Company Information","Industry Information"]
  },
  {
    name: "Gale Databases",
    description: "From this page, you can choose any one of the 45 different Gale databases we subscribe to.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156493",
    subjects: ["Information Studies"]
  },
  {
    name: "Gale Directory Library",
    description: "Includes Business Rankings Annual, Consultants and Consulting Organizations Directory, Market Share Reporter, Ward's Business Directory of U.S. Private and Public Companies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156431",
    subjects: ["Business","Industry Information","Company Information"]
  },
  {
    name: "Gale eBooks",
    description: "Find entries in hundreds of specialized dictionaries and encyclopedias. Excellent for background research.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156325",
    subjects: ["Dictionaries & Encyclopedias","Ebooks"]
  },
  {
    name: "Gale General OneFile",
    description: "Articles mostly from magazines and newspapers, as well as some scholarly journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156442",
    subjects: ["News","Current Events"]
  },
  {
    name: "Gale Health and Wellness",
    description: "Access to medical journals, magazines, reference works, multimedia, and more. Provides authoritative information on the full range of health-related issues, from current disease and disorder information to in-depth coverage of alternative medical practices.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507712",
    subjects: ["Health","Nursing"]
  },
  {
    name: "Gale in Context: Biography",
    description: "Combines over 330,000 biographies on nearly 220,000 people from nearly 80 Gale Group sources, along with full-text articles from more than 250 magazines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156276",
    subjects: ["Biographies"]
  },
  {
    name: "Gale in Context: College",
    description: "Mix of news and scholarly articles, reference essays, videos, and images, on popular research topics.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-60965414",
    subjects: ["Current Events","Dictionaries & Encyclopedias"]
  },
  {
    name: "Gale in Context: Environmental Studies",
    description: "Covers environmental issues. Full text of scholarly journal and magazine articles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507648",
    subjects: ["Environmental Science"]
  },
  {
    name: "Gale in Context: Global Issues",
    description: "International viewpoints on a broad spectrum of global issues, topics, and current events.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507546",
    subjects: ["Public and International Affairs","Current Events","Political Science","Environmental Science","Sociology","Economics"]
  },
  {
    name: "Gale in Context: Opposing Viewpoints",
    description: "Coverage of current social issues with topic overviews, statistics, primary documents, magazine and newspaper articles, and links to key associations and think tanks.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156372",
    subjects: ["Current Events","Political Science","Sociology","Environmental Science","Health","Law","Education","Economics","Women's Studies","LGBTQ Studies","Black Studies"]
  },
  {
    name: "Gale in Context: Science",
    description: "Full-text magazines, academic journals, news articles, experiments, images, videos, audio files, and links to vetted websites.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507264",
    subjects: ["Science","Biology","Chemistry","Physics","Environmental Science"]
  },
  {
    name: "Gale in Context: U.S. History",
    description: "Contextual information on hundreds of the most significant people, events and topics in U.S. history.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507426",
    subjects: ["History"]
  },
  {
    name: "Gale in Context: World History",
    description: "Contextual information on hundreds of the most significant people, events and topics in world history.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507510",
    subjects: ["History"]
  },
  {
    name: "Gale Legal Forms",
    description: "Downloadable legal forms (for New York state only).",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-77456846",
    subjects: ["Law"]
  },
  {
    name: "Gale Literature",
    description: "Find literary criticism, author biographies, work overviews, and full text of literary works. Includes MLA International Biography, Literature Criticism Online, Literature Resource Center, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156514",
    subjects: ["English","Book Reviews","Biographies"]
  },
  {
    name: "Gale Literature: Book Review Index",
    description: "Citations for five million book reviews (including full text for more than 630,000 reviews).",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507094",
    subjects: ["Book Reviews"]
  },
  {
    name: "Gale Literature: Dictionary of Literary Biography",
    description: "Lengthy profiles of novelists, playwrights, poets, etc.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156512",
    subjects: ["English","Biographies"]
  },
  {
    name: "Gale Literature: LitFinder",
    description: "Access to literary works and authors throughout history. Includes more than 130,000 full-text poems and 650,000+ poetry citations, as well as short stories, speeches, and plays.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507851",
    subjects: ["English","Theatre","Performing Arts"]
  },
  {
    name: "Gale Literature Criticism",
    description: "Good for getting a representative sampling of literary criticism of a particular work.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156345",
    subjects: ["English"]
  },
  {
    name: "Gale Literature Resource Center",
    description: "Find biographies, bibliographies, and critical analyses of more than 120,000 novelists, poets, essayists, journalists, and other writers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156346",
    subjects: ["English","Biographies"]
  },
  {
    name: "Gale OneFile: Contemporary Women's Issues",
    description: "Articles from magazines, journals, newsletters, pamphlets, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-41259320",
    subjects: ["Women's Studies"]
  },
  {
    name: "Gale OneFile: Health and Medicine",
    description: "Full-text articles on health and medical topics.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156332",
    subjects: ["Health","Nursing"]
  },
  {
    name: "Gale OneFile: Leadership and Management",
    description: "Scholarly journal and trade journal articles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-77456717",
    subjects: ["Management","Business"]
  },
  {
    name: "Gale OneFile: LegalTrac",
    description: "Indexing and selective full-text for major law reviews, law journals, specialty law and bar association journals and legal newspapers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-46507796",
    subjects: ["Law"]
  },
  {
    name: "Gale OneFile: News",
    description: "A collection of over 1,000 newspapers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156456",
    subjects: ["News","Current Events","Journalism"]
  },
  {
    name: "Gale OneFile: Nursing and Allied Health",
    description: "Articles from scholarly journals, professional journals, and newsletters.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156489",
    subjects: ["Nursing","Health"]
  },
  {
    name: "Gale OneFile: Popular Magazines",
    description: "Full text of articles from thousands of magazines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156520",
    subjects: ["News","Current Events"]
  },
  {
    name: "Gale Primary Sources",
    description: "Collections include Black Economic Empowerment, America in Protest, and The Savings and Loan Crisis.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156515",
    subjects: ["Primary Sources Databases","History"]
  },
  {
    name: "Gartner",
    description: "Analysis of IT markets for hardware, software, IT services, semiconductors and communications. Reports on IT issues in ten industries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156326",
    subjects: ["Computer Information Systems","Industry Information"]
  },
  {
    name: "Gateway to North America: People, Places, and Organizations of 19th-Century New York",
    description: "Features over 1500 residential and business directories, organization records, urban guidebooks, and other sources presenting a history of the people of New York City from the late eighteenth through the early twentieth century.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156486",
    subjects: ["History","Demographics","Primary Sources Databases"]
  },
  {
    name: "General Science Full Text",
    description: "Articles covering all scientific disciplines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156327",
    subjects: ["Science"]
  },
  {
    name: "Global Commodities: Trade, Exploration and Cultural Exchange",
    description: "Primary documents and sources about the history of 15 key commodities: chocolate, coffee, cotton, fur, opium, oil, porcelain, silver and gold, spices, sugar, tea, timber, tobacco, wheat, and wine and spirits.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-42323392",
    subjects: ["History","International Business","Economics","Primary Sources Databases"]
  },
  {
    name: "Google Scholar",
    description: "Search for scholarly articles, books, book chapters, conference proceedings, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156461",
    subjects: ["Information Studies"]
  },
  {
    name: "govinfo",
    description: "Free public access to official publications from all three branches of the Federal Government.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156328",
    subjects: ["Government","Law","Statistics","Primary Sources Databases"]
  },
  {
    name: "GrantForward",
    description: "Search for grant opportunities. Create a profile to get customized recommendations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-40617528",
    subjects: ["Information Studies"]
  },
  {
    name: "GreenFILE",
    description: "Scholarly, government and general-interest titles covering all aspects of human impact to the environment including global warming, green building, pollution, sustainable agriculture, renewable energy, recycling, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156329",
    subjects: ["Environmental Science"]
  },
  {
    name: "Grove Art Online",
    description: "Encyclopedia entries on artists, movements, techniques, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156373",
    subjects: ["Art","Dictionaries & Encyclopedias"]
  },
  {
    name: "Grove Music Online",
    description: "Encyclopedic entries on musicians, eras, movements, instruments, styles, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156374",
    subjects: ["Music","Dictionaries & Encyclopedias"]
  },
  {
    name: "GuideStar Pro (Candid)",
    description: "Financial and programmatic info on nonprofit organizations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-54588738",
    subjects: ["Business","Public and International Affairs","Sociology"]
  },
  {
    name: "Gun Regulation and Legislation in America",
    description: "Articles from magazines and journals; periodicals; key compiled federal legislative histories; relevant congressional hearings; CRS Reports; Supreme Court briefs; and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-47875638",
    subjects: ["Law","Political Science","Government","Current Events"]
  },

  // ── H ──────────────────────────────────────────────────────────────────────

  {
    name: "Handbook of Latin American Studies",
    description: "An annual bibliography on Latin America consisting of works in the social sciences and humanities selected and annotated by scholars.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156331",
    subjects: ["Latin American Studies","Caribbean Studies"]
  },
  {
    name: "Harvard Business Review",
    description: "Full text access from 1922 to the present. Does not include case studies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-72066630",
    subjects: ["Business","Management","Case Studies"]
  },
  {
    name: "Health Policy Reference Center",
    description: "Full text of articles from scholarly journals, magazines, trade journals, and books.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-51189632",
    subjects: ["Health","Public and International Affairs","Government"]
  },
  {
    name: "Health Poll Database",
    description: "Searchable questions and results, demographic crosstabs, and trends on every topic related to health.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-69329458",
    subjects: ["Health","Statistics","Demographics"]
  },
  {
    name: "Health Source: Nursing/Academic Edition",
    description: "Access over 550 scholarly full text journals in many medical disciplines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156333",
    subjects: ["Health","Nursing"]
  },
  {
    name: "HeinOnline",
    description: "Multidisciplinary content in more than 100 subject areas, including history, political science, criminal justice, LGBTQ+ studies, religious studies, international relations, women's studies, pre-law, and many more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-53075834",
    subjects: ["Law","Political Science","LGBTQ Studies","Women's Studies","History","Religion"]
  },
  {
    name: "History of Economic Thought",
    description: "Scholarly sources (book chapters and journal articles) covering all aspects of the evolution of ideas in economics.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-60351394",
    subjects: ["Economics","History"]
  },
  {
    name: "Humanities Source",
    description: "Journal and magazine articles about art, communications, dance, film, folklore, gender studies, history, journalism, literary and social criticism, literature, music, performing arts, philosophy, and religion.",
    url: "https://guides.newman.baruch.cuny.edu/databases/G-H#s-lg-content-7156460",
    subjects: ["Art","Communication Studies","Film Studies","Women's Studies","History","Journalism","English","Music","Performing Arts","Philosophy","Religion"]
  },

  // ── I ──────────────────────────────────────────────────────────────────────

  {
    name: "I/B/E/S",
    description: "Analysts' estimates of projected earnings, cash flow, dividends, and other financial items for U.S. and international companies. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156335",
    subjects: ["Finance","Economics"]
  },
  {
    name: "IBISWorld",
    description: "IBISWorld provides industry analysis for over 700 U.S. industries and hundreds of global industry reports.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156425",
    subjects: ["Industry Information","Business","Economics"]
  },
  {
    name: "ICPSR",
    description: "Archive of social science data for supporting quantitative research.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156336",
    subjects: ["Sociology","Political Science","Statistics","Demographics"]
  },
  {
    name: "IEEE Xplore",
    description: "Journal articles, conference proceedings, technical standards, and ebooks covering computer science, information science, and electrical engineering.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-10181872",
    subjects: ["Computer Information Systems","Science","Physics"]
  },
  {
    name: "iG Library",
    description: "Business books from Business Expert Press.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-47487421",
    subjects: ["Business","Management","Ebooks"]
  },
  {
    name: "IMF eLibrary",
    description: "Books, journals, and datasets from the International Monetary Fund.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-56730007",
    subjects: ["Economics","International Business","Finance","Statistics","Public and International Affairs"]
  },
  {
    name: "Independent Voices",
    description: "Articles from alternative press magazines and newspapers (1951-2015).",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-30021909",
    subjects: ["News","Journalism","Current Events"]
  },
  {
    name: "Industry Norms and Key Business Ratios Archives",
    description: "1979 to 2010.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156477",
    subjects: ["Business","Finance","Industry Information"]
  },
  {
    name: "Infogroup Historical Business (formerly ReferenceUSA Historical Data)",
    description: "Provides year-end snapshots of local business data from 1997 to 2024. Contains business identification, location, industry, corporation hierarchy, employment, sales.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156503",
    subjects: ["Business","Company Information","Industry Information","Demographics"]
  },
  {
    name: "Infoshare",
    description: "New York City data including population, immigration, health and socio-economic statistics.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156339",
    subjects: ["Demographics","Statistics","Government"]
  },
  {
    name: "International Encyclopedia of Communication",
    description: "Entries about all aspects of communication.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-35199680",
    subjects: ["Communication Studies","Dictionaries & Encyclopedias"]
  },
  {
    name: "International Security & Counter Terrorism Reference Center",
    description: "Content includes hundreds of full text journals and periodicals, reports, summaries, books, FAQs, and proprietary Background Information Summaries that pertain to terrorism and security.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-51189700",
    subjects: ["Public and International Affairs","Political Science","Government","Law"]
  },
  {
    name: "IOPscience",
    description: "Journals and ebooks from the IOP (Institute of Physics).",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-46046820",
    subjects: ["Physics","Science"]
  },
  {
    name: "ISS",
    description: "Corporate governance data covering companies in the S&P1500. Data on governance provisions, directors and shareholder proposals. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156395",
    subjects: ["Finance","Management","Company Information","Accounting"]
  },

  // ── J ──────────────────────────────────────────────────────────────────────

  {
    name: "J. Walter Thompson: Advertising America",
    description: "Publications, reports, research, memoranda, correspondence, meeting minutes, creative briefs, scripts, speeches, newsletters, artwork and advertisements created by the staff of the advertising firm J. Walter Thompson.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-42220691",
    subjects: ["Advertising","Marketing","History","Primary Sources Databases"]
  },
  {
    name: "JBI EBP Database (Ovid)",
    description: "For the fields of nursing, medicine, and health sciences, find evidence summaries, evidence-based recommended practices, best practice information sheets, systematic reviews, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156509",
    subjects: ["Nursing","Health"]
  },
  {
    name: "JET Magazine Archive",
    description: "Full text of JET from 1980-1989.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-67443661",
    subjects: ["Black Studies","History","News"]
  },
  {
    name: "Journal Citation Reports",
    description: "Evaluate and compare journals using citation data drawn from over 11,000 scholarly and technical journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156430",
    subjects: ["Information Studies"]
  },
  {
    name: "JoVE",
    description: "Video collection including content from JoVE Education: Biology and the JoVE Journal sections in biochemistry, biology, developmental biology, genetics, and neuroscience.",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-52581022",
    subjects: ["Biology","Chemistry","Science","Videos & Movies"]
  },
  {
    name: "JSTOR",
    description: "Premier database for deep access to back issues of scholarly journals from a wide range of subject areas. Note: this database does not include recent journal articles (most are at least 2-5 years old).",
    url: "https://guides.newman.baruch.cuny.edu/databases/I-J#s-lg-content-7156342",
    subjects: ["History","Sociology","Political Science","Economics","English","Anthropology","Philosophy","Religion","Art","Music","Environmental Science","Education","Psychology","Women's Studies","LGBTQ Studies","Black Studies","Latin American Studies","Asian Studies","Science","Mathematics","Law","Theatre","Film Studies","Communication Studies"]
  },

  // ── K ──────────────────────────────────────────────────────────────────────

  {
    name: "Kanopy",
    description: "Documentary and feature films available from this service include titles from World Cinema, PBS and the Criterion Collection.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-15851870",
    subjects: ["Film Studies","Videos & Movies"]
  },
  {
    name: "Key Business Ratios",
    description: "14 different ratios for 800 different industries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-7156478",
    subjects: ["Business","Finance","Industry Information"]
  },

  // ── L ──────────────────────────────────────────────────────────────────────

  {
    name: "LACLI",
    description: "Articles, theses, books, datasets and more in Latin American, Caribbean, Latinx, and Iberian studies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-73166666",
    subjects: ["Latin American Studies","Caribbean Studies","Latinx Studies"]
  },
  {
    name: "Legal Source",
    description: "Over 1,200 full-text journals and over 2.5 million records, including book reviews and case citations. Offers information on criminal justice, international law, federal law, organized crime, medical law, labor & human resource law, ethics, the environment.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-7156458",
    subjects: ["Law"]
  },
  {
    name: "LGBTQ+ Source",
    description: "Articles from the most important and historically significant LGBT journals, magazines and regional newspapers, as well as more than 150 full-text monographs and books.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-7156492",
    subjects: ["LGBTQ Studies"]
  },
  {
    name: "LGBTQ History and Culture",
    description: "Newspapers, newsletters, pamphlets, and other historical documents.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-19470621",
    subjects: ["LGBTQ Studies","History","Primary Sources Databases"]
  },
  {
    name: "Library & Information Science Source",
    description: "Full text for more than 460 publications and indexing for hundreds of high-quality journals, as well as books, research reports, and proceedings. Subject coverage encompasses librarianship, classification, cataloging, bibliometrics, online information retrieval, information management and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-7156344",
    subjects: ["Information Studies"]
  },
  {
    name: "Life Magazine Archive",
    description: "Full text of every issue of Life (1936-2000).",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-43391553",
    subjects: ["History","News","Art"]
  },
  {
    name: "LinkedIn Learning",
    description: "Over 16,000 expert-led courses across many subject areas with a focus on business, technology-related, and creative skills. Includes videos and ebooks.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-68922667",
    subjects: ["Business","Computer Information Systems","Videos & Movies"]
  },
  {
    name: "Loeb Classical Library",
    description: "Ebooks of classic works translated from Greek and Latin.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-23269036",
    subjects: ["History","English","Philosophy","Languages","Ebooks"]
  },
  {
    name: "LSEG Datastream Add-On for Workspace",
    description: "Allows for bulk retrieval of current and historical data found in Workspace, as well as historical macroeconomic statistics, Worldscope fundamentals, and ESG data.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-7156304",
    subjects: ["Finance","Economics","Statistics"]
  },
  {
    name: "LSEG Workspace",
    description: "Comprehensive platform for searching, monitoring, and analyzing financial information. Provides access to real time and historical market data, news, fundamental data, analytics, for companies and other asset classes.",
    url: "https://guides.newman.baruch.cuny.edu/databases/K-L#s-lg-content-64589639",
    subjects: ["Finance","Economics","Company Information","Industry Information"]
  },

  // ── M ──────────────────────────────────────────────────────────────────────

  {
    name: "Making of the Modern World",
    description: "Provides digital facsimile images on every page of 62,400 works of literature on the history of economics and business published from 1450 through 1850.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156444",
    subjects: ["Economics","History","Business","Primary Sources Databases"]
  },
  {
    name: "Mango Languages",
    description: "Language instruction in Arabic, Chinese, Croatian, Czech, Danish, Dutch, French, German, Greek, Hebrew, Hindi, Italian, Japanese, Korean, Portuguese, Russian, Spanish, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156470",
    subjects: ["Languages"]
  },
  {
    name: "MarketResearch.com",
    description: "Provides market research reports.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-52184981",
    subjects: ["Marketing","Industry Information"]
  },
  {
    name: "Market Research and American Business, 1935-1965",
    description: "Historical market research from 1935-1965.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-43998626",
    subjects: ["Marketing","History","Business"]
  },
  {
    name: "Marquis Who's Who",
    description: "Over one million current biographies taken from 20 Marquis Who's Who print titles.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156350",
    subjects: ["Biographies"]
  },
  {
    name: "MasterFILE Complete",
    description: "Full text access to about 1,880 periodicals in all subject areas.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156352",
    subjects: ["News","Current Events"]
  },
  {
    name: "MathSciNet (AMS)",
    description: "Database of the American Mathematical Society, provides access to over 55 years of Mathematical Reviews, current Mathematical Publications, and links to more than 50 other mathematical journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156353",
    subjects: ["Mathematics"]
  },
  {
    name: "MathSciNet (EBSCOhost)",
    description: "Database of the American Mathematical Society, provides access to over 55 years of Mathematical Reviews, current Mathematical Publications, and links to more than 50 other mathematical journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-36373838",
    subjects: ["Mathematics"]
  },
  {
    name: "MEDLINE (EBSCOhost)",
    description: "Find articles covering medicine, nursing, dentistry, veterinary medicine, the health care system and the preclinical sciences. Created by the National Library of Medicine.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156354",
    subjects: ["Health","Nursing","Biology","Science"]
  },
  {
    name: "Mental Measurements Yearbook",
    description: "Guide to psychological tests and measures.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-8200573",
    subjects: ["Psychology"]
  },
  {
    name: "Mergent Archives",
    description: "U.S. and international public company profiles. An annual historical record going back to 1909.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156358",
    subjects: ["Finance","Company Information","Business"]
  },
  {
    name: "Mergent BondViewer",
    description: "Includes active and inactive U.S. corporate bonds, municipal bonds, and retail notes, and offers ratings, historical pricing, summary of issue's covenants and provisions.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156445",
    subjects: ["Finance"]
  },
  {
    name: "Mergent EventsData",
    description: "Access to on-going updated information on stock-splits, mergers, tender offers, partial/full calls, name changes, etc.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156468",
    subjects: ["Finance","Company Information"]
  },
  {
    name: "Mergent FISD",
    description: "Mergent Fixed Income Securities Database (FISD) contains issue details on 140,000 publicly-offered taxable corporate bonds, medium term notes, U.S. Agency and Treasury debt. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156446",
    subjects: ["Finance"]
  },
  {
    name: "Mergent Market Atlas",
    description: "Company, industry, country, index, ESG and economic data displays and reports. Detailed company data on over 50,000 US and foreign public companies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156357",
    subjects: ["Finance","Company Information","Industry Information","Economics","International Business"]
  },
  {
    name: "Mergent News Reports",
    description: "Weekly news updates to Mergent Online.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156356",
    subjects: ["Finance","Company Information","News"]
  },
  {
    name: "Military & Government Collection",
    description: "Index to over 300 journals and magazines covering all branches of the military and government.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156359",
    subjects: ["Government","History","Political Science","Public and International Affairs"]
  },
  {
    name: "Mintel Academic",
    description: "Market research reports, analyst insights, and other media intelligence on numerous industries, thematic trends and consumers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156422",
    subjects: ["Marketing","Industry Information","Business"]
  },
  {
    name: "Mintel Market Sizes",
    description: "Mintel provides global industry information and country economic data. Industry data includes market size, market segmentation, market share, and Compound Annual Growth Rate (CAGR).",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156423",
    subjects: ["Marketing","Industry Information","Statistics"]
  },
  {
    name: "MLA International Bibliography",
    description: "The premier index of books and articles published on modern languages, literatures, folklore, and linguistics. Annually indexes over 50,000 books and articles from over 4,000 journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-44761534",
    subjects: ["English","Languages","Anthropology"]
  },
  {
    name: "MSCI GMI Ratings",
    description: "Data from 2001 containing approximately 225 unique data points for about 3,000 U.S. companies providing corporate governance data, analysis and risk assessment tools. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156298",
    subjects: ["Finance","Management","Company Information"]
  },

  // ── N ──────────────────────────────────────────────────────────────────────

  {
    name: "The Nation Archive",
    description: "Full text access to The Nation from 1865 through 2020.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-67523717",
    subjects: ["Political Science","History","Current Events","Journalism","News"]
  },
  {
    name: "National Archives: Online Public Access",
    description: "Catalog of NARA's nationwide holdings in the Washington, DC area, their regional archives, and the Presidential Libraries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156270",
    subjects: ["History","Government","Primary Sources Databases"]
  },
  {
    name: "National Geographic Virtual Library",
    description: "All issues of National Geographic 1888 to the present. Images as well as text can be searched.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156475",
    subjects: ["Science","History","Anthropology","Environmental Science"]
  },
  {
    name: "Nature Journals Online",
    description: "Access to Nature and other selected science journals from Nature Publishing Group.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-23192393",
    subjects: ["Science","Biology","Chemistry","Physics","Environmental Science"]
  },
  {
    name: "NBER Working Papers",
    description: "Full-text of working papers in economics from the National Bureau of Economics Research (NBER).",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156364",
    subjects: ["Economics","Finance"]
  },
  {
    name: "Neighborhood Change Database",
    description: "Contains census tract data from 1970 to 2010. Create reports that can be downloaded as tables and maps.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156365",
    subjects: ["Demographics","Statistics","Sociology"]
  },
  {
    name: "New York Times",
    description: "Online access to the New York Times.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156369",
    subjects: ["News","Current Events","Journalism"]
  },
  {
    name: "Nexis Uni",
    description: "Search regional, national and international newspapers, law, legislation and court cases. Find company profiles and business and industry news. Formerly known as LexisNexis Academic.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156343",
    subjects: ["News","Law","Company Information","Current Events","Journalism","Environmental Science","Political Science","Government","Business","Public and International Affairs"]
  },
  {
    name: "Nineteenth Century Collections Online",
    description: "Primary sources from the 19th century: monographs, newspapers, pamphlets, manuscripts, ephemera, maps, photographs, statistics, and other kinds of documents.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156488",
    subjects: ["History","Primary Sources Databases"]
  },
  {
    name: "NYCData",
    description: "Statistics on 16 areas of life in New York City including employment, business activity, income and wages, education and population.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156370",
    subjects: ["Demographics","Statistics","Economics"]
  },
  {
    name: "NYSE TAQ",
    description: "Intraday trades and quotes data for all stocks listed on the NYSE, AMEX, and NASDAQ. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/M-N#s-lg-content-7156371",
    subjects: ["Finance","Statistics"]
  },

  // ── O ──────────────────────────────────────────────────────────────────────

  {
    name: "O'Reilly",
    description: "Over 40,000 ebooks in information technology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-45593108",
    subjects: ["Computer Information Systems","Ebooks"]
  },
  {
    name: "OECD",
    description: "Books, papers, and statistical data published by the OECD.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156403",
    subjects: ["Economics","Statistics","International Business","Public and International Affairs"]
  },
  {
    name: "OneSearch",
    description: "Search in one place for books, articles, videos, and more. Combines in one searchable place the CUNY library catalog, a massive index of articles, and unique digital content from the library.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156518",
    subjects: ["Information Studies"]
  },
  {
    name: "OptionMetrics",
    description: "Reliable historical option price data, implied volatility calculations, volatility surfaces, and analytics. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156448",
    subjects: ["Finance","Statistics"]
  },
  {
    name: "Oxford English Dictionary (OED)",
    description: "The accepted authority on the evolution of the English language over the last millennium. An unsurpassed guide to the meaning, history, and pronunciation of over half a million words.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156449",
    subjects: ["English","Languages","Dictionaries & Encyclopedias"]
  },
  {
    name: "Oxford Handbooks Online",
    description: "Literature reviews of key topics in psychology, business, management, finance, economics, and political science.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156494",
    subjects: ["Psychology","Business","Finance","Economics","Political Science"]
  },
  {
    name: "Oxford Reference",
    description: "Online collection of over 100 reference titles in all subject areas published by Oxford University Press. Includes French, German, Spanish and Italian dictionaries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156375",
    subjects: ["Dictionaries & Encyclopedias","Languages"]
  },
  {
    name: "Oxford Research Encyclopedia of Communication",
    description: "Offers nearly 500 encyclopedia entries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-46046986",
    subjects: ["Communication Studies","Dictionaries & Encyclopedias"]
  },

  // ── P ──────────────────────────────────────────────────────────────────────

  {
    name: "PAIS Index",
    description: "Find articles and research reports on international public policy, social and economic issues, and international relations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156376",
    subjects: ["Public and International Affairs","Political Science","Economics","Government","Sociology","Environmental Science","Law","Education","Health"]
  },
  {
    name: "Passport (Euromonitor)",
    description: "Global market research database covering over 200 countries and 17 economic regional groups. Provides statistics, strategic analysis, reports, profiles and breaking news on industries, countries, companies, and consumers worldwide.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156319",
    subjects: ["Marketing","Industry Information","International Business","Economics","Statistics"]
  },
  {
    name: "Periodicals Archive Online",
    description: "Full text of older scholarly journals in the humanities and social sciences.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-36384211",
    subjects: ["History","English","Sociology","Political Science","Anthropology"]
  },
  {
    name: "Peterson's Career and Test Prep",
    description: "Create your own account to access test prep materials for GRE, LSAT, GMAT, MCAT, and as well as vocational exams.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-77466268",
    subjects: ["Education"]
  },
  {
    name: "Philosopher's Index",
    description: "Citations and abstracts to scholarly research in philosophy, published in journals and books since 1940.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156379",
    subjects: ["Philosophy"]
  },
  {
    name: "PHLX",
    description: "Trading data from the Philadelphia Stock Exchange covering over 740 equity options, 12 sector index options, 100 currency pairs and more than 2,800 stocks. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156380",
    subjects: ["Finance","Statistics"]
  },
  {
    name: "Physical Review Online Archive (PROLA)",
    description: "The American Physical Society's online archive for Physical Review Letters, Reviews of Modern Physics, and Physical Review.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156450",
    subjects: ["Physics","Science"]
  },
  {
    name: "Pivot",
    description: "Find funding opportunities for scholarly research.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-25501240",
    subjects: ["Information Studies"]
  },
  {
    name: "Policy File Index",
    description: "Reports and studies on public policy issues from think tanks, universities, government agencies, and research organizations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156381",
    subjects: ["Public and International Affairs","Government","Political Science"]
  },
  {
    name: "Preprint Citation Index",
    description: "Discover articles that have not been published yet in a journal but are available in pre-print servers.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-71569365",
    subjects: ["Science","Information Studies"]
  },
  {
    name: "PrivCo",
    description: "Business and financial data on major, non-publicly traded corporations, including family owned, private equity owned, venture backed, and international unlisted companies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156467",
    subjects: ["Finance","Company Information","Business"]
  },
  {
    name: "Professional Development Collection",
    description: "The most comprehensive collection of full text education journals including over 350 peer-reviewed titles and more than 200 educational reports.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156382",
    subjects: ["Education"]
  },
  {
    name: "Project MUSE",
    description: "Full text access to 300 scholarly journals in the humanities, social sciences and mathematics.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156383",
    subjects: ["History","English","Sociology","Political Science","Mathematics","Anthropology","Philosophy"]
  },
  {
    name: "PropertyShark",
    description: "Aggregate real estate data on residential and commercial properties in New York City. Property reports with photos, property specifications, zoning codes, tax assessment, title records, liens, maps and comparable sales.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156451",
    subjects: ["Real Estate","Demographics"]
  },
  {
    name: "ProQuest Databases",
    description: "Search any of the 16 databases the library gets from ProQuest (e.g. ABI/INFORM Global, Ethnic NewsWatch, Historical Newspapers, etc.).",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156481",
    subjects: ["Information Studies"]
  },
  {
    name: "ProQuest Dissertations & Theses Citation Index",
    description: "Discover dissertations and masters theses using the Web of Science interface.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-77479427",
    subjects: ["Dissertations & Theses"]
  },
  {
    name: "PubMed Central",
    description: "U.S. National Library of Medicine's digital archive of life sciences journal literature.",
    url: "https://guides.newman.baruch.cuny.edu/databases/O-P#s-lg-content-7156386",
    subjects: ["Biology","Health","Nursing","Science"]
  },

  // ── R ──────────────────────────────────────────────────────────────────────

  {
    name: "Radio Advertising Bureau",
    description: "Industry data and reports for those industries that use radio as an advertising platform.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-7156387",
    subjects: ["Advertising","Marketing","Industry Information"]
  },
  {
    name: "Readers' Guide Full Text Mega",
    description: "Comprehensive indexing and abstracting of articles in popular general-interest magazines published from 1892 to the present in the United States and Canada.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-7156388",
    subjects: ["News","Current Events","History"]
  },
  {
    name: "Reference Solutions",
    description: "Detailed information on more than 14 million U.S. businesses, 210 million U.S. residents, 855,000 U.S. health care providers, 1.5 million Canadian businesses, and 12 million Canadian households.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-7156390",
    subjects: ["Business","Company Information","Demographics"]
  },
  {
    name: "RefWorks",
    description: "Web-based service for saving and managing citations and for creating bibliographies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-7156391",
    subjects: ["Information Studies"]
  },
  {
    name: "Regional Business News",
    description: "Articles from over 75 regional, state or city business journals including Crain's New York Business.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-7156392",
    subjects: ["Business","Economics","News"]
  },
  {
    name: "Roper iPoll",
    description: "Public survey data from the Roper Center.",
    url: "https://guides.newman.baruch.cuny.edu/databases/Q-R#s-lg-content-61849756",
    subjects: ["Statistics","Demographics","Sociology","Political Science"]
  },

  // ── S ──────────────────────────────────────────────────────────────────────

  {
    name: "S&P Capital IQ",
    description: "Financial data, analytics, and research on public and private companies, bonds, funds, and industries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-8218745",
    subjects: ["Finance","Company Information","Economics","Business"]
  },
  {
    name: "S&P NetAdvantage",
    description: "Current and past stock prices, annual reports, SEC and Canadian SEDAR filings for publicly-traded companies; industry surveys; analyst reports; private company, and US and international markets information.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156406",
    subjects: ["Finance","Company Information","Business","Industry Information"]
  },
  {
    name: "Sage Business Cases",
    description: "Over 4,000 case studies on companies, industries, and business issues.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-48935964",
    subjects: ["Case Studies","Business","Management"]
  },
  {
    name: "Sage Journals",
    description: "Full text access to over 500 journals in the fields of communications; education; health sciences; management and organization studies; political science; psychology; and sociology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156452",
    subjects: ["Communication Studies","Education","Health","Management","Political Science","Psychology","Sociology"]
  },
  {
    name: "Sage Research Methods",
    description: "Use this database to help design research projects, conduct research, and write up findings. Focused on methodology, not disciplines, so it can be used across the social sciences, health sciences, and more.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156428",
    subjects: ["Sociology","Psychology","Health","Education"]
  },
  {
    name: "Savings and Loan Crisis Digital Archives",
    description: "Studies, analyses, testimony, talking points, and news clippings that detailed the origins of the S&L crisis and outlined solutions to the growing crisis in the late 1980s and early 1990s.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156463",
    subjects: ["Finance","History","Economics","Primary Sources Databases"]
  },
  {
    name: "Science Citation Index",
    description: "Find who cites whom in science articles published 1900 to the present. Part of the Web of Science database.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156396",
    subjects: ["Science","Biology","Chemistry","Physics"]
  },
  {
    name: "ScienceDirect",
    description: "Articles from over 2,500 journals covering the life sciences, physical sciences and engineering, the health sciences, and social sciences.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156397",
    subjects: ["Science","Biology","Chemistry","Physics","Health","Sociology","Environmental Science","Psychology","Economics","Engineering"]
  },
  {
    name: "SDC Mergers & Acquisitions (WRDS)",
    description: "Tracks changes in economic ownership at ultimate parent level — 150+ data elements, including target and acquirer profile information, deal terms, financial and legal advisor, stock premia. Coverage from 1970. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-81584221",
    subjects: ["Finance","Company Information"]
  },
  {
    name: "SDC New Issues (WRDS)",
    description: "Access issues of global equity and equity-related securities, including offerings of common stock (IPOs, secondary offerings), convertible debt, and convertible preferred stock. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-69205129",
    subjects: ["Finance","Company Information"]
  },
  {
    name: "Seventeenth and Eighteenth Century Burney Newspapers Collection",
    description: "17th and 18th century English newspapers and news pamphlets gathered by the Reverend Charles Burney. Most were published in London.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156474",
    subjects: ["History","News","Primary Sources Databases","Journalism"]
  },
  {
    name: "Simmons Insights",
    description: "Developed from survey data that asked Americans about themselves (demographic and psychographic data), the products/services (brands) they use and the media they consume, for advertising/marketing considerations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156497",
    subjects: ["Advertising","Marketing","Demographics","Statistics"]
  },
  {
    name: "Slavery & Anti-Slavery: A Transnational Archive",
    description: "Primary sources from the Atlantic slave trade (books, pamphlets, articles, manuscripts, and more).",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156487",
    subjects: ["Black Studies","History","Latin American Studies","Primary Sources Databases"]
  },
  {
    name: "Slavery in America and the World: History, Culture & Law",
    description: "Legal materials on slavery in the United States and the English-speaking world: every statute passed by every colony and state on slavery; every federal statute dealing with slavery; and all reported state and federal cases on slavery.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-28860130",
    subjects: ["Black Studies","History","Law","Primary Sources Databases"]
  },
  {
    name: "Social Explorer",
    description: "Provides easy access to demographic information about the United States. It contains hundreds of interactive data maps, including historical data back to 1940.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156399",
    subjects: ["Demographics","Statistics","Sociology"]
  },
  {
    name: "Social Science Citation Index",
    description: "Find who cites whom in social science journals published from 1956 to the present. Part of the Web of Science database.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156400",
    subjects: ["Sociology","Political Science","Economics","Psychology","Anthropology"]
  },
  {
    name: "Social Sciences Full Text",
    description: "Indexes and abstracts articles covering addiction studies, area studies, community health and medical care, corrections, criminal justice, economics, environmental studies, ethics, family studies, gender studies, geography, gerontology, law, public administration, political science, psychiatry, psychology, social work, sociology and urban studies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156401",
    subjects: ["Sociology","Political Science","Economics","Psychology","Anthropology","Law","History","Women's Studies","Environmental Science","Education","Public and International Affairs","Health","LGBTQ Studies","Black Studies"]
  },
  {
    name: "SocINDEX with Full Text",
    description: "Database with the full text for selected journals, monographs, books, and conference papers in sociology and related disciplines.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156402",
    subjects: ["Sociology"]
  },
  {
    name: "Springer Nature Link",
    description: "Access to selected scholarly journals and books published by Springer.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156471",
    subjects: ["Science","Biology","Chemistry","Physics","Mathematics","Computer Information Systems","Health"]
  },
  {
    name: "SRDS",
    description: "Online rates, data, and directory information on more than 100,000 media outlets for the advertising industry.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156404",
    subjects: ["Advertising","Marketing","Industry Information"]
  },
  {
    name: "SSRN (Social Science Research Network)",
    description: "A repository of social science research containing abstracts of scholarly working papers and forthcoming articles and a collection of over 100,000 downloadable full text documents.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156405",
    subjects: ["Economics","Finance","Law","Sociology","Political Science"]
  },
  {
    name: "Statista",
    description: "Statistical information on over 600 industries from over 10,000 different sources, such as market researchers, trade organizations, scientific publications, and government sources.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156476",
    subjects: ["Statistics","Industry Information","Marketing","Economics","Demographics","Environmental Science","Health","Education","Political Science","Sociology","Public and International Affairs"]
  },
  {
    name: "Statistical Abstract of the U.S.",
    description: "A statistical reference and guide to over 250 statistical publications and sources from government and private organizations.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156407",
    subjects: ["Statistics","Demographics","Government","Economics"]
  },

  // ── T ──────────────────────────────────────────────────────────────────────

  {
    name: "Teacher Reference Center",
    description: "Indexing and abstracts for more than 270 of the most popular teacher and administrator journals and magazines for professional educators.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156408",
    subjects: ["Education"]
  },
  {
    name: "Thomson Financial Insider Filing Data",
    description: "Thomson Financial Insiders Filings contains data of stock and derivatives transactions from Forms 3, 4, and 5 filed with the Securities and Exchange Commission (SEC). Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-7156409",
    subjects: ["Finance","Company Information","Accounting"]
  },
  {
    name: "Thomson Reuters Institutional (13f) Holdings",
    description: "Institutional Common Stock holdings and Transactions, as reported on Form 13F filed with the SEC. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-16205270",
    subjects: ["Finance","Company Information"]
  },
  {
    name: "Thomson Reuters TASS Lipper Hedge Fund Database (WRDS)",
    description: "Lipper Hedge Fund database provides quantitative performance data on over 7,500 actively reporting Hedge funds and Funds of Hedge Funds. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-78242390",
    subjects: ["Finance"]
  },
  {
    name: "Time Magazine Archive",
    description: "Full text of Time from 1923-2000.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-67443716",
    subjects: ["News","History","Current Events"]
  },
  {
    name: "Trade Catalogues and the American Home",
    description: "Illustrated catalogs and other marketing ephemera from 1850-1950.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-38664047",
    subjects: ["History","Marketing","Primary Sources Databases"]
  },
  {
    name: "TV Choice",
    description: "Streaming video for educational films.",
    url: "https://guides.newman.baruch.cuny.edu/databases/S-T#s-lg-content-48052769",
    subjects: ["Videos & Movies","Education"]
  },

  // ── U ──────────────────────────────────────────────────────────────────────

  {
    name: "UN Data",
    description: "A central repository of demographic, economic, and social data from several of the UN's agencies and divisions. The repository contains over 60 million data points for all of the world's countries.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-7156453",
    subjects: ["Statistics","Demographics","International Business","Economics","Public and International Affairs"]
  },
  {
    name: "Uniworld Online",
    description: "Online directory of American firms operating in foreign countries and foreign companies operating in the United States.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-7156421",
    subjects: ["International Business","Company Information"]
  },
  {
    name: "Urban Studies Abstracts",
    description: "Covers essential areas related to urban studies, including urban affairs, community development, urban history, and other areas of key relevance to the discipline.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-51189748",
    subjects: ["Sociology","Demographics","Government","History"]
  },
  {
    name: "USA Trade Online",
    description: "US export and import information on over 18,000 commodities worldwide. Annual data 1998 to date.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-7156410",
    subjects: ["International Business","Economics","Statistics","Industry Information"]
  },

  // ── V ──────────────────────────────────────────────────────────────────────

  {
    name: "Value Line",
    description: "Company ratings and reports with over 10 years of historical data including sales, profits, and earnings per share. Reports include share price projections and a financial forecast.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-7156411",
    subjects: ["Finance","Company Information","Industry Information"]
  },
  {
    name: "Vault",
    description: "Online library of career resources.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-73048726",
    subjects: ["Business","Management"]
  },
  {
    name: "Very Short Introductions",
    description: "Ebooks in social sciences: anthropology; business and management; criminology and criminal justice; economics; education; environment; human geography; politics; research and information; social work; sociology; and warfare and defense.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-55102734",
    subjects: ["Ebooks","Sociology","Anthropology","Economics","Education"]
  },
  {
    name: "Vivvix",
    description: "Spending data on advertising via seven media channels and subgroups by brand, company, and industry.",
    url: "https://guides.newman.baruch.cuny.edu/databases/U-V#s-lg-content-79109742",
    subjects: ["Advertising","Marketing","Industry Information","Statistics"]
  },

  // ── W ──────────────────────────────────────────────────────────────────────

  {
    name: "Wall Street Journal",
    description: "Online access to the Wall Street Journal.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156413",
    subjects: ["Finance","Business","Economics","News","Current Events"]
  },
  {
    name: "WARC",
    description: "Unique marketing information: case studies that reveal campaign strategies of leading brands; articles and best practice guides; market intelligence, including ad forecasts, brand profiles, conference reports.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156454",
    subjects: ["Marketing","Advertising","Industry Information"]
  },
  {
    name: "Web of Science",
    description: "Includes Science Citation Index, Social Sciences Citation Index, and Arts & Humanities Citation Index.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156414",
    subjects: ["Science","Sociology","Art","History","English"]
  },
  {
    name: "Westlaw (Thomson Reuters)",
    description: "Includes decisions and case law from state and federal courts, laws from all 50 states, federal regulations, American Law Reports, American Jurisprudence 2d, and articles from law reviews and journals.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156415",
    subjects: ["Law"]
  },
  {
    name: "Wiley Online Library",
    description: "Full-text database with more than 320 journals in business, management, medicine, psychology, social sciences, mathematics and the sciences.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156416",
    subjects: ["Business","Management","Health","Psychology","Sociology","Mathematics","Science"]
  },
  {
    name: "Winmo",
    description: "Profiles 13,500 U.S. and international advertising agencies. Information on 24,000 U.S. and international companies whose annual advertising spending is more than $200,000.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156261",
    subjects: ["Advertising","Marketing","Company Information"]
  },
  {
    name: "Women and Social Movements in Modern Empires Since 1820",
    description: "Archival documents related to the Habsburg Empire, the Ottoman Empire, the British, French, Italian, Dutch, Russian, Japanese, and United States Empires, and settler societies.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-75248863",
    subjects: ["Women's Studies","History","Primary Sources Databases","Public and International Affairs"]
  },
  {
    name: "Women and Social Movements in the United States, 1600-2000",
    description: "Documents from 74 archives spanning the time period 1600-2000.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156417",
    subjects: ["Women's Studies","History","Primary Sources Databases"]
  },
  {
    name: "World Bank data",
    description: "Provides international social and economic data for over 550 development indicators and time series data for over 207 countries and 18 country groups.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156455",
    subjects: ["Economics","Statistics","International Business","Demographics","Public and International Affairs"]
  },
  {
    name: "WorldCat (Discovery)",
    description: "Modernized interface for WorldCat, which combines the library catalogs of 9000 libraries. Includes more than 67 million items.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-13298520",
    subjects: ["Ebooks","Dissertations & Theses","Information Studies"]
  },
  {
    name: "WorldCat (FirstSearch)",
    description: "Combines the library catalogs of 9000 libraries. Includes more than 67 million items.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156418",
    subjects: ["Ebooks","Dissertations & Theses","Information Studies"]
  },
  {
    name: "Worldscope",
    description: "Standardized annual and quarterly data, detailed financial information as well as per share data, calculated ratios, pricing and textual information. Scope is global with data available for almost 75,000 active and non-active U.S. and foreign companies. Available on WRDS.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156496",
    subjects: ["Finance","Company Information","International Business","Economics"]
  },
  {
    name: "WRDS (Wharton)",
    description: "A portal to datasets in finance, accounting, and banking including AuditAnalytics, Bank Focus, CRSP, COMPUSTAT, Dow Jones Averages, Eventus, FDIC, IRRC, PHLX, NYSE TAQ, Thomson Financial Insiders Filings and Thomson I/B/E/S.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-7156419",
    subjects: ["Finance","Accounting","Economics","Statistics"]
  },

  // ── Z ──────────────────────────────────────────────────────────────────────

  {
    name: "Zoological Record",
    description: "Find journal articles in animal biology.",
    url: "https://guides.newman.baruch.cuny.edu/databases/W-Z#s-lg-content-24662462",
    subjects: ["Biology","Science"]
  }

];

export default databases;
