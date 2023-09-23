import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.25rem',
        '3xl': '1.375rem',
      },
      colors: {
        accent: {
          light: '#1885DC',
          DEFAULT: '#3D89B8',
          dark: '#13557E',
        },
        danger: {
          light: '#DF6165',
          DEFAULT: '#DA2F35',
          dark: '#B10707',
        },
        gray: {
          100: '#FAFAFC',
          200: '#F6F8FA',
          300: '#E3E8EC',
          400: '#d0d7de',
          500: '#A9BACB',
          600: '#656D76',
          700: '#404A58',
          800: '#292F37',
          900: '#1F2328',
        },
      },
    },
  },
  plugins: [],
};
export default config;
