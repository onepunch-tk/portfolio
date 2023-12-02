import { withTV } from "tailwind-variants/transformer";

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
