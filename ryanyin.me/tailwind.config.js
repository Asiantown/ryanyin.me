/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'midnight': '#0A0F24',  // Background
          'offwhite': '#EAEAEA',  // Main text
          'accent': '#3E8EDE',    // Accent blue
          'slate': '#B4B8C5',     // Secondary text
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          'general': ['General Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }