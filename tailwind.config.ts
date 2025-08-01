module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      fontFamily:{
        uno: ['Uno', 'sans-serif'],      // For Bahnschrift
        dos: ['Dos', 'sans-serif'], 
        tres: ['Tres', 'sans-serif']     // For BRODAY-Regular
        

      },

      animation: {
        "glide-in": "glideIn 2s ease-out forwards",
        "glide-out": "glideOut 2s ease-out forwards",
        "title-in": "titleIn 2s ease-out  forwards",
        "mobile-glide-in": "mobileglideIn 2s ease-out forwards",
       
      },
    },
    keyframes: {
      glideIn: {
        "0%": { transform: "translateX(30%) translateY(-50%)", opacity: 0 },
        "100%": { transform: "translateX(0) translateY(-50%)", opacity: 1 },
      },
      glideOut: {
        "0%": { transform: "translateX(-30%) translateY(-50%)", opacity: 0 },
        "100%": { transform: "translateX(0) translateY(-50%)", opacity: 1 },
      },
      titleIn: {
        "0%": { transform: "translateY(-55%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      mobileglideIn: {
        "0%": {
          transform: "translateX(30%)", 
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)", 
          opacity: 1,
        },
      },
     
    },
  },
  plugins: [],
};
