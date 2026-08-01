import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    // Memastikan Navbar mekar 100% selebar layar monitor
    <div className="w-full">
      <div className="hidden md:block w-full">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden w-full">
        <NavbarMobile />
      </div>
    </div>
  );
}