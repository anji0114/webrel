import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4DB5F6",
          DEFAULT: "#1B5D87",
          dark: "#31414B",
        },
        black: {
          DEFAULT: "#000000",
          100: "#111111",
          200: "#151515",
          300: "#1c1c1c",
          400: "#252525",
          500: "#2f2f2f",
          600: "#333333",
          700: "#444444",
          800: "#666666",
          900: "8888888",
        },
      },
    },
  },
  plugins: [],
};
export default config;
