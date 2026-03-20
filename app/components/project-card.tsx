import Image from "next/image";
import { ProjectEntry } from "../data/projects";
import TechList from "./tech-list";

export default function ProjectCard({
  project,
  reverse,
}: {
  project: ProjectEntry;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 sm:items-center ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="relative h-80 w-full shrink-0 sm:w-[36rem]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-lg object-contain"
        />
      </div>
      <div className="rounded-lg bg-secondary/15 p-6">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-4">
          <TechList technologies={project.technologies} />
        </div>
      </div>
    </div>
  );
}
