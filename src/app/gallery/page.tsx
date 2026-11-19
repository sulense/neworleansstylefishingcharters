import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Gallery | New Orleans Style Fishing Charters",
  description:
    "Catch photos from private inshore fishing charters in Lafitte and Barataria, Louisiana.",
};

export default function GalleryPage() {
  return (
    <PlaceholderPage
      title="Gallery"
      description="Full New Orleans fishing charter photo gallery coming soon."
    />
  );
}
