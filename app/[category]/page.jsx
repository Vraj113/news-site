import { categoryLabel, fetchTopNews } from "@/lib/fetchNews";
import { countryLabel } from "@/lib/countries";
import { getSelectedCountry } from "@/lib/getCountry";
import NewsFeed from "@/app/components/NewsFeed";
import PageHero from "@/app/components/PageHero";
import Pagination from "@/app/components/Pagination";

export async function generateMetadata({ params }) {
  const label = categoryLabel(params.category);
  return { title: label };
}

export default async function CategoryPage({ params }) {
  const country = getSelectedCountry();
  const result = await fetchTopNews({
    category: params.category,
    page: 1,
    limit: 9,
    locale: country,
  });
  const label = categoryLabel(params.category);
  const region = countryLabel(country);

  return (
    <>
      <PageHero
        eyebrow={`${region} · ${label}`}
        title={label}
        description={`Latest ${label.toLowerCase()} coverage from ${region}.`}
      />
      <NewsFeed result={result} />
      <Pagination nextHref={`/${params.category}/2`} />
    </>
  );
}
