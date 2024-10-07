/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'primary': '#2C3E50',
        'secondary': '#ECF0F1',
        'accent': '#E74C3C',
      },
    },
  },
  plugins: [],
}