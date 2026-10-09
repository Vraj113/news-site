import News from "./News";
import NewsAlert from "./NewsAlert";

export default function NewsFeed({ result }) {
  if (!result.ok) {
    return (
      <div className="animate-fade-up">
        <NewsAlert title="Headlines unavailable" message={result.message} />
      </div>
    );
  }

  if (!result.data.length) {
    return (
      <div className="animate-fade-up">
        <NewsAlert
          title="No stories right now"
          message="Try another category or check back later."
        />
      </div>
    );
  }

  return (
    <div className="news-grid">
      {result.data.map((article, index) => (
        <div
          key={article.uuid}
          className="animate-fade-up h-full"
          style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
        >
          <News article={article} />
        </div>
      ))}
    </div>
  );
}
