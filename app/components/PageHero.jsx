export default function PageHero({ eyebrow, title, description }) {
  return (
    <header className="page-hero">
      {eyebrow ? (
        <p className="page-hero-eyebrow animate-fade-up">{eyebrow}</p>
      ) : null}
      <h1
        className="page-hero-title animate-fade-up"
        style={{ animationDelay: "60ms" }}
      >
        {title}
      </h1>
      {description ? (
        <p
          className="page-hero-desc animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
