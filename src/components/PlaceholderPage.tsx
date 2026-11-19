import Navbar from "@/components/Navbar";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E7] text-[#26302E]">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-36 pb-24 text-center">
        <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
          New Orleans Style Fishing Charters
        </span>
        <h1 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#203F39]">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-sm sm:text-base text-[#495754] max-w-md">{description}</p>
        )}
      </main>
    </div>
  );
}
