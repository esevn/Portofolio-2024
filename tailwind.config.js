/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Nama font diambil dari Google Fonts
      },
      colors: {
        primary: "#22d3ee",
        dark: "#192226",
        second: "#6b7280",
        lemon: "#a3e635",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
