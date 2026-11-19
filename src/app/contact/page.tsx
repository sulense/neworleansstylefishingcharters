import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact Us | New Orleans Style Fishing Charters",
  description:
    "Contact Captain Jason Shilling to book or ask about a private New Orleans inshore fishing charter.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Charter booking and contact page coming soon."
    />
  );
}
