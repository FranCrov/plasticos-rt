import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { PageLangProps } from "@/lib/i18n/types";
import { contactInfo, telHref } from "@/lib/site";
import LocationMap from "@/components/LocationMap";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({
  params,
}: PageLangProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  };
}

export default async function ContactPage({ params }: PageLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const contact = dict.contact;

  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="animate-fade-in-up lg:col-span-2">
            <LocationMap
              lang={lang}
              title={contact.map.title}
              directionsLabel={contact.map.directions}
            />
          </div>

          <div className="animate-fade-in-up">
            <form className="rounded-2xl border border-neutral-200 bg-white p-8">
              {contact.form.fields.map((field) => (
                <div key={field.id} className="mb-5">
                  <label
                    htmlFor={field.id}
                    className="mb-1.5 block text-sm font-medium text-neutral-700"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={4}
                      placeholder={field.placeholder}
                      className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                className="w-full rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
              >
                {contact.form.submit}
              </button>
              <p className="mt-3 text-center text-xs text-neutral-400">
                {contact.form.note}
              </p>
            </form>
          </div>

          <div className="animate-fade-in-up h-fit rounded-2xl border border-neutral-200 bg-white p-8 [animation-delay:150ms]">
            <h2 className="text-lg font-semibold text-neutral-900">
              {contact.info.title}
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-neutral-500">
                  {contact.info.email}
                </dt>
                <dd className="mt-0.5 text-neutral-900">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-brand-600"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">
                  {contact.info.phone}
                </dt>
                <dd className="mt-0.5 text-neutral-900">
                  <a
                    href={telHref(contactInfo.phone)}
                    className="transition-colors hover:text-brand-600"
                  >
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">
                  {contact.info.location}
                </dt>
                <dd className="mt-0.5 text-neutral-900">
                  {contactInfo.address}, {contactInfo.city}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">
                  {contact.info.hours.title}
                </dt>
                <dd className="mt-0.5 text-neutral-900">
                  <p>{contact.info.hours.weekdays}</p>
                  <p>{contact.info.hours.friday}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}