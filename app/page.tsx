import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materia prima plástica para la industria",
};

const features = [
  {
    title: "Materias primas",
    description:
      "Polímeros y resinas de alta calidad para inyección, soplado y extrusión.",
    href: "/materiales",
  },
  {
    title: "Aplicaciones",
    description:
      "Productos finales para envase, construcción, automoción y más.",
    href: "/productos",
  },
  {
    title: "Asistencia técnica",
    description:
      "Soporte técnico, logística confiable y certificaciones de calidad.",
    href: "/informacion",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Proveedores de materia prima plástica
            </p>
            <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-white [animation-delay:100ms] sm:text-5xl">
              Impulsamos la industria del{" "}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent">
                plástico
              </span>
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-xl text-lg text-neutral-300 [animation-delay:200ms]">
              Distribuimos polímeros y resinas de alto rendimiento con
              logística confiable y asesoramiento técnico especializado.
            </p>
            <div className="animate-fade-in-up mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
              <Link
                href="/materiales"
                className="rounded-md bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
              >
                Ver materiales
              </Link>
              <Link
                href="/contacto"
                className="rounded-md border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-800"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
                Explorar
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}