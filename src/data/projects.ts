import type { ProjectItem } from '../components/ProjectCard';

export const projectsData: ProjectItem[] = [
  {
    title: "AI Canvas Studio",
    description: "An interactive, real-time generative UI workbench designed for design systems and automated agent prototyping.",
    tags: ["React", "TypeScript", "Tailwind CSS", "WebSockets"],
    link: "https://example.com/demo1",
    github: "https://github.com/haloalfarizi/ai-canvas",
    featured: true,
  },
  {
    title: "OmniFlow Automation",
    description: "A high-throughput distributed workflow orchestration engine with intuitive node-based visual designer.",
    tags: ["Astro", "Tailwind CSS", "Go", "Framer Motion"],
    link: "https://example.com/demo2",
    github: "https://github.com/haloalfarizi/omniflow",
    featured: true,
  },
  {
    title: "Pulse Analytics Dashboard",
    description: "Lightweight, privacy-first telemetry and real-time event analytics dashboard for modern SaaS applications.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "https://example.com/demo3",
    github: "https://github.com/haloalfarizi/pulse-analytics",
    featured: true,
  },
  {
    title: "DevForge CLI",
    description: "Lightning-fast developer tooling command line suite for managing microservice scaffolds and local development containers.",
    tags: ["Node.js", "Rust", "CLI"],
    github: "https://github.com/haloalfarizi/devforge",
    featured: false,
  }
];
