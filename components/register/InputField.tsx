type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-yellow-400">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-yellow-500/20 bg-[#1d1d1d] px-4 py-3 text-white outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30"
      />
    </div>
  );
}