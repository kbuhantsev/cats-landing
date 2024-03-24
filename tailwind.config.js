/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        accentPink: "#fca5a5",
        accentRed: "#dc2626",
        textColor: "#27272a",
      },
      fontFamily: {
        marckScript: ['"Marck Script"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
