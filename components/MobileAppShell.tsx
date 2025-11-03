import React from "react";
import BrandMarquee from "./BrandMarquee";
import RelatedProducts from "./RelatedProducts";
import CompactSpecs from "./CompactSpecs";
import {
  productData,
  galleryImages,
  features,
  brandLogos,
  alsoAvailable,
  specsCompact,
} from "../constants";

export default function MobileAppShell() {
  return (
    <main className="bg-white">
      {/* 1) Horizontal image scroller (swipe) */}
      <section className="px-4 pt-4">
        <div
          className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 pb-2 touch-pan-x"
          aria-label="Galería de imágenes — deslice horizontalmente"
        >
          {galleryImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              loading={img.id === 1 ? "eager" : "lazy"}
              className="flex-none w-[90vw] h-[56vw] object-contain rounded-xl bg-white border snap-center"
            />
          ))}
        </div>
      </section>

      {/* 2) Details */}
      <section className="max-w-6xl mx-auto px-4 mt-4">
        <p className="text-sm font-semibold text-orange-600">{productData.model}</p>
        <h1 className="text-xl font-bold mt-1">{productData.name}</h1>
        <p className="text-gray-600 mt-2">{productData.overview}</p>
      </section>

      {/* 3) Features (compact cards) */}
      <section className="max-w-6xl mx-auto px-4 mt-6 space-y-3">
        {features.map((f, i) => (
          <div key={i} className="flex gap-3 items-start rounded-xl border bg-white p-3">
            <div className="shrink-0 h-10 w-10 grid place-items-center rounded-full bg-orange-100 text-orange-600">
              {f.icon}
            </div>
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 4) Specs */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <CompactSpecs basics={specsCompact.basics} performance={specsCompact.performance} />
      </section>

      {/* 5) También Disponible */}
      <section className="mt-8">
        <RelatedProducts items={alsoAvailable} />
      </section>

      {/* 6) Nuestras marcas (after “También Disponible”) */}
      <section className="mt-8">
        <BrandMarquee title="Nuestras marcas" logos={brandLogos} />
      </section>
    </main>
  );
}
