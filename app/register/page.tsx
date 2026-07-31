import RegisterForm from "@/components/register/RegisterForm";
import Background from "@/components/effects/Background";
import Stars from "@/components/effects/Stars";
import Dust from "@/components/effects/Dust";
import Glow from "@/components/effects/Glow";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Layer Efek & Animasi Latar Belakang */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Background />
        <Stars />
        <Dust />
        <Glow />
      </div>

      {/* Layer Form Registrasi */}
      <div className="relative z-10 flex min-h-screen items-center justify-center py-10">
        <RegisterForm />
      </div>
    </main>
  );
}