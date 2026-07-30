import InputField from "./InputField";
import PasswordField from "./PasswordField";
import PhoneInput from "./PhoneInput";
import BankSelect from "./BankSelect";
import SubmitButton from "./SubmitButton";

export default function RegisterForm() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ================= Background ================= */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background/register-bg.png')",
          backgroundSize: "95%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[170px]" />

      {/* ================= Content ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:py-10">

        {/* ================= Card ================= */}
        <div
          className="
            w-[90%]
            max-w-[360px]
            sm:max-w-md
            md:max-w-xl
            lg:max-w-2xl
            rounded-[28px]
            border
            border-yellow-500/20
            bg-black/75
            p-5
            sm:p-6
            md:p-8
            backdrop-blur-md
            shadow-[0_0_80px_rgba(255,196,0,.15)]
          "
        >

          {/* ================= Logo ================= */}
          <div className="flex justify-center pb-2">
            <img
              src="/logo-navbar.png"
              alt="Boladewa"
              draggable={false}
              className="
                w-[170px]
                h-auto
                select-none
                sm:w-[220px]
                md:w-[300px]
                lg:w-[360px]
              "
            />
          </div>

          {/* ================= Title ================= */}
          <h1
            className="
              mt-1
              text-center
              text-3xl
              font-extrabold
              tracking-wide
              text-yellow-400
              sm:text-4xl
              md:text-5xl
            "
          >
            REGISTRASI ANGGOTA
          </h1>

          {/* Divider */}
          <div className="mx-auto mt-2 mb-5 h-[2px] w-40 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          {/* ================= Form ================= */}
          <div className="space-y-4 sm:space-y-5">

            <InputField
              label="Username"
              placeholder="Masukkan Username"
            />

            <PasswordField
              label="Password"
              placeholder="Masukkan Password"
            />

            <PasswordField
              label="Konfirmasi Password"
              placeholder="Masukkan Ulang Password"
            />

            <InputField
              label="Nama Lengkap"
              placeholder="Masukkan Nama Lengkap"
            />

            <PhoneInput
              label="Nomor Telepon"
            />

            {/* ================= Divider Rekening ================= */}
            <div className="flex items-center py-2">

              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/30" />

              <span className="mx-3 whitespace-nowrap text-sm font-bold tracking-widest text-yellow-400 sm:mx-4 sm:text-base">
                REKENING BANK
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/30" />

            </div>

            <BankSelect
              label="Nama Bank"
            />

            <InputField
              label="Nomor Rekening"
              placeholder="Masukkan Nomor Rekening"
            />

            <InputField
              label="Nama Pemilik Rekening"
              placeholder="Masukkan Nama Pemilik Rekening"
            />

            <SubmitButton />

          </div>

        </div>
      </div>

    </section>
  );
}