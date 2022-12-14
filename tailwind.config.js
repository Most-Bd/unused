/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      ...defaultTheme.colors,
      darkGreen: "#0e3329",
      lightGreen: "#37cca2",
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
