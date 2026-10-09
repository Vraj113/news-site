import { countryLabel } from "@/lib/countries";
import { fetchTopNews } from "@/lib/fetchNews";
import { getSelectedCountry } from "@/lib/getCountry";
import NewsFeed from "@/app/components/NewsFeed";
import PageHero from "@/app/components/PageHero";
import Pagination from "@/app/components/Pagination";

export default async function TopNewsPage({ params }) {
  const page = Math.max(1, parseInt(params.no, 10) || 1);
  const country = getSelectedCountry();
  const result = await fetchTopNews({ page, limit: 9, locale: country });
  const region = countryLabel(country);

  const prevHref = page > 1 ? `/page/${page - 1}` : null;
  const nextHref = `/page/${page + 1}`;

  return (
    <>
      <PageHero
        eyebrow={`${region} · page ${page}`}
        title="More top stories"
        description={`Browse additional headlines from ${region}.`}
      />
      <NewsFeed result={result} />
      <Pagination prevHref={prevHref} nextHref={nextHref} />
    </>
  );
}
