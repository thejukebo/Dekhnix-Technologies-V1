/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          indigo: '#27206F',
          blue: '#3B2FBF',
          navy: '#18163A',
        },
        accent: {
          neon: '#30F0FF',
          violet: '#9A6CFF',
        },
        metal: {
          light: '#DDE1E6',
          mid: '#A8ACB3',
          dark: '#656A72',
        },
        bg: {
          obsidian: '#0B0C10',
          onyx: '#1A1C22',
          cloud: '#F2F3F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
