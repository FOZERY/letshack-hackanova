/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'gray-original': '#f4f8fd',
            },
        },
    },
    plugins: [],
};
