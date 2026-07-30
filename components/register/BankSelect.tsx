type Props = {
  label: string;
};

export default function BankSelect({ label }: Props) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-yellow-400">
        {label}
      </label>

      <select className="w-full rounded-xl border border-yellow-500/20 bg-[#1d1d1d] px-4 py-3 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30">
        <option value="">Pilih Bank / E-Wallet</option>

        <option>BCA</option>
        <option>BRI</option>
        <option>BNI</option>
        <option>Mandiri</option>
        {/* E-Wallet */}
        <option>DANA</option>
    </select>
    </div>
  );
}