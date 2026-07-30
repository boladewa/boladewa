import SliderDesktop from "./SliderDesktop";
import SliderMobile from "./SliderMobile";

export default function Slider() {
  return (
    <>
      <div className="hidden md:block">
        <SliderDesktop />
      </div>

      <div className="block md:hidden">
        <SliderMobile />
      </div>
    </>
  );
}