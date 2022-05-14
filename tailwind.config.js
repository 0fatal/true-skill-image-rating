module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        translate: {
          '0%': { transform: 'translateY(-100%)' },
          '20%': { transform: 'translateY(2px)' },
          '40%': { transform: 'translateY(-2px)' },
          '60%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      }
    }
  },
  plugins: []
}
