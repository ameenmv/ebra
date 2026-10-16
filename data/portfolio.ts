export interface ProjectCredits {
  writerDirector?: string
  dop?: string
  producer?: string
  editor?: string
  soundDesigner?: string
  colorist?: string
  firstAssistantDirector?: string
  illustrator?: string
  artDirector?: string
  cast?: Array<{ role: string; actor: string }>
  voiceOver?: Array<{ role: string; actor: string }>
}

export interface ProjectItem {
  id: string
  title: string
  titleArabic?: string
  year: string
  category: 'short-films' | 'campaigns' | 'documentaries' | 'reels'
  categoryLabel: string
  subtitle: string
  genre?: string
  synopsis?: string
  synopsisArabic?: string
  scopeOfWork: string
  heroImage: string
  stills: string[]
  videoType: 'vimeo' | 'drive' | 'offline'
  videoUrl?: string
  vimeoId?: string
  driveId?: string
  festivalNote?: string
  featured?: boolean
  duration?: string
  aspectRatio?: string
}

export interface ReelItem {
  id: string
  title: string
  brand: string
  thumbnail: string
  videoUrl: string
  platform: 'instagram' | 'drive' | 'vimeo'
}

export interface ReelGroup {
  id: string
  brand: string
  tagline: string
  description: string
  reels: ReelItem[]
}

export const PROFILE_DATA = {
  name: 'EBRAHEM MOHAMED',
  nickname: 'EBRA',
  year: '2026',
  title: 'FILMMAKER',
  roles: ['Cinematographer', 'Director', 'Editor'],
  experienceYears: '5+',
  location: 'Cairo, Egypt',
  email: 'ebrahim.mohamed9710@gmail.com',
  phone: '+201099519255',
  whatsappUrl: 'https://wa.link/2696vh',
  vimeoUrl: 'https://vimeo.com/user218248330?fl=pp&fe=sh',
  instagramUrl: 'https://www.instagram.com/ebra__u/',
  linkedinUrl: 'https://www.linkedin.com/in/ebrahim-mohamed-16b313304',
  careerPhilosophy: 'I approach filmmaking through the image — light, composition, and movement shape the way a story is felt.',
  careerDescription: 'Over the past five years, my work across narrative films, commercials, and documentaries has shaped the way I bring direction and cinematography together, building a visual language that serves each project’s purpose.',
  education: {
    institution: 'IAEMS',
    department: 'Mass communication - Cinema Department',
    gradYear: '2023'
  }
}

