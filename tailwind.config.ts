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
        mydarktheme: { 
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
        mylighttheme: {         
          "primary": "#a8a29e",
          "secondary": "#eab308",                   
          "accent": "#ca8a04",                   
          "neutral": "#44403c",                   
          "base-100": "#f5f5f4",                   
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
