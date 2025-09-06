# Plan A Agency Website - Development Guide

## Project Structure

This is a React-based website for Plan A Agency, built with modern technologies and best practices.

### Technologies Used
- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Wouter** for routing
- **Radix UI** for accessible components

## File Organization

### Core Directories

```
client/src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, navigation
│   ├── sections/       # Page section components
│   └── ui/            # Basic UI components
├── pages/             # Page components (routes)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
└── contexts/          # React context providers
```

### Component Structure

#### Layout Components (`components/layout/`)
- `header.tsx` - Main navigation header with responsive design
- `footer.tsx` - Site footer with links and contact info

#### Section Components (`components/sections/`)
- `hero.tsx` - Main landing page hero section
- `about.tsx` - About agency section
- `portfolio.tsx` - Project showcase with filtering
- `services.tsx` - Services overview grid
- `case-studies.tsx` - Detailed case studies section
- `clients.tsx` - Client logos and testimonials
- `contact.tsx` - Contact form and information

#### UI Components (`components/ui/`)
- `animated-text.tsx` - Text animations (letter-by-letter, etc.)
- `scroll-parallax.tsx` - Scroll-triggered animations
- `fixed-background-parallax.tsx` - Fixed background effects
- `sidebar.tsx` - Mobile-responsive navigation sidebar
- `scrolling-banner.tsx` - Infinite scrolling text banner

### Page Components (`pages/`)
- `home.tsx` - Main landing page
- `portfolio-full.tsx` - Complete portfolio with filtering
- `project-detail.tsx` - Individual project case studies
- `service-detail-full.tsx` - Detailed service pages
- `case-studies.tsx` - Case studies listing page

## Animation System

### Animation Types
1. **Scroll Parallax** - Elements move at different speeds during scroll
2. **Fixed Background** - Background stays fixed while content moves
3. **Letter Animation** - Text reveals letter by letter
4. **Fade In Up** - Standard fade and slide animations
5. **Hover Effects** - Complex 3D transforms on hover

### Animation Files
- `lib/animations.ts` - Animation variant definitions
- `hooks/use-scroll.ts` - Scroll position tracking
- `components/ui/scroll-parallax.tsx` - Scroll-triggered animations

## Responsive Design

### Breakpoints (Tailwind CSS)
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

## Content Management

### Static Data Structure
Project and service data is currently stored in component files as TypeScript objects. This makes it easy to:
- Update content without database setup
- Maintain type safety
- Quick deployment and testing

### Key Data Files
- `pages/project-detail.tsx` - Project case study data
- `pages/service-detail-full.tsx` - Service information
- `pages/portfolio-full.tsx` - Portfolio filtering data

## Performance Optimizations

### Image Loading
- Lazy loading with `loading="lazy"`
- WebP format support
- Proper alt text for accessibility

### Animation Performance
- `transform` and `opacity` for GPU acceleration
- `will-change` property for complex animations
- Intersection Observer for scroll-triggered animations

### Code Splitting
- Route-based code splitting with Wouter
- Dynamic imports for heavy components

## Styling Guidelines

### Color System
- Primary: Orange accent color (#FF6B35 or similar)
- Background: Dark theme with grays
- Text: White/light gray hierarchy

### Typography
- Font: Inter (loaded from Google Fonts)
- Letter spacing: Natural spacing matching reference
- Line height: Optimized for readability

### Layout Patterns
- Container max-width with responsive padding
- Grid layouts with CSS Grid and Flexbox
- Consistent spacing with Tailwind utilities

## Development Workflow

### Adding New Pages
1. Create component in `pages/` directory
2. Add route in `App.tsx`
3. Update navigation in `header.tsx` or `sidebar.tsx`

### Adding New Animations
1. Define variants in `lib/animations.ts`
2. Import and use in components
3. Test across devices and browsers

### Content Updates
1. Locate data object in relevant page/component
2. Update TypeScript object
3. Verify type safety with TypeScript compiler

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Grid and Flexbox
- CSS Custom Properties

## Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

## Deployment
- Built with `npm run build`
- Static files generated in `dist/`
- Can be deployed to any static hosting service
- No server-side rendering required

## Performance Monitoring
- Core Web Vitals optimization
- Lazy loading implementation
- Bundle size optimization
- Animation performance tracking