export const SHORT_FILMS: ProjectItem[] = [
  {
    id: 'redemption',
    title: 'Redemption',
    year: '2023',
    category: 'short-films',
    categoryLabel: 'Graduation - Short Film',
    subtitle: 'Graduation - Short Film · 2023',
    genre: 'Drama - Action',
    synopsis: 'A detective investigates a murder that gradually reveals a disturbing connection to a marionette doll.',
    scopeOfWork: 'Cinematographer',
    heroImage: '/images/projects/redemption-hero.png',
    stills: [
      '/images/projects/redemption-still-1.png',
      '/images/projects/redemption-still-2.png',
      '/images/projects/redemption-still-3.png'
    ],
    videoType: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt/view?usp=drive_link',
    driveId: '1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt',
    aspectRatio: '2.39:1',
    featured: true
  },
  {
    id: 'white-lie',
    title: 'White Lie',
    titleArabic: 'كذبه بيضاء',
    year: '2022',
    category: 'short-films',
    categoryLabel: 'Short Film',
    subtitle: 'Short Film · 2022',
    genre: 'Drama',
    synopsis: 'On her 12th birthday, a young girl waits for her father to come home, unaware of the truth her mother has been hiding. For years, her father had recorded a video for every birthday — and this year, she is about to watch the one he left behind.',
    scopeOfWork: 'Cinematographer',
    heroImage: '/images/projects/white-lie-hero.png',
    stills: [
      '/images/projects/white-lie-still-1.png',
      '/images/projects/white-lie-still-2.png',
      '/images/projects/white-lie-still-3.png'
    ],
    videoType: 'drive',
    videoUrl: 'https://drive.google.com/file/d/12RL6XWfeqc6FtPhM2f-O6x_M4nGBH-k_/view?usp=drive_link',
    driveId: '12RL6XWfeqc6FtPhM2f-O6x_M4nGBH-k_',
    aspectRatio: '16:9'
  },
  {
    id: 'black-veil',
    title: 'Black Veil',
    titleArabic: 'حجاب أسود',
    year: '2022',
    category: 'short-films',
    categoryLabel: 'Short Film',
    subtitle: 'Short Film · 2022',
    genre: 'Horror',
    synopsis: 'A young woman begins experiencing strange and unsettling events inside her home, as an unseen presence slowly turns her familiar surroundings into a nightmare.',
    scopeOfWork: 'Cinematographer',
    heroImage: '/images/projects/hijab-eswed-hero.png',
    stills: [
      '/images/projects/hijab-eswed-still-1.png',
      '/images/projects/hijab-eswed-still-2.png',
      '/images/projects/hijab-eswed-still-3.png'
    ],
    videoType: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1yR1BdYGJQ81wjC-QmWUCyKqvvvxm1Qgk/view?usp=drive_link',
    driveId: '1yR1BdYGJQ81wjC-QmWUCyKqvvvxm1Qgk',
    aspectRatio: '16:9'
  },
  {
    id: 'mafoul-beh',
    title: 'Maf\'oul Beh',
    titleArabic: 'مفعول به',
    year: '2026',
    category: 'short-films',
    categoryLabel: 'Short Film',
    subtitle: 'Short Film · 2026',
    genre: 'Drama',
    synopsis: 'A gripping dramatic narrative exploring psychological layers and tension.',
    scopeOfWork: 'Editor · 1AD',
    heroImage: '/images/projects/mafoul-beh-poster.png',
    stills: [
      '/images/projects/mafoul-beh-poster.png',
      '/images/projects/mafoul-beh-stills.png'
    ],
    videoType: 'offline',
    festivalNote: "The film is currently on its way to festivals, so I can't share an online link at the moment. However, it can be available for an offline preview.",
    aspectRatio: '2.39:1',
    featured: true
  }
]

export const MAFOUL_BEH_CREDITS: ProjectCredits = {
  writerDirector: 'Omar Eid',
  dop: 'Teka',
  producer: 'Mohamed Hatem',
  editor: 'Mohamed Ashraf, Ebra Mohamed',
  soundDesigner: 'Fr3oon',
  colorist: 'Ahmed Khedr',
  firstAssistantDirector: 'Ebra Mohamed',
  illustrator: 'Hadeer Arafa',
  artDirector: 'Ahmed Ismail',
  cast: [
    { role: 'Roqaya', actor: 'Farah Bassam' },
    { role: 'Raoof El Gohany', actor: 'Khaled Elwa' },
    { role: 'Farid', actor: 'Shabrmy' }
  ],
  voiceOver: [
    { role: 'Fathy Galal', actor: 'Hamed Asker' },
    { role: 'Presenter', actor: 'Radwa Abd El Aziz' }
  ]
}

