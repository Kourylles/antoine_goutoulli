/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["Silkscreen"],
        shafarik: ["Shafarik"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-breakpoints-inspector")],
};
