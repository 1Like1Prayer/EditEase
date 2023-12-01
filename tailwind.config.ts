import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#dedede',
        primary: '#cdbfff',
        secondary: '#ff8491',
        black: '#393c3d',
        white: '#e7e7e7',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
