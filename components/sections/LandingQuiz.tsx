"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export type LandingOption = {
  id: string;
  icon: string;
  iconHover?: string;
  label: string;
  href: string;
};

type Props = {
  options?: LandingOption[];
  storageKey?: string;
  forceShow?: boolean;
  revealRadius?: number;
};

const defaultOptions: LandingOption[] = [
  { id: "cases", icon: "/assets/icons/cases.svg", iconHover: "/assets/icons/cases-hover.svg", label: "Results & Cases studies", href: "/projects" },
  { id: "projects", icon: "/assets/icons/projects.svg", iconHover: "/assets/icons/projects-hover.svg", label: "Repos, stars & tech", href: "/projects" },
  { id: "connect", icon: "/assets/icons/connect.svg", iconHover: "/assets/icons/connect-hover.svg", label: "Let's connect", href: "/contact" },
  /*
  { id: "overview", icon: "/assets/icons/overview.svg", iconHover: "/assets/icons/overview-hover.svg", label: "A quick overview", href: "/timeline" },
  */
];

export default function LandingQuiz({ options = defaultOptions, storageKey = "landingQuizSeen", forceShow = false, revealRadius = 140 }: Props) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  // (debug flag removed) optional debug was used during development

  useEffect(() => {
    if (forceShow) {
      setVisible(true);
      return;
    }

    try {
      const seen = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
      if (!seen) setVisible(true);
    } catch (e) {
      // localStorage might be unavailable in some environments; default to showing nothing
    }
  }, [forceShow, storageKey]);

  // Track cursor/touch position inside the modal to create a "reveal" hole.
  // Re-run when `visible` changes so listeners are attached after the modal mounts.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const rect = el.getBoundingClientRect();
      const x = Math.round(clientX - rect.left);
      const y = Math.round(clientY - rect.top);

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x, y }));
    };

    const handleLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos(null));
    };

    // Use pointer events on the window for more reliable tracking across children and browsers.
    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

  // pointer position calculated

      // only show when pointer is inside the container
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setPos({ x, y }));
      } else {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setPos(null));
      }
    };

    const handlePointerLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos(null));
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerout', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [visible]);

  const markSeen = () => {
    try {
      localStorage.setItem(storageKey, "1");
    } catch (e) {
      // ignore
    }
  };

  const onSelect = (href: string) => {
    markSeen();
    setVisible(false);
    // navigate after state updates
    router.push(href);
  };

  const onSkip = () => {
    markSeen();
    setVisible(false);
  };

  if (!visible) return null;

  // maskStyle removed — overlay handles masking now

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div ref={containerRef} className="relative w-full h-full bg-[#0F1217] p-6 overflow-auto">
        <img
          src="/assets/vectors/lines-bg-dark.svg"
          alt="background lines"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
        />

        {/* Decorative animated lines that sit above the image but below the mask overlay
            They will be revealed together with the image inside the circular hole. */}
        <div aria-hidden className="absolute inset-0 z-15 pointer-events-none">

          {/* Top row groups */}
          {/* top-left */}
          <div style={{ position: 'absolute', left: '10%', top: '41%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '0s' }} />
          </div>
          <div style={{ position: 'absolute', left: '10%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '0.2s' }} />
          </div>
          <div style={{ position: 'absolute', left: '30%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* top-center */}
          <div style={{ position: 'absolute', left: '40%', top: '41%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '0.6s' }} />
          </div>
          <div style={{ position: 'absolute', left: '40%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '0.8s' }} />
          </div>
          <div style={{ position: 'absolute', right: '40%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '1s' }} />
          </div>

          {/* top-right */}
          <div style={{ position: 'absolute', right: '10%', top: '41%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '1.2s' }} />
          </div>
          <div style={{ position: 'absolute', right: '10%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '1.4s' }} />
          </div>
          <div style={{ position: 'absolute', right: '30%', top: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '1.6s' }} />
          </div>

          {/* Bottom row groups */}
          {/* bottom-left */}
          <div style={{ position: 'absolute', left: '10%', bottom: '10%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '1.8s' }} />
          </div>
          <div style={{ position: 'absolute', left: '10%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '2s' }} />
          </div>
          <div style={{ position: 'absolute', left: '30%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '2.2s' }} />
          </div>

          {/* bottom-center */}
          <div style={{ position: 'absolute', left: '40%', bottom: '10%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '2.4s' }} />
          </div>
          <div style={{ position: 'absolute', left: '40%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '2.6s' }} />
          </div>
          <div style={{ position: 'absolute', right: '40%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '2.8s' }} />
          </div>

          {/* bottom-right */}
          <div style={{ position: 'absolute', right: '10%', bottom: '10%' }}>
            <div className="ls-line horizontal" style={{ animationDelay: '3s' }} />
          </div>
          <div style={{ position: 'absolute', right: '10%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '3.2s' }} />
          </div>
          <div style={{ position: 'absolute', right: '30%', bottom: '10%' }}>
            <div className="ls-line vertical" style={{ animationDelay: '3.4s' }} />
          </div>
        </div>

        {/* Overlay that hides the image except inside the circular hole (masked). */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-20"
          style={
            pos
              ? {
                  backgroundColor: '#0F1217',
                  WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)`,
                  maskImage: `radial-gradient(circle ${revealRadius}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)`,
                }
              : { backgroundColor: '#0F1217' }
          }
        />

        <div className="relative z-30 justify-center items-center flex flex-col h-full">

          <h2 className="text-[#F7F7F7]">Hey, I’m Juan Silva</h2>
          <h3 className="text-[#F7F7F7]">Where should we start?</h3>

          <div className="flex flex-col w-[354px] justify-center items-center">
            <div className="mt-12 w-full grid grid-cols-1 gap-4">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onSelect(opt.href)}
                  className="group w-full text-left rounded-[12px] px-4 py-3 transition-colors duration-200 border border-[#373A41] hover:border-[#2CD6FF] bg-[#0C0E12] hover:shadow focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
                >
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center gap-3">
                      {/* default icon */}
                      <img src={opt.icon} alt={opt.label} className="w-6 h-6 rounded-full block group-hover:hidden filter-grayscale" />
                      {/* hover icon (if provided) */}
                      {opt.iconHover && (
                        <img src={opt.iconHover} alt={`${opt.label} (hover)`} className="w-6 h-6 rounded-full hidden group-hover:block" />
                      )}

                      <div className="text-[18px] text-[#CECFD2] group-hover:text-[#F7F7F7] leading-[160%]" style={{ fontFamily: "'Lora', serif" }}>{opt.label}</div>
                    </div>

                    <img src="/assets/icons/arrow-narrow-right.svg" alt="arrow right" className="hidden group-hover:block" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4">
              <button onClick={onSkip} className="px-4 py-2 text-sm text-[#94979C] hover:underline" style={{ fontFamily: "'Lora', serif" }}>Skip to home</button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}

