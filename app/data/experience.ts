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
      "Internship as part of my AP Graduate in Computer Science program. Experience with, among other things, C#, Next.js, and Sanity.",
    startDate: "2025-08",
    endDate: "2025-10",
    technologies: ["Next.js", "React", "C#", ".NET", "Sanity"],
  },
  {
    type: "education",
    title: "AP Graduate in Computer Science",
    organization: "Zealand",
    description:
      "A practically oriented program with a broad introduction to software development. Worked with, among other things, C#, Next.js, HTML/CSS, databases, Git, and Python, as well as Scrum and collaboration in development processes, with an in-depth focus on core principles and good coding practices.",
    startDate: "2023-09",
    endDate: "2026-01",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "C#", ".NET", "SQL", "Sanity", "Vercel", "Supabase", "Playwright", "Kotlin", "Jetpack Compose", "Vue", "Python", "SCRUM"],
  },
  {
    type: "job",
    title: "Farmakonom",
    organization: "Several pharmacies",
    description:
      "10+ years of experience from various pharmacies. Most recently, I worked at Apopro Online Pharmacy, where I handled a range of pharmacy technician tasks, produced SEO material, and provided online support.",
    startDate: "2011-09",
    endDate: "2023-09",
    technologies: ["PharmaNet", "Cito"],
  },
  {
    type: "education",
    title: "Farmakonom",
    organization: "Pharmakon",
    description:
      "Training in clinical pharmacy, advising on medicines, self-care, health services, quality assurance, etc.",
    startDate: "2011-09",
    endDate: "2014-06",
    technologies: ["Pharmanet", "Cito"],
  },
];
