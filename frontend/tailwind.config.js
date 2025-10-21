/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      boxShadow: { card: "0 2px 12px rgba(0,0,0,0.08)" },
      borderRadius: { pill: "9999px" },
      screens: { xs: "480px" }
    },
  },
  plugins: [],
};
