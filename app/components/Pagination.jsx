import Link from "next/link";

export default function Pagination({ prevHref, nextHref }) {
  return (
    <nav
      className="animate-fade-up mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8"
      style={{ animationDelay: "200ms" }}
      aria-label="Pagination"
    >
      {prevHref ? (
        <Link href={prevHref} className="btn-secondary">
          ← Previous
        </Link>
      ) : (
        <span />
      )}
      {nextHref ? (
        <Link href={nextHref} className="btn-primary">
          More stories →
        </Link>
      ) : null}
    </nav>
  );
}
