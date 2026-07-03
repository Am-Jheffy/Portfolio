export const SITE = {
  name: "Jefferson",
  logoText: "JF",
  role: "Software Developer",
  intro: "Hi, I'm Jefferson Onunwa.",
  tagline:
    "I craft fast, scalable, and user-friendly web applications using React and TypeScript — combining modern frontend frameworks with strongly-typed, robust architectural solutions.",
  email: "jeffersiconunwa@gmail.com",
  resumeUrl: "/Jefferson_Onunwa-Frontend_Developer_3yrs.pdf",
  photo: "/avatar.jpg",
};

export const ABOUT = {
  eyebrow: "01 — About",
  heading: "From proofs to production.",
  paragraphs: [
    "I started in mathematics before moving into frontend — the habit that carried over is wanting every piece to be provable: state that can't drift, layouts that don't break under edge cases, code a teammate can read without a walkthrough.",
    "These days that means React, TypeScript, and Tailwind day to day, usually on dashboards and tools where the data is dense and the interactions have to stay predictable under real use — not just on the happy path.",
  ],
  facts: [
    { label: "Based in", value: "Port Harcourt, Nigeria" },
    { label: "Focus", value: "React · TypeScript · Tailwind" },
    { label: "Background", value: "Mathematics" },
    { label: "Currently", value: "Frontend Engineer" },
    { label: "Learning now", value: "Next.js" },
    { label: "Up next", value: "Node · Go · Cloud/Rust" },
  ],
};

export const SKILLS_META = {
  eyebrow: "02 — Skills",
  heading: "Deployable expertise.",
  intro:
    "What I'd ship with today — grouped by what it actually does, not padded percentages.",
};
 
export const skillCategories = [
  {
    id: "01",
    title: "Frontend Engineering",
    description:
      "Building robust, type-safe client systems and accessible web interfaces.",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "State & UI Architecture",
    description:
      "Managing complex data flows and orchestrating fluid, interactive user experiences.",
    skills: ["Redux", "TanStack Table", "Framer Motion", "Shadcn / Radix"],
  },
  {
    id: "03",
    title: "AI & Emerging Tech",
    description:
      "Integrating large language models and automating workflows for intelligent applications.",
    skills: ["LLM Integrations", "Prompt Engineering", "AI Automation", "Chatbot Architecture"],
  },
  {
    id: "04",
    title: "Engineering Leadership",
    description:
      "Driving project execution through technical mentorship, code review, and agile problem solving.",
    skills: [
      "Technical Mentorship",
      "Cross-functional Collaboration",
      "Agile Execution",
      "Architecture Planning",
    ],
  },
];
 
export const learningTrajectory = {
  active: ["Next.js"],
  queued: ["Node.js", "Go", "Rust", "Cloud Infrastructure"],
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Am-Jheffy", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jefferson-onunwa/",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://twitter.com/Am_Jheffy", icon: "twitter" },
] as const;
