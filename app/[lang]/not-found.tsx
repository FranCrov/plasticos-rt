import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";

export default async function NotFound({ params }: PageLangProps) {
  const resolved = (await params) ?? {};
  const lang = resolved.lang ?? "en";
  const dict = getDictionary(lang);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-neutral-900">
          {dict.notFound.title}
        </h1>
        <p className="mt-2 text-neutral-600">{dict.notFound.description}</p>
        <Link
          href={`/${lang}`}
          className="mt-6 inline-block rounded-md bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
        >
          {dict.notFound.home}
        </Link>
      </div>
    </section>
  );
}