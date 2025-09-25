import Image from "next/image";

import { tools } from "@/lib/data";

export function Tools() {
  return (
    <section id="tools" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(2,132,199,0.15),_transparent_70%)]" />
      <div className="mx-auto flex w-full max-w-[76rem] flex-col items-center gap-12 px-6 text-center lg:px-8">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Tools & Technologies
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            Tools and Technologies I really good at
          </h3>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-4 rounded-2xl border border-slate-900/60 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-500/80">
                <Image
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  width={56}
                  height={56}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
