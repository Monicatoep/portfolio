export default function TechList({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <li
          key={tech}
          className="rounded-full bg-secondary/30 px-3 py-0.5 text-xs font-medium text-foreground"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
