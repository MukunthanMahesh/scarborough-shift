// LanguageFilter.jsx
import React from "react";

export default function LanguageFilter({ language, onChange }) {
  return (
    <div>
      <label className="block font-semibold mb-2">Language</label>
      <select
        value={language || "English"}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-1 bg-brand-white text-brand-black focus:outline-none focus:ring-2 focus:ring-offset-brand-skyBlue transition-colors duration-150"
      >
        <option>English</option>
        <option>French</option>
        <option>Mandarin</option>
        <option>Hindi</option>
        <option>Tamil</option>
        <option>Urdu</option>
        <option>Arabic</option>
      </select>
    </div>
  );
}
