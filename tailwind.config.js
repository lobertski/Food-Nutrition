module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/Assets/Images/Hero.jpg')",
      },
      colors : {
        light_gray : "rgba(0, 0, 0, 0.5)"
      },
      boxShadow : {
        box_shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }
      
    },
  },
  plugins: [],
};
