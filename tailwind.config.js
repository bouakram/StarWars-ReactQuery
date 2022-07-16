/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ['light' , 'night'],
    base: true,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "",
  }
}
