import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0f5f0',
        foreground: "var(--foreground)",
        seagreen :'#67a241',
        weed :"#dce1d2"
      },
    },
  },
  plugins: [],
} satisfies Config;
