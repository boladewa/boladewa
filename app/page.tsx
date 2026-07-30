import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/home/Slider";
import FeatureCards from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <FeatureCards />
    </>
  );
}