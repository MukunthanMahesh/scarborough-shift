/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        slab: ["Roboto Slab", "serif"]
      },
      colors: {
        brand: {
          black: "#000000",
          deepBlue: "#1E3A8A",
          skyBlue: "#3B82F6",
          white: "#FFFFFF",
          lightGray: "#F3F4F6",
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
