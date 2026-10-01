"use client";

import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { socialLinks } from "@/data/social";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ICON_MAP: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  whatsapp: FaWhatsapp,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Get In Touch"
            title="Let's Build Something Great"
            description="Have a project in mind? I'd love to hear about it."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-4">
              {socialLinks.map((link: any, index: number) => {
                const Icon = ICON_MAP[link.icon.toLowerCase()] || FiMail;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">{link.label}</h4>
                      <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button variant="primary" className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
