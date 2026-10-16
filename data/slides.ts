export interface Hotspot {
  label: string
  uri: string
  left: string
  top: string
  width: string
  height: string
}

export interface ReelHotspot {
  title: string
  platform: 'instagram' | 'drive' | 'vimeo'
  url: string
  driveId?: string
  vimeoId?: string
  left: string
  top: string
  width: string
  height: string
}

export interface SlideItem {
  id: string
  index: number
  title: string
  category: string
  chapter?: string
  image: string
  type: 'hero' | 'about' | 'divider' | 'video' | 'festival-info' | 'reels' | 'contact'
  videoType?: 'vimeo' | 'drive' | 'offline'
  videoUrl?: string
  vimeoId?: string
  driveId?: string
  playButtonPos?: { left: string; top: string }
  hotspots?: Hotspot[]
  reels?: ReelHotspot[]
  festivalNote?: string
}

export const SLIDES: SlideItem[] = [
  {
    id: 'slide-01',
    index: 1,
    title: 'FILMMAKER',
    category: 'Hero Cover',
    image: '/images/slides/slide-01.webp',
    type: 'hero',
    videoType: 'vimeo',
    vimeoId: '1235152721',
    videoUrl: 'https://vimeo.com/1235152721'
  },
  {
    id: 'slide-02',
    index: 2,
    title: 'EBRAHEM MOHAMED',
    category: 'Career & Education',
    image: '/images/slides/slide-02.webp',
    type: 'about',
    hotspots: [
      {
        label: 'Mail: ebrahim.mohamed9710@gmail.com',
        uri: 'mailto:ebrahim.mohamed9710@gmail.com',
        left: '5%',
        top: '86%',
        width: '30%',
        height: '8%'
      },
      {
        label: 'WhatsApp: +201099519255',
        uri: 'https://wa.link/2696vh',
        left: '60%',
        top: '86%',
        width: '18%',
        height: '8%'
      },
      {
        label: 'Location: Cairo, Egypt',
        uri: 'https://wa.link/2696vh',
        left: '85%',
        top: '86%',
        width: '12%',
        height: '8%'
      }
    ]
  },
  {
    id: 'slide-03',
    index: 3,
    title: 'SHORT FILMS',
    category: 'Chapter 01',
    chapter: '01',
    image: '/images/slides/slide-03.webp',
    type: 'divider'
  },
  {
    id: 'slide-04',
    index: 4,
    title: 'Redemption',
    category: 'Graduation - Short Film · 2023',
    image: '/images/slides/slide-04.webp',
    type: 'video',
    videoType: 'drive',
    driveId: '1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt',
    videoUrl: 'https://drive.google.com/file/d/1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt/view?usp=drive_link',
    playButtonPos: { left: '36%', top: '50%' }
  },
  {
    id: 'slide-05',
    index: 5,
    title: 'كذبه بيضاء (White Lie)',
    category: 'Short Film · 2022',
    image: '/images/slides/slide-05.webp',
    type: 'video',
    videoType: 'drive',
    driveId: '12RL6XWfeqc6FtPhM2f-O6x_M4nGBH-k_',
    videoUrl: 'https://drive.google.com/file/d/12RL6XWfeqc6FtPhM2f-O6x_M4nGBH-k_/view?usp=drive_link',
    playButtonPos: { left: '34%', top: '52%' }
  },
  {
    id: 'slide-06',
    index: 6,
    title: 'حجاب أسود (Black Veil)',
    category: 'Short Film · 2022',
    image: '/images/slides/slide-06.webp',
    type: 'video',
    videoType: 'drive',
    driveId: '1yR1BdYGJQ81wjC-QmWUCyKqvvvxm1Qgk',
    videoUrl: 'https://drive.google.com/file/d/1yR1BdYGJQ81wjC-QmWUCyKqvvvxm1Qgk/view?usp=drive_link',
    playButtonPos: { left: '34%', top: '52%' }
  },
  {
    id: 'slide-07',
    index: 7,
    title: 'مفعول به (Maf\'oul Beh)',
    category: 'Short Film · 2026',
    image: '/images/slides/slide-07.webp',
    type: 'festival-info',
    festivalNote: "The film is currently on its way to festivals, so I can't share an online link at the moment. However, it can be available for an offline preview."
  },
  {
    id: 'slide-08',
    index: 8,
    title: 'TTL CAMPAIGN',
    category: 'Chapter 02',
    chapter: '02',
    image: '/images/slides/slide-08.webp',
    type: 'divider'
  },
  {
    id: 'slide-09',
    index: 9,
    title: 'Neop - TTL Campaign',
    category: 'TTL Campaign · 2026',
    image: '/images/slides/slide-09.webp',
    type: 'video',
    videoType: 'vimeo',
    vimeoId: '1235152721',
    videoUrl: 'https://vimeo.com/1235152721',
    playButtonPos: { left: '37%', top: '52%' }
  },
  {
    id: 'slide-10',
    index: 10,
    title: 'Azrak - Internship Campaign',
    category: 'Social Media Campaign · 2024',
    image: '/images/slides/slide-10.webp',
    type: 'video',
    videoType: 'vimeo',
    vimeoId: '1234679170',
    videoUrl: 'https://vimeo.com/1234679170',
    playButtonPos: { left: '37%', top: '52%' }
  },
  {
    id: 'slide-11',
    index: 11,
    title: 'Azrak - Ramadan Campaign',
    category: 'Ramadan Campaign · 2024',
    image: '/images/slides/slide-11.webp',
    type: 'video',
    videoType: 'vimeo',
    vimeoId: '1234680454',
    videoUrl: 'https://vimeo.com/1234680454',
    playButtonPos: { left: '37%', top: '52%' }
  },
  {
    id: 'slide-12',
    index: 12,
    title: 'DOCUMENTARY',
    category: 'Chapter 03',
    chapter: '03',
    image: '/images/slides/slide-12.webp',
    type: 'divider'
  },
  {
    id: 'slide-13',
    index: 13,
    title: 'Neop × Al Arabiya',
    category: 'Mini Documentary · 2025',
    image: '/images/slides/slide-13.webp',
    type: 'video',
    videoType: 'vimeo',
    vimeoId: '1235159889',
    videoUrl: 'https://vimeo.com/1235159889',
    playButtonPos: { left: '25%', top: '65%' }
  },
  {
    id: 'slide-14',
    index: 14,
    title: 'Neop × Ghalati',
    category: 'Mini Documentary · 2026',
    image: '/images/slides/slide-14.webp',
    type: 'video',
    videoType: 'drive',
    driveId: '1jbg4wwTaC-jgtc4aoQHj27__7qFC-nEx',
    videoUrl: 'https://drive.google.com/file/d/1jbg4wwTaC-jgtc4aoQHj27__7qFC-nEx/view?usp=drive_link',
    playButtonPos: { left: '25%', top: '65%' }
  },
  {
    id: 'slide-15',
    index: 15,
    title: 'REEEELS',
    category: 'Chapter 04',
    chapter: '04',
    image: '/images/slides/slide-15.webp',
    type: 'divider'
  },
  {
    id: 'slide-16',
    index: 16,
    title: 'NORDWAY',
    category: 'Specialty Coffee Roastery',
    image: '/images/slides/slide-16.webp',
    type: 'reels',
    reels: [
      {
        title: 'Nordway Roast & Extraction',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DcbRUxPCIOH/',
        left: '7.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'Nordway Bean Sourcing',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DYE7p3pItTS/',
        left: '36.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'Nordway Roastery Story',
        platform: 'drive',
        url: 'https://drive.google.com/file/d/1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m/view?usp=drive_link',
        driveId: '1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m',
        left: '65.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      }
    ]
  },
  {
    id: 'slide-17',
    index: 17,
    title: 'Koffie Art',
    category: 'Specialty Coffee Café',
    image: '/images/slides/slide-17.webp',
    type: 'reels',
    reels: [
      {
        title: 'Koffie Art Artisan Brew',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DblRaLpD6d5/',
        left: '7.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'Koffie Art Craft & Precision',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DYXOsG1jDJ4/',
        left: '36.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'The Café Experience',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DUN9aMiDTbA/',
        left: '65.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      }
    ]
  },
  {
    id: 'slide-18',
    index: 18,
    title: 'NEOP',
    category: 'Creative Marketing Agency',
    image: '/images/slides/slide-18.webp',
    type: 'reels',
    reels: [
      {
        title: 'NEOP Creative Content',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DYz44_lo_f0/',
        left: '7.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'NEOP Agency Visual Dynamics',
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DXmP1UciHEs/',
        left: '36.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      },
      {
        title: 'NEOP Production Showcase',
        platform: 'vimeo',
        url: 'https://vimeo.com/1235181446?share=copy&fl=sv&fe=ci',
        vimeoId: '1235181446',
        left: '65.8%',
        top: '15.5%',
        width: '26.8%',
        height: '66%'
      }
    ]
  },
  {
    id: 'slide-19',
    index: 19,
    title: 'DROP ME A LINE',
    category: 'Contact',
    image: '/images/slides/slide-19.webp',
    type: 'contact',
    hotspots: [
      {
        label: 'ebrahim.mohamed9710@gmail.com',
        uri: 'mailto:ebrahim.mohamed9710@gmail.com',
        left: '5.2%',
        top: '63.5%',
        width: '32%',
        height: '6%'
      },
      {
        label: '+201099519255 (WhatsApp)',
        uri: 'https://wa.link/2696vh',
        left: '5.2%',
        top: '70%',
        width: '24%',
        height: '6%'
      },
      {
        label: 'Vimeo Profile',
        uri: 'https://vimeo.com/user218248330?fl=pp&fe=sh',
        left: '5.2%',
        top: '88.5%',
        width: '8%',
        height: '5%'
      },
      {
        label: 'Instagram (@ebra__u)',
        uri: 'https://www.instagram.com/ebra__u/',
        left: '16.5%',
        top: '88.5%',
        width: '10%',
        height: '5%'
      },
      {
        label: 'LinkedIn Profile',
        uri: 'http://www.linkedin.com/in/ebrahim-mohamed-16b313304',
        left: '29.5%',
        top: '88.5%',
        width: '10%',
        height: '5%'
      }
    ]
  }
]
