/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        grayishBlue: "hsl(246, 25%, 77%)",
      },
      fontSize: {
        bodyCopy: "16px",
      },
      backgroundImage: {
        bgDesktop: "url(images/bg-intro-desktop.png)",
        bgMobile: "url(images/bg-intro-mobile.png)",
      },
    },
  },
  plugins: [],
};
