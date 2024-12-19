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
        weed :"#dce1d2",
        grayish : '#4d4d49',
        bundlebar : '#dce1d7'
      },
      fontFamily: {
  			palanquin: [
  				'Palanquin',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			amatic: [
  				'Amatic SC',
  				'sans-serif'
  			]
  		},
    },
  },
  plugins: [],
} satisfies Config;
