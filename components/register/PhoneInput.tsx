type Props = {
  label: string;
};

export default function PhoneInput({ label }: Props) {
  return (
    <div className="space-y-1.5">
      <label
        className="
          block
          text-xs
          font-semibold
          text-yellow-400
          sm:text-sm
        "
      >
        {label}
      </label>

      <div
        className="
          flex
          overflow-hidden
          rounded-xl
          border
          border-yellow-500/20
          bg-[#1d1d1d]
          transition-all
          duration-300
          focus-within:border-yellow-400
          focus-within:ring-2
          focus-within:ring-yellow-500/30
        "
      >
        {/* Kode Negara */}
        <div
          className="
            flex
            items-center
            justify-center
            border-r
            border-yellow-500/20
            bg-[#232323]
            px-4
            text-sm
            font-semibold
            text-white
            sm:text-base
          "
        >
          +62
        </div>

        {/* Nomor HP */}
        <input
          type="tel"
          placeholder="812xxxxxxx"
          className="
            flex-1
            bg-transparent
            px-4
            py-2.5
            text-sm
            text-white
            placeholder:text-gray-500
            outline-none
            sm:py-3
            sm:text-base
          "
        />
      </div>
    </div>
  );
}