// src/components/HeaderBrand.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Network,
  Wifi,
  Server,
  Cable,
  HardDrive,
  BatteryCharging,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  { label: "Switch Instant On", icon: Network, href: "https://www.ds3comunicaciones.com/hp/aruba/switch_instantOn/precios_instantOn.html" },
  { label: "Switch Aruba", icon: Network, href: "https://www.ds3comunicaciones.com/hp/aruba/switch_aruba/precios_switch_aruba.html" },
  { label: "Access Point Aruba", icon: Wifi, href: "https://www.ds3comunicaciones.com/hp/aruba/ap_aruba/precios_ap_aruba.html" },
  { label: "Servidores ProLiant", icon: Server, href: "https://www.ds3comunicaciones.com/hp/aruba/servidores/precios_servidores.html" },
  { label: "Transceivers y Fibra", icon: Cable, href: "https://www.ds3comunicaciones.com/hp/aruba/transceiver/precios_transceiver.html" },
  { label: "Discos Duros", icon: HardDrive, href: "https://www.ds3comunicaciones.com/hp/aruba/discos/precios_discos.html" },
  { label: "Fuentes de Poder", icon: BatteryCharging, href: "https://www.ds3comunicaciones.com/hp/aruba/fuentesPoder/precios_fuentes.html" },
];

export default function HeaderBrand() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  // update arrow visibility based on scroll position
  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.75);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      {/* Row 1: logos */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 md:py-5">
        <div className="flex items-center gap-3">
          <a href="/" className="shrink-0">
            <img
              src="/images/branding/logoDs3.jpg"
              alt="DS3 Comunicaciones"
              className="h-15 md:h-15 w-auto"
            />
          </a>
          <div className="ml-auto">
            <img
              src="/images/branding/hpe_logo.jpg"
              alt="Hewlett Packard Enterprise"
              className="h-14 w-auto hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Search + one-line pill scroller with arrows */}
      <div className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 space-y-3" aria-label="Búsqueda y categorías">
          {/* SEARCH BAR */}
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              const q = new FormData(e.currentTarget as HTMLFormElement).get("q");
              console.log("Search:", q);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                name="q"
                placeholder="Buscar productos, modelos…"
                className="w-full rounded-xl border bg-white pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Buscar
            </button>
          </form>

          {/* CATEGORY PILLS: single line, scrollable, no visible scrollbar */}
          <nav className="relative" aria-label="Categorías">
            {/* left gradient + arrow */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
            {canLeft && (
              <button
                type="button"
                aria-label="Desplazar izquierda"
                onClick={() => scrollByAmount("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-white p-1.5 shadow-sm hover:shadow md:inline-flex"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {/* scroll container */}
            <div
              ref={scrollerRef}
              className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar px-8"
            >
              {categories.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-xl border bg-white px-3.5 py-2.5 text-[0.95rem] shadow-sm hover:shadow-md hover:border-orange-400 transition whitespace-nowrap"
                >
                  <Icon size={18} className="text-gray-600" />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>

            {/* right gradient + arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
            {canRight && (
              <button
                type="button"
                aria-label="Desplazar derecha"
                onClick={() => scrollByAmount("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-white p-1.5 shadow-sm hover:shadow md:inline-flex"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
