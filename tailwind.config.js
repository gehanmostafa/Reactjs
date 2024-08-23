/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#48ae9e",
        seccolor: "black",
      },
      backgroundColor: {
        main: "#dddddd",
        bgBtn: "#48ae9e",
        hoverbgColor: "rgb(90 157 146)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        heroImage: "url('/images/home.jpg')",
        aboutImage: "url('/images/about.jpeg')"
      },
    },
  },
  plugins: [],
};
