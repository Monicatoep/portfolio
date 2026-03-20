import { ExperienceEntry } from "../data/experience";
import { formatDate } from "../lib/utils";
import TechList from "./tech-list";

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const timeline = `${formatDate(entry.startDate)} — ${
    entry.endDate ? formatDate(entry.endDate) : "Present"
  }`;

  return (
    <div className="border-b border-dark pb-6">
      <p className="text-sm text-accent">{timeline}</p>
      <h3 className="mt-1 text-lg font-semibold text-foreground">
        {entry.title}
      </h3>
      <p className="text-sm text-foreground/70">{entry.organization}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
        {entry.description}
      </p>
      <div className="mt-3">
        <TechList technologies={entry.technologies} />
      </div>
    </div>
  );
}
