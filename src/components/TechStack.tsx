"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { skillCategories, currentlyLearning } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Tech Stack"
            title="Technologies I Work With"
            description="My primary stack is Next.js + Laravel + MySQL. Here's everything I use to build products."
          />
        </ScrollReveal>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: any, idx: number) => {
                    const isPrimary = skill.isPrimary;
                    return (
                      <div
                        key={idx}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-transform hover:scale-105 cursor-default ${
                          isPrimary
                            ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                            : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Currently Learning */}
          {currentlyLearning && currentlyLearning.length > 0 && (
            <ScrollReveal delay={0.4}>
              <div className="space-y-6 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white">
                  Currently Learning
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentlyLearning.map((skill: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-lg px-4 py-2 text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 transition-transform hover:scale-105 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
