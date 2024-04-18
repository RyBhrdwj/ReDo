/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        c: "0fr 1fr",
      },
      gridTemplateRows: {
        c: "1fr 0fr",
      },
    },
  },
  plugins: [],
};
