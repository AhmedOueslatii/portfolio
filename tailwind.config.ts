import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        paper: "#fafaf8",
        g100: "#f0efec",
        g200: "#d6d4ce",
        g400: "#9c9a94",
        g700: "#3a3936",
        accent: "#2563eb",
        "accent-bg": "#dbeafe",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        wider2: "0.07em",
        wider3: "0.1em",
        wider4: "0.12em",
      },
      borderRadius: {
        pill: "100px",
      },
      boxShadow: {
        hero: "0 32px 80px rgba(0,0,0,0.12)",
        card: "0 24px 60px rgba(0,0,0,0.10)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
