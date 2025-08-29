// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
// theme: {
//   extend: {
//     fontFamily: {
//       sans: ['Inter', 'ui-sans-serif', 'system-ui'],
//       serif: ['Playfair Display', 'ui-serif', 'Georgia'],
//     },
//   },
theme: {
  extend: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      serif: ["Playfair Display", "ui-serif", "Georgia"], // swap to 'Love Beach' once imported
    },
  },
},
}
