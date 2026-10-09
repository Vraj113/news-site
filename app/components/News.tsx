import Image from "next/image";

type Article = {
  uuid: string;
  title: string;
  description?: string | null;
  url: string;
  image_url?: string | null;
  source?: string | null;
  published_at?: string | null;
};

function formatWhen(iso?: string | null) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function News({ article }: { article: Article }) {
  const { title, description, url, image_url, source, published_at } = article;

  return (
    <article className="news-card group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card-media"
      >
        {image_url ? (
          <Image
            src={image_url}
            alt=""
            width={640}
            height={360}
            className="news-card-image"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="news-card-placeholder">No image</div>
        )}
      </a>
      <div className="news-card-body">
        {source ? <span className="news-card-source">{source}</span> : null}
        <h2 className="news-card-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        {description ? (
          <p className="news-card-desc">{description}</p>
        ) : null}
        <div className="news-card-footer">
          {published_at ? (
            <time className="news-card-time" dateTime={published_at}>
              {formatWhen(published_at)}
            </time>
          ) : (
            <span />
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card-link"
          >
            Read story
          </a>
        </div>
      </div>
    </article>
  );
}
