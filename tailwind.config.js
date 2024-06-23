/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
   container: "1440px",
   contentContainer: "1140px",
   containerSmall: "1024px",
   containerxs: "768px",
    },
    

    extend: {

    
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translatey(0)' },
        }},
        // // success message pop-up
        // animation: {
        //   pop_up: 'pop_up 1s ease-in-out',
        // },
        // keyframes: {
        //   pop_up: {
        //     '0%': { transform: width(0),transform:height(0) },
        //     '100%': {transform: width(),transform:height(0)},
        //   }},

      screens:{
   XS: "320px",
   sm: "375px",
   sml: "500px",
   md: "667px",
   mdl: "768px",
   lg: "960px",
   lgl: "1024px",
   xl: "1280px",
      },


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
      navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    colors:
             {
      bodyColor: "#0A192F",
      textGreen: "#4BC0C5 ",
      textLight: "#ccd6f6",
      textDark: "#8892b0",
      hoverColor: "rgba(100,255,218,0.1)",
    
    },
  },
},
  plugins: [],
};