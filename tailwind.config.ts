import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: { 
          "primary": "#3d3d3d",     
          "secondary": "#fef08a",     
          "accent": "#fef9c3",        
          "neutral": "#44403c",      
          "base-100": "#212121",     
          "info": "#60a5fa", 
          "success": "#4ade80", 
          "warning": "#f59e0b", 
          "error": "#ff5861",
        },
      },
    ],
  },
};
export default config;
