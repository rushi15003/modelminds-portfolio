/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Editorial Color Palette - Light to Dark Progression
                'bg-lightest': '#EAE7DC',      // Main background (airy, light)
                'bg-section': '#D8C3A5',       // Section alternation (warm, soft)
                'surface-card': '#B8B8A8',     // Cards (grounded, neutral)
                'accent-soft': '#E98074',      // Secondary accents, icons
                'accent-primary': '#E85A4F',   // Primary buttons, strong emphasis

                // Text colors (soft, not harsh)
                'text-heading': '#2D2D2D',     // Dark gray for headings
                'text-body': '#4A4A4A',        // Soft charcoal for body
                'text-muted': '#6B6B6B',       // Muted text

                // Hover states
                'accent-primary-hover': '#D14A40',  // Slightly darker primary
                'accent-soft-hover': '#E06B60',     // Slightly darker soft accent
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
