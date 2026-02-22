import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Baskerville", "serif"],
    },
    extend: {
      colors: {
        beige: {
          500: "#edebdf",
          700: "#686464",
        },
        accent: {
          DEFAULT: "##6e9876",
          dark: "#0e3b31",
        },
      },
    },
  },
};

export default config;
