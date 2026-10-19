# Madhur Mangal — Developer Portfolio

## Project context

Responsive React portfolio for Madhur Mangal, an AI-driven software engineer with 4+ years of experience across healthcare, cloud data, and retail. Forward Deployed Engineer experience provides career context for the customer-facing work. The site is a static frontend with no application server, API, database, or authentication.

The homepage presents the profile, grouped skills, three selected projects, four roles, and email, phone, and social links. The current résumé PDF is served from `public/Madhur_Mangal_Resume_FDE.pdf`; the old `/resume` path redirects to that file.

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
            ├── /resume             Redirect to the résumé PDF in public/
            └── all other paths     Portfolio home
```

- `src/main.jsx` mounts `<App />` into `#root` inside `React.StrictMode` and imports `src/index.css`.
- `src/App.jsx` owns `isLightMode`, redirects `/resume` to the static PDF, and renders Home for other paths. Dark mode is the default; the header toggle switches to light mode.
- `src/pages/Home.jsx` composes the homepage sections and responsive social/contact links.
- Hero and navigation résumé links point directly to the static PDF so browser viewers can display or download it.
- Section navigation uses the IDs `about`, `technologies`, `projects`, `experience`, and `credentials`.

## Source map and component responsibilities

```text
src/
├── App.jsx                       Routes and shared theme state
├── main.jsx                      React DOM entry point
├── index.css                     Inter font, Tailwind layers, focus and reduced-motion styles
├── constants/index.js            Profile text, skills, roles, projects, contact and résumé details
├── pages/
│   └── Home.jsx                  Portfolio composition and theme background
├── components/
│   ├── Navbar.jsx                Sticky responsive navigation, theme toggle, mobile menu
│   ├── Hero.jsx                  AI-driven engineering position, summary, portrait, project and résumé actions
│   ├── About.jsx                 Concise profile summary
│   ├── Technologies.jsx          Responsive grouped skill lists
│   ├── Projects.jsx              Responsive project cards and live demo links
│   ├── ProjectVisual.jsx         Accessible illustrative workflow diagrams for selected projects
│   ├── Experience.jsx            Scannable role/date/employer cards and outcome bullets
│   ├── AgentEvaluationFocus.jsx  Clearly labeled, non-project-specific agent evaluation method
│   ├── Contact.jsx               Email and phone contact links
│   ├── Social.jsx                Desktop side rail and in-flow smaller-screen links
│   └── Email.jsx                 Desktop-only fixed email rail
└── assets/
    ├── logo_dark.svg, logo_light.svg
public/
└── profile_image.jpg             Optimized main portrait used in Hero and About
```

The current résumé PDF served from `public/` is `Madhur_Mangal_Resume_FDE.pdf`.

## Component and data map

| Module | Main component | Responsibilities |
| --- | --- | --- |
| `App.jsx` | `App()` | Holds `isLightMode`; redirects `/resume` to the résumé PDF and renders Home. |
| `Home.jsx` | `Home({ isLightMode, setIsLightMode })` | Renders Navbar, Hero, About, Technologies, Projects, Experience, Contact, Social, and Email. |
| `Navbar.jsx` | `Navbar(...)` | Section links, accessible mobile menu (Escape closes it), résumé PDF link, theme toggle. |
| `Hero.jsx` | `Hero({ isLightMode })` | AI-driven software engineering positioning, resume summary, main portrait, View Projects and View Résumé actions. |
| `About.jsx` | `About({ isLightMode })` | Concise `ABOUT_TEXT` and the same main portrait. |
| `Technologies.jsx` | `Technologies({ isLightMode })` | Maps `SKILL_GROUPS` into responsive, readable skills cards. |
| `Projects.jsx` | `Projects({ isLightMode })` | Maps `PROJECTS` into responsive cards with illustrative visual, status, or Live demo link. |
| `ProjectVisual.jsx` | `ProjectVisual({ type, isLightMode })` | Renders accessible conceptual project workflows; visuals are labeled illustrative rather than screenshots or live data. |
| `Experience.jsx` | `Experience({ isLightMode })` | Maps `EXPERIENCES` into date, role, employer, and outcome bullets. |
| `AgentEvaluationFocus.jsx` | `AgentEvaluationFocus({ isLightMode })` | Shows an evaluation approach based on observable agent behavior, clearly separate from shipped Innovaccer work. |
| `Contact.jsx` | `Contact({ isLightMode })` | Email and `tel:` contact CTAs. |
| `Social.jsx` | `Social({ isLightMode })` | Icon links on wide screens; labeled in-flow links below xl. |
| `Email.jsx` | `Email({ isLightMode })` | Wide-screen fixed email link; smaller screens use the Contact section. |

### Shared content: `src/constants/index.js`

- `HERO_ROLE`, `HERO_CONTENT`, `ABOUT_TEXT`: headline, summary, and concise About text.
- `SKILL_GROUPS`: agentic AI, platforms, product, and engineering/cloud skills.
- `EXPERIENCES`: entries shaped as `{ year, role, company, location, description: string[] }`.
- `PROJECTS`: entries shaped as `{ title, status?, description, liveLink? }`.
- `EDUCATION`: education details from the current résumé.
- `RESUME_PDF`, `NAVLINKS`, `CONTACT`: résumé asset path, social profile URLs, email, and public phone number.

## Styling and accessibility

- React 19, Vite 7, Tailwind CSS 3, and PostCSS provide the frontend and styling pipeline.
- Components use Tailwind utility classes; global focus and reduced-motion rules live in `src/index.css`.
- React Icons provides social icons. Sections use semantic headings and lists, external links have descriptive labels, and controls expose accessible names/state.
- Mobile navigation collapses into a keyboard-dismissible menu. Social links move into the page flow below xl screens; email remains available in the Contact section.
- Theme-specific text and surfaces are selected through `isLightMode`; there is no persisted preference.
- `index.html` sets the site title, description, theme color, and custom favicon.

## Change guide

1. Update portfolio text, skills, roles/dates/bullets, projects, and résumé education in `src/constants/index.js`.
2. Change section markup or interactions in the matching file under `src/components/`.
3. Change routes or shared theme behavior in `src/App.jsx` and `src/pages/`.
4. Keep project details and links in `PROJECTS`; only add preview imagery when an authentic project image is available.
5. Keep the section IDs in sync with `SECTION_LINKS` in `Navbar.jsx`.
6. Use Yarn Classic for dependency installs while both lockfiles remain and `package-lock.json` is stale.

## Current details to review before publishing

- Update `public/Madhur_Mangal_Resume_FDE.pdf` when replacing the résumé. The phone number is public on the portfolio and in the PDF.
- The LinkedIn URL now includes `https://`; check the destination if the profile URL changes.
- No automated test script is configured in `package.json`.
