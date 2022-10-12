/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Oswald",
      secondary: "Raleway",
      tertiary: "Rozha One",
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
      },
      backgroundImage: {
        hero: "url('/public/img/hero/bg.jpg')",
        about: "url('/public/img/about/image.png')",
        interview: "url('/public/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/public/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
