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
      colors: {
        primary: "#22d3ee",
        dark: "#1e293b",
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
