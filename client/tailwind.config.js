/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        Preset1: "1fr 0fr",
        Preset2: "0fr 1fr",
      },
      gridTemplateRows: {
        Preset1: "0fr 1fr",
        Preset2: "1fr 0fr",
      },
    },
  },
  plugins: [],
};
