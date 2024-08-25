import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "responsive-padding": "calc(8px + 1.5625vw)",
      },
      colors: {
        "color-black": "rgb(var(--color-black))",
        "color-green-light": "rgb(var(--color-green-light))",
        "color-green-1": "rgb(var(--color-green-1))",
        "color-green-2": "rgb(var(--color-green-2))",
        "color-green-3": "rgb(var(--color-green-3))",
        "color-green-4": "rgb(var(--color-green-4))",
        "color-green-5": "rgb(var(--color-green-5))",
        "color-gold-1": "rgb(var(--color-gold-1))",
        "color-gold-2": "rgb(var(--color-gold-2))",
        "color-gold-3": "rgb(var(--color-gold-3))",
        "color-gold-4": "rgb(var(--color-gold-4))",
        "color-gold-5": "rgb(var(--color-gold-5))",
        "color-light-grey": "rgb(var(--color-light-grey))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-green":
          "linear-gradient(to bottom, rgba(var(--color-black), 0.9), rgba(var(--color-green-5), 0.4))",
        "gradient-from-green":
          "linear-gradient(to bottom, rgba(var(--color-green-5), 0.4), rgba(var(--color-black), 0.6))",
        "gradient-to-gold":
          "linear-gradient(185deg, rgba(var(--color-black), 0.6), rgba(var(--color-gold-5), 0.4))",
      },
      boxShadow: {
        "inset-gold-pre-hover": "inset 0 0 2px 2px rgb(var(--color-gold-1))",
        "inset-gold-post-hover": "inset 0 0 25px 25px rgb(var(--color-gold-1))",
        "inset-gold-post-hover-large":
          "inset 0 0 100px 100px rgb(var(--color-gold-1))",
        "inset-green-pre-hover":
          "inset 0 0 2px 2px rgb(var(--color-green-light))",
        "inset-green-post-hover":
          "inset 0 0 25px 25px rgb(var(--color-green-light))",
        "inset-green-post-hover-large":
          "inset 0 0 100px 100px rgb(var(--color-green-light))",
        "inset-gold-color-3-post-hover-large":
          "inset 0 0 100px 250px rgb(var(--color-gold-3))",
      },
      backgroundColor: {
        "bg-main": "var(--main-color)",
      },
    },
  },
  plugins: [],
};
export default config;
