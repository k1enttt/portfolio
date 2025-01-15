import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        section: '630px',
      },
      fontSize: {
        normal: '16px',
        medium: '18px',
        large: '21px',
        h5: '21px',
        h4: '24px',
        h3: '28px',
        h2: '40px',
        h1: '48px',
        author: '32px',
        who_am_i: '104px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
          normal: '400',
          semibold: '500',
          bold: '600'
      },
      colors: {
        black: '#212529',
        gray: '#6C757D'
      },
      backgroundColor: {
        primary: '#F5DF4E',
        gray_light: '#212529'
      },
      borderColor: {
        primary: '#F5DF4E'
      }
    },
  },
  plugins: [],
};
export default config;
