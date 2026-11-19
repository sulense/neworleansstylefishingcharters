import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "FAQs | New Orleans Style Fishing Charters",
  description:
    "Frequently asked questions about booking a private New Orleans inshore fishing charter in Lafitte.",
};

export default function FaqsPage() {
  return (
    <PlaceholderPage
      title="FAQs"
      description="Complete fishing charter frequently asked questions coming soon."
    />
  );
}
