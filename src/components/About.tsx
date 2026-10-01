"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";

const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "1+", label: "Year Experience" },
  { value: "3", label: "Certifications" },
  { value: "3.8K+", label: "Services Automated" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0c0c0e]">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="About Me"
            title="Turning Ideas Into Reality"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A passionate Software Engineer and Full-Stack Developer with a focus on
                building modern, scalable web applications. With a background in Business
                Information Systems, I combine technical expertise with business
                understanding to deliver solutions that make a real impact.
              </p>
              <p>
                I specialize in full-stack development using Next.js, Laravel, and MySQL,
                building everything from job portals and fitness platforms to ERP systems
                and automation bots. I'm a fast learner driven by curiosity and a
                commitment to finding root solutions to complex problems.
              </p>
              <p>
                Currently exploring Spring Boot to expand my backend capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Cards */}
          <ScrollReveal delay={0.4} direction="left">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors"
                >
                  <span className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
