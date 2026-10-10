"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

const layout = [
  { item: "md:col-span-7 md:row-span-2", frame: "aspect-square", max: "max-w-[38rem]", sizes: "(min-width: 768px) 608px, 100vw" },
  { item: "md:col-span-5", frame: "aspect-[9/8]", max: "max-w-[30rem]", sizes: "(min-width: 768px) 480px, 100vw" },
  { item: "md:col-span-5", frame: "aspect-[4/3]", max: "max-w-[19rem]", sizes: "304px" },
] as const;

export function ProjectGallery({ projects }: { projects: readonly Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const openAt = (index: number) => {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };

  const step = (direction: 1 | -1) =>
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);

  return (
    <>
      <ul className="grid gap-12 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
        {projects.map((project, index) => {
          const slot = layout[index % layout.length];
          return (
            <li key={project.id} className={cn("reveal", slot.item)}>
              <figure className={cn("w-full", slot.max)}>
                <button
                  type="button"
                  onClick={() => openAt(index)}
                  className="group relative block w-full cursor-zoom-in overflow-hidden bg-paper-deep"
                >
                  <span className={cn("relative block", slot.frame)}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      quality={85}
                      placeholder="blur"
                      sizes={slot.sizes}
                      className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="absolute right-3 bottom-3 inline-flex size-10 items-center justify-center bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand aria-hidden="true" className="size-4" strokeWidth={1.75} />
                  </span>
                  <span className="sr-only">Visa större bild: {project.title}</span>
                </button>
                <figcaption className="mt-4 border-t border-ink/15 pt-3">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-xl">{project.title}</span>
                    <span className="text-sm text-ink-soft tabular-nums">{project.period}</span>
                  </span>
                  <span className="mt-2 block text-ink-soft">{project.description}</span>
                  <span className="mt-3 block text-xs tracking-[0.18em] text-pine uppercase">{project.category}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="ljuslada-rubrik"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/90 open:flex"
      >
        <div data-tone="dark" className="m-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-6 text-paper sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-paper/70 tabular-nums" aria-live="polite">
              {activeIndex + 1} / {projects.length}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="inline-flex size-12 items-center justify-center hover:text-timber-soft"
            >
              <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
              <span className="sr-only">Stäng</span>
            </button>
          </div>

          <div className="relative mx-auto w-full" style={{ maxWidth: active.image.width }}>
            <Image
              key={active.id}
              src={active.image}
              alt={active.alt}
              quality={85}
              sizes={`${active.image.width}px`}
              className="h-auto max-h-[70dvh] w-full object-contain"
            />
          </div>

          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 id="ljuslada-rubrik" className="font-display text-2xl">
                {active.title}
              </h2>
              <p className="mt-1 text-paper/70">
                {active.category} · {active.period}
              </p>
            </div>
            {projects.length > 1 && (
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex size-12 items-center justify-center border border-paper/25 hover:border-paper"
                >
                  <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  <span className="sr-only">Föregående bild</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex size-12 items-center justify-center border border-paper/25 hover:border-paper"
                >
                  <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  <span className="sr-only">Nästa bild</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
