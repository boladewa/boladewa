"use client";

import { useState } from "react";

type Props = {
  label: string;
  placeholder?: string;
};

export default function PasswordField({
  label,
  placeholder,
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-yellow-400">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="w-full rounded-xl border border-yellow-500/20 bg-[#1d1d1d] px-4 py-3 pr-12 text-white outline-none transition focus:border-yellow-400"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
        >
          {show ? "🙈" : "👁"}
        </button>
      </div>
    </div>
  );
}