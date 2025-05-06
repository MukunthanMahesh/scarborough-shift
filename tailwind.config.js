/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deepBlue: "#1E3A8A",
          skybBlue: "#3B82F6",
          white: "#FFFFFF",
          lighGray: "#F3F4F6",
          darkGray: "#374151",
          offWhite: "#F9FAFB",
          navyBlue: "#0A1A4A",
          navyBlueDeep: "#050A30",
        }
      }
    },
  },
  plugins: [],
}
