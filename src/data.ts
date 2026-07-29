// Imported so Vite fingerprints these and emits them into the build output.
// A raw "src/imgs/…" string would 404 in production.
import chessImg from "./imgs/chess.png";
import workflowImg from "./imgs/workflow.jpg";
import purexkinImg from "./imgs/purexkin.jpg";

export interface Job {
  num: string;
  company: string;
  role: string;
  duration: string;
  tags: string[];
  bullets: string[];
}

export interface Project {
  num: string;
  title: string;
  meta: string;
  category: string;
  description: string;
  tags: string[];
  demo: string | null;
}

export interface SkillCategory {
  category: string;
  items: { name: string; cls: string }[];
}

export interface Article {
  title: string;
  venue: string;
  date: string;
  summary: string;
  link: string;
}

export interface ResearchCard {
  slotId: string;
  status: string;
  title: string;
  description: string;
  /** Image URL — a file in /public, or an imported asset. */
  src?: string;
  alt?: string;
}

export interface Stat {
  n: string;
  label: string;
}

export const experience: Job[] = [
  {
    num: "01",
    company: "Dalil-AI (Pvt) Ltd. · UAE (Remote)",
    role: "Software Engineer - Full Stack",
    duration: "Jun 2024 - Present",
    tags: [
      "LangChain",
      "GPT-4o",
      "NestJS",
      "GraphQL",
      "Kafka",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "React TSX",
      "Docker",
      "Nx Monorepo",
    ],
    bullets: [
      "Architecting a multi-tenant SaaS CRM with modular NestJS services, a GraphQL API layer, and event-driven workflows on Kafka and BullMQ.",
      "Built AI-powered automation using LangChain and OpenAI GPT-4o for trigger-based messaging and LLM-driven response handling.",
      "Designed a workflow engine for complex automation sequences configurable triggers, conditions, and multi-channel actions.",
      "Integrated Unipile, WhatsApp, and LinkedIn APIs into a unified inbox and outreach layer.",
      "Implemented SSO (Azure AD & Google) with session management across a distributed Nx monorepo.",
      "Set up Sentry and OpenTelemetry for cross-service observability.",
    ],
  },
  {
    num: "02",
    company: "Onezerro (Pvt) Ltd. · Colombo (On-site)",
    role: "Associate Software Engineer - Full Stack",
    duration: "Dec 2023 - Jun 2024",
    tags: ["React", "Next.js", "Node.js", "SQL", "AWS", "SwiftUI"],
    bullets: [
      "Integrated Amadeus SOAP APIs for live flight booking and travel services.",
      "Built a real-time iOS location-tracking feature in SwiftUI.",
      "Developed REST APIs and managed Redux state architecture for efficient data flow.",
    ],
  },
  {
    num: "03",
    company: "Inova IT Systems (Pvt) Ltd. · Sri Lanka (Remote)",
    role: "Software Engineering Intern - Full Stack",
    duration: "2021 - 2022",
    tags: ["Java", "Spring Boot", "Angular", "SQL"],
    bullets: [
      "Built backend services with Spring Framework and implemented multilingual UI support.",
      "Managed database operations; ran bug fixing and performance testing.",
    ],
  },
];

export const projects: Project[] = [
  {
    num: "01",
    title: "AI CRM Platform",
    meta: "Dalil-AI · 2024–2026",
    category: "AI / Full-Stack · Production",
    description:
      "A production multi-tenant SaaS CRM with LangChain/GPT-4o workflows, Kafka event streams, and a unified social inbox spanning LinkedIn and WhatsApp, built on an Nx monorepo with a NestJS + GraphQL backend and a React frontend.",
    tags: [
      "NestJS",
      "GraphQL",
      "LangChain",
      "Kafka",
      "PostgreSQL",
      "React TSX",
    ],
    demo: "https://app.usedalil.ai/welcome",
  },
  {
    num: "02",
    title: "ExplainChess",
    meta: "MSc Final Year Project · 2025–2026",
    category: "AI / Research",
    description:
      "An explainable AI system that interprets chess move and puzzle difficulty using SHAP values over a trained model, served through a Flask API with a Next.js frontend on AWS.",
    tags: ["Python", "Flask", "Next.js", "AWS", "SHAP"],
    demo: "https://explain-chess-fe.vercel.app/",
  },
  {
    num: "03",
    title: "FindYourFares",
    meta: "Air Ticket Booking · 2024",
    category: "Engineering · Full-Stack",
    description:
      "A flight booking platform with Amadeus SOAP API integration, a responsive Next.js UI, and a Node.js REST backend deployed on AWS.",
    tags: ["Next.js", "Node.js", "MySQL", "AWS"],
    demo: "https://www.findyourfares.com/",
  },
  {
    num: "04",
    title: "Commercial Platform",
    meta: "In progress · 2026",
    category: "Full-Stack · Client work",
    description:
      "A client-commissioned commercial web platform, currently in build. Details and a live link are on the way.",
    tags: ["Coming soon"],
    demo: null,
  },
];

