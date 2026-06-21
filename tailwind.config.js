/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1714",
        paper: "#f5f0e8",
        "paper-light": "#faf7f2",
        mist: "#d4cfc5",
        stone: "#8a8378",
        shadow: "#2c2822",
        autumn: "#c4775a",
        spring: "#7a9e7e",
        winter: "#e8e4de",
        summer: "#4a7c6f",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 7vw, 6rem)", { lineHeight: "1.2" }],
        chapter: ["clamp(1.75rem, 4.5vw, 3.5rem)", { lineHeight: "1.3" }],
        quote: ["clamp(1.5rem, 3.5vw, 2.5rem)", { lineHeight: "1.5" }],
        subheading: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.6" }],
        body: ["clamp(0.9375rem, 1.2vw, 1.0625rem)", { lineHeight: "1.8" }],
        caption: ["clamp(0.75rem, 1vw, 0.8125rem)", { lineHeight: "1.5" }],
        small: ["clamp(0.625rem, 0.8vw, 0.6875rem)", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        cinematic: "0.08em",
        widest: "0.2em",
      },
      screens: {
        lg: "1024px",
      },
    },
  },
  plugins: [],
}