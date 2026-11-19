import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Blog | New Orleans Style Fishing Charters",
  description:
    "South Louisiana fishing reports, Lafitte inshore tips, and charter guides from Captain Jason Shilling.",
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Lafitte fishing reports and charter articles coming soon."
    />
  );
}
