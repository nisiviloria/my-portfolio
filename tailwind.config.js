/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "variable-collection-accent-color-2":
          "var(--variable-collection-accent-color-2)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-dark-color":
          "var(--variable-collection-dark-color)",
        "variable-collection-paragraph-color":
          "var(--variable-collection-paragraph-color)",
        "variable-collection-white-color":
          "var(--variable-collection-white-color)",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        "big-heading": "var(--big-heading-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        paragraph: "var(--paragraph-font-family)",
      },
    },
  },
  plugins: [],
};
