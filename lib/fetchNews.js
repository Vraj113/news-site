import { DEFAULT_COUNTRY, isValidCountry } from "./countries";

const API_BASE = "https://api.thenewsapi.com/v1/news/top";

export async function fetchTopNews({
  category,
  page = 1,
  limit = 9,
  locale = DEFAULT_COUNTRY,
} = {}) {
  const country = isValidCountry(locale) ? locale.toLowerCase() : DEFAULT_COUNTRY;
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      error: "missing_key",
      message:
        "Add NEWS_API_KEY to .env.local (get a free token at thenewsapi.com).",
      data: [],
    };
  }

  const params = new URLSearchParams({
    api_token: apiKey,
    locale: country,
    limit: String(limit),
    page: String(page),
  });

  if (category) {
    params.set("categories", category);
  }

  try {
    const res = await fetch(`${API_BASE}?${params.toString()}`, {
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
    });

    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        ok: false,
        error: "api_error",
        message: body?.message || res.statusText || "Could not load headlines.",
        data: [],
      };
    }

    const data = Array.isArray(body?.data) ? body.data : [];

    return { ok: true, data, meta: body?.meta ?? null };
  } catch (err) {
    return {
      ok: false,
      error: "network",
      message: err?.message || "Network error while loading news.",
      data: [],
    };
  }
}

export const CATEGORIES = [
  { slug: "sports", label: "Sports" },
  { slug: "science", label: "Science" },
  { slug: "business", label: "Business" },
  { slug: "health", label: "Health" },
  { slug: "entertainment", label: "Entertainment" },
  { slug: "tech", label: "Tech" },
  { slug: "politics", label: "Politics" },
  { slug: "travel", label: "Travel" },
];

export function categoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
