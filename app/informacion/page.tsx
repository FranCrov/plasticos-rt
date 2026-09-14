import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Información técnica",
  description:
    "Información técnica, logística y certificaciones de calidad de Plasticos RT.",
};

const secciones = [
  {
    title: "Información técnica",
    description:
      "Fichas técnicas de cada polímero y resina: densidad, índice de fluidez, temperatura de procesamiento y aplicaciones recomendadas. Nuestro equipo asesora en la selección del material correcto para cada proceso.",
    items: ["Fichas técnicas por material", "Asesoría de selección", "Soporte en planta"],
  },
  {
    title: "Logística",
    description:
      "Entregas programadas y urgencias cubiertas con una red de distribución amplia y stock estratégico para no detener su producción.",
    items: ["Stock permanente", "Entregas programadas", "Cobertura nacional"],
  },
  {
    title: "Certificaciones",
    description:
      "Materias primas con trazabilidad total y certificaciones de calidad que respaldan cada lote entregado.",
    items: ["Trazabilidad de lote", "Normas de calidad", "Grado alimenticio disponible"],
  },
];

export default function InformacionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Información"
        title="Información técnica y logística"
        description="Todo lo que necesita saber para operar con seguridad, calidad y continuidad."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {secciones.map((seccion, index) => (
            <article
              key={seccion.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <div
                aria-hidden
                className="h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-300 to-brand-600"
              />
              <h2 className="mt-5 text-lg font-semibold text-neutral-900">
                {seccion.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {seccion.description}
              </p>
              <ul className="mt-5 space-y-2">
                {seccion.items.map((item) => (
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