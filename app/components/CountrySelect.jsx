"use client";

import { COUNTRIES, COUNTRY_COOKIE } from "@/lib/countries";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CountrySelect({ value }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onChange = (event) => {
    const next = event.target.value;
    document.cookie = `${COUNTRY_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    startTransition(() => router.refresh());
  };

  return (
    <label className="country-select-wrap">
      <span className="sr-only">Country</span>
      <select
        className="country-select sm:max-w-[11rem]"
        value={value}
        onChange={onChange}
        disabled={pending}
        aria-label="Choose country for headlines"
      >
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.label}
          </option>
        ))}
      </select>
      {pending ? <span className="country-select-spinner" aria-hidden /> : null}
    </label>
  );
}
