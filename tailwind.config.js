const colors = require("tailwindcss/colors");
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    enabled: production,
  },
  variants: {
    extend: {
      textColor: ["visited", "disabled"],
      opacity: ["disabled", "odd"],
      backgroundColor: ["disabled", "odd"],
      backgroundOpacity: ["odd"],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Montserrat-SemiBold", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: {
        light: "#78bfea",
        DEFAULT: "#0696ED",
        dark: "#2C3052",
      },
      green: "#43C161",
      red: "#FF635C",
      gray: colors.gray,
      indigo: colors.indigo,
      yellow: colors.amber,
    },
  },
};
