export const SITE = {
  name: "Jefferson",
  logoText: "JF",
  role: "Software Developer",
  intro: "Hi, I'm Jefferson Onunwa.",
  tagline:
    "I craft fast, scalable, and user-friendly web applications using React and TypeScript — combining modern frontend frameworks with strongly-typed, robust architectural solutions.",
  email: "jeffersiconunwa@gmail.com",
  resumeUrl: "/Jefferson_Onunwa_Frontend_Engineer.pdf",
  photo: "/avatar-1-.jpg",
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
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
    ],
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
    skills: [
      "LLM Integrations",
      "Prompt Engineering",
      "AI Automation",
      "Chatbot Architecture",
    ],
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

export const PROJECTS_META = {
  eyebrow: "03 — Projects",
  heading: "Shipped, not staged.",
  intro:
    "A closer look at what I've built recently, plus a running archive of earlier work.",
};

export const featuredProjects = [
  {
    id: "01",
    type: "B2B SaaS / Financial Tech",
    title: "Axiom Vault",
    description:
      "A comprehensive financial auditing and risk management platform. Architected the frontend to handle high-density data visualizations and integrate seamlessly with AI-driven anomaly detection pipelines, ensuring predictable edge-case management for enterprise workflows.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AI Integration",
    ],
    liveLink: "https://axiomvault.netlify.app/",
    githubLink: "#",
    isPrivateRepo: true,
    imagePath: "/mockups/axiom-dashboard.png",
  },
  {
    id: "02",
    type: "Logistics / Real-time Apps",
    title: "SwiftMeal Tracking",
    description:
      "An advanced package and delivery tracking portal. Implemented strict asynchronous lifecycle state handling and optimized data caching mechanisms to render fluid, live-updating shipment milestones and route maps on a unified responsive dashboard.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
      "API Integrations",
    ],
    liveLink: "https://swiftmeal-frontend-production.up.railway.app/",
    githubLink: "https://github.com/Swiftmealng/Swiftmealng",
    imagePath: "/mockups/swiftmeal.png",
  },
  {
    id: "03",
    type: "E-Commerce / Core Web Applications",
    title: "Enterprise E-Commerce",
    isBuildActive: true,
    description:
      "A modern commercial interface featuring robust global state management, complex dynamic product filtering arrays, and responsive client-side shopping checkout architectures.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Global State",
      "Component Engineering",
    ],
    liveLink: "https://aurence-fashion-empire.vercel.app",
    githubLink: "https://github.com/Am-Jheffy/aurence-fashion-empire",
    imagePath: "/mockups/ecommerce.png",
  },
];

export const projectArchive = [
  {
    year: "2024",
    title: "SwitchTech Energy",
    category: "Infrastructure / Oil & Gas",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://switchtechenergy.com/",
  },
  {
    year: "2024",
    title: "Gray Mata Solicitors",
    category: "Law Firm Architecture",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://graymata.com/",
  },
  {
    year: "2023",
    title: "St. Mary's College Awka",
    category: "Educational Institutional",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://stmaryscollegeawka.com/",
  },
  {
    year: "2023",
    title: "Arch Angel Gabriel S. S. ",
    category: "Educational Institutional",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://aagssi.com/",
  },
  {
    year: "2023",
    title: "R. F. A. E. M. Secondary School",
    category: "Educational Institutional",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://rfaemss.com/",
  },
  {
    year: "2023",
    title: "Decimal Group of Schools",
    category: "Educational Institutional",
    builtWith: ["HTML5", "CSS3", "JavaScript"],
    link: "https://decimalgroupofschools.com/",
  },
];

export const EXPERIENCE_META = {
  eyebrow: "04 — Experience",
  heading: "How I got here.",
  intro:
    "The path from finance and mathematics into shipping frontend systems.",
};

export const experienceTimeline = [
  {
    id: "01",
    period: "2026 — Present",
    role: "Frontend Engineer & Squad Leader",
    company: "Axiom Vault | BaseStack",
    description:
      "Leading frontend execution and team sprint cycles for advanced B2B SaaS platforms. Architecting high-density data visualizations and anomaly detection interfaces, ensuring rigorous type-safety and predictable state management across enterprise workflows.",
  },
  {
    id: "02",
    period: "2025",
    role: "Engineering Fellow",
    company: "Afriment | Tech4Africans",
    description:
      "Completed highly intensive software engineering cohorts, focusing on complex state handling and backend architecture. Engineered the SwiftMeal logistics platform, implementing asynchronous data flows and real-time package tracking lifecycles.",
  },
  {
    id: "03",
    period: "2024 — 2026",
    role: "Financial Operations & Independent Development",
    company: "PacknPay International Limited & Freelance",
    description:
      "Leveraged a deep background in finance and corporate accounting to engineer custom web solutions. Bridged the gap between business logic and technical execution by developing interfaces that handle complex data streams with mathematical precision.",
  },
  {
    id: "04",
    period: "2022 — 2023",
    role: "Frontend Developer & Intern",
    company: "PESOWP Limited & DigitalNotion Systems",
    description:
      "Established a foundational mastery of client-side web development. Built responsive, accessible interfaces using semantic HTML, modern CSS, and JavaScript, setting the stage for advanced component architecture.",
  },
];

export const credentials = {
  education: {
    degree: "B.Sc. Mathematics",
    institution: "Nnamdi Azikiwe University Awka, Nigeria",
  },
  status: "NYSC Completed",
};

export const accoladesData = [
  {
    org: "NITDA (3MTT)",
    award: "Software Development Scholar",
    link: "/certificates/NITDA-3MTT-software-dev-cert.pdf",
  },
  {
    org: "Afriment",
    award: "1st Place — Engineering Competition",
    link: "/certificates/afriment-1st-place.png",
  },
  {
    org: "Cisco Networking Academy",
    award: "Introduction to Cybersecurity",
    link: "/certificates/cisco-cybersecurity-cert.pdf",
  },
  {
    org: "Side Hustle",
    award: "Certified Backend Developer (Node.js)",
    link: "/certificates/nodejs-backend-cert.pdf",
  },
];

export const CONTACT_META = {
  eyebrow: "05 — Contact",
  heading: "Let's architect your next move.",
  intro:
    "Open to senior frontend roles and high-impact freelance architecture. The fastest way to reach me is below.",
};

export const CONTACT_CHANNELS = {
  availability: "Available for new opportunities",
  locationLabel: "Port Harcourt, Nigeria (WAT)",
  whatsapp:
    "https://wa.me/2348124652951?text=Hi%20Jefferson%2C%20I%20just%20reviewed%20your%20portfolio.%20I%27d%20love%20to%20connect%20regarding%20a%20potential%20opportunity.",
  calendly: "https://calendly.com/jeffersiconunwa/30min",
  directEmail: "jeffersiconunwa@gmail.com",
};

export const WEB3FORMS_ACCESS_KEY = "7bbb2b48-19ba-4110-a4e1-548417948fda";

export const FOOTER_TEXT = {
  signature:
    "Built with React, TypeScript, Tailwind CSS & Framer Motion. Engineered in Port Harcourt (WAT).",
  copyrightHolder: "Jefferson Onunwa. All rights reserved.",
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
  { label: "Twitter", href: "https://x.com/Am_Jheffy", icon: "twitter" },
] as const;
