import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contactInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Formulario de contacto y ubicación de Plasticos RT. Escríbanos por cualquier consulta.",
};

const formFields = [
  { label: "Nombre", type: "text", name: "nombre", placeholder: "Su nombre" },
  { label: "Email", type: "email", name: "email", placeholder: "su@email.com" },
  { label: "Empresa", type: "text", name: "empresa", placeholder: "Nombre de la empresa" },
  {
    label: "Mensaje",
    type: "textarea",
    name: "mensaje",
    placeholder: "Cuéntenos qué material necesita...",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos"
        description="Complete el formulario o escríbanos directamente. Respondemos a todas las consultas."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <form className="rounded-2xl border border-neutral-200 bg-white p-8">
              {formFields.map((field) => (
                <div key={field.name} className="mb-5">
                  <label
                    htmlFor={field.name}
                    className="mb-1.5 block text-sm font-medium text-neutral-700"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
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
                Enviar mensaje
              </button>
              <p className="mt-3 text-center text-xs text-neutral-400">
                Formulario de ejemplo: conéctelo a su servicio de email o CRM.
              </p>
            </form>
          </div>

          <div className="animate-fade-in-up flex flex-col gap-6 [animation-delay:150ms]">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <h2 className="text-lg font-semibold text-neutral-900">
                Datos de contacto
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-neutral-500">Email</dt>
                  <dd className="mt-0.5 text-neutral-900">{contactInfo.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-neutral-500">Teléfono</dt>
                  <dd className="mt-0.5 text-neutral-900">{contactInfo.phone}</dd>
                </div>
                <div>
                  <dt className="font-medium text-neutral-500">Ubicación</dt>
                  <dd className="mt-0.5 text-neutral-900">
                    {contactInfo.address}, {contactInfo.city}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white">
              <p className="px-6 text-center text-sm text-neutral-400">
                Mapa de ubicación
                <br />
                <span className="text-xs">
                  Espacio reservado para integrar Google Maps.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}