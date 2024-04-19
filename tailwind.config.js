module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#1C1678",
        purp: "#8576FF",
        ocean: "#7BC9FF",
        mint: "#A3FFD6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
