/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import forms from "tailwindcss"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      roboto: ["Roboto", "sans-serif"]
   }},
  },
  plugins: [daisyui,forms],
}

