import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 } // 60% in view to be "active"
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={[
        "snap-start h-screen flex items-center", // full-page, snap to top
        "transition-all duration-500",           // smooth fade/scale
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className ?? ""
      ].join(" ")}
    >
      {children}
    </section>
  );
};
