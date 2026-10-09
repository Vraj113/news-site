import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { countryLabel } from "@/lib/countries";
import { getSelectedCountry } from "@/lib/getCountry";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "News — headlines",
    template: "%s · News",
  },
  description: "Live top stories from publishers around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const country = getSelectedCountry();
  const countryName = countryLabel(country);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar country={country} countryName={countryName} />
        <main className="shell pb-16">{children}</main>
        {/* <footer className="site-footer shell">
          Headlines via{" "}
          <a
            href="https://www.thenewsapi.com/"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            The News API
          </a>
          . Stories open on publisher sites.
        </footer> */}
      </body>
    </html>
  );
}
