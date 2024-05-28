/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //added from tailwind darkmode replace selector with class 
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}