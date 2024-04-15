/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
              light: {
                ...require("daisyui/src/theming/themes")["winter"],
                "primary": "#2596be",
              },
            },
          ],
    },
    plugins: [require("daisyui")],
};
