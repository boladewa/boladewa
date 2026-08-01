import SliderDesktop from "./SliderDesktop";
import SliderMobile from "./SliderMobile";

export default function Slider() {
  return (
    <section className="relative w-full">
      {/* Tampil di Desktop (Layar menengah ke atas) */}
      <div className="hidden w-full md:block">
        <SliderDesktop />
      </div>

      {/* Tampil di Mobile (Layar kecil) */}
      <div className="block w-full md:hidden">
        <SliderMobile />
      </div>
    </section>
  );
}