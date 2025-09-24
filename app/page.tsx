import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Tools } from "@/components/tools";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      <Hero />
      <About />
      <Tools />
      <Projects />
    </div>
  );
}
