/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "2rem",
      },
      backgroundColor: {
        main: "#151937",
      },
      backgroundImage: {
        gradient: "linear-gradient(270.78deg, #ffa7a9 4.19%, #ff5ea3 96.11%)",
        "gradient-sub": "linear-gradient(-90deg,#ff7df2,#ff275b)",
      },
      width: {
        50: "50%",
      },
    },
  },
  mode: "jit",
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
