import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E2E8F0", // Slate-200 / crisp borders
        input: "#F1F5F9", // Slate-100
        ring: "#0052FF", // Brand Electric Blue
        background: "#FAFBFD", // Prismatic clean white-gray base
        foreground: "#0F172A", // Deep Slate Charcoal text
        primary: {
          DEFAULT: "#0052FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F1F5F9",
          foreground: "#475569",
        },
        accent: {
          DEFAULT: "#0284C7",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#64748B",
        },
        card: {
          DEFAULT: "#FFFFFF", // Solid white premium cards
          foreground: "#0F172A",
        },
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "cyber-grid": "radial-gradient(circle at 2px 2px, rgba(0, 82, 255, 0.08) 1px, transparent 0)",
        "glowing-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "float-node": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.02)" },
        },
        "log-feed": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s infinite ease-in-out",
        "float-node": "float-node 8s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
