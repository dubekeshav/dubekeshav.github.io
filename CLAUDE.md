# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is a single-page personal portfolio website with unique, creative and cool animations to showcase my skills, work experience and projects. You can use HTML, React or Typescript, Normal CSS or TailwindCSS.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom animations
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (opens on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky navigation with mobile menu
│   ├── Hero.tsx          # Hero section with CTA buttons
│   ├── Experience.tsx    # Timeline of work experience & education
│   ├── Projects.tsx      # Featured projects showcase
│   ├── Skills.tsx        # Skills categories with proficiency bars
│   └── Contact.tsx       # Contact form and methods
├── App.tsx               # Main app with animated backgrounds
├── main.tsx              # Entry point
└── index.css             # Global styles and custom animations
```

## Key Features

- **Animated Background:** Floating gradient orbs that animate in the background
- **Scroll Animations:** Sections animate in as you scroll using Framer Motion's `whileInView`
- **Glass Morphism:** Modern glass effect on cards and navigation
- **Responsive Design:** Mobile-first, fully responsive layout
- **Interactive Elements:** Hover effects and micro-interactions throughout
- **Timeline Section:** Vertical timeline for experience and education
- **Skills Grid:** Categorized skills with progress bars
- **Contact Form:** Working form with submission feedback

## Customization Notes

- **Personal Info:** Update the Hero section description, contact methods, and footer with your actual details
- **Experience Data:** Modify the `experiences` array in Experience.tsx with your real background
- **Projects:** Update the `projects` array in Projects.tsx with your actual portfolio projects
- **Skills:** Customize skill categories and items in the `skillCategories` array in Skills.tsx
- **Social Links:** Update GitHub, LinkedIn, and Email links in Hero.tsx and Contact.tsx
- **Colors:** All gradients use blue (#3b82f6), purple (#8b5cf6), and pink (#ec4899) — modify in tailwind.config.js

## Animation Details

Custom animations are defined in `tailwind.config.js`:
- `float` - Floating up/down motion
- `glow` - Pulsing glow effect
- `shimmer` - Shimmer/wave effect
- `slideInUp`, `slideInLeft`, `slideInRight` - Slide entrance animations
- `fadeInScale` - Fade with scale entrance

## Performance Considerations

- Framer Motion animations are GPU-accelerated
- Background gradient orbs use `will-change` implicitly through transform animations
- Images/projects use lazy loading through intersection observer (whileInView)
