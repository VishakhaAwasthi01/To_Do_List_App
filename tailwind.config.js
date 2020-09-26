module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    objectFit: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover"],
    borderWidth: ["responsive", "focus"],
  },
};
