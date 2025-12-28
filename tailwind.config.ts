import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1152d4",
        "primary-hover": "#0e44b3",
        "background-light": "#f8f9fc",
        "background-dark": "#101622",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2233",
        "text-primary": "#0d121b",
        "text-secondary": "#4c669a",
        "success": "#22c55e",
        "warning": "#f59e0b",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px"},
    },
  },
  plugins: [],
}
export default config
