import type {Config} from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        bland: colors.zinc,
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
