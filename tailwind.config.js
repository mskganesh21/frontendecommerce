/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        p: "1rem",
        h1: "2rem",
        h2: "1.5rem",
        h3: "1.17rem",
        h4: "1rem",
        h5: "0.83rem",
        h6: "0.67rem",
        //size     //line height
        sm: ["0.875rem", "1.2rem"],
      },
    },

    colors: {
      bkg: "rgb(var(--bkg) / <alpha-value>)",
      txt: "rgb(var(--txt) / <alpha-value>)",
      hvr: "rgb(var(--hvr) / <alpha-value>)",
      btnbkg: "rgb(var(--buttonbkg) / <alpha-value>)",
      btnclr: "rgb(var(--buttonclr) / <alpha-value>)",
    },

    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), daisyui],

  daisyui: {
    themes: [],
  },
};