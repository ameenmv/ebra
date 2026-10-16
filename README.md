# EBRAHEM MOHAMED — Filmmaker Portfolio

A digital portfolio website for **Ebraheem Mohamed** (Cinematographer · Director · Editor), crafted with Nuxt 3, Tailwind CSS, Lenis Smooth Scroll, and GSAP ScrollTrigger animations, matching the original 19-slide design with container query geometry.

## 🎬 Features

- **1:1 PDF Design Alignment**: Pixel-accurate recreation of all 19 slides using container query units (`cqw`) and exact bounding box coordinates.
- **Buttery Smooth Scroll**: Driven by Lenis Smooth Scroll integrated seamlessly with GSAP `ScrollTrigger`.
- **Cinematic Typography & Animations**:
  - Clash Grotesk & IBM Plex Sans Arabic font styling.
  - Hardware-accelerated GPU transforms (`translate3d`, `backface-visibility: hidden`).
  - Parallax depth on images and divider titles without lag.
- **Embedded Showreel & Lightbox**: Interactive video modals for short films, commercials, documentaries, and showreels.
- **Fully Responsive**: Adapts seamlessly across mobile, tablet, desktop, and ultra-wide screens.

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP 3](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide Vue Next](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)

### Installation

```bash
bun install
```

### Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
bun run build
bun run preview
```
