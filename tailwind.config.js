module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgColor: "#09090A",
        buttonPink: '#D0071E'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
