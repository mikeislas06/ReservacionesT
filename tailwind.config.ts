import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                "orange-primary": {
                    DEFAULT: "#ff5c00", // Triana's Main Orange
                    hover: "#e65300",   // Slightly darker for button hovers
                },
                "white-primary": {
                    DEFAULT: "#FFFFFF",
                    hover: "#fafafa",
                },
                "background-gray": {
                    DEFAULT: "#f9fafb",
                },
                card: "#ffffff",       // Pure white for UI cards
                "text-main": "#0f172a", // Very dark slate for main text
                "text-muted": "#64748b" // Gray for subtitles and dates
            },
            // 3. Custom Fonts (iOS feel)
            fontFamily: {
                // We will load 'Inter' from Google Fonts later
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            // 4. Custom Border Radius for that smooth app feel
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
};

export default config;
