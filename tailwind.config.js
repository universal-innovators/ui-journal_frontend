/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    plugins: [
      // ...
      // require('@tailwindcss/forms'),
    ],
    fontFamily: {
      'roboto': ['Roboto']  ,
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'purpleShadow': "#8f75a5",
        'logoColor': "#0E3A78",
        'navLinks': "#5388B0",
        'homeCard': "#E2EBF2",
        'lightLogoColor': 'rgba(14,58,120, .72)',
      },
      boxShadow: {
        'nav': '0px 2px 4px 0px rgba(0,0,0,.5)',
        'homeCards': '10px 2px 32px 0px rgba(0, 0, 0, .25)',
        'contactCards': '0px 0px 8px 2px rgba(0, 0, 0, .25)',
      },
      
    },
  },
  plugins: [],
}

