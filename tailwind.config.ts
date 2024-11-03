import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        nourd: ["Nourd", "sans-serif"],
        "nourd-bold": ["Nourd Bold", "sans-serif"],
        agrandir: ["Agrandir", "sans-serif"],
        migra: ["Migra", "sans-serif"],
        "migra-extrabold": ["Migra ExtraBold", "sans-serif"],
      },
      colors: {
        dark: {
          primary: "#101016",
          yellow: "#eeba2b",
          green: "#3A5527",
          black: "#1f2b21",
          red: "#DB1704",
          "dark-green": "#1E2B21",
        },
        light: {
          primary: "#101016",
          yellow: "#eeba2b",
          green: "#3A5527",
          red: "#DB1704",
          black: "#1f2b21",
          "dark-green": "#1E2B21",
        },
      },
    },
  },
  plugins: [],
};
export default config;
