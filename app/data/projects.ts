export interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projects: ProjectEntry[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built from scratch with Next.js and Tailwind CSS. The site serves as a central place to showcase my projects, experience, and skills. I focused on clean design, smooth navigation with anchor-based scrolling, and a responsive layout that works well on both desktop and mobile.",
    image: "/portfolio.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Pharmacy Tool",
    description:
      "An internal tool built for Apopro Online Pharmacy to automate daily calculations and streamline repetitive workflows. The tool replaced manual spreadsheet work and reduced errors significantly. It was my first real development project and the experience that convinced me to pursue a career in software development.",
    image: "/projects/pharmacy-tool.jpg",
    technologies: ["C#", ".NET", "SQL", "REST API"],
  },
  {
    title: "Byens Bager – Internal Ordering System",
    description:
      "For my main project at the end of my studies, I co-built an internal ordering system for a local bakery, Byens Bager. We developed the product from scratch as a two-person team, from early requirements and user flows to a working solution. We chose Next.js because we both had experience with it, and used the project to explore new tools and workflows, including Supabase (database/auth), Vercel (hosting), and Playwright (end-to-end testing).\n\nA big part of the project was working closely with a non-technical Product Owner (the bakery owner). That gave us hands-on experience translating real business needs into features, asking the right questions, turning feedback into improvements, and making sure we delivered real value, not just code.\n\nWe worked with Scrum throughout the project, using user stories and iterative planning to stay aligned with the customer and continuously improve the product. Overall, the project strengthened my skills in collaboration (both within the team and with stakeholders), structured development, and learning new technologies in practice.",
    image: "/byens-bager.png",
    technologies: ["Next.js", "React", "Supabase", "Vercel", "Playwright"],
  },
];
