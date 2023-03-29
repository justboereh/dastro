const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,vue}'],
    theme: {
        extend: {
            colors: {
                light: {
                    50: '#fdfdfd',
                    100: '#fcfcfc',
                    200: '#fafafa',
                    300: '#f8f9fa',
                    400: '#f6f6f6',
                    500: '#f2f2f2',
                    600: '#f1f3f5',
                    700: '#e9ecef',
                    800: '#dee2e6',
                    900: '#dde1e3',
                },
                dim: {
                    50: '#cfd2d4',
                    100: '#c0c3c5',
                    200: '#b2b5b6',
                    300: '#a4a7a8',
                    400: '#97999a',
                    500: '#898b8c',
                    600: '#7c7d7e',
                    700: '#6f7071',
                    800: '#636363',
                    900: '#565657',
                },
                dark: {
                    50: '#4a4a4a',
                    100: '#3c3c3c',
                    200: '#323232',
                    300: '#2d2d2d',
                    400: '#222222',
                    500: '#1f1f1f',
                    600: '#1c1c1e',
                    700: '#1b1b1b',
                    800: '#181818',
                    900: '#0f0f0f',
                },

                /** CUSTOMIZATION */
                accent: {
                    orange: '#ff7e33',
                },
            },
        },
    },
    plugins: [],
}
