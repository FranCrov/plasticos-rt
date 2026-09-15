import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: PageLangProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  };
}

export default async function AboutPage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const about = dict.about;

  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900">
              {about.sectionTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              {about.paragraph1}
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              {about.paragraph2}
            </p>
          </div>

          <div className="animate-fade-in-up grid grid-cols-2 gap-4 [animation-delay:150ms]">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <p className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {about.values.map((value, index) => (
            <div
              key={value.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <div
                aria-hidden
                className="h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-300 to-brand-600"
              />
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              {about.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-900">
              {about.teamTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-base text-neutral-600">
              {about.teamNote}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((member, index) => (
              <div
                key={member.name}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in-up"
              >
                <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200/70 ring-1 ring-inset ring-brand-100 transition duration-300 hover:ring-brand-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="h-12 w-12 text-brand-400"
                    aria-hidden
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
                  </svg>
                </div>
                <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {about.teamPhoto}
                </p>
                <h3 className="mt-1 text-center font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-neutral-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}