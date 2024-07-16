/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#34add0",
        nav: "#1d1f31",
        page: "#2f4eb8",
        card: "#3200df",
        "card-hover": "#457FE5",
        "default-text": "#f1f3f5",
        "blue-accent": "#28b6e8",
        "blue-accent-hover": "#13d1ac",
      },
    },
  },
  plugins: [],
};
