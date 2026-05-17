/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mac: {
          dark: '#1e1e1e',
          light: '#f5f5f7',
          blue: '#007aff',
          glass: 'rgba(255, 255, 255, 0.25)',
          glassDark: 'rgba(0, 0, 0, 0.25)',
        }
      },
      backdropBlur: {
        md: '12px',
        lg: '24px',
        xl: '40px',
      }
    },
  },
  plugins: [],
}
