import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="py-20 flex flex-col  max-w-[76rem] mx-auto px-6 lg:px-8 gap-8"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
        About Me
      </h2>
      <div className="flex w-full flex-col gap-16  lg:flex-row ">
        <div className="flex-1 space-y-6">
          <article className="space-y-4 text-base leading-relaxed text-slate-300">
            <h3 className="text-3xl font-bold text-slate-100">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Over one year of experience
              </span>{" "}
              in Web Development
            </h3>
            <p>
              {"Hi! I'm "}
              <strong className="text-slate-100">Mesach Harmasendro</strong>, a
              7th-semester Informatics Engineering student at Bandung Institute
              of Technology with over a year of experience in web development
              across frontend and backend.
            </p>
            <p>
              {"I've"} collaborated on multiple projects leveraging HTML, CSS,
              JavaScript, React, Next.js, Go, and Node.js to create accessible,
              user-friendly web applications.
            </p>
            <p>
              Beyond web development, {"I'm"} also passionate about{" "}
              <strong className="text-slate-100">blockchain</strong> and{" "}
              <strong className="text-slate-100">
                artificial intelligence
              </strong>
              . {"I'm"} eager to keep expanding my skills and tackle new
              software engineering challenges.
            </p>
          </article>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)] hover:shadow-[0_0_25px_rgba(8,145,178,0.45)]"
          >
            <Link
              href="https://www.linkedin.com/in/mesach-harmasendro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
        <div className="flex-1 space-y-6">
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-32 rounded-full bg-gradient-to-b from-indigo-500/20 to-cyan-400/10 blur-3xl" />
            <h4 className="text-3xl font-bold text-slate-100">
              My Most Recent{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Experience
              </span>
            </h4>
          </div>
          <div className="space-y-6">
            {experiences.slice(0, 3).map((experience) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                descriptionVariant="short"
              />
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)] hover:shadow-[0_0_25px_rgba(8,145,178,0.45)]"
            >
              <Link href="/experience">View all experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
