import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      red: '#C73B0F',
      rose: {
        900: '#260F08',
        500: '#87635A',
        400: '#AD8A85',
        300: '#CAAFA7',
        100: '#F5EEEC',
        50: '#FCF8F6',
      },
      green: '#1EA575',
      black: '#000000',
      white: '#FFF',
    },

    fontFamily: {
      redHat: ["'Red Hat Text Variable'", 'sans-serif']
    },

    spacing: {
      1100: '88px',
      500: '40px',
      400: '32px',
      300: '24px',
      200: '16px',
      150: '12px',
      100: '8px',
      50: '4px',
    }
	},
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.text-preset-1': {
          fontFamily: theme('fontFamily.redHat'),
          fontSize: '56px',
          lineHeight: '120%',
        },
        '.text-preset-2': {
          fontFamily: theme('fontFamily.redHat'),
          fontSize: '24px',
          lineHeight: '125%',
        },
        '.text-preset-3': {
          fontFamily: theme('fontFamily.redHat'),
          fontSize: '16px',
          lineHeight: '150%',
        },
        '.text-preset-4': {
          fontFamily: theme('fontFamily.redHat'),
          fontSize: '14px',
          lineHeight: '150%',
        },
      })
    })
  ],
}
