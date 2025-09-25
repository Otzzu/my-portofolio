import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectsProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function Projects({ limit, showViewAll = false }: ProjectsProps = {}) {
  const displayedProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto flex w-full max-w-[76rem] flex-col gap-12 px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Projects
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            Showcasing{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Selected Projects
            </span>{" "}
            from recent work
          </h3>
        </div>
        <div className="space-y-10">
          {displayedProjects.map((project, index) => (
            <article
              key={project.title}
              className={cn(
                "flex flex-col gap-8 overflow-hidden rounded-3xl border border-slate-900/60 bg-slate-950/70 shadow-xl shadow-slate-950/40 md:flex-row",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-slate-900/70">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6"
                  priority={index === 0}
                />
              </div>
              <div className="flex w-full flex-col gap-4 p-8 md:w-1/2">
                {project.context && (
                  <Badge
                    variant="outline"
                    className="w-fit border-cyan-400/30 bg-cyan-400/10 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-200"
                  >
                    {project.context}
                  </Badge>
                )}
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
                {project.href && (
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
                )}
              </div>
            </article>
          ))}
        </div>
        {showViewAll && (
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)] hover:shadow-[0_0_25px_rgba(8,145,178,0.45)]"
            >
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
