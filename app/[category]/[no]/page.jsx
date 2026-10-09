import { categoryLabel, fetchTopNews } from "@/lib/fetchNews";
import { countryLabel } from "@/lib/countries";
import { getSelectedCountry } from "@/lib/getCountry";
import NewsFeed from "@/app/components/NewsFeed";
import PageHero from "@/app/components/PageHero";
import Pagination from "@/app/components/Pagination";

export default async function CategoryPagedPage({ params }) {
  const page = Math.max(1, parseInt(params.no, 10) || 1);
  const country = getSelectedCountry();
  const result = await fetchTopNews({
    category: params.category,
    page,
    limit: 9,
    locale: country,
  });
  const label = categoryLabel(params.category);
  const region = countryLabel(country);

  const prevHref =
    page > 1 ? `/${params.category}/${page - 1}` : null;
  const nextHref = `/${params.category}/${page + 1}`;

  return (
    <>
      <PageHero
        eyebrow={`${region} · ${label} · page ${page}`}
        title={`More in ${label}`}
      />
      <NewsFeed result={result} />
      <Pagination prevHref={prevHref} nextHref={nextHref} />
    </>
  );
}
