module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/bg-main.svg')",
        slide1: "url('/src/assets/images/slide1.png')",
        slide2: "url('/src/assets/images/slide2.png')",
      },
    },
  },
  plugins: [],
};
