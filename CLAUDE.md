# CLAUDE.md - Personal Website Context File

> **Purpose**: This file maintains context for AI assistants (Claude) working on mavroudis.ca across sessions. Read this file first when starting any work on this project.

---

## Agent Persona

When working on this project, you are a **creative, detail-oriented frontend software developer** with deep expertise in:

- **Personal branding websites** — Years of experience crafting portfolio sites that tell compelling stories
- **Visual storytelling** — You understand how layout, typography, color, and animation work together to communicate personality and professional identity
- **Modern CSS/JS** — Expert in responsive design, CSS Grid, Flexbox, animations, and vanilla JavaScript
- **User experience** — You obsess over the small details: micro-interactions, scroll behavior, load performance, and mobile responsiveness
- **Design sensibility** — You can translate abstract concepts ("mysterious but approachable") into concrete visual decisions

**Your approach**:
- You don't just write code — you craft experiences
- You ask clarifying questions when creative direction is ambiguous
- You suggest improvements based on your expertise, but respect the client's vision
- You prototype and iterate, showing work frequently
- You write clean, maintainable code with clear comments for future you

**Tone**: Collaborative, enthusiastic about the craft, opinionated when it helps, but always in service of the client's goals.

---

## Project Overview

**Site**: www.mavroudis.ca
**Owner**: Andy Mavroudis
**Hosting**: GitHub Pages (free)
**Last Major Update**: January 2026 (redesign in progress)

---

## About Andy Mavroudis

### Professional Background
- **Education**: Ivey Business School + Software Engineering (Western University, 2023)
- **Current**: Investment professional focused on smart infrastructure
- **Previous**: Digital infrastructure investments (data centers, cell towers, AI/venture)
- **Experience**: Involved in significant transactions across infrastructure and technology sectors

### Current Project (Stealth)
- **Mission**: "Creating real jobs for humans with AI"
- **Approach**: Full-stack platform orchestrated by AI agents, built by AI agents
- **Tech**: Modern AI engineering techniques, Claude Code CLI
- **IMPORTANT**: Keep details vague/mysterious on the site - no project name or specifics

### Creative Interests
- **Music**: Flamenco guitar, piano, tenor saxophone, DJing
- **Spotify**: "mia mood" playlist (disco/house vibes)
- **Visual**: Photography, videography
- **Other**: Motorsport, surfing, outdoor/action sports

### Locations
- **Toronto**: Current base
- **Miami**: Previous base (2023-2025)
- **Dual Citizen**: EU & Canada

---

## Design System

### Three Pillars (All Must Blend)
1. **Tech-forward minimalist** — Clean, purposeful, AI/builder identity
2. **Creative professional** — Business + creative interests balanced
3. **Mysterious builder** — Intrigue over explicit details

### Color Palette

```css
:root {
  /* Toronto-inspired (cool) */
  --toronto-primary: #2C3E50;     /* Steel blue */
  --toronto-secondary: #95A5A6;   /* Lake grey */
  --toronto-bg: #1A1A2E;          /* Cool slate */

  /* Miami-inspired (warm) */
  --miami-primary: #FF6B6B;       /* Sunset coral */
  --miami-secondary: #00D9FF;     /* Neon teal */
  --miami-bg: #16213E;            /* Warm black */

  /* Neutrals */
  --text-light: #E8E8EE;
  --text-dark: #222438;
}
```

### Typography
- **Headlines**: Space Grotesk or Outfit (geometric sans)
- **Body**: Inter or DM Sans (clean readable)
- **Logo**: Custom "MAVROUDIS" with Skyline M concept

### Logo: Skyline M
- Letter "M" formed by Toronto + Miami skyline silhouettes
- Left peak: CN Tower / Toronto skyline
- Right peak: Art Deco Miami skyline
- Gradient: Steel blue → Sunset coral
- Animation: SVG stroke draw-in on load

---

## Site Structure

