/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontWeight: {
        semibold: "500",
        bold: "500",
        extrabold: "500",
        black: "500",
      },
      letterSpacing: {
        tight: "-0.02em",
        normal: "0",
      },
      colors: {
        brand: {
          DEFAULT: "#355872",
          hover: "#2A4A63",
          light: "#4A7A9B",
          tint: "#EEF4F8",
          "tint-text": "#1A3347",
        },
        hero: {
          bg: "#0D1F2D",
          text: "#F0F6FA",
          muted: "#8BAFC4",
        },
        surface: {
          page: "#FAFAFA",
          card: "#FFFFFF",
        },
        ink: {
          primary: "#1C2B36",
          secondary: "#5A7384",
          tertiary: "#8BAFC4",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [],
};
