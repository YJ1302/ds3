import React, { useMemo, useState } from "react";

type Logo = { src: string; alt: string };

export default function BrandMarquee({
  title = "Nuestras marcas",
  logos,
  speedSec = 28,          // adjust speed (seconds per loop)
}: {
  title?: string;
  logos: Logo[];
  speedSec?: number;
}) {
  const track = useMemo(() => [...logos, ...logos], [logos]); // duplicate for seamless loop
  const [paused, setPaused] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-6 py-10 scroll-mt-16">
      {/* local keyframes so you don't have to touch global CSS */}
      <style>{`
        @keyframes scrollX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move width of first set */
        }
      `}</style>

      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="relative mt-4">
        {/* gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-4 pr-2 will-change-transform"
            style={{
              width: "200%", // because we duplicated the content
              animation: `scrollX ${speedSec}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {track.map((logo, i) => (
              <div
                key={i}
                className="min-w-[140px] h-20 flex items-center justify-center rounded-xl border bg-white shadow-sm p-3 hover:shadow-md transition"
                aria-hidden={i >= logos.length ? true : undefined} // second set is decorative
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
