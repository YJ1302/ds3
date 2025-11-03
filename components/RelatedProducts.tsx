import React from "react";
import { ArrowRight } from "lucide-react";

type Item = {
  sku: string;
  name: string;
  image: string;
  blurb: string;
  href?: string; // <-- put your link for this product here
};

function Card({ it }: { it: Item }) {
  return (
    <article
      className="
        group relative rounded-2xl border bg-white/90 backdrop-blur
        shadow-sm hover:shadow-xl transition
        hover:border-orange-300 hover:ring-1 hover:ring-orange-200
        overflow-hidden
        h-full flex flex-col
      "
    >
      {/* Image area */}
      <a href={it.href || "#"} className="block">
        <div
          className="
            relative overflow-hidden
            rounded-t-2xl bg-gradient-to-b from-gray-50 to-white
            flex items-center justify-center
            h-40
          "
        >
          <img
            src={it.image}
            alt={it.name}
            className="max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            loading="lazy"
          />
          {/* sku badge */}
          <span
            className="
              absolute left-3 top-3 rounded-full border bg-white/90 px-2.5 py-1
              text-xs font-medium text-gray-700 shadow-sm
            "
          >
            {it.sku}
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-center font-semibold text-lg tracking-wide">
          {it.name}
        </h3>

        {/* flex-1 keeps heights equal; pushes button down */}
        <p className="mt-2 text-center text-sm text-gray-600 leading-relaxed flex-1">
          {it.blurb}
        </p>

        <div className="mt-4 flex justify-center">
          <a
            href={it.href || "#"}
            className="
              inline-flex items-center gap-2 rounded-xl
              border px-4 py-2 text-sm font-medium
              bg-white hover:bg-gray-50 hover:shadow-md transition
            "
          >
            Ver Producto
            <ArrowRight size={16} className="transition -mr-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function RelatedProducts({ items }: { items: Item[] }) {
  if (!items?.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
      {/* Single heading (no pill) */}
      <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
        Productos que también te pueden interesar
      </h2>
      <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />

      {/* Mobile: swipeable row */}
      <div className="mt-6 md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className="flex gap-4">
          {items.map((it) => (
            <div key={it.sku} className="snap-center shrink-0 w-[270px]">
              <Card it={it} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: equal-height grid */}
      <div className="mt-6 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.sku}>
            <Card it={it} />
          </div>
        ))}
      </div>
    </section>
  );
}
