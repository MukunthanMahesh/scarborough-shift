// LanguageFilter.jsx
import React from "react";

export default function LanguageFilter({ language, onChange }) {
  return (
    <div>
      <label className="block font-semibold mb-2">Language</label>
      <select
        value={language || "English"}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-1"
      >
        <option>English</option>
        <option>French</option>
        <option>Mandarin</option>
        <option>Hindi</option>
        <option>Tamil</option>
        <option>Urdu</option>
      </select>
    </div>
  );
}
