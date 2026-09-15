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
    title: dict.meta.products.title,
    description: dict.meta.products.description,
  };
}

export default async function ProductsPage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const products = dict.products;

  return (
    <>
      <PageHeader
        eyebrow={products.eyebrow}
        title={products.title}
        description={products.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {products.categories.map((category, index) => (
            <article
              key={category.name}
              style={{ animationDelay: `${index * 80}ms` }}
              className="animate-fade-in-up flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div className="flex h-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/70">
                <div
                  aria-hidden
                  className="h-8 w-8 rounded-md bg-gradient-to-br from-brand-300 to-brand-600"
                />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-neutral-900">
                {category.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}