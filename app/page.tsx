import Image from "next/image";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import ExperienceCard from "./components/experience-card";
import ProjectCard from "./components/project-card";

export default function Home() {
  const jobs = experience.filter((e) => e.type === "job");
  const internships = experience.filter((e) => e.type === "internship");
  const education = experience.filter((e) => e.type === "education");

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center gap-12 sm:flex-row sm:items-center">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Monica Frank
            </h1>
            <p className="mt-3 text-xl text-accent sm:text-2xl">Developer</p>
            <p className="mt-6 max-w-lg leading-relaxed text-foreground/70 sm:text-left">
              {"I'm a newly graduated full-stack developer currently looking for my first role. I love building web apps that are easy to use and easy to maintain, and I care a lot about clean, readable code."}
            </p>
          </div>
          <Image
            src="/image.jpg"
            alt="Monica Frank"
            width={280}
            height={280}
            className="h-auto w-auto rounded-full object-cover"
            priority
          />
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        {/* About */}
        <section id="about" className="scroll-mt-16">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-dark">
              About
            </h1>
            <hr className="flex-1 border-t-2 border-dark" />
          </div>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-foreground/80">
            <p>
              {"I'm Monica, a newly graduated full-stack developer currently looking for my first role. I enjoy building web apps that feel good to use and are easy to maintain over time. I like working across the whole solution, from UI and component structure to APIs, data, and integrations, because I love understanding how everything fits together."}
            </p>
            <p>
              {"My interest in coding really started before my studies, when I built a small internal tool for my previous workplace (Apopro Online Pharmacy). I originally made it to automate a few calculations and make a daily workflow easier for my colleagues. Seeing something I built actually save time and reduce mistakes was a huge \u201Caha\u201D moment for me, and it showed me how much real value software can create. This was a big reason I decided to switch careers and study software development."}
            </p>
            <p>
              {"Technically, I've mostly worked with React/Next.js and TypeScript on the frontend, and C#/.NET with SQL and REST APIs on the backend. I'm a structured developer who values clean code, clear responsibilities, and good collaboration. I'm also curious about AI as a development tool, as I find it useful for speed and learning, as long as you stay critical and keep ownership of the code."}
            </p>
            <p>
              {"I'm at my best in teams where people share knowledge, review each other's work, and improve continuously. If you think I could be a good fit for your team, I'd love to chat."}
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-24 scroll-mt-16">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-dark">
              Experience
            </h1>
            <hr className="flex-1 border-t-2 border-dark" />
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">Internships</h2>
            <div className="mt-4 flex flex-col gap-6">
              {internships.map((entry) => (
                <ExperienceCard key={entry.title} entry={entry} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground">Work</h2>
            <div className="mt-4 flex flex-col gap-6">
              {jobs.map((entry) => (
                <ExperienceCard key={entry.title} entry={entry} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <div className="mt-4 flex flex-col gap-6">
              {education.map((entry) => (
                <ExperienceCard key={entry.title} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24 scroll-mt-16">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-dark">
              Projects
            </h1>
            <hr className="flex-1 border-t-2 border-dark" />
          </div>
          <div className="mt-8 flex flex-col gap-8">
            {projects.map((project, i) => (
              <div key={project.title}>
                {i > 0 && <hr className="mb-8 border-t border-dark" />}
                <ProjectCard project={project} reverse={i % 2 === 1} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