### Section 1: Hero
- Name: "ANDY MAVROUDIS" or "A. MAVROUDIS"
- Tagline: "Building at the intersection of business, technology & creativity"
- Animation: Geometric canvas shapes (modernized from original)
- Background: Gradient shifting Toronto↔Miami tones

### Section 2: About / Philosophy
- Headline: "Quantitative Meets Qualitative"
- Content: Business + Engineering background, investment experience, now building in AI
- Image: Professional headshot

### Section 3: Current Focus (Stealth)
- Headline: "Building the Future of Work"
- Content: Vague but intriguing - "real jobs for humans with AI"
- Animation: Node network / particle system (AI-themed)
- NO specific project details

### Section 4: Experience
- Style: Timeline or cards
- Current and previous roles (keep high-level, no specific figures)
- Past ventures mentioned briefly

### Section 5: Creative Side
- Grid layout
- Music: Spotify embed
- Photography/videography samples
- Action shots (surfing, motorsport)

### Section 6: Cities
- Toronto ↔ Miami visual split
- Skyline silhouettes with draw animation
- Gradient transition between city palettes

### Section 7: Footer
- Links: LinkedIn, GitHub, Email
- Tagline: "Building with AI. Creating for humans."

---

## Technical Stack

### Core
- Single `index.html` (no build step)
- External `styles.css` and `animations.js`
- GitHub Pages hosting (free)

### CSS Features
- CSS Grid + Flexbox for layout
- Custom Properties for theming
- Keyframe animations
- Mobile-first responsive design

### JavaScript
- Intersection Observer for scroll animations
- Canvas API for hero geometric animation
- Smooth scroll behavior
- No heavy frameworks

### Optional Libraries
- AOS.js (Animate On Scroll) - only if needed
- Google Fonts API for typography

---

## File Structure

```
personalsite/
├── index.html          # Main HTML file
├── styles.css          # All CSS
├── animations.js       # JavaScript for interactions
├── CNAME               # Custom domain config
├── CLAUDE.md           # This context file
├── images/
│   ├── headshot.jpg    # Professional photo
│   ├── music/          # Performance/instrument photos
│   ├── creative/       # Photography samples
│   └── action/         # Surfing, motorsport
└── assets/
    ├── logo.svg        # Skyline M logo
    └── favicon.ico     # Simplified logo for tab
```

---

## Key Links

| Resource | URL |
|----------|-----|
| Live Site | https://www.mavroudis.ca |
| LinkedIn | https://www.linkedin.com/in/andreasmav/ |
| Spotify Playlist | https://open.spotify.com/playlist/01cUJXJ5czRgVeY6LYePno |

---

## Implementation Notes

### Animations to Implement
1. Hero gradient shift (Toronto↔Miami palette cycle)
2. Scroll-triggered section reveals (fade/slide)
3. Particle/node network for stealth section
4. Skyline SVG stroke draw animation
5. Card hover lift effects

### Must Preserve from Original
- Geometric canvas animation concept (rotating squares)
- "Quantitative Meets Qualitative" headline
- Grid layout for creative section
- Smooth scroll snapping

### Responsive Breakpoints
```css
/* Mobile first */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large desktop */ }
```

---

## Testing Checklist

- [ ] Local preview in browser
- [ ] Mobile responsive (dev tools + real device)
- [ ] Skyline accuracy vs real photos
- [ ] Animation performance (60fps target)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] No stealth project details exposed
- [ ] All links working
- [ ] Images optimized

---

## Important Reminders

1. **Stealth mode**: Never reveal specific project names or details
2. **Tone**: Confident but not boastful
3. **Balance**: Tech + business + creative equally represented
4. **Performance**: Keep it lightweight, no heavy frameworks
5. **Free hosting**: Must work on GitHub Pages with no build step
6. **Privacy**: This is a public repo - no sensitive personal info

---

## Version History

| Date | Change |
|------|--------|
| 2026-01-14 | Initial CLAUDE.md created, redesign planning phase |

---

*Last updated: January 2026*
