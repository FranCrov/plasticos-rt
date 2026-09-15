"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroCta = {
  href: string;
  label: string;
  primary?: boolean;
};

export default function HeroCarousel({
  slides,
  ctas,
}: {
  slides: HeroSlide[];
  ctas: HeroCta[];
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000,
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const slide = slides[current];

  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden bg-neutral-950 lg:min-h-[640px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Highlighted products"
    >
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={item.image}
            alt=""
            fill
            unoptimized
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-neutral-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div key={current} className="max-w-2xl">
          <p className="animate-fade-in-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            {slide.eyebrow}
          </p>
          <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-tight tracking-tight text-white [animation-delay:100ms] sm:text-5xl">
            {slide.title}
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-xl text-lg text-neutral-300 [animation-delay:200ms]">
            {slide.description}
          </p>
          <div className="animate-fade-in-up mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
            {ctas.map((cta) =>
              cta.primary ? (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="rounded-md bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="rounded-md border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-800"
                >
                  {cta.label}
                </Link>
              ),
            )}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-10 flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-brand-400"
                    : "w-3 bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}