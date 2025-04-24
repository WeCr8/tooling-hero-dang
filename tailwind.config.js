// ✅ CORRECT FOR Tailwind: tailwind.config.js (Node-style)
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // ✅ ADD this if you're using dark mode
  theme: {
    extend: {}
  },
  plugins: []
}
