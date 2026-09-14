import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Aplicaciones y productos finales que nuestros materiales impulsan en diversas industrias.",
};

const categorias = [
  {
    name: "Envases y botellas",
    description:
      "Botellas, contenedores y packaging para alimentos y bebidas con materiales grado alimenticio.",
  },
  {
    name: "Film y embalaje",
    description:
      "Películas estirables, termocontraíbles y bolsas para la cadena de distribución.",
  },
  {
    name: "Tuberías y perfiles",
    description:
      "Sistemas de conducción e instalaciones con excelente resistencia química y mecánica.",
  },
  {
    name: "Automoción",
    description:
      "Componentes interiores y exteriores livianos, seguros y de larga duración.",
  },
  {
    name: "Construcción",
    description:
      "Aislaciones, membranas y piezas estructurales para obra en altura.",
  },
  {
    name: "Electrónica y hogar",
    description:
      "Carcasas, partes y electrodomésticos con acabado de alta calidad.",
  },
];

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos"
        title="Aplicaciones finales"
        description="Las industrias y productos finales que nuestros materiales hacen posibles, día a día."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria, index) => (
            <article
              key={categoria.name}
              style={{ animationDelay: `${index * 80}ms` }}
              className="animate-fade-in-up flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100"
            >
              <div className="flex h-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/70">
                <div
                  aria-hidden
                  className="h-8 w-8 rounded-md bg-gradient-to-br from-brand-300 to-brand-600"
                />
              </div>
              <h2 className="mt-6 text-lg font-semibold text-neutral-900">
                {categoria.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">
                {categoria.description}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <span
                  aria-hidden
                  className="h-1.5 w-6 rounded-full bg-gradient-to-r from-brand-300 to-brand-600"
                />
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Materia prima propia
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}