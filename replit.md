# Overview

This is a frontend-only web application for a digital marketing agency called "Plan A" built with modern React and TypeScript. The application serves as a portfolio and marketing website showcasing the agency's services, case studies, and client work. It features a responsive design with dark theme styling, smooth animations, and professional presentation of digital marketing services including branding, web development, and mobile app development. The text styling has been optimized to match the reference website at plana.ae with natural letter spacing.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript in a Single Page Application (SPA) architecture
- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management with custom query client configuration
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **Animations**: Framer Motion for page transitions and component animations
- **Form Handling**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite for fast development and optimized production builds

**Component Structure**: Modular component architecture with separate directories for UI components, layout components, and page sections. Custom hooks for scroll detection, mobile detection, and toast notifications.

## Architecture Notes

**Frontend-Only Setup**: The application has been converted to a pure frontend React application
- **State Management**: Local component state and React hooks for managing application state
- **Data**: Static data structures for services, projects, and client information
- **No Backend Dependencies**: All server-side code and database configurations have been removed
- **Build Process**: Uses Vite for development and production builds

## Styling and Design System

**Design System**: Custom implementation based on shadcn/ui with Radix UI primitives
- **Theme**: Dark-first design with CSS custom properties
- **Typography**: Inter font family with custom font loading
- **Color Scheme**: Professional dark theme with orange accent color
- **Component Library**: Comprehensive set of pre-built components for forms, navigation, layouts, and feedback

# External Dependencies

## Core Framework Dependencies
- **@vitejs/plugin-react**: React support for Vite
- **express**: Web server framework
- **react** and **react-dom**: Core React libraries
- **typescript**: Type checking and compilation

## Database and ORM
- **@neondatabase/serverless**: Neon Database PostgreSQL driver
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **drizzle-kit**: Database migration and management tools
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx** and **tailwind-merge**: Conditional CSS class utilities
- **framer-motion**: Animation library for React

## Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation
- **drizzle-zod**: Zod integration for Drizzle schemas

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React routing

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements
- **tsx**: TypeScript execution for development server

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component implementation