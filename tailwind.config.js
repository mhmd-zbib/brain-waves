export default {
  // Specify the files to be included for content
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Define the color theme
  theme: {
    extend: {
      // Customize primary color
      colors: {
        primary: "#75aed8", // Light blue
        secondary: "#19252e", // Dark blue
        accent: "#2a3942", // Dark grey
        background: "#05121b", // Dark background
        text: "#FFFFFF", // White text
        textSecondary: "#8f9296", // Light grey text
        textAccent: "#e7eff1", // Light blue text
      },
    },
  },

  // Enable dark mode
  darkMode: "class",

  // No additional plugins
  plugins: [],
};
