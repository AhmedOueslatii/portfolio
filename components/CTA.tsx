"use client";

import { Reveal } from "./Reveal";

const EMAIL = "ahmedoueslati2000111@gmail.com";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-ink py-32 text-center text-paper section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[40%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />
      <Reveal className="relative mx-auto">
        <p className="mb-6 text-[0.73rem] font-medium uppercase tracking-wider3 text-white/40">
          Let’s work together
        </p>
        <h2 className="mb-2 font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] tracking-tightest">
          Have a project in mind? <em className="italic text-accent">Let’s talk.</em>
        </h2>
        <p className="mb-12 text-[0.95rem] text-white/45">
          Open to AI engineering, full-stack, and product collaborations.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-3 rounded-pill border border-white/20 px-10 py-4 text-[1.1rem] font-medium text-paper no-underline transition hover:border-white/40 hover:bg-white/5"
        >
          {EMAIL}
        </a>
      </Reveal>
    </section>
  );
}
