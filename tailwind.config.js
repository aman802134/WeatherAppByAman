/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'BgImage' : "url('/Image/bg.jpg')"
      },
      colors:{
        'mainColor': '#000000',
        'secondColor':'#5d555c',
      },
      fontFamily:{
        'mainFont': ['Poppins', 'sans-serif'],
        'secondFont': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
