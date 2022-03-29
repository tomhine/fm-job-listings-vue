module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        primary: {
          cyan: "hsl(180, 29%, 50%)",
        },
        neutral: {
          bg: "hsl(180, 52%, 96%)",
          lightcyan: "hsl(180, 31%, 95%)",
          cyan: "hsl(180, 8%, 52%)",
          darkcyan: "hsl(180, 14%, 20%)",
        },
      },
      spacing: {
        22: "88px",
        39: "156px",
      },
      backgroundImage: {
        "header-desktop": "url('/bg-header-desktop.svg')",
        "header-mobile": "url('/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
