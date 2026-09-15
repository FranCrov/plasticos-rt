import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";
import HeroCarousel from "@/components/HeroCarousel";
import { whatsappUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageLangProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  };
}

function CoverageSection({
  coverage,
}: {
  coverage: Dictionary["home"]["coverage"];
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            {coverage.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
            {coverage.title}
          </h2>
          <p className="mt-3 text-neutral-400">{coverage.description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[coverage.national, coverage.international].map((panel, index) => (
            <article
              key={panel.title}
              style={{ animationDelay: `${index * 150}ms` }}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-300 to-brand-600">
                {index === 0 ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                    aria-hidden
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="h-6 w-6 text-white"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {panel.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {panel.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {panel.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-neutral-300"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({
  features,
  exploreLabel,
}: {
  features: Dictionary["home"]["features"];
  exploreLabel: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Link
            key={feature.title}
            href={feature.href}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
          >
            <div
              aria-hidden
              className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-300 to-brand-600"
            />
            <h2 className="mt-6 text-lg font-semibold text-neutral-900">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {feature.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-500">
              {exploreLabel}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function HomePage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const home = dict.home;

  const ctas = home.hero.ctas.map((cta) => ({
    ...cta,
    href: `/${lang}${cta.href}`,
  }));

  const features = home.features.map((feature) => ({
    ...feature,
    href: `/${lang}${feature.href}`,
  }));

  return (
    <>
      <HeroCarousel slides={home.hero.slides} ctas={ctas} />
      <CoverageSection coverage={home.coverage} />
      <FeaturesSection features={features} exploreLabel={home.explore} />

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {dict.materials.ctaTitle}
          </h2>
          <p className="max-w-xl text-neutral-600">
            {dict.materials.ctaDescription}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
          >
            {dict.materials.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}