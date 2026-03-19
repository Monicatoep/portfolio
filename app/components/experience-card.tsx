import { ExperienceEntry } from "../data/experience";
import { formatDate } from "../lib/utils";

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const timeline = `${formatDate(entry.startDate)} — ${
    entry.endDate ? formatDate(entry.endDate) : "Present"
  }`;

  return (
    <div className="border-b border-secondary/20 pb-6">
      <p className="text-sm text-accent">{timeline}</p>
      <h3 className="mt-1 text-lg font-semibold text-foreground">
        {entry.title}
      </h3>
      <p className="text-sm text-foreground/70">{entry.organization}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
        {entry.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {entry.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-secondary/30 px-3 py-0.5 text-xs font-medium text-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
