/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://www.getsolutions360.com/styles/site/default/assets/img/Web_ECommerce_1.jpg')",
      },
    },
  },
  plugins: [],
};
