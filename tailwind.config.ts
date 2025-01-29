import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/shared/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                },
                tertiary: {
                    DEFAULT: "var(--tertiary)",
                },
            },
        },
        fontFamily: {
            ins: ["Instrument Sans", "serif"],
            mont: ["Montserrat", "serif"],
            pop: ["Poppins", "serif"],
            cambo: ["Cambo", "serif"],
            inter: ["Inter", "serif"],
        },
    },
    plugins: [],
} satisfies Config;
