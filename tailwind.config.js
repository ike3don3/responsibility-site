/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0d1b2a",
        "navy-mid": "#1a2d42",
        cyan: "#4ecdc4",
        white: "#f0f4f8"
      }
    }
  },
  plugins: [],
};
