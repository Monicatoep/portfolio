export interface ExperienceEntry {
  type: "job" | "education" | "internship";
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    type: "internship",
    title: "Developer",
    organization: "Apoteka",
    description:
      "Led the frontend team in rebuilding the main product dashboard. Improved performance by 40% and introduced a component library used across three teams.",
    startDate: "2025-08",
    endDate: "2025-10",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Sanity", "C#", ".NET"],
  },
  {
    type: "education",
    title: "AP Graduate in Computer Science",
    organization: "Zealand",
    description:
      "Developed websites and web apps for various clients. Gained experience across the full stack while working in a fast-paced agency environment.",
    startDate: "2023-09",
    endDate: "2026-01",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Sanity", "C#", ".NET", "Kotlin", "Vue"],
  },
  {
    type: "job",
    title: "Farmakonom",
    organization: "Several pharmacies",
    description:
      "Focused on distributed systems and web technologies. Thesis on real-time collaborative editing algorithms.",
    startDate: "2014-09",
    endDate: "2023-09",
    technologies: ["PharmaNet"],
  },
  {
    type: "education",
    title: "Farmakonom",
    organization: "Pharmakon",
    description:
      "Foundational studies in computer science, mathematics, and software engineering.",
    startDate: "2014-09",
    endDate: "2017-06",
    technologies: ["Pharmanet"],
  },
];
