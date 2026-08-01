import Background from "@/components/effects/Background";
import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/home/Slider";
import FeatureCards from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <Background />

      {/* Kontainer Utama Dipaksa Rata Tengah Total */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        {/* Navbar Header */}
        <Navbar />

        {/* Area Konten Utama (Banner & Cards) */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-4 mt-4 md:px-6">
          <Slider />
          <FeatureCards />
        </div>
      </div>
    </main>
  );
}