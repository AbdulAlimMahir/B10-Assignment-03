/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      body: ["Manrope"],
    },
    extend: {
      paperImg: {
        PaperImg: "url('/assets/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
