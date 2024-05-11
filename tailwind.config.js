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
    themes: ["nord"],
  },
  plugins: [require("daisyui")],
};
