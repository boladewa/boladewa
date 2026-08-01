import Background from "@/components/effects/Background";
import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/home/Slider";
import FeatureCards from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Background />

      <div className="relative z-10">
        <Navbar />

        {/* Pembungkus sudah digabung, tidak akan ter-highlight 1910px lagi */}
        <div className="mx-auto w-full max-w-[1320px] px-6">
          <Slider />
          <FeatureCards />
        </div>
      </div>
    </main>
  );
}