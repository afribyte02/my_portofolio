import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#131212", card: "#1c1b1b", dim: "#2a2929", brand: "#f26b38", lime: "#c6ff40" },
      fontFamily: { sans: ["var(--font-poppins)", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
