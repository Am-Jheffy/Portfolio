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
    { label: "Currently", value: "Learning & Building..." },
    { label: "Learning now", value: "Next.js" },
    { label: "Up next", value: "Node · Go · Cloud/Rust" },
  ],
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
