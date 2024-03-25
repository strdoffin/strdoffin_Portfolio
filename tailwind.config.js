/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xl': { 'max': '1687px' },
      'xlg': { 'max': '1500px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '800px' },
      'sm': { 'max': '700px' },
      'ss': { 'max': '500px' },
  },
    fontFamily:{
      'Russo':["Russo One",'sans-serif'],
      'mitr':["Mitr", 'sans-serif'],
      'spacemono':["Space Mono", 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
