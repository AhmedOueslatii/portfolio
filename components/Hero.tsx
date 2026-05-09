"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnMount } from "./Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-screen items-center gap-10 pb-20 pt-32 section-pad lg:grid-cols-2 lg:gap-16 lg:pt-32"
    >
      <RevealOnMount>
        <span className="mb-7 inline-block rounded-pill border border-accent-bg bg-accent-bg px-3.5 py-1 text-[0.73rem] font-medium uppercase tracking-wider3 text-accent">
          Available for projects
        </span>
        <h1 className="mb-4 font-serif text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[1.02] tracking-tightest">
          AI Engineer
          <br />
          <em className="italic text-accent not-italic [font-style:italic]">
            &amp; Product
          </em>
          <br />
          Builder
        </h1>
        <p className="mb-3 text-base font-normal tracking-[0.01em] text-g400">
          AI Engineer · Full-Stack Developer
        </p>
        <p className="mb-10 max-w-[440px] text-[1.05rem] font-light leading-[1.75] text-g700">
          I build data-driven products that turn complex AI systems into
          intuitive, elegant experiences.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-8 py-3 text-[0.88rem] font-medium text-paper no-underline transition hover:-translate-y-px hover:opacity-80"
          >
            See my work →
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center gap-1.5 text-[0.88rem] text-g700 no-underline transition-colors hover:text-accent"
          >
            Let’s talk ↗
          </Link>
        </div>
      </RevealOnMount>

      <RevealOnMount delay={0.15}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-hero">
          <Image
            src="/images/hero.png.webp"
            alt="Portrait of Ahmed Oueslati"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute bottom-6 left-6 rounded-xl border border-g200 bg-paper/[0.93] px-4 py-3 text-[0.78rem] font-medium text-ink backdrop-blur">
            Tunis · Remote
            <span className="mt-0.5 block text-[0.73rem] font-light text-g400">
              Building AI products end-to-end
            </span>
          </div>
        </div>
      </RevealOnMount>
    </section>
  );
}
