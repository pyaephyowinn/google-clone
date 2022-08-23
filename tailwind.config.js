/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      colors: {
        dark: "rgba(32,33,35,255)",
      },
    },
  },
  plugins: [],
};
