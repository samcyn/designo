/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      peach: "#E7816B",
      ['peach-light']: "#FFAD9B",
      black: "#1D1C1E",
      ['dark-grey']: "#333136",
      ['light-grey']: "#F1F3F5",
      white: "#ffffff",
    },
    extend: {
      spacing: {
        "5px": "5px",
        "15px": "15px",
        "50px": "50px",
        "25": "100px",
        "30": "120px",
        "50": "200px",
        "18": "72px",
        "75": "300px",
        "100": "400px",
      },
      letterSpacing: {
        '2px': '2px',
      },
      lineHeight: {
        '14px': '14px',
        '25px': '25px',
      },
      fontSize: {
        '14px': '14px',
        '24px': '24px'
      },
    },
  },
  plugins: [],
};
