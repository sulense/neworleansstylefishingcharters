import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Charter Info | New Orleans Style Fishing Charters",
  description:
    "Full Louisiana fishing charter details, trip information, and cancellation policies for New Orleans Style Fishing Charters.",
};

export default function CharterInfoPage() {
  return (
    <PlaceholderPage
      title="Charter Info"
      description="Full charter details and cancellation policies coming soon."
    />
  );
}
