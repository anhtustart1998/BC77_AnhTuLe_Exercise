/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Oxanium", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
  mode: "jit",
};
