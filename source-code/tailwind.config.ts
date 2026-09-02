import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Pangasinan Heritage Color Tokens — Marcilla-Trishania Palette ──
        primary: {
          50:  "#F3E7D7", // warm cream
          100: "#E6E2C4", // stone off-white
          200: "#D4DCAE", // sage light
          300: "#ADC981", // soft olive green
          400: "#98C171", // medium green
          500: "#80AF65", // olive green (hover)
          600: "#619853", // deep olive — PRIMARY BRAND
          700: "#527f45",
          800: "#3f6234",
          900: "#2d4625",
        },
        accent: {
          50:  "#fdf8f5",
          100: "#F3E7D7", // warm cream
          200: "#F7DED3", // soft peach
          300: "#F3C9C0", // dusty rose
          400: "#e8a89e",
          500: "#d98880", // deeper rose
          600: "#c46b62",
          700: "#a3504a",
          800: "#7d3c37",
          900: "#5c2b27",
        },
        sage: {
          50:  "#f7f9f2",
          100: "#E6E2C4", // stone warm
          200: "#D4DCAE", // sage pale
          300: "#ADC981", // sage mid
          400: "#98C171",
          500: "#80AF65",
          600: "#619853",
          700: "#527f45",
          800: "#3f6234",
          900: "#2d4625",
        },
        cream: {
          50:  "#fefdfb",
          100: "#F3E7D7", // warm cream
          200: "#F7DED3", // peach cream
          300: "#F3C9C0", // dusty rose
          400: "#E6E2C4", // stone
          500: "#D4DCAE", // sage stone
          600: "#b8b899",
          700: "#8f8f72",
          800: "#6a6a55",
          900: "#484838",
        },
        neutral: {
          50:  "#faf9f7",
          100: "#F3E7D7",
          200: "#E6E2C4",
          300: "#ccc9ab",
          400: "#a8a58c",
          500: "#837f68",
          600: "#5e5b4a",
          700: "#45432f",
          800: "#2e2c1e",
          900: "#1a1908",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        "card": "0 4px 24px -4px rgba(0,0,0,0.12)",
        "hero": "0 20px 60px -10px rgba(0,0,0,0.3)",
      },
      animation: {
        "fade-in":    "fadeIn 0.5s ease-in-out",
        "slide-up":   "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        slideDown: {
          "0%":   { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)",     opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
