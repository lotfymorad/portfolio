"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import Badge from "./ui/Badge";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader label="Experience" title="My Journey" />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative border-l border-indigo-500/30 ml-4 md:ml-0 md:pl-10 space-y-12">
            {experiences.map((exp: any, index: number) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="relative pl-8 md:pl-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] md:-left-[45px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-surface" />

                  {/* Card */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-indigo-500/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 font-medium">
                            {exp.company}
                          </span>
                          {exp.type && <Badge variant="default">{exp.type}</Badge>}
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{exp.description}</p>

                    {exp.responsibilities && (
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                            <span className="text-indigo-500 mt-1 text-xs">◆</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {exp.technologies.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-gray-400 bg-black/20 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
