import Link from "next/link";
import News from "@/app/components/News";
import { Suspense } from "react";
import Loading from "../loading";

const Home = async ({ params }) => {
  const apiKey = process.env.NEWS_API_KEY;

  const res = await fetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=us&limit=3&categories=${params.category}`,
    { next: { revalidate: 86400 } }
  );
  const news = await res.json();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex m-auto md:w-[80vw] justify-center p-4 md:justify-between flex-wrap mt-10">
          {news.data.map((d) => (
            <News
              key={d.uuid}
              title={d.title}
              description={d.description}
              snippet={d.snippet}
              url={d.url}
              image_url={d.image_url}
              published_at={d.published_at}
              source={d.source}
            />
          ))}
        </div>
      </Suspense>
      <div className="flex justify-between md:w-[80vw] md:m-auto mt-10 m-4 text-sm md:text-lg">
        <div></div>
        <Link href={`/${params.category}/2`}>
          <div className="btn bg-black text-white p-4 w-fit rounded mt-4">
            Next Page
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
