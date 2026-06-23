/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#070707",
        stone: "#f4f1ea",
        lime: "#c7ff4f",
        champagne: "#d6b56d",
        violet: "#7c5cff",
      },
      boxShadow: {
        glow: "0 0 60px rgba(214, 181, 109, 0.16)",
      },
    },
  },
  plugins: [],
};
