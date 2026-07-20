# 🐑 WoolCraft — Natural Wool Sneakers E-commerce

> An immersive e-commerce experience for premium wool sneakers, blending natural comfort with urban functionality.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

---

## ✨ Overview

WoolCraft is a fully front-end e-commerce website showcasing a fictional brand of sustainable wool sneakers. The site features a curated product catalog, an interactive shopping cart, advanced filtering, and rich motion design — all built with vanilla HTML, CSS, and JavaScript enhanced by a carefully selected set of animation and visualization libraries.

The design philosophy centers on **"Natural Wool + Urban Functionality"** — a sophisticated, low-saturation warm palette that evokes the tactile quality of wool while maintaining a modern, premium digital presence.

---

## 🎨 Design System

### Color Palette

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| 🟫 | Warm White | `#FEFCF8` | Primary background |
| 🟤 | Oat | `#F5F1E8` | Secondary surfaces |
| ⬜ | Fog Gray | `#E8E5E0` | Accent panels |
| ⬛ | Charcoal | `#2C2C2C` | Primary text |
| 🟩 | Sage | `#A8B5A0` | Interactive elements & highlights |

### Typography

- **Display**: [Canela](https://fonts.google.com/) (serif) — elegant headings and brand statements
- **Body**: Suisse Int'l (sans-serif) — clean, highly readable body copy

---

## 🛒 Features

### Shopping Experience
- **Product Catalog** — 12 products across 6 styles (Merino Classic, Urban Runner, Cashmere Luxe, Alpine Trail, City Walker, Weekend Slip-On)
- **Advanced Filtering** — filter by wool type, color, size, price range, and style with real-time results
- **Product Detail Modal** — large image gallery, size selector, material info, and add-to-cart
- **Shopping Cart** — persistent via `localStorage`, quantity management, promo codes, and full checkout form

### Visual Effects & Interactions
- **Scroll Animations** — gentle reveal effects with 16–24px vertical translation
- **3D Hover Tilt** — product cards respond to cursor position with perspective transforms
- **Physics-based Interactions** — subtle Matter.js-powered product displays
- **Sustainability Data Viz** — animated ECharts charts for brand impact metrics
- **Organic Background Textures** — p5.js-generated wool fiber patterns
- **Hero Visual Effects** — Pixi.js-powered atmospheric hero section

### UX Details
- Wishlist system with heart icon toggles
- Interactive size guide with foot measurement info
- Brand story timeline with scroll-triggered reveals
- Newsletter signup with incentive
- Mobile-responsive with touch-friendly targets (44px minimum)

---

## 🏗️ Project Structure

```
WoolCraft/
├── index.html          # Homepage — hero, featured products, brand story, benefits
├── products.html       # Product catalog — filtering sidebar + product grid
├── cart.html           # Shopping cart — item management + checkout form
├── main.js             # Core app logic (WoolSneakersApp class)
├── resources/          # Image assets
│   ├── hero-urban.jpg      # Hero image — sneakers in urban setting
│   ├── hero-nature.jpg     # Hero image — wool texture close-up
│   ├── product-[1-12].jpg  # Product photography (12 images)
│   └── wool-texture.jpg    # Background texture overlay
├── design.md           # Visual design style guide
├── interaction.md      # Interaction design documentation
├── outline.md          # Full project outline & content strategy
└── README.md           # This file
```

---

## ⚙️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Structure | HTML5 | Semantic markup, SEO-optimized |
| Styling | Tailwind CSS (CDN) | Utility-first responsive layout |
| Logic | Vanilla JavaScript (ES6+) | Cart, filtering, state management |
| Animation | [Anime.js](https://animejs.com/) | Micro-interactions & element transitions |
| Data Viz | [ECharts](https://echarts.apache.org/) | Sustainability metrics charts |
| Carousel | [Splide.js](https://splidejs.com/) | Product image & testimonial sliders |
| Generative Art | [p5.js](https://p5js.org/) | Organic background patterns |
| Physics | [Matter.js](https://brm.io/matter-js/) | Physics-based product interactions |
| WebGL | [Pixi.js](https://pixijs.com/) | Advanced hero section effects |

---

## 🚀 Getting Started

### Prerequisites
No build step required — this is a static site. You just need a local web server.

### Run Locally

Using **VS Code Live Server**:
1. Open the project folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**

Using **Python**:
```bash
cd path/to/project
python -m http.server 8080
```

Using **Node.js**:
```bash
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📄 Pages

### 🏠 Homepage (`index.html`)
The landing page creates immediate impact with a full-width hero section, followed by a curated grid of 6 featured products, a brand story timeline with sustainability metrics, a wool benefits showcase, and a newsletter signup.

### 🛍️ Products (`products.html`)
A full catalog page with a left sidebar filter panel (wool type, color, size, price, style) and a responsive product grid. Each product card features hover effects, color swatches, and quick add-to-cart. Clicking a card opens a detailed modal.

### 🛒 Cart (`cart.html`)
A streamlined checkout experience with an itemized cart summary, quantity adjustments, promo code input, shipping options, payment form, and trust elements (security badges, return policy).

---

## 🌿 Design Philosophy

> *"Sophisticated yet approachable, environmentally conscious without being preachy, modern with natural warmth. The design should feel like a premium wool sweater translated into a digital experience — comfortable, reliable, and effortlessly stylish."*

The interface prioritizes:
- **Tactile warmth** through subtle textures and organic shapes
- **Generous white space** to let products breathe
- **Smooth motion** with 300ms ease-out transitions
- **WCAG-compliant** color contrast for accessibility
- **Mobile-first** responsive design with touch-friendly interactions

---

## 📝 License

This project is part of a design portfolio. All product imagery and brand assets are fictional and created for demonstration purposes.
