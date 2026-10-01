"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { education, certifications } from "@/data/experience";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0c0c0e]">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader label="Education & Certifications" title="Academic Background" />
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {/* Education */}
          {education && (
            <ScrollReveal delay={0.1}>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left hover:border-indigo-500/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-3xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {education.institution}
                    </h3>
                    <p className="text-indigo-400 text-lg mb-1">{education.degree}</p>
                    <p className="text-gray-400">{education.major}</p>
                    <p className="text-gray-500 text-sm mt-4">Graduation: {education.year}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-indigo-500/20 transition-colors flex items-start gap-4"
                  >
                    <div className="text-2xl text-amber-500 mt-1">
                      {cert.icon || "🏆"}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
