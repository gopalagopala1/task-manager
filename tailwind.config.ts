import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.stories.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        whiteSmoke: '#f5f5f5',
        blue: '#2555FF',
        darkBlue: '#1D46C2',
        green: '#46F080',
        yellow: '#EDF046',
        black: '#24252C',
        gray: '#6E6A7C',
        purple: '#5F33E1',
        lightPurple: '#EDE8FF',
      },
    },
  },
  plugins: [],
};
export default config;
