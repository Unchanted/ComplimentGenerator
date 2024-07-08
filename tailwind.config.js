/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: theme => ({
        'gradient-rainbow': 'linear-gradient(90deg, #f00 0%, #ff0 25%, #0f0 50%, #00f 75%, #f0f 100%)',
      })
    },
  },
  plugins: [],
}
