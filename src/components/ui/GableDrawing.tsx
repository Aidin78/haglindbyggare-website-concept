import { cn } from "@/lib/cn";

const panelLines = Array.from({ length: 29 }, (_, i) => 132 + i * 12);

export function GableDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" fill="none" aria-hidden="true" className={cn("overflow-visible", className)}>
      <g stroke="currentColor" strokeLinecap="square" vectorEffect="non-scaling-stroke">
        <g strokeWidth="0.6" opacity="0.45">
          {panelLines.map((x) => (
            <line key={x} x1={x} y1="206" x2={x} y2="360" />
          ))}
        </g>
        <g strokeWidth="1.4">
          <path d="M96 208 300 70l204 138" />
          <path d="M120 192v168h360V192" />
          <path d="M372 152V102h26v32" />
          <path d="M366 102h38" />
          <rect x="160" y="236" width="64" height="76" fill="var(--color-paper)" />
          <rect x="376" y="236" width="64" height="76" fill="var(--color-paper)" />
          <path d="M192 236v76M160 274h64M408 236v76M376 274h64" strokeWidth="0.9" />
          <rect x="276" y="272" width="48" height="88" fill="var(--color-paper)" />
          <path d="M314 318v6" />
          <path d="M282 134h36v44h-36z" fill="var(--color-paper)" />
          <path d="M300 134v44" strokeWidth="0.9" />
          <path d="M40 360h520" />
        </g>
        <g strokeWidth="0.8" opacity="0.6">
          <path d="M120 384h360M120 377v14M480 377v14" />
          <path d="M528 360V208M521 360h14M521 208h14" />
          <path d="M300 70V46M292 46h16" />
        </g>
      </g>
    </svg>
  );
}
