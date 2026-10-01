"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import BrowserMockup from "./ui/BrowserMockup";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { projects } from "@/data/projects";

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section id="projects" className="py-24 bg-[#0c0c0e]">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Featured Work"
            title="Projects & Case Studies"
            description="Real-world applications built to solve real problems."
          />
        </ScrollReveal>

        <div className="space-y-24 mt-16">
          {sortedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={project.id} delay={0.1}>
                <div
                  id={`project-${project.id}`}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 lg:gap-16 items-center bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 hover:border-indigo-500/30 transition-all shadow-xl`}
                >
                  {/* Mockup Side */}
                  <div className="w-full lg:w-1/2">
                    <BrowserMockup
                      src={project.images?.[0] || "/images/projects/goldgym-1.png"}
                      alt={project.title}
                      url={project.liveUrl || `${project.id}.local`}
                    />
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="primary">{project.type}</Badge>
                        <div className="flex items-center gap-2 text-xs">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              project.status === "live" ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                          <span className="text-gray-400 uppercase tracking-wider font-medium">
                            {project.status === "live" ? "Live Production" : "Completed Project"}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Scale Stats if available */}
                    {project.dataScale && project.dataScale.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-white/5">
                        {project.dataScale.map((stat, idx) => (
                          <div key={idx} className="bg-white/[0.02] p-2.5 rounded-lg border border-white/5 text-center">
                            <span className="text-indigo-400 font-semibold text-sm">{stat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Key Highlights</span>
                        <ul className="space-y-1.5">
                          {project.features.slice(0, 4).map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-gray-300 text-sm">
                              <span className="text-indigo-400 font-bold mt-0.5">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech: string, idx: number) => (
                          <Badge key={idx} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.liveUrl && (
                        <Button href={project.liveUrl} variant="primary">
                          Live Demo ↗
                        </Button>
                      )}
                      {project.githubUrl ? (
                        <Button href={project.githubUrl} variant="secondary">
                          GitHub ↗
                        </Button>
                      ) : (
                        <span className="text-xs text-gray-500 self-center italic">
                          Build Time: {project.buildTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
