/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-font": ["Montserrat", "sans-serif"],
        "my-font-bold": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
