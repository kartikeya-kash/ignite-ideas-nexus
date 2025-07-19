# NMIMS E-Cell Website Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Structure](#architecture--structure)
3. [Design System](#design-system)
4. [Components Guide](#components-guide)
5. [Adding New Pages](#adding-new-pages)
6. [Styling Guidelines](#styling-guidelines)
7. [Animations & Effects](#animations--effects)
8. [Development Guidelines](#development-guidelines)

## 🎯 Project Overview

This is a modern, dark-themed website for NMIMS E-Cell (Entrepreneurship Cell) built with:
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **React Router** for navigation
- **Lucide React** for icons

### Key Features
- 🌚 Dark theme with futuristic design
- ✨ Glassmorphism and neumorphism effects
- 🎭 Animated particle background
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 Custom design system with semantic tokens

---

## 🏗️ Architecture & Structure

```
src/
├── assets/                 # Images and static files
│   ├── hero-bg.jpg        # Hero section background
│   └── ecell-logo.png     # E-Cell logo
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   ├── Navigation.tsx    # Main navigation bar
│   ├── ParticleBackground.tsx  # Animated background
│   ├── HeroSection.tsx   # Homepage hero section
│   ├── AboutPreview.tsx  # Homepage about preview
│   └── Footer.tsx        # Site footer
├── pages/                # Page components
│   ├── Index.tsx         # Homepage
│   ├── About.tsx         # About page
│   ├── Events.tsx        # Events page
│   └── NotFound.tsx      # 404 page
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles and design system
```

---

## 🎨 Design System

### Color Palette
The design system is defined in `src/index.css` using HSL values:

```css
/* Primary Colors */
--electric-blue: 193 100% 50%    /* Electric Blue */
--neon-green: 120 100% 50%       /* Neon Green */
--violet: 270 95% 60%            /* Violet */

/* Background Colors */
--background: 220 25% 6%         /* Dark background */
--card: 220 23% 8%               /* Card background */

/* Semantic Colors */
--primary: 193 100% 50%          /* Electric Blue */
--secondary: 270 95% 60%         /* Violet */
--accent: 120 100% 50%           /* Neon Green */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(var(--electric-blue)), hsl(var(--violet)))
--gradient-accent: linear-gradient(135deg, hsl(var(--neon-green)), hsl(var(--electric-blue)))
```

### Typography
- **Primary Font**: Inter (modern, clean)
- **Secondary Font**: Poppins (friendly, approachable)

### Design Tokens Usage
Always use semantic tokens instead of hardcoded colors:

```tsx
// ❌ Don't do this
<div className="bg-blue-500 text-white">

// ✅ Do this
<div className="bg-primary text-primary-foreground">
```

---

## 🧩 Components Guide

### Navigation Component (`Navigation.tsx`)
**Purpose**: Main navigation bar with responsive design

**Features**:
- Logo with glow effect
- Desktop & mobile navigation
- Active route highlighting
- Scroll-based transparency
- Smooth animations

**Usage**:
```tsx
import Navigation from '@/components/Navigation';

// Simply include in any page
<Navigation />
```

### ParticleBackground Component (`ParticleBackground.tsx`)
**Purpose**: Animated background with connected particles

**Features**:
- Canvas-based animation
- Responsive particle count
- Color-coded particles (blue, green, violet)
- Connection lines between nearby particles
- Performance optimized

**Usage**:
```tsx
import ParticleBackground from '@/components/ParticleBackground';

// Add to any page for animated background
<ParticleBackground />
```

### HeroSection Component (`HeroSection.tsx`)
**Purpose**: Homepage hero section with CTAs and stats

**Features**:
- Gradient text effects
- Animated buttons with hover effects
- Statistics cards
- Background image overlay
- Scroll indicator

**Props**: None (self-contained)

### Footer Component (`Footer.tsx`)
**Purpose**: Site-wide footer with links and contact info

**Features**:
- Brand section with logo
- Quick navigation links
- Contact information
- Social media links
- Responsive grid layout

---

## 📄 Adding New Pages

### Step 1: Create the Page Component
Create a new file in `src/pages/YourPage.tsx`:

```tsx
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';

const YourPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      <main className="pt-20">
        {/* Your page content */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary">
              Your Page Title
            </h1>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default YourPage;
```

### Step 2: Add Route to App.tsx
```tsx
// Import your page
import YourPage from "./pages/YourPage";

// Add route in the Routes component
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/your-route" element={<YourPage />} />
  {/* Other routes */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Step 3: Update Navigation
Add your new page to the navigation in `Navigation.tsx`:

```tsx
const navItems = [
  // ... existing items
  { name: 'Your Page', path: '/your-route' },
];
```

---

## 🎨 Styling Guidelines

### Layout Structure
Every page should follow this structure:

```tsx
<div className="min-h-screen bg-background">
  <ParticleBackground />
  <Navigation />
  
  <main className="pt-20"> {/* pt-20 accounts for fixed navigation */}
    {/* Page content sections */}
  </main>

  <Footer />
</div>
```

### Section Spacing
```tsx
// Hero sections
<section className="py-20 lg:py-32">

// Regular sections  
<section className="py-20">

// Container
<div className="container mx-auto px-4">
```

### Card Components
Use glassmorphism cards for content:

```tsx
<div className="glass rounded-2xl p-6 hover-glow glow-blue">
  {/* Card content */}
</div>
```

### Text Styling
```tsx
// Large headings
<h1 className="text-4xl md:text-6xl font-bold text-gradient-primary">

// Section headings
<h2 className="text-3xl md:text-5xl font-bold text-gradient-accent">

// Subheadings
<h3 className="text-xl font-bold text-gradient-primary">

// Body text
<p className="text-muted-foreground">
```

---

## ✨ Animations & Effects

### Available CSS Classes

#### Glow Effects
```css
.glow-blue     /* Blue glow shadow */
.glow-green    /* Green glow shadow */
.glow-violet   /* Violet glow shadow */
```

#### Hover Animations
```css
.hover-glow    /* Lift and enhance glow on hover */
.pulse-glow    /* Pulsing glow animation */
```

#### Glass Effects
```css
.glass         /* Glassmorphism background */
```

#### Text Gradients
```css
.text-gradient-primary  /* Blue to violet gradient */
.text-gradient-accent   /* Green to blue gradient */
```

#### Floating Animation
```css
.float         /* Subtle floating animation */
```

### Button Animations
```tsx
// Primary CTA button
<Button className="bg-gradient-primary hover:scale-105 transition-all duration-300 pulse-glow">

// Secondary button with glow
<Button className="border-primary/50 hover:bg-primary/10 hover-glow glow-blue">
```

---

## 🛠️ Development Guidelines

### File Naming
- **Components**: PascalCase (`HeroSection.tsx`)
- **Pages**: PascalCase (`About.tsx`)
- **Utilities**: camelCase (`utils.ts`)

### Import Organization
```tsx
// React imports first
import { useState } from 'react';

// Third-party imports
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

// Local imports
import Navigation from '@/components/Navigation';
```

### TypeScript Guidelines
- Always use TypeScript for new components
- Define props interfaces when needed
- Use proper typing for event handlers

```tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}
```

### Responsive Design
Always use mobile-first approach:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Performance Considerations
- Use `useMemo` and `useCallback` for expensive operations
- Lazy load images when possible
- Keep particle animation performant

---

## 🔧 Common Tasks

### Adding a New Icon
```tsx
import { YourIcon } from 'lucide-react';

<YourIcon className="h-5 w-5 text-primary" />
```

### Creating a Hover Effect
```tsx
<div className="group">
  <Icon className="group-hover:scale-110 transition-transform duration-300" />
</div>
```

### Adding a Loading State
```tsx
const [loading, setLoading] = useState(false);

<Button disabled={loading} className="relative">
  {loading ? 'Loading...' : 'Submit'}
</Button>
```

### Custom Animations
Define in `index.css`:

```css
@keyframes customMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(10px); }
}

.custom-animation {
  animation: customMove 1s ease-in-out;
}
```

---

## 🐛 Troubleshooting

### Route 404 Errors
If you see "404 Error: User attempted to access non-existent route":
1. Create the page component
2. Add the route to `App.tsx`
3. Make sure the path matches exactly

### Styling Issues
- Check if you're using semantic tokens from the design system
- Verify Tailwind class names are correct
- Ensure imports are properly set up

### Animation Performance
- Reduce particle count in `ParticleBackground.tsx`
- Use `transform` instead of changing layout properties
- Add `will-change` CSS property for frequently animated elements

---

## 🚀 Next Steps

Based on the navigation, you still need to create:
- `/team` - Team page
- `/startups` - Startups showcase page  
- `/collaborate` - Collaboration/sponsorship page
- `/join` - Join us/recruitment page
- `/contact` - Contact page

Each should follow the same structure and design patterns outlined in this documentation.

---

**Need help?** Refer to the existing components for examples and patterns. The codebase follows consistent conventions that make it easy to extend and maintain.
