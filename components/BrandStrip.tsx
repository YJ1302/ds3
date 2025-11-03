import React, { useRef } from "react";

type Logo = { src: string; alt: string };

export default function BrandStrip({
  title = "Nuestras marcas",
  logos,
}: { title?: string; logos: Logo[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-6 py-10 scroll-mt-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scrollByAmount("left")}  className="h-9 px-3 rounded-lg border hover:bg-gray-50">‹</button>
          <button onClick={() => scrollByAmount("right")} className="h-9 px-3 rounded-lg border hover:bg-gray-50">›</button>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />

        <div ref={scrollerRef} className="overflow-x-auto snap-x snap-mandatory scroll-smooth"
             style={{ scrollbarWidth: "none" } as React.CSSProperties}>
          <div className="flex gap-4 pr-2">
            {logos.map((logo, i) => (
              <div key={i}
                   className="snap-center min-w-[140px] h-20 flex items-center justify-center rounded-xl border bg-white shadow-sm p-3 hover:shadow-md transition">
                <img src={logo.src} alt={logo.alt}
                     className="max-h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                     loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
