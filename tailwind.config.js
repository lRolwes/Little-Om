/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      colors: {
        'orange':'#8EB288',
        'tan':'#F3EFE2',
        'slate':'#475466',
        'darktan':'#EBE7DB',
        'yellow':'#F3EEE4',
      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}