const skillsRaw: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Recoil",
      "Vite",
      "Storybook",
      "Tailwind",
      "Material UI",
    ],
  },
  {
    category: "Backend & Architecture",
    items: [
      "NestJS",
      "Node.js",
      "REST APIs",
      "BullMQ",
      "Kafka",
      "Redis",
      "TypeORM",
      "Spring Boot",
      "Flask",
      "Nx Monorepo",
      "Multi-tenant SaaS",
    ],
  },
  {
    category: "AI & LLM",
    items: [
      "LangChain",
      "OpenAI GPT-4o",
      "LLM Workflow Automation",
      "Prompt Engineering",
      "TensorFlow",
      "Keras",
      "SHAP",
      "Explainable AI",
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
  {
    category: "DevOps & Observability",
    items: ["Docker", "GitHub Actions CI/CD", "Sentry", "OpenTelemetry"],
  },
  {
    category: "Tools",
    items: ["Figma", "Jira", "Swagger", "Agile", "n8n", "SwiftUI", "Android"],
  },
];

export const skills: SkillCategory[] = skillsRaw.map((cat, i) => ({
  category: cat.category,
  items: cat.items.map((name) => ({
    name,
    cls: i % 2 === 0 ? "tag-accent" : "tag-accent-2",
  })),
}));

export const writing: Article[] = [
  {
    title:
      "Chess Puzzle Difficulty Is Not One Number, It Is a Relationship Between the Puzzle and the Player",
    venue: "Medium",
    date: "2026",
    summary:
      "On why puzzle ratings fail to capture human solving difficulty, and what a relational model of puzzle-and-player reveals instead.",
    link: "https://medium.com/@rashmi.20241660/chess-puzzle-difficulty-is-not-one-number-it-is-a-relationship-between-the-puzzle-and-the-player-adfa16363ee7",
  },
];

export const researchTags: string[] = [
  "Python",
  "LightGBM",
  "Stockfish",
  "SHAP",
  "Machine Learning",
  "NLP Explanations",
];

export const moreResearch: ResearchCard[] = [
  {
    slotId: "research-2",
    status: "Completed",
    title: "Adaptive Difficulty Modeling",
    src: chessImg,
    alt: "Adaptive Difficulty Modeling",
    description:
    "Building on the ExplainChess framework to estimate puzzle difficulty relative to an individual player's skill level, using rating history and performance patterns to deliver more personalized and accurate difficulty predictions."
  },
  {
    slotId: "research-3",
    status: "Ongoing",
    title: "LLM Workflow Reliability",
    src: workflowImg,
    description:
    "Investigating methods to improve the reliability of LangChain-based LLM agent workflows by analysing explanation traces, identifying silent reasoning failures, and automatically detecting or correcting errors before responses reach users."
  },
  {
    slotId: "research-4",
    status: "Completed",
    title: "Explainability for Recommender Systems",
    src: purexkinImg,
    description:
      "A deep learning–based acne scar classification system that combines ResNet50 and EfficientNetB0 through a stacking ensemble to accurately classify scar types and provide personalised health insights. The model achieved 95% accuracy, highlighting the potential of ensemble learning.",
  },
];

const pipelineLabels = [
  "Chess position",
  "Feature extraction (Stockfish)",
  "LightGBM model",
  "SHAP explainability",
  "Human difficulty score + explanation",
];

export const pipeline = pipelineLabels.map((label, i) => ({
  n: String(i + 1).padStart(2, "0"),
  label,
  hasNext: i < pipelineLabels.length - 1,
}));

export const stats: Stat[] = [
  { n: "4+", label: "Years of full-stack engineering experience" },
  { n: "3", label: "Companies intern to AI systems architecture" },
  { n: "12+", label: "AI research projects shipped like products" },
];

const marqueeItems = [
  "LangChain",
  "GPT-4o",
  "NestJS",
  "GraphQL",
  "React",
  "TypeScript",
  "Kafka",
  "Explainable AI",
  "PostgreSQL",
  "Docker",
];

export const marqueeDouble = [...marqueeItems, ...marqueeItems];

export const contact = {
  email: "rashidineka@gmail.com",
  location: "Colombo, Sri Lanka",
  timezone: "GMT+5:30",
  artPortfolioUrl: "#",
  linkedinUrl: "#",
  githubUrl: "#",
  resumeUrl: "#",
};
