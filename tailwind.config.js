/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    function({addUtilities}){
      const newUtilities={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      }
      addUtilities(newUtilities)
    },
    require('@tailwindcss/aspect-ratio'),

  ],
}

