module.exports = {
  mode: "all",
  content: ["./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      blue: '#2b78d5',
      navyBlue: '#123680',
    },
    extend: {
      borderRadius: {
        standard: '12px'
      },
      dropShadow: {
        standard: '0 0 20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
