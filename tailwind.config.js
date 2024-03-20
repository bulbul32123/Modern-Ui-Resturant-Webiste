/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'xmd': '988px',
        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
      },
      colors: {
        green: {
          primary: '#53ec63',
        },
        orange: {
          primary: '#fa6868',
        },
      },
    },
  },
  plugins: [],
}