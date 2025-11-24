# LIKO - Creative Digital Studio Website

A modern, animated website inspired by the Liko theme, built with React and Vite. This project showcases a complete digital studio website with smooth animations, interactive components, and responsive design.

## Features

- **Smooth Scrolling**: Implemented using Lenis for buttery-smooth scroll experience
- **Animated Components**: Framer Motion powers all animations and transitions
- **Interactive Carousels**: Swiper.js integration for client logos, projects, and testimonials
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with attention to detail
- **SEO Friendly**: Semantic HTML structure

## Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Eye-catching hero section with animated elements
3. **Client Logos** - Auto-playing carousel of client brands
4. **Services** - Four service cards with hover effects
5. **Projects** - Coverflow carousel showcasing portfolio work
6. **Awards** - Recognition section with glassmorphism cards
7. **Team** - Team members grid with flip card effects
8. **Testimonials** - Client feedback carousel
9. **Footer** - Comprehensive footer with contact info and social links

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Swiper** - Carousel/slider library
- **Lenis** - Smooth scrolling library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd verto
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
verto/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ClientLogos.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Awards.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── hooks/        # Custom React hooks
│   │   └── useSmoothScroll.jsx
│   ├── assets/       # Images, fonts, etc.
│   ├── App.jsx       # Main app component
│   ├── App.css       # App styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies
└── vite.config.js    # Vite configuration
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-black: #000000;
  --color-dark: #1E1E1E;
  --color-white: #FFFFFF;
  --color-accent: #D4AF37;
  /* Add more color variables */
}
```

### Fonts

The project uses Google Fonts (Syne and Marcellus). To change fonts, update the import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Content

Update the content in each component file (e.g., services, team members, projects) by modifying the data arrays within each component.

## Performance

- Lazy loading for images
- Code splitting with React
- Optimized animations with Framer Motion
- Smooth scrolling with Lenis
- Production build minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspiration from [Liko Fox Themes](https://liko.foxthemes.me)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
