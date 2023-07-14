/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [process.REACT_APP_PRODUCTION ? require("daisyui") : ""],
    daisyui: {
        themes: ["light", "dark", "corporate"],
    },
};
