import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";
import { materialGroups } from "@/lib/site";
import { temperatureRows } from "@/lib/temperature";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: PageLangProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.materials.title,
    description: dict.meta.materials.description,
  };
}

export default async function MaterialsPage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const materials = dict.materials;
  const groups = materials.groups;
  const columns = materials.temperature.columns;

  return (
    <>
      <PageHeader
        eyebrow={materials.eyebrow}
        title={materials.title}
        description={materials.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {materialGroups.map((group, index) => (
            <article
              key={group.id}
              style={{ animationDelay: `${index * 80}ms` }}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div
                  aria-hidden
                  className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-300 to-brand-600"
                />
                <h2 className="font-display text-xl font-semibold text-neutral-900">
                  {group.name}
                </h2>
              </div>

              <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-600">
                {groups.thermalRange}
                <span className="font-semibold">{group.range}</span>
              </p>

              {group.chips ? (
                <div className="mt-6 flex flex-wrap gap-2">
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
                <div className="mt-6 flex-1 space-y-5">
                  {group.categories.map((category) => (
                    <div key={category.id}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {groups.categories[category.id]}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {category.grades.map((grade) => (
                          <span
                            key={`${grade.code}-${grade.brand ?? ""}`}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                          >
                            <span className="font-semibold">{grade.code}</span>
                            {grade.brand && (
                              <span className="text-neutral-500">
                                {" "}
                                {grade.brand}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-4 text-xs text-neutral-400">
                {groups.gradesNote}
              </p>

              <Link
                href={`/${lang}/contact`}
                className="mt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
              >
                {groups.requestGrade}
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              {materials.temperature.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {materials.temperature.title}
            </h2>
            <p className="mt-3 text-neutral-600">
              {materials.temperature.description}
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-neutral-950 text-neutral-100">
                  <th className="px-4 py-3.5 font-semibold">
                    {columns.material}
                  </th>
                  <th className="px-4 py-3.5 font-semibold">{columns.feed}</th>
                  <th className="px-4 py-3.5 font-semibold">{columns.zones}</th>
                  <th className="px-4 py-3.5 font-semibold">
                    {columns.nozzle}
                  </th>
                  <th className="px-4 py-3.5 font-semibold">{columns.melt}</th>
                  <th className="px-4 py-3.5 font-semibold">{columns.mold}</th>
                  <th className="px-4 py-3.5 font-semibold">
                    {columns.drying}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 tabular-nums">
                {temperatureRows.map((row, index) => (
                  <tr
                    key={row.material}
                    className={index % 2 ? "bg-neutral-50" : "bg-white"}
                  >
                    <td className="px-4 py-3.5 font-semibold text-neutral-900">
                      {row.material}
                    </td>
                    <td className="px-4 py-3.5 text-neutral-600">{row.feed}</td>
                    <td className="px-4 py-3.5 text-neutral-600">{row.zones}</td>
                    <td className="px-4 py-3.5 text-neutral-600">
                      {row.nozzle}
                    </td>
                    <td className="px-4 py-3.5 text-neutral-600">{row.melt}</td>
                    <td className="px-4 py-3.5 text-neutral-600">{row.mold}</td>
                    <td className="px-4 py-3.5 text-neutral-600">
                      {row.drying}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-400">
            {materials.temperature.note}
          </p>
        </div>
      </section>
    </>
  );
}