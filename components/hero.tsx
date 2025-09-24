import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const floatingLogos = [
  {
    src: "/assets/img/dotnet.webp",
    alt: ".NET logo",
    className: "-left-6 top-6",
  },
  {
    src: "/assets/img/js.webp",
    alt: "JavaScript logo",
    className: "-right-4 top-12",
  },
  {
    src: "/assets/img/go.webp",
    alt: "Go logo",
    className: "-left-8 bottom-10",
  },
  {
    src: "/assets/img/python.webp",
    alt: "Python logo",
    className: "-right-10 bottom-6",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient pb-20 pt-12 sm:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.35),_transparent_55%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300/80">
            Welcome to My Portfolio
          </p>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-slate-200">Hi I&apos;m</p>
            <h1 className="bg-gradient-to-br from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Mesach Harmasendro
            </h1>
            <p className="text-2xl font-semibold text-slate-200">
              Fullstack Web Developer
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            I&apos;m a passionate full-stack web developer skilled in building
            responsive, efficient, and user-centric web applications from
            front-end design to back-end development.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="#about" className="inline-flex items-center gap-2">
                About Me
                <UserRound className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link
                href="/assets/pdf/mesach-harmasendro-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  Download CV
                </span>
                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto h-[320px] w-[260px] sm:h-[360px] sm:w-[300px]">
          <div className="absolute inset-0 rounded-[2.5rem] border border-slate-800 bg-slate-950/40" />
          <div className="absolute inset-0 -z-10 animate-pulse rounded-[2.5rem] bg-gradient-to-br from-indigo-600/40 via-sky-500/40 to-cyan-300/40 blur-3xl" />
          <Image
            src="/assets/img/photo.webp"
            alt="Portrait of Mesach Harmasendro"
            fill
            sizes="(max-width: 1024px) 300px, 360px"
            className="rounded-[2.5rem] object-cover"
            priority
          />
          {floatingLogos.map((logo) => (
            <div
              key={logo.src}
              className={`absolute hidden rounded-full border border-slate-800 bg-slate-950/90 p-3 shadow-lg shadow-slate-950/60 md:block ${logo.className}`}
            >
              <Image src={logo.src} alt={logo.alt} width={48} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
