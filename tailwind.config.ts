import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },
      maxWidth: { 
        '256': '64rem',
        '192': '48rem', 
      },
      height: {
        '100vh': '100vh',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '4.5rem',
        '10xl': '5rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#22223b",
        secondary: "#4a4e69",
        tertiary: "#9a8c98",
        accents: "#c9ada7",
        base: "#f2e9e4",
        pale: "#ccd4e4",
        white: "#fbfbfb",
      },
    },
  },
  plugins: [],
} satisfies Config;
