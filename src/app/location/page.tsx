import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Location | New Orleans Style Fishing Charters",
  description:
    "Directions, launch marina information at Joe's Landing, and transportation from New Orleans.",
};

export default function LocationPage() {
  return (
    <PlaceholderPage
      title="Location"
      description="Departure marina directions and transportation details coming soon."
    />
  );
}
