/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*/.{ts,tsx,js,jsx}",
    "./components/*/.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD43B",      // yellow
        accent: "#FF7A18",       // orange/gerua
        brandText: "#0F172A"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};
