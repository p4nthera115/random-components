import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },

      keyframes: {
        shimmer: {
          "0%": { "background-position": "300% 0" },
          // "40%": { "background-position": "400% 0" },
          // "70%": { "background-position": "-400% 0" },
          "100%": { "background-position": "-300% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
