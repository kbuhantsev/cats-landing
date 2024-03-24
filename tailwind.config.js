/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        accentPink: "#fca5a5",
        textColor: "#27272a",
      },
    },
  },
  plugins: [],
};
