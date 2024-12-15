import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        branding: {
          200: "#24343D",
          300: "#24353E",
          400: "#1F2D34",
          700: "#1B262C",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      boxShadow: {
        "2xl": "10px 9px 70px 0px",
      },
    },
  },
  plugins: [],
} satisfies Config;
