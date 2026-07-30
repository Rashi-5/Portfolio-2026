import type { CSSProperties, Ref } from "react";

/** The dark numbered band that introduces each section. */
export function SectionBand({
  num,
  label,
  accentVar,
  bandRef,
  revealStyle,
}: {
  num: string;
  label: string;
  accentVar: string; // e.g. "--color-accent-300"
  bandRef?: Ref<HTMLDivElement>;
  revealStyle?: CSSProperties;
}) {
  return (
    <div
      ref={bandRef}
      style={{
        position: "relative",
        background: "var(--color-neutral-900)",
        color: "var(--color-neutral-100)",
        overflow: "hidden",
        padding: "56px clamp(20px,5vw,72px)",
        ...revealStyle,
      }}
    >
      <span
        style={{
          position: "absolute",
          right: "clamp(16px,4vw,60px)",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "clamp(90px,16vw,220px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1.5px color-mix(in srgb, var(${accentVar}) 70%, transparent)`,
          opacity: 0.5,
        }}
      >
        {num}
      </span>
      <div
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <g fill="var(--color-accent)">
            <circle cx="12" cy="6.5" r="3.4" />
            <circle cx="17.5" cy="12" r="3.4" />
            <circle cx="12" cy="17.5" r="3.4" />
            <circle cx="6.5" cy="12" r="3.4" />
          </g>
          <circle cx="12" cy="12" r="2.4" fill="var(--color-accent-2)" />
        </svg>
        <span
          style={{
            fontFamily: "'Archivo', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: `var(${accentVar})`,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
