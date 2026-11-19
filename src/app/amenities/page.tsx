import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Amenities | New Orleans Style Fishing Charters",
  description:
    "Local Lafitte amenities, cook-your-catch dining, fish shipping, and round-trip transportation details.",
};

export default function AmenitiesPage() {
  return (
    <PlaceholderPage
      title="Amenities"
      description="Local amenities, dining, and catch shipping details coming soon."
    />
  );
}
