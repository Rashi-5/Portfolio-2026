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
        <span style={{ width: 34, height: 1.5, background: `var(${accentVar})` }} />
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
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
