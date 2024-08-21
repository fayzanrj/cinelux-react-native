/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        DEFAULT: "#ffffff",
      },
    },
    colors: {
      primaryBg: "#111317",
      secondaryBg: "#292e37",
    },
  },
  plugins: [],
};
