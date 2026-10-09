export default function NewsSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-block aspect-[16/10] w-full" />
      <div className="space-y-3 p-5">
        <div className="skeleton-block h-3 w-20 rounded" />
        <div className="skeleton-block h-6 w-full rounded" />
        <div className="skeleton-block h-6 w-4/5 rounded" />
        <div className="skeleton-block h-14 w-full rounded" />
      </div>
    </div>
  );
}
