import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent": colors.cyan[400],
        "basicText": colors.gray[400],
        "heading": colors.slate[200],
        "lightBg": 'rgba(35, 53, 84, 0.5)',
        "mainBg": '#030014',
      },
      boxShadow: {
        "accentShadow": "0 0 25px var(--main-color), 0 0 50px var(--main-color)",
      },
    },
  },
  plugins: [],
};
export default config;
