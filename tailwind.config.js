/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaryRed: "hsl(0, 78%, 62%)",
        primaryCyan: "hsl(180, 62%, 55%)",
        primaryOrange: "hsl(34, 97%, 64%)",
        primaryBlue: "hsl(212, 86%, 64%)",
        darkBlue: "hsl(234, 12%, 34%)",
        grayishBlue: " hsl(229, 6%, 66%)",
        lightGray: "hsl(0, 0%, 98%)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
