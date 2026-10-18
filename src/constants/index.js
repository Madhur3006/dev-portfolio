import videoStreamingImage from "../assets/projects/project2.png";
import conversationalImage from "../assets/projects/project-1.png";

export const NAVLINKS = {
  github: "https://github.com/Madhur3006",
  linkedIn: "https://linkedin.com/in/madhur-mangal-a42b4821a",
  x: "https://x.com/madhurmangal4?s=11",
};

export const CONTACT = {
  email: "Madhurmangal5@gmail.com",
};

export const EDUCATION = {
  institution: "The LNM Institute of Information Technology",
  location: "Jaipur",
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  dates: "2018 – 2022",
};

export const CERTIFICATIONS = [
  "Web Development — Kodebay",
  "Namaste JavaScript — Akshay Saini",
  "Namaste React — Akshay Saini",
  "Namaste Node — Akshay Saini",
  "Azure Fundamentals (AZ-900)",
  "AWS Cloud Practitioner",
];

export const AWARDS = [
  "Spot Award — Innovaccer UI framework adoption",
  "Delivery Ninja Award — Walmart partnership delivery at CommerceIQ",
];

export const HERO_ROLE = "Software Development Engineer";

export const HERO_CONTENT =
  "Frontend-focused full-stack engineer with 4+ years of experience building scalable web applications across healthcare, retail, and cloud platforms. I focus on React, TypeScript, micro-frontends, accessibility, and performance.";

export const ABOUT_TEXT =
  "I build scalable web applications across healthcare, retail, and cloud platforms. My work spans frontend architecture and full-stack delivery, with a focus on accessible, performant experiences using React, TypeScript, and micro-frontends.";

export const SKILL_GROUPS = [
  {
    title: "Frontend & architecture",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vue.js",
      "React Native",
      "Redux",
      "React Router",
      "Micro-frontends",
      "Module Federation",
      "Webpack",
      "HTML5",
      "CSS / Sass",
      "Tailwind CSS",
      "Responsive design",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Python"],
  },
  {
    title: "Accessibility & quality",
    skills: [
      "WCAG 2.2 accessibility",
      "Performance optimization",
      "Jest",
      "React Testing Library",
      "Unit testing",
      "Code reviews",
    ],
  },
  {
    title: "Cloud & delivery",
    skills: [
      "Google Cloud",
      "AWS",
      "Docker",
      "Git",
      "Jenkins",
      "CI/CD",
      "npm / Yarn",
      "Jira",
      "Agile / Scrum",
      "Claude Code",
      "Cursor",
    ],
  },
];

export const FEATURED_TECHNOLOGIES = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Google Cloud",
  "AWS",
  "Docker",
  "Webpack",
];

export const EXPERIENCES = [
  {
    year: "Sep 2025 – Present",
    role: "Software Development Engineer 1",
    company: "Innovaccer",
    description: [
      "Drive development of P360, a patient platform for clinical data workflows, and frontend architecture for a Module Federation micro-frontend system with independently deployable features.",
      "Led a WCAG 2.2 audit across 4 repositories covering 273 issues; resolved 52% through automated fixes and a structured sprint plan.",
      "Built a reusable React file preview for PDF, DOCX, XLSX, images, video, and audio, removing third-party viewer dependencies.",
      "Resolved performance bottlenecks and memory leaks in patient-data views; used AI-assisted tools to speed debugging and code review.",
    ],
  },
  {
    year: "Jan 2025 – Sep 2025",
    role: "Fullstack Software Engineer",
    company: "CloudSufi",
    description: [
      "Led frontend delivery of Google Dataplex from the ground up to a production-ready application.",
      "Built a Node.js middleware layer for REST orchestration, authentication, and data transformation with Google Cloud services.",
      "Worked directly with Google product, UX, and technical stakeholders; mentored junior engineers on architecture and code quality.",
    ],
  },
  {
    year: "Aug 2023 – Jan 2025",
    role: "Software Development Engineer UI",
    company: "CommerceIQ",
    description: [
      "Spearheaded advertising campaign management for Walmart and Target, contributing to an 80% contract renewal rate.",
      "Designed and delivered Amazon and Walmart campaign creation features associated with 120% customer-base expansion.",
      "Received the Delivery Ninja Award for delivery of a product pivotal to CommerceIQ’s Walmart ad-tech partnership; conducted code reviews to support maintainability.",
    ],
  },
  {
    year: "Jan 2022 – Jul 2023",
    role: "Associate II Software Engineer",
    company: "Capgemini Engineering",
    description: [
      "Developed IBM Spectrum Scale GUI for managing enterprise file and object storage.",
      "Integrated Fluent UI and led migration of 70% of the codebase from Dojo to React; reached 80% code coverage with Jest and React Testing Library.",
      "Built a backup state-management library with pause and resume controls, improving backup performance by 2×.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Video Streaming Platform",
    image: videoStreamingImage,
    description:
      "Live video streaming app with Redux state management for streams, user interactions, and authentication.",
    technologies: ["React", "Redux", "YouTube Live API"],
    liveLink: "https://stupendous-haupia-936c4c.netlify.app/",
    githubLink: "https://github.com/Madhur3006/Video-Streaming-Youtube",
  },
  {
    title: "AI Conversational Platform",
    image: conversationalImage,
    description:
      "Conversational AI platform with live Gemini API integration, parallel chat threads, and Redux-managed authentication and chat history.",
    technologies: ["React", "Redux", "Google Gemini API"],
    liveLink: "https://gemini-clone-ochre-ten.vercel.app/",
    githubLink: "https://github.com/Madhur3006/Gemini-clone",
  },
];
