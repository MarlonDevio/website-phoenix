import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
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
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
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
        "inset-black": "inset 0 0 2px 1px #000000",
        "inset-hover-black": "inset 0 0 10px 20px #000000",
        "inset-hover-black-medium": "inset 0 0 30px 40px #000000",
        "inset-hover-black-large": "inset 0 0 50px 100px #000000",

        "inset-gold": "inset 0 0 2px 1px #fecf33",
        "inset-hover-gold": "inset 0 0 10px 20px #fecf33",
        "inset-hover-gold-medium": "inset 0 0 30px 40px #fecf33",
        "inset-hover-gold-large": "inset 0 0 50px 100px #fecf33",

        "inset-gold-dark": "inset 0 0 2px 1px #8e6d00",
        "inset-hover-gold-dark": "inset 0 0 10px 20px #8e6d00",
        "inset-hover-gold-dark-medium": "inset 0 0 30px 40px #8e6d00",
        "inset-hover-gold-dark-large": "inset 0 0 50px 100px #8e6d00",

        "inset-grey-light": "inset 0 0 2px 1px #f4f4f4",
        "inset-hover-grey-light": "inset 0 0 10px 20px #f4f4f4",
        "inset-grey-dark": "inset 0 0 2px 1px #767676",
        "inset-hover-grey-dark": "inset 0 0 10px 20px #767676",
        "inset-hover-grey-medium": "inset 0 0 10px 20px #b2b2b2",
        "inset-hover-grey-light-large": "inset 0 0 30px 40px #f4f4f4",
        "inset-hover-grey-medium-large": "inset 0 0 50px 100px #b2b2b2",
        "inset-hover-grey-dark-large": "inset 0 0 30px 40px #767676",
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

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          padding: "0.8rem 2.5rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
        },
        ".btn-primary": {
          "@apply dark:shadow-inset-gold": {},
          "@apply shadow-inset-gold-dark dark:text-white": {},
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            "@apply dark:shadow-inset-hover-gold-medium dark:text-black": {},
            "@apply shadow-inset-hover-gold-dark-medium text-white": {},
          },
        },
        ".btn-secondary": {
          "@apply bg-black text-white": {},
          "@apply dark:bg-white dark:text-black": {},
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            "@apply shadow-inset-black bg-white text-black": {},
            "@apply dark:shadow-inset-hover-grey-dark-large dark:text-white":
              {},
          },
        },
        ".full-vh-vw": {
          minHeight: "100vh",
          width: "100vw",
        },
      });
    }),
  ],
};

export default config;
