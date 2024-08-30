/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgjar: "url('/img/bg-3.jpg')",
        dev: "url('https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg')",
        net: "url(https://nfacademy.id/wp-content/uploads/2023/12/network-engineering%E2%80%8B-mikrotik.webp)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neo: ["9px 9px 18px #bababa, -9px -9px 18px #ffffff"],
      },
      borderRadius: {
        neo: "21px",
      },
      colors: {
        neo: "#e0e0e0",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
