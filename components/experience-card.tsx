import Image from "next/image";

type ExperienceCardProps = {
  experience: Experience;
  descriptionVariant?: "short" | "long";
};

export function ExperienceCard({
  experience,
  descriptionVariant = "short",
}: ExperienceCardProps) {
  const description =
    descriptionVariant === "long"
      ? experience.descriptionLong
      : experience.descriptionShort;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-900/70 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40 sm:flex-row sm:items-start">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          fill
          sizes="64px"
          className="object-contain p-2"
        />
      </div>
      <div className="space-y-2 text-sm text-slate-300 sm:flex-1">
        <h5 className="text-lg font-semibold text-slate-100">
          {experience.role}{" "}
          <span className="text-sm font-medium text-cyan-300">
            - {experience.company}
          </span>
        </h5>
        <p className="text-xs uppercase tracking-wider text-slate-500">
          {experience.period}
        </p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
