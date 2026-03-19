import { experience } from "./data/experience";
import ExperienceCard from "./components/experience-card";

export default function Home() {
  const jobs = experience.filter((e) => e.type === "job");
  const internships = experience.filter((e) => e.type === "internship");
  const education = experience.filter((e) => e.type === "education");

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Monica Frank
        </h1>
        <p className="mt-3 text-xl text-accent sm:text-2xl">Developer</p>
        <p className="mt-6 max-w-lg text-center leading-relaxed text-foreground/70">
          A short introduction about yourself. Replace this with your own text.
        </p>
      </section>

      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        {/* About */}
        <section id="about" className="scroll-mt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            About
          </h1>
          <p className="mt-4 leading-relaxed text-foreground/80">
            A longer paragraph about who you are, what you do, and what drives
            you. Replace this with your own text.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-24 scroll-mt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Experience
          </h1>

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
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Projects
          </h1>
        </section>
      </main>
    </div>
  );
}
