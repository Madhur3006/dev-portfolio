# Madhur Mangal — Developer Portfolio

## Project context

A single-page personal software engineering portfolio built with React and Vite. It presents profile/about information, technology icons, work experience, selected projects, social links, and a separate resume page. The site is a static frontend: there is no application server, API, database, or authentication in this repository.

## Run locally

Requirements: Node.js 24 LTS (the project was set up with Node `v24.21.0`) and Yarn Classic `1.22.22`.

```sh
# From the repository root
corepack yarn@1.22.22 install --frozen-lockfile
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173/`). Other project commands:

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
       └── src/App.jsx              theme state + React Router
            ├── /resume             Resume page
            └── all other paths     Home page
```

- `src/main.jsx` mounts `<App />` into `#root` inside `React.StrictMode` and imports `src/index.css`.
- `src/App.jsx` owns the shared `isDarkMode` boolean and passes it, plus its setter, to both pages. The current naming is counterintuitive: `false` renders the dark appearance; `true` renders the light appearance. Keep this behavior in mind when changing theme logic.
- `src/pages/Home.jsx` composes the portfolio sections and fixed social/email rails.
- `src/pages/Resume.jsx` renders the first page of the bundled PDF into a canvas with `pdfjs-dist`, and provides a link to download the original PDF.
- React Router uses `/resume` for the resume page; the `*` route renders Home for the root and any other unmatched path.

## Source map and component responsibilities

```text
src/
├── App.jsx                       Routes and shared theme state
├── main.jsx                      React DOM entry point
├── index.css                     Google Inter font + Tailwind layers
├── constants/
│   └── index.js                  Portfolio text, links, experience, projects, contact
├── pages/
│   ├── Home.jsx                  Main portfolio composition and page background
│   └── Resume.jsx                Resume viewer, download, profile card, theme toggle
├── components/
│   ├── Navbar.jsx                Responsive section navigation, dropdown, theme toggle
│   ├── Hero.jsx                  Intro text and profile/hero presentation
│   ├── About.jsx                 About section
│   ├── Technologies.jsx          Animated technology icon list
│   ├── Projects.jsx              Project cards, screenshots, live/GitHub links
│   ├── Experience.jsx            Experience timeline and technology tags
│   ├── Social.jsx                Fixed GitHub/LinkedIn/X links
│   ├── Email.jsx                 Fixed mailto link
│   └── Contact.jsx               Standalone contact section; currently not mounted
└── assets/
    ├── MadhurMangal-Resume.pdf   Source PDF used by the resume viewer/download
    ├── profilePhoto*.jpeg        Profile photographs
    ├── IMG_4404.png, image.jpg   Additional local imagery
    ├── logo_dark.svg, logo_light.svg
    ├── kevinRushLogo.png, react.svg
    └── projects/                 Project card screenshots
```

### Component and function map

| Module | Main component/functions | Inputs and behavior |
| --- | --- | --- |
| `App.jsx` | `App()` | Creates `isDarkMode` state; provides Home and Resume routes. |
| `Home.jsx` | `Home({ isDarkMode, setIsDarkMode })` | Renders Navbar, Hero, About, Technologies, Projects, Experience, Social, and Email. `Contact` is imported but commented out of the page. |
| `Navbar.jsx` | `container(delay)`, `Navbar(...)`, `toggleDropdown()`, `handleClickOutside(event)` | Framer Motion entrance variants; section buttons scroll to element IDs; responsive menu opens/closes; outside click closes it; theme toggle updates App state. |
| `Hero.jsx` | `container(delay)`, `Hero({ isDarkMode })` | Animated introductory section; `typewriter-effect` cycles role labels and the intro copy comes from `HERO_CONTENT`. |
| `About.jsx` | `About({ isDarkMode })` | Animated about copy from `ABOUT_TEXT`. |
| `Technologies.jsx` | `iconVariants(duration)`, `Technologies({ isDarkMode })` | Repeating vertical icon animation; icons are currently declared directly in JSX. |
| `Projects.jsx` | `Projects({ isDarkMode })` | Maps `PROJECTS` into desktop alternating layouts and a mobile layout. Each item has image, description, technology labels, live URL, and GitHub URL. |
| `Experience.jsx` | `Experience({ isDarkMode })` | Maps `EXPERIENCES`; each entry renders dates, role/company, bullet points, and technology labels. |
| `Social.jsx` | `Social({ isDarkMode })` | Renders social links from `NAVLINKS`. |
| `Email.jsx` | `Email({ isDarkMode })` | Renders a vertical `mailto:` link using `CONTACT.email`. |
| `Contact.jsx` | `Contact()` | Optional contact block using `CONTACT`; not included on Home currently. |
| `Resume.jsx` | `Resume(...)`, `renderPdf()` (inside `useEffect`) | Loads the bundled PDF with PDF.js and draws page 1 on a canvas; also downloads the original PDF. |

## Content model: `src/constants/index.js`

Edit this file for most portfolio content changes:

- `HERO_CONTENT`: short headline/intro shown in Hero.
- `ABOUT_TEXT`: About paragraph.
- `EXPERIENCES`: array of `{ year, role, company, description: string[], technologies: string[] }`.
- `PROJECTS`: array of `{ title, image, description, technologies: string[], liveLink, githubLink }`. Images are imported at the top of the module from `src/assets/projects/`.
- `NAVLINKS`: `{ github, linkedIn, x }` social profile URLs.
- `CONTACT`: `{ email, phoneNo }` contact details.

Use valid absolute `https://` URLs for external links. The current LinkedIn value in `NAVLINKS` has no URL scheme; correct it if updating that link.

## Styling and motion

- React 19, Vite 7, Tailwind CSS 3, and PostCSS provide the frontend and styling pipeline.
- Most component styles are Tailwind utility classes written inline in JSX; global Tailwind layers and the Inter font import are in `src/index.css`.
- Framer Motion handles entrance, scroll-into-view, and icon animations.
- `tailwind.config.js` scans `index.html` and files under `src/`; `vite.config.js` enables the React plugin.
- Shared theme presentation is implemented with conditional class names in components, not a separate theme provider or persisted preference.

## Dependencies

Runtime dependencies: `react`, `react-dom`, `react-router-dom`, `framer-motion`, `react-icons`, `pdfjs-dist`, and `typewriter-effect`.

Development dependencies include Vite, the Vite React plugin, Tailwind/PostCSS, Autoprefixer, and ESLint with React Hooks and React Refresh rules. The `typewriter-effect` package is installed; check imports/usages before removing it.

## Change guide

1. Change profile copy, social/contact values, project cards, or experience entries in `src/constants/index.js`.
2. Change a section's markup/behavior in its matching file under `src/components/`.
3. Change route-level composition or shared theme state in `src/pages/` and `src/App.jsx`.
4. Put new static images in `src/assets/` (or `src/assets/projects/` for project cards), then import them from the component or constants module.
5. Keep section IDs in sync with the buttons in `Navbar.jsx` (`about`, `technologies`, `experience`, and `projects`).
6. Keep dependency installs on Yarn Classic while both lockfiles remain and `package-lock.json` is stale.

## Notes for future work

- `Contact.jsx` is not currently part of the rendered Home page. Its markup references `CONTACT.address`, but `CONTACT` currently defines only `email` and `phoneNo`; add an address field before enabling that block or remove the address paragraph.
- Resume page uses PDF.js canvas rendering for page 1 and a separate direct download link for the complete PDF.
- `index.html` still uses the default Vite favicon and `Vite + React` document title.
- There is no test script configured in `package.json`.
