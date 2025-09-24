import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Projects
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            Presenting{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              My Project Portfolio
            </span>{" "}
            While in University
          </h3>
        </div>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col gap-8 overflow-hidden rounded-3xl border border-slate-900/60 bg-slate-950/70 shadow-xl shadow-slate-950/40 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={720}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-4 p-8 md:w-1/2">
                <h4 className="text-2xl font-semibold text-slate-100">
                  {project.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                    aria-label={`Visit ${project.title} repository`}
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
