import { countryLabel } from "@/lib/countries";
import { fetchTopNews } from "@/lib/fetchNews";
import { getSelectedCountry } from "@/lib/getCountry";
import NewsFeed from "./components/NewsFeed";
import PageHero from "./components/PageHero";
import Pagination from "./components/Pagination";

export default async function Home() {
  const country = getSelectedCountry();
  const result = await fetchTopNews({ page: 1, limit: 9, locale: country });
  const region = countryLabel(country);

  return (
    <>
      <PageHero
        eyebrow={region}
        title="Today’s front page"
        description={`Latest headlines from ${region} — fetched fresh on every visit.`}
      />
      <NewsFeed result={result} />
      <Pagination nextHref="/page/2" />
    </>
  );
}
