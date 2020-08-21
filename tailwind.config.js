module.exports = {
  purge: [],
  theme: {
    extend: {
      textColor: {
        dark: "#383f51",
        grey: "#545e78",
        light: "#bac2ca",
        orange: "#e3b23c",
      },
      backgroundColor: {
        dark: "#383f51",
        grey: "#545e78",
        light: "#bac2ca",
        orange: "#e3b23c",
      },
      fontFamily: {
        title: ["'Lobster'", "cursive"],
        paragraph: ["'Montserrat'", "sans-serif"],
      },
      fontSize: {
        "7xl": "5rem",
      },
      animation: {
        "bg-move": "bg-move 10s linear infinite;",
        "bracket-r": "bracket-r 4s ease-in-out infinite alternate;",
        "bracket-l": "bracket-l 4s ease-in-out infinite alternate;",
        "baguette-zoom":
          "baguette-zoom 4s ease-in-out infinite alternate; transform-origin: center;",
        levitate: "levitate 4s ease-in-out infinite alternate",
      },
      spacing: {
        "96": "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
