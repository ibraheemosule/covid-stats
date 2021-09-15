module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fadered: "#5f020a33",
        table: {
          blue: "#C2CFFF",
          light: "#F6F7FC",
        },
        loanbot: {
          100: "#F3F6FF",
          black: "#222222",
          200: "#222222",
          blue: "#274FED",
          300: "#274FED",
          400: "#14D08E",
          green: "#14D08E",
          500: "#FF5810",
          orange: "#FF5810",
          600: "#FE2B5E",
          700: "#999999",
          red: "#FE2B5E",
          "red-light": "#FFF4F7",
        },
        fontFamily: {
          poppins: "Poppins",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
