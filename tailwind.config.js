/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00aea5",
          secondary: "#007c67",
          accent: "#f21b00",
          neutral: "#262721",
          "base-100": "#ebfff5",
          info: "#009cb7",
          success: "#00a580",
          warning: "#ff9f00",
          error: "#ff3e6e",
        },
      },
    ],
  },
};
