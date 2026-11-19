import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Lodging | New Orleans Style Fishing Charters",
  description:
    "Private fishing guest house rental near Joe's Landing in Lafitte, Louisiana.",
};

export default function LodgingPage() {
  return (
    <PlaceholderPage
      title="Lodging"
      description="Private guest house rental details and photos coming soon."
    />
  );
}
