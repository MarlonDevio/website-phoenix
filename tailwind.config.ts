import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        blackSmooth: "#1f1f1f",
        white: "#ffffff",
        "grey-1": "#f4f4f4",
        "grey-2": "#e4e4e4",
        "grey-3": "#b2b2b2",
        "grey-4": "#767676",
        gold: "#fecf33",
        "gold-dark": "#8e6d00",
      },

      boxShadow: {
        "inset-gold": "inset 0 0 2px 1px #fecf33",
        "inset-hover-gold": "inset 0 0 10px 20px #fecf33",
        "inset-gold-dark": "inset 0 0 2px 1px #8e6d00",
        "inset-hover-gold-dark": "inset 0 0 10px 20px #8e6d00",
        "inset-grey-light": "inset 0 0 2px 1px #f4f4f4",
        "inset-hover-grey-light": "inset 0 0 10px 20px #f4f4f4",
        "inset-grey-dark": "inset 0 0 2px 1px #767676",
        "inset-hover-grey-dark": "inset 0 0 10px 20px #767676",
        "inset-hover-grey-medium": "inset 0 0 10px 20px #b2b2b2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-gold": "linear-gradient(to bottom, #000000, #fecf33)",
        "gradient-from-green":
          "linear-gradient(to bottom, rgba(var(--color-green-5), 0.4), rgba(var(--color-black), 0.6))",
        "gradient-gold":
          "linear-gradient(to right, transparent, #fecf33, transparent)",
        // 'gradient-black': 'linear-gradient(to right, transparent, ' + theme('colors.black') + ', transparent)',
        // 'gradient-white': 'linear-gradient(to right, transparent, ' + theme('colors.white') + ', transparent)',
        // 'gradient-grey-1': 'linear-gradient(to right, transparent, ' + theme('colors.grey-1') + ', transparent)',
        // Add more gradients as needed
      },
    },
  },

  plugins: [],
};

export default config;
