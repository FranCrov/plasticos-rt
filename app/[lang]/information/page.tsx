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
    title: dict.meta.information.title,
    description: dict.meta.information.description,
  };
}

export default async function InformationPage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const information = dict.information;

  return (
    <>
      <PageHeader
        eyebrow={information.eyebrow}
        title={information.title}
        description={information.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {information.sections.map((section, index) => (
            <article
              key={section.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <div
                aria-hidden
                className="h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-300 to-brand-600"
              />
              <h2 className="mt-5 text-lg font-semibold text-neutral-900">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {section.description}
              </p>
              <ul className="mt-5 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-brand-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}