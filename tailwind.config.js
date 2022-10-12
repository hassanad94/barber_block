/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        hero: "url('/img/hero/bg.jpg')",
        about: "url('/img/about/image.png')",
        interview: "url('/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/img/hero/heroText.svg")',
      },
    },
  },
  plugins: [],
};
