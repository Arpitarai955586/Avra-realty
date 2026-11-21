export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold ${className}`}
    >
      Demo
    </span>
  );
}
