import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "main-light": "url('$lib/assets/bglight.svg')",
        "main-dark": "url('$lib/assets/bgdark.svg')",
      },
      screens: {
        xs: "480px",
      },
      colors: {
        theme: {
          black: "#222222",
          white: "#F5F5F5",
          purple: "#6E3FBD",
          green: "#01A9BE",
          yellow: "#FEB102",
          orange: "#FB580F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
