/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(./src/assets/banar.jpg)",
        'footer-texture': "linear-gradient(#101840ad, #101840ad);",
      },
      
    },
  },

    plugins: [
      require('daisyui'),
    ],
  }


