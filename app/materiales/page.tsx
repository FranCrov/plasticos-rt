import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Materiales",
  description:
    "Catálogo de materias primas plásticas: polietileno, polipropileno, PVC, PET y más.",
};

const materiales = [
  {
    name: "Polietileno (PE)",
    description:
      "Alta y baja densidad, ideal para film, soplado e inyección con buen balance de precio y desempeño.",
    usos: ["Film", "Soplado", "Inyección"],
  },
  {
    name: "Polipropileno (PP)",
    description:
      "Rigidez y resistencia química destacadas para envase, textiles y piezas técnicas.",
    usos: ["Envase", "Textil", "Automoción"],
  },
  {
    name: "PVC",
    description:
      "Material versátil para tuberías, perfiles y recubrimientos de larga vida útil.",
    usos: ["Tuberías", "Perfiles", "Construcción"],
  },
  {
    name: "PET",
    description:
      "Transparencia y seguridad alimentaria para botellas y envases.",
    usos: ["Botellas", "Envase"],
  },
  {
    name: "Poliestireno (PS)",
    description:
      "Rigidez y facilidad de procesamiento para termoformado y embalaje.",
    usos: ["Termoformado", "Embalaje"],
  },
  {
    name: "ABS",
    description:
      "Excelente resistencia al impacto y acabado superficial para piezas visibles.",
    usos: ["Electrodomésticos", "Electrónica"],
  },
];

export default function MaterialesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Materiales"
        title="Materias primas"
        description="Un catálogo completo de polímeros y resinas seleccionadas por calidad y consistencia lote a lote."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materiales.map((material, index) => (
            <article
              key={material.name}
              style={{ animationDelay: `${index * 80}ms` }}
              className="group animate-fade-in-up flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div
                aria-hidden
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-300 to-brand-600"
              />
              <h2 className="mt-6 text-lg font-semibold text-neutral-900">
                {material.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">
                {material.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {material.usos.map((uso) => (
                  <span
                    key={uso}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
                  >
                    {uso}
                  </span>
                ))}
              </div>
              <Link
                href="/contacto"
                className="mt-6 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
              >
                Solicitar información
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}