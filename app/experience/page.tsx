import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-[76rem] space-y-10 px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Experience
            </p>
            <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">
              Professional Journey
            </h1>
            <p className="max-w-2xl text-sm text-slate-400">
              A deeper look at the roles and responsibilities that shaped my
              work across engineering, leadership, and product delivery.
            </p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)] hover:shadow-[0_0_25px_rgba(8,145,178,0.45)]"
          >
            <Link href="/">Back to home</Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              descriptionVariant="long"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
