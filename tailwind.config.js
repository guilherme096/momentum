/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "qr-code": "url('https://duckduckgo.com/i/87701897cfb12566.png')",
        "blured-qr-code":
          "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FHkSBY.png&f=1&nofb=1&ipt=e7c28a6208e73356aaa80a89234ed4eb941c2d9f227473d8da86615f97a9d2fa&ipo=images')",
      },
      aspectRatio: {
        card: "7 / 6",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          primary: "#1c4f81",
          error: "#ac3d31",
          "--rounded-box": "0.55rem", // Default border radius for box components
          "--rounded-btn": "0.55rem", // Default border radius for button components
          "--rounded-badge": "0.55rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