export const CAMPAIGNS: ProjectItem[] = [
  {
    id: 'neop-ttl',
    title: 'Neop - TTL Campaign',
    year: '2026',
    category: 'campaigns',
    categoryLabel: 'TTL Campaign',
    subtitle: 'Neop Services · 2026',
    synopsis: 'A paid social campaign promoting three of Neop’s services through relatable everyday problems, turning common challenges into simple, engaging service-driven stories.',
    scopeOfWork: 'One Man Show',
    heroImage: '/images/projects/neop-ttl-hero.png',
    stills: [
      '/images/projects/neop-ttl-still-1.png',
      '/images/projects/neop-ttl-still-2.png',
      '/images/projects/neop-ttl-still-3.png'
    ],
    videoType: 'vimeo',
    videoUrl: 'https://vimeo.com/1235152721',
    vimeoId: '1235152721',
    aspectRatio: '16:9',
    featured: true
  },
  {
    id: 'azrak-internship',
    title: 'Azrak - Internship Campaign',
    year: '2024',
    category: 'campaigns',
    categoryLabel: 'Social Media Campaign',
    subtitle: 'Social Media Campaign · 2024',
    synopsis: 'Following the internship poster as it travels through Mansoura, the campaign brings Azrak’s internship opportunity to life through the city’s most recognizable landmarks.',
    scopeOfWork: 'Director',
    heroImage: '/images/projects/azrak-internship-hero.png',
    stills: [
      '/images/projects/azrak-internship-still-1.png',
      '/images/projects/azrak-internship-still-2.png',
      '/images/projects/azrak-internship-still-3.png'
    ],
    videoType: 'vimeo',
    videoUrl: 'https://vimeo.com/1234679170',
    vimeoId: '1234679170',
    aspectRatio: '16:9'
  },
  {
    id: 'azrak-ramadan',
    title: 'Azrak - Ramadan Campaign',
    titleArabic: 'رزق، لَمّة، واستجابة',
    year: '2024',
    category: 'campaigns',
    categoryLabel: 'Ramadan Campaign',
    subtitle: 'Ramadan Campaign · 2024',
    synopsis: 'Three stories, three different struggles, connected by one shared idea: with Ramadan comes "رزق، لَمّة، واستجابة". The campaign follows different families and individuals as their everyday struggles find resolution with the arrival of Ramadan.',
    scopeOfWork: 'Director',
    heroImage: '/images/projects/azrak-ramadan-hero.png',
    stills: [
      '/images/projects/azrak-ramadan-still-1.png',
      '/images/projects/azrak-ramadan-still-2.png',
      '/images/projects/azrak-ramadan-still-3.png'
    ],
    videoType: 'vimeo',
    videoUrl: 'https://vimeo.com/1234680454',
    vimeoId: '1234680454',
    aspectRatio: '16:9'
  }
]

export const DOCUMENTARIES: ProjectItem[] = [
  {
    id: 'neop-alarabiya',
    title: 'Neop × Al Arabiya',
    year: '2025',
    category: 'documentaries',
    categoryLabel: 'Mini Documentary',
    subtitle: 'Mini Documentary · 2025',
    synopsis: 'A behind-the-scenes look at Neop’s collaboration with Al Arabiya, documenting the creative process across content production, design, video, motion graphics, and more. The film captures the people and process behind the work, showcasing how the collaboration comes together from concept to execution.',
    scopeOfWork: 'Director · Cinematographer · Editor',
    heroImage: '/images/projects/neop-alarabiya-hero.png',
    stills: [
      '/images/projects/neop-alarabiya-still-1.png',
      '/images/projects/neop-alarabiya-still-2.png',
      '/images/projects/neop-alarabiya-still-3.png'
    ],
    videoType: 'vimeo',
    videoUrl: 'https://vimeo.com/1235159889',
    vimeoId: '1235159889',
    aspectRatio: '16:9',
    featured: true
  },
  {
    id: 'neop-ghalati',
    title: 'Neop × Ghalati',
    year: '2026',
    category: 'documentaries',
    categoryLabel: 'Mini Documentary',
    subtitle: 'Mini Documentary · 2026',
    synopsis: 'A documentary exploring Neop’s growing partnership with Ghalati, a leading fragrance brand in Saudi Arabia. Through interviews with the account and social media teams, the film follows how the relationship evolved from a client partnership into a long-term creative collaboration — with stronger work, growing performance, and improved sales.',
    scopeOfWork: 'Director · Cinematographer · Editor',
    heroImage: '/images/projects/neop-ghalati-hero.png',
    stills: [
      '/images/projects/neop-ghalati-still-1.png',
      '/images/projects/neop-ghalati-still-2.png',
      '/images/projects/neop-ghalati-still-3.png'
    ],
    videoType: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1jbg4wwTaC-jgtc4aoQHj27__7qFC-nEx/view?usp=drive_link',
    driveId: '1jbg4wwTaC-jgtc4aoQHj27__7qFC-nEx',
    aspectRatio: '16:9'
  }
]

