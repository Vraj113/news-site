import { cookies } from "next/headers";
import { COUNTRY_COOKIE, DEFAULT_COUNTRY, isValidCountry } from "./countries";

export function getSelectedCountry() {
  const value = cookies().get(COUNTRY_COOKIE)?.value;
  if (value && isValidCountry(value)) {
    return value.toLowerCase();
  }
  return DEFAULT_COUNTRY;
}
