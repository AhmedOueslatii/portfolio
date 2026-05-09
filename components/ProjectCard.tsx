"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

function TripleThumb({ images }: { images: Project["images"] }) {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-[55%_45%]">
      <div className="relative col-span-2 overflow-hidden">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
      </div>
      {images.slice(1, 3).map((img) => (
        <div key={img.src} className="relative overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function StackedThumb({ images }: { images: Project["images"] }) {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-2">
      {images.slice(0, 2).map((img) => (
        <div key={img.src} className="relative overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? Link : "div";
  const wrapperProps = project.href ? { href: project.href } : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group block overflow-hidden rounded-3xl bg-paper transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card"
    >
      {/* @ts-expect-error polymorphic wrapper */}
      <Wrapper {...wrapperProps} className="block text-inherit no-underline">
        <div className="relative aspect-[16/10] overflow-hidden bg-g200">
          {project.layout === "triple" ? (
            <TripleThumb images={project.images} />
          ) : (
            <StackedThumb images={project.images} />
          )}
          <div className="absolute inset-0 flex items-end justify-end bg-ink/0 p-5 transition-colors duration-300 group-hover:bg-ink/30">
            <span className="flex h-10 w-10 scale-0 -rotate-45 items-center justify-center rounded-full bg-paper text-base transition-transform duration-300 ease-smooth group-hover:scale-100 group-hover:rotate-0">
              ↗
            </span>
          </div>
        </div>
        <div className="px-7 pb-8 pt-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill bg-g100 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.06em] text-g700"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mb-2 font-serif text-2xl leading-[1.2] tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="text-[0.88rem] leading-[1.65] text-g700">
            {project.description}
          </p>
        </div>
      </Wrapper>
    </motion.article>
  );
}