export const REELS_DATA: ReelGroup[] = [
  {
    id: 'nordway',
    brand: 'NORDWAY',
    tagline: 'Specialty Coffee Roastery',
    description: 'A specialty coffee roastery dedicated to sourcing quality coffee beans from renowned coffee-growing regions around the world.',
    reels: [
      {
        id: 'nordway-1',
        brand: 'NORDWAY',
        title: 'Espresso Extraction & Craft',
        thumbnail: '/images/reels/nordway-1.png',
        videoUrl: 'https://www.instagram.com/reel/DcbRUxPCIOH/',
        platform: 'instagram'
      },
      {
        id: 'nordway-2',
        brand: 'NORDWAY',
        title: 'Roasting & Flavor Profiling',
        thumbnail: '/images/reels/nordway-2.png',
        videoUrl: 'https://www.instagram.com/reel/DYE7p3pItTS/',
        platform: 'instagram'
      },
      {
        id: 'nordway-3',
        brand: 'NORDWAY',
        title: 'Roastery Film & Atmosphere',
        thumbnail: '/images/reels/nordway-3.png',
        videoUrl: 'https://drive.google.com/file/d/1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m/view?usp=drive_link',
        platform: 'drive'
      }
    ]
  },
  {
    id: 'koffie-art',
    brand: 'Koffie Art',
    tagline: 'Specialty Coffee Café',
    description: 'A specialty coffee café offering a diverse menu of hot and iced beverages, sandwiches, and desserts, bringing together quality coffee and a well-rounded café experience.',
    reels: [
      {
        id: 'koffie-1',
        brand: 'Koffie Art',
        title: 'Artisan Pour & Chemistry',
        thumbnail: '/images/reels/koffie-1.png',
        videoUrl: 'https://www.instagram.com/reel/DblRaLpD6d5/',
        platform: 'instagram'
      },
      {
        id: 'koffie-2',
        brand: 'Koffie Art',
        title: 'Barista Precision & Texture',
        thumbnail: '/images/reels/koffie-2.png',
        videoUrl: 'https://www.instagram.com/reel/DYXOsG1jDJ4/',
        platform: 'instagram'
      },
      {
        id: 'koffie-3',
        brand: 'Koffie Art',
        title: 'The Café Experience',
        thumbnail: '/images/reels/koffie-3.png',
        videoUrl: 'https://www.instagram.com/reel/DUN9aMiDTbA/',
        platform: 'instagram'
      }
    ]
  },
  {
    id: 'neop-agency',
    brand: 'NEOP',
    tagline: 'Creative Media Agency',
    description: 'A marketing agency working with a diverse range of clients across Egypt and Saudi Arabia, delivering creative content and media production for both external clients and in-house projects.',
    reels: [
      {
        id: 'neop-1',
        brand: 'NEOP',
        title: 'Creative Content Direction',
        thumbnail: '/images/reels/neop-1.png',
        videoUrl: 'https://www.instagram.com/reel/DYz44_lo_f0/',
        platform: 'instagram'
      },
      {
        id: 'neop-2',
        brand: 'NEOP',
        title: 'Visual Campaign Dynamics',
        thumbnail: '/images/reels/neop-2.png',
        videoUrl: 'https://www.instagram.com/reel/DXmP1UciHEs/',
        platform: 'instagram'
      },
      {
        id: 'neop-3',
        brand: 'NEOP',
        title: 'Cinematic Agency Reel',
        thumbnail: '/images/reels/neop-3.png',
        videoUrl: 'https://vimeo.com/1235181446?share=copy&fl=sv&fe=ci',
        platform: 'vimeo'
      }
    ]
  }
]
