/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@ritmo/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "max-content auto max-content",
      },
      colors: {
        accent: "#3D2DB7",
        "accent-dark": "#181245",
      },
    },
  },
  plugins: [],
};
