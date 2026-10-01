import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";
import HeroCarousel from "@/components/HeroCarousel";
import Image from "next/image";
import { brands, materialGroups } from "@/lib/site";

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

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-brand-300" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-tight ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function MaterialsSection({
  highlight,
  categoryLabels,
  lang,
}: {
  highlight: Dictionary["home"]["materialsHighlight"];
  categoryLabels: Dictionary["materials"]["groups"]["categories"];
  lang: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow={highlight.eyebrow}
          title={highlight.title}
          description={highlight.description}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {materialGroups.map((group, index) => (
            <Link
              key={group.id}
              href={`/${lang}/materials`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group animate-fade-in-up flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-semibold text-neutral-900">
                  {group.name}
                </h3>
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600">
                  {group.range}
                </span>
              </div>

              {group.chips ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-600"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  {group.categories.map((category) => (
                    <div key={category.id}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {categoryLabels[category.id]}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {category.grades.map((grade) => (
                          <span
                            key={`${grade.code}-${grade.brand ?? ""}`}
                            className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-600"
                          >
                            {grade.code}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-6 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-500">
                {highlight.cta}
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({
  experience,
}: {
  experience: Dictionary["home"]["experience"];
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
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          dark
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experience.stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${index * 120}ms` }}
              className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <p className="bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-neutral-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsSection({
  brandsSection,
}: {
  brandsSection: Dictionary["home"]["brandsSection"];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow={brandsSection.eyebrow}
          title={brandsSection.title}
          description={brandsSection.description}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              style={{ animationDelay: `${index * 80}ms` }}
              className="group animate-fade-in-up relative flex h-28 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 text-center transition duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100 focus-within:border-brand-300"
            >
              <span className="font-display text-sm font-bold tracking-tight text-neutral-700">
                {brand.monogram}
              </span>

              <div
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-52 -translate-x-1/2 rounded-xl border border-neutral-200 bg-neutral-950 px-3.5 py-3 text-left text-xs leading-5 text-neutral-200 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <span className="block font-semibold text-white">
                  {brand.name}
                </span>
                {brand.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalInfoSection({
  technicalInfo,
  lang,
}: {
  technicalInfo: Dictionary["home"]["technicalInfo"];
  lang: string;
}) {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow={technicalInfo.eyebrow}
          title={technicalInfo.title}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {technicalInfo.items.map((item, index) => (
            <Link
              key={item.title}
              href={`/${lang}${item.href}`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div
                aria-hidden
                className="h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-300 to-brand-600"
              />
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-500">
                →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepresentativeSection({
  representative,
  person,
  lang,
}: {
  representative: Dictionary["home"]["representative"];
  person: Dictionary["about"]["team"][number];
  lang: string;
}) {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className="animate-fade-in-up relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-300 to-brand-600"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src={representative.image}
              alt={representative.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="animate-fade-in-up [animation-delay:150ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              {representative.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-900">
              {representative.title}
            </h2>

            <div className="mt-6">
              <p className="font-display text-lg font-semibold text-neutral-900">
                {person.name}
              </p>
              <p className="text-sm text-neutral-500">{person.role}</p>
            </div>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              {representative.description}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-md bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
            >
              {representative.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageSection({
  coverage,
}: {
  coverage: Dictionary["home"]["coverage"];
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow={coverage.eyebrow}
          title={coverage.title}
          description={coverage.description}
          dark
        />

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

export default async function HomePage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const home = dict.home;

  const ctas = home.hero.ctas.map((cta) => ({
    ...cta,
    href: `/${lang}${cta.href}`,
  }));

  return (
    <>
      <HeroCarousel slides={home.hero.slides} ctas={ctas} />
      <CoverageSection coverage={home.coverage} />
      <MaterialsSection
        highlight={home.materialsHighlight}
        categoryLabels={dict.materials.groups.categories}
        lang={lang}
      />
      <ExperienceSection experience={home.experience} />
      <BrandsSection brandsSection={home.brandsSection} />
      <TechnicalInfoSection technicalInfo={home.technicalInfo} lang={lang} />
      <RepresentativeSection
        representative={home.representative}
        person={dict.about.team[0]}
        lang={lang}
      />
    </>
  );
}