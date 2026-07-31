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

        <div className="mx-auto flex w-full justify-center px-6">
          <div className="w-full max-w-[1320px]">
            <Slider />
            <FeatureCards />
          </div>
        </div>
      </div>
    </main>
  );
}