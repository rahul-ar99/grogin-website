import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'max-1440': { 'max': '1440px' },
      'max-1280': { 'max': '1280px' },
      'max-1080': { 'max': '1080px' },
      'max-980': { 'max': '980px' },
      'max-786': { 'max': '786px' },
      'max-640': { 'max': '640px' },
      'max-480': { 'max': '480px' },
      'max-360': { 'max': '360px' },    
    },
  },
  plugins: [],
};
export default config;
