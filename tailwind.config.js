const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      colors: {
        "primary": "#051e3d ",
        "secondary": "#051e3d ",
        "accent": "#051e3d ",
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '28': '7rem',
        '80': '20rem',
        '96': '24rem',
      },
      height: {
        '1/2': '50%',
      },
      scale: {
        '30': '.3',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      },
    },
  },
  theme: {
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};