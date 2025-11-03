// src/components/ScrollyProduct.tsx
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Feature } from "../types";
import CompactSpecs from "./CompactSpecs";
import { specsCompact } from "../constants";

type Img = { id: number; src: string; alt: string };

export default function ScrollyProduct({
  productName,
  model,
  overview,
  images,
  features,
  price,
  currencyLabel = "U$",
}: {
  productName: string;
  model: string;
  overview: string;
  images: Img[];
  features: Feature[];
  price?: number;
  currencyLabel?: string;
}) {
  // choose exact images by basename
  const byBase = (base: string) =>
    images.find((i) => new RegExp(`${base}\\.(png|jpe?g|webp)$`, "i").test(i.src));

  const front = useMemo(() => byBase("JL806A_front") ?? images[0], [images]);
  const side = useMemo(() => byBase("JL806A_side") ?? images[1] ?? front, [images, front]);
  const back = useMemo(() => byBase("JL806A_back") ?? images[2] ?? side, [images, side]);

  const slides = [
    { id: "overview", img: front },
    { id: "features", img: side },
    { id: "specs", img: back },
  ];

  const [active, setActive] = useState(0);

  // track direction (+1 down / -1 up) for enter/exit
  const lastActiveRef = useRef(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // refs for pin logic
  const sectionRef = useRef<HTMLDivElement | null>(null);  // whole two-column area
  const leftWrapRef = useRef<HTMLDivElement | null>(null);  // column wrapper (relative)
  const leftCardRef = useRef<HTMLDivElement | null>(null);  // the card we pin
  const rightColRef = useRef<HTMLDivElement | null>(null);  // right column (to measure height)

  // keep left wrapper at least as tall as right column
  useLayoutEffect(() => {
    const syncHeight = () => {
      if (!leftWrapRef.current || !rightColRef.current) return;
      leftWrapRef.current.style.minHeight = `${rightColRef.current.scrollHeight}px`;
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    const t = setTimeout(syncHeight, 50); // fonts/images settle
    return () => {
      window.removeEventListener("resize", syncHeight);
      clearTimeout(t);
    };
  }, []);

  // pin logic: fixed within the section bounds
  useEffect(() => {
    const card = leftCardRef.current;
    const wrap = leftWrapRef.current;
    const container = sectionRef.current;
    if (!card || !wrap || !container) return;

    const getStickyTop = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--sticky-top").trim();
      const px = parseInt(v || "80", 10);
      return Number.isFinite(px) ? px : 80;
    };

    const update = () => {
      const topOffset = getStickyTop();

      const containerRect = container.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();
      const pageY = window.scrollY;

      const containerTop = pageY + containerRect.top;
      const containerBottom = containerTop + container.offsetHeight;

      const cardHeight = card.offsetHeight;

      // Y of the top edge of the card when fixed
      const viewportTopY = pageY + topOffset;

      // 1) Before container
      if (viewportTopY <= containerTop) {
        card.style.position = "absolute";
        card.style.top = "0px";
        card.style.left = "0px";
        card.style.width = `${wrapRect.width}px`;
        return;
      }

      // 2) After container bottom
      if (viewportTopY + cardHeight >= containerBottom) {
        card.style.position = "absolute";
        card.style.top = `${container.offsetHeight - cardHeight}px`;
        card.style.left = "0px";
        card.style.width = `${wrapRect.width}px`;
        return;
      }

      // 3) Inside container
      const left = wrapRect.left;
      card.style.position = "fixed";
      card.style.top = `var(--sticky-top)`;
      card.style.left = `${left}px`;
      card.style.width = `${wrapRect.width}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const rObs = new ResizeObserver(update);
    rObs.observe(card);
    rObs.observe(wrap);
    rObs.observe(container);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      rObs.disconnect();
    };
  }, []);

  // slide variants for right-column stage
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 40 : -40,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -40 : 40,
      opacity: 0,
      zIndex: 0,
    }),
  };

  // helper to update active + direction from sentinels
  const setPage = (nextIndex: number) => {
    setDirection(nextIndex > lastActiveRef.current ? 1 : -1);
    setActive(nextIndex);
    lastActiveRef.current = nextIndex;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-6">
      <div
        ref={sectionRef}
        className="grid lg:grid-cols-2 gap-10 items-start relative"
      >
        {/* LEFT column (relative wrapper) */}
        <div ref={leftWrapRef} className="relative">
          <div
            ref={leftCardRef}
            className="rounded-2xl p-6 shadow-xl bg-white"
            style={{
              background:
                "radial-gradient(1200px 600px at 50% -200px, rgba(0,0,0,0.04), transparent 60%)",
            }}
          >
            {/* Fixed-height viewer so cross-fade doesn’t jump */}
            <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
              {slides.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={s.img.src}
                    alt={s.img.alt}
                    width={1200}
                    height={600}
                    className="max-h-[440px] max-w-full h-auto w-auto object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}

              {/* spacer keeps height consistent */}
              <img
                src={slides[0].img.src}
                alt=""
                className="opacity-0 max-h-[440px] max-w-full h-auto w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT column */}
        <div ref={rightColRef}>
          {/* STAGE: shows one "card" with enter/exit animation */}
          <div className="relative isolate min-h-[70vh] lg:min-h-[calc(100vh-4rem)] mb-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {/* PAGE 0: Overview */}
                {active === 0 && (
                  <div className="flex items-center min-h-[70vh] lg:min-h-[calc(100vh-4rem)]">
                    <div>
                      <p className="text-sm font-semibold text-orange-600">{model}</p>

                      <h1 className="text-2xl md:text-3xl font-bold">{productName}</h1>

                      {typeof price === "number" && (
                        <p className="mt-2 text-2xl md:text-3xl font-bold">
                          <span className="text-gray-900">
                            {currencyLabel}&nbsp;{price.toLocaleString()}
                          </span>
                        </p>
                      )}

                      <p className="mt-3 text-gray-600">{overview}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#contacto"
                          className="inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:shadow-md"
                        >
                          Solicitar cotización
                        </a>
                        <a
                          href="https://wa.me/51994428965"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium hover:shadow-md"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 1: Features */}
                {active === 1 && (
                  <div className="flex items-center min-h-[70vh] lg:min-h-[calc(100vh-4rem)]">
                    <div>
                      <p className="text-sm font-semibold text-orange-600">Características</p>
                      <h2 className="text-2xl font-semibold">Diseñado para Empresas en Crecimiento</h2>
                      <ul className="mt-4 grid gap-4 md:grid-cols-2">
                        {features.map((f, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-1">{f.icon}</span>
                            <div>
                              <div className="font-medium">{f.title}</div>
                              <p className="text-gray-600 text-sm">{f.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* PAGE 2: Specs */}
                {active === 2 && (
                  <div className="flex items-center min-h-[70vh] lg:min-h-[calc(100vh-4rem)]">
                    <div className="relative z-10">
                      <p className="text-sm font-semibold text-orange-600">Ficha</p>
                      <h2 className="text-2xl font-semibold">Especificaciones</h2>
                      <div className="mt-4">
                        <CompactSpecs
                          basics={specsCompact.basics}
                          performance={specsCompact.performance}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SCROLL SENTINELS (empty content) */}
          {/* PAGE 1 trigger for active=0 */}
          <motion.section
            className="min-h-[70vh] lg:min-h-[calc(100vh-4rem)] flex items-center scroll-mt-20"
            viewport={{ amount: 0.35, margin: "-64px 0px 0px 0px" }}
            onViewportEnter={() => setPage(0)}
          >
            <div className="h-[1px] w-full opacity-0" aria-hidden />
          </motion.section>

          {/* PAGE 2 trigger for active=1 */}
          <motion.section
            className="min-h-[70vh] lg:min-h-[calc(100vh-4rem)] flex items-center scroll-mt-20"
            viewport={{ amount: 0.35, margin: "-64px 0px 0px 0px" }}
            onViewportEnter={() => setPage(1)}
          >
            <div className="h-[1px] w-full opacity-0" aria-hidden />
          </motion.section>

          {/* PAGE 3 trigger for active=2 */}
          <motion.section
            className="min-h-[70vh] lg:min-h-[calc(100vh-4rem)] scroll-mt-20 py-6"
            viewport={{ amount: 0.35, margin: "-64px 0px 0px 0px" }}
            onViewportEnter={() => setPage(2)}
          >
            <div className="h-[1px] w-full opacity-0" aria-hidden />
          </motion.section>
        </div>
      </div>
    </section>
  );
}
