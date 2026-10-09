import NewsSkeleton from "./Skeletons/NewsSkeleton";
import PageHero from "./components/PageHero";

export default function Loading() {
  return (
    <>
      <PageHero eyebrow="Loading" title="Fetching headlines" />
      <div className="news-grid">
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
      </div>
    </>
  );
}
