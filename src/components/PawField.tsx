import { useMemo } from "react";

/**
 * Decorative field of paw prints that fade in and out at randomized intervals.
 * Positions come from a jittered grid so the paws spread across the box without
 * clumping, and each one gets its own delay/duration so the blinking never
 * settles into a visible rhythm.
 */

function Paw({ size, color }: { size: number; color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      {/* main pad */}
      <ellipse cx="50" cy="68" rx="24" ry="20" />
      {/* toes, outer pair set wider and lower than the inner pair */}
      <ellipse cx="22" cy="44" rx="10" ry="13" transform="rotate(-20 22 44)" />
      <ellipse cx="40" cy="28" rx="9.5" ry="13" transform="rotate(-8 40 28)" />
      <ellipse cx="60" cy="28" rx="9.5" ry="13" transform="rotate(8 60 28)" />
      <ellipse cx="78" cy="44" rx="10" ry="13" transform="rotate(20 78 44)" />
    </svg>
  );
}

export function PawField({
  count = 14,
  minSize = 14,
  maxSize = 30,
}: {
  count?: number;
  minSize?: number;
  maxSize?: number;
}) {
  // Randomize once on mount — regenerating every render would make the paws
  // jump around on unrelated state changes.
  const paws = useMemo(() => {
    // Lay out a grid roughly square for `count`, then jitter within each cell.
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    return Array.from({ length: count }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        id: i,
        // Cell centre plus jitter, kept inset so paws don't clip the edges.
        left: ((col + rand(0.15, 0.85)) / cols) * 100,
        top: ((row + rand(0.15, 0.85)) / rows) * 100,
        size: rand(minSize, maxSize),
        rotate: rand(-40, 40),
        delay: rand(0, 6),
        duration: rand(3.5, 7),
        // Alternate the two accents, with the second used more sparingly.
        color:
          i % 3 === 0 ? "var(--color-accent-2-400)" : "var(--color-accent-300)",
        peak: rand(0.35, 0.8),
      };
    });
  }, [count, minSize, maxSize]);

  return (
    <div className="paw-field" aria-hidden="true">
      {paws.map((p) => (
        <span
          key={p.id}
          className="paw"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `translate(-50%,-50%) rotate(${p.rotate}deg)`,
            ["--paw-peak" as string]: p.peak,
          }}
        >
          <Paw size={p.size} color={p.color} />
        </span>
      ))}
    </div>
  );
}
