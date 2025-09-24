import Image from "next/image";

import { experiences, skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:px-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            About Me
          </h2>
          <article className="space-y-4 text-base leading-relaxed text-slate-300">
            <h3 className="text-3xl font-bold text-slate-100">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                {"1 Year's Experience"}
              </span>
              in Web Development
            </h3>
            <p>
              {"Hi! I'm "}
              <strong className="text-slate-100">Mesach Harmasendro</strong>, a
              5th-semester Informatics Engineering student at Bandung Institute
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
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-slate-100">
              My General{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Skills
              </span>
            </h4>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-slate-300">
                    <span>{skill.name}</span>
                    <span>{Math.round(skill.level * 100)}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-300"
                      style={{ width: `${skill.level * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            {experiences.map((experience) => (
              <div
                key={experience.company}
                className="flex flex-col gap-4 rounded-2xl border border-slate-900/70 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40 sm:flex-row sm:items-start"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <h5 className="text-lg font-semibold text-slate-100">
                    {experience.role}{" "}
                    <span className="text-sm font-medium text-cyan-300">
                      - {experience.company}
                    </span>
                  </h5>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {experience.period}
                  </p>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
