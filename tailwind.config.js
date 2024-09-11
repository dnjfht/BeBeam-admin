/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        "sidebar-menu-height": "calc(100% - 120px)",
        "sidebar-menu-text-xl": "calc(100% - 48px)",
        "sidebar-menu-text-md": "calc(100% - 40px)",
        "sidebar-menu-text-3sm": "calc(100% -32px)",
      },
    },
    screens: {
      "3sm": "320px",
      "2sm": "450px",
      sm: "625px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1921px",
    },
  },
  plugins: [],
  corePlugins: {
    aspectRatio: true,
    lineClamp: true,
  },
};
