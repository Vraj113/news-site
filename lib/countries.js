export const DEFAULT_COUNTRY = "us";
export const COUNTRY_COOKIE = "news_country";

/** Country codes supported by The News API `locale` parameter */
export const COUNTRIES = [
  { code: "us", label: "United States" },
  { code: "ca", label: "Canada" },
  { code: "gb", label: "United Kingdom" },
  { code: "ie", label: "Ireland" },
  { code: "au", label: "Australia" },
  { code: "in", label: "India" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "es", label: "Spain" },
  { code: "it", label: "Italy" },
  { code: "nl", label: "Netherlands" },
  { code: "no", label: "Norway" },
  { code: "se", label: "Sweden" },
  { code: "br", label: "Brazil" },
  { code: "ar", label: "Argentina" },
  { code: "ru", label: "Russia" },
  { code: "sa", label: "Saudi Arabia" },
  { code: "is", label: "Israel" },
  { code: "pk", label: "Pakistan" },
  { code: "zh", label: "China" },
];

const codes = new Set(COUNTRIES.map((c) => c.code));

export function isValidCountry(code) {
  return typeof code === "string" && codes.has(code.toLowerCase());
}

export function countryLabel(code) {
  const normalized = code?.toLowerCase();
  return COUNTRIES.find((c) => c.code === normalized)?.label ?? "Unknown";
}
