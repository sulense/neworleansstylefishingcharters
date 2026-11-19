import type { Metadata } from "next";
import { Libre_Baskerville, Open_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "New Orleans Style Fishing Charters | Private Lafitte & Barataria Inshore Fishing",
  description:
    "Experience Louisiana fishing like never before. Private 5-hour inshore fishing charters for redfish and speckled trout in Lafitte, just 20 miles south of New Orleans with USCG Licensed Captain Jason Shilling. Est. 2008.",
  openGraph: {
    title:
      "New Orleans Style Fishing Charters | Private Lafitte & Barataria Inshore Fishing",
    description:
      "Private 5-hour Louisiana inshore fishing charters through the bayous and marshes of Lafitte with Captain Jason Shilling. Redfish, speckled trout, all gear & fish cleaning included.",
    url: "https://www.neworleansstylefishingcharters.com/",
    siteName: "New Orleans Style Fishing Charters",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.neworleansstylefishingcharters.com/",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "New Orleans Style Fishing Charters L.L.C.",
  url: "https://www.neworleansstylefishingcharters.com/",
  telephone: "+1-504-416-5896",
  email: "info@neworleansstylefishingcharters.com",
  foundingDate: "2008-08-27",
  priceRange: "$550 - $650",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4811 Privateer Blvd, Suite 100",
    addressLocality: "Barataria",
    addressRegion: "LA",
    postalCode: "70036",
    addressCountry: "US",
  },
  openingHours: "Mo-Su 05:00-22:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "202",
  },
  sameAs: [
    "https://maps.app.goo.gl/qZBynFGAhDfVwSy7A",
    "https://www.facebook.com/neworleansstylefishingcharters",
    "https://www.instagram.com/neworleansstylefishingcharters",
    "https://twitter.com/Nawlins_style",
    "https://www.youtube.com/watch?v=BnAS8CpVEO4",
    "https://fishingbooker.com/profile/view/439",
    "https://www.tripadvisor.com/Attraction_Review-g40019-d7224970-Reviews-New_Orleans_Style_Fishing_Charters-Barataria_Louisiana.html",
    "https://www.yelp.com/biz/new-orleans-style-fishing-charters-lafitte-3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${openSans.variable} scroll-smooth`}
    >
      <body className="font-sans font-medium bg-[#F6F1E7] text-[#26302E] selection:bg-[#BF754C] selection:text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSONLD),
          }}
        />
        {children}
      </body>
    </html>
  );
}
