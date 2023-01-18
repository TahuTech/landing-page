/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    '/src/projects/kerf60.html',
    '/src/pages/*.html',
    './src/**/*.html'
  ],
  theme: {
      container:{
        center:true,
        padding: '16px',
      },
    extend: {
      colors:{
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
