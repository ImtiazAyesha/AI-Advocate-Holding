/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        evren: {
          navy: '#1A2421',
          'navy-light': '#2A3D38',
          peach: '#88C9B3',
          'peach-light': '#E0F2EC',
          rose: '#6BA88E',
          gold: '#4E7C6E',
          'warm-gray': '#EBEBEB',
          charcoal: '#1A1A1A',
          'medium-gray': '#4D4D4D',
          'light-gray': '#E0E0E0',
          'warm-white': '#F2F2F2',
        }
      },
      fontFamily: {
        heading:['var(--font-plus-jakarta)', 'Poppins', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'studio': '16px', // The standard soft edge for all Evren cards/images
        'studio-sm': '12px',
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(26, 36, 33, 0.1)', // Forest-tinted shadow, NEVER pure black
        'warm-hover': '0 20px 40px -10px rgba(26, 36, 33, 0.15)',
      }
    },
  },
  plugins:[],
}
