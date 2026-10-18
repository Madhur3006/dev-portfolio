# Madhur Mangal — Developer Portfolio

## Project context

Responsive React portfolio for Madhur Mangal, a Software Development Engineer and frontend-focused full-stack engineer with 4+ years of experience across healthcare, retail, and cloud platforms. The site is a static frontend with no application server, API, database, or authentication.

The homepage presents the profile, grouped skills, two selected projects, four current roles, and email/social links. `/resume` is a responsive HTML résumé built from the same content data; its **Print / Save as PDF** control uses the browser print dialog. The attached source résumé is not copied into the site, and the phone number is not displayed.

## Run locally

Requirements: Node.js 24 LTS (the setup used Node `v24.21.0`) and Yarn Classic `1.22.22`.

```sh
# From the repository root
corepack yarn@1.22.22 install --frozen-lockfile
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173/`). Other commands:

```sh
npm run build      # production build in dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

### Dependency lockfiles

The repository has both `yarn.lock` and `package-lock.json`. Use the checked-in Yarn v1 lockfile for dependency installs. The npm lockfile is out of sync with `package.json`, so `npm ci` fails; avoid mixing package managers or regenerating either lockfile as part of unrelated changes.

## Runtime and routes

```text
index.html
  └── src/main.jsx                 React root + global CSS
       └── src/App.jsx              shared light/dark theme + React Router
            ├── /resume             Résumé page with print stylesheet
            └── all other paths     Portfolio home
```

- `src/main.jsx` mounts `<App />` into `#root` inside `React.StrictMode` and imports `src/index.css`.
- `src/App.jsx` owns `isLightMode` and passes it to both routes. Dark mode is the default; the header toggle switches to light mode.
- `src/pages/Home.jsx` composes the homepage sections and responsive social/contact links.
- `src/pages/Resume.jsx` presents experience, skills, projects, education, certifications, and awards from shared constants. It does not render or link the older bundled PDF.
- Section navigation uses the IDs `about`, `technologies`, `projects`, and `experience`.

## Source map and component responsibilities

```text
src/
├── App.jsx                       Routes and shared theme state
├── main.jsx                      React DOM entry point
├── index.css                     Inter font, Tailwind layers, focus/reduced-motion/print styles
├── constants/index.js            Profile text, skills, roles, projects, contact and résumé details
├── pages/
│   ├── Home.jsx                  Portfolio composition and theme background
│   └── Resume.jsx                Responsive HTML résumé and print action
├── components/
│   ├── Navbar.jsx                Sticky responsive navigation, theme toggle, mobile menu
│   ├── Hero.jsx                  Name, full role, summary, project and résumé actions
│   ├── About.jsx                 Concise profile summary
│   ├── Technologies.jsx          Labeled core icons and grouped skill lists
│   ├── Projects.jsx              Responsive project cards and working demo/repository links
│   ├── Experience.jsx            Scannable role/date/employer cards and outcome bullets
│   ├── Contact.jsx               Email contact call to action
│   ├── Social.jsx                Desktop side rail and in-flow smaller-screen links
│   └── Email.jsx                 Desktop-only fixed email rail
└── assets/
    ├── MadhurMangal-Resume.pdf   Legacy résumé asset; currently unused
    ├── profilePhoto*.jpeg        Profile photographs
    ├── logo_dark.svg, logo_light.svg
    └── projects/                 Selected project screenshots
```

## Component and data map

| Module | Main component | Responsibilities |
| --- | --- | --- |
| `App.jsx` | `App()` | Holds `isLightMode`; routes `/resume` and Home. |
| `Home.jsx` | `Home({ isLightMode, setIsLightMode })` | Renders Navbar, Hero, About, Technologies, Projects, Experience, Contact, Social, and Email. |
| `Navbar.jsx` | `Navbar(...)` | Section links, accessible mobile menu (Escape closes it), résumé route, theme toggle. |
| `Hero.jsx` | `Hero({ isLightMode })` | Static, responsive `HERO_ROLE`, summary, profile image, View Projects and View Résumé actions. |
| `About.jsx` | `About({ isLightMode })` | Concise `ABOUT_TEXT` and profile image. |
| `Technologies.jsx` | `Technologies({ isLightMode })` | Labeled icon set for featured technologies and `SKILL_GROUPS` cards. |
| `Projects.jsx` | `Projects({ isLightMode })` | Maps `PROJECTS` into consistent cards with image, summary, tech labels, Live demo, and GitHub links. |
| `Experience.jsx` | `Experience({ isLightMode })` | Maps `EXPERIENCES` into date, role, employer, and outcome bullets. |
| `Contact.jsx` | `Contact({ isLightMode })` | Email CTA; does not display a phone number. |
| `Social.jsx` | `Social({ isLightMode })` | Icon links on wide screens; labeled in-flow links below xl. |
| `Email.jsx` | `Email({ isLightMode })` | Wide-screen fixed email link; smaller screens use the Contact section. |
| `Resume.jsx` | `Resume(...)` | Renders shared résumé data and opens browser print/save dialog. |

### Shared content: `src/constants/index.js`

- `HERO_ROLE`, `HERO_CONTENT`, `ABOUT_TEXT`: headline, summary, and concise About text.
- `SKILL_GROUPS`, `FEATURED_TECHNOLOGIES`: categorized skills and accessible icon labels.
- `EXPERIENCES`: entries shaped as `{ year, role, company, description: string[] }`.
- `PROJECTS`: entries shaped as `{ title, image, description, technologies: string[], liveLink, githubLink }`.
- `EDUCATION`, `CERTIFICATIONS`, `AWARDS`: résumé education and recognition details.
- `NAVLINKS`, `CONTACT`: social profile URLs and public email address. Do not add the résumé phone number.

## Styling and accessibility

- React 19, Vite 7, Tailwind CSS 3, and PostCSS provide the frontend and styling pipeline.
- Components use Tailwind utility classes; global focus, reduced-motion, and print rules live in `src/index.css`.
- React Icons provides labeled technology and social icons. Sections use semantic headings and lists, external links have descriptive labels, and controls expose accessible names/state.
- Mobile navigation collapses into a keyboard-dismissible menu. Social links move into the page flow below xl screens; email remains available in the Contact section.
- Theme-specific text and surfaces are selected through `isLightMode`; there is no persisted preference.
- `index.html` sets the site title, description, theme color, and custom favicon.

## Change guide

1. Update portfolio text, skills, roles/dates/bullets, projects, and résumé education in `src/constants/index.js`.
2. Change section markup or interactions in the matching file under `src/components/`.
3. Change routes or shared theme behavior in `src/App.jsx` and `src/pages/`.
4. Add project screenshots under `src/assets/projects/`, import them in the constants module, and keep each card image ratio consistent.
5. Keep the section IDs in sync with `SECTION_LINKS` in `Navbar.jsx`.
6. Use Yarn Classic for dependency installs while both lockfiles remain and `package-lock.json` is stale.

## Current details to review before publishing

- The prior bundled PDF at `src/assets/MadhurMangal-Resume.pdf` is legacy content and is not linked from the updated résumé page. The page instead prints the current site résumé data without a phone number.
- The LinkedIn URL now includes `https://`; check the destination if the profile URL changes.
- No automated test script is configured in `package.json`.
