/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f3f8f6',
          100: '#e1ede8',
          200: '#c5dcd2',
          300: '#9cc2b4',
          400: '#6da48f',
          500: '#4f8a74',
          600: '#2D6A4F', // primary
          700: '#255c43',
          800: '#1f4a37',
          900: '#1b3d2f',
        },
        river: {
          50: '#f2f9f7',
          100: '#e0f1eb',
          200: '#c4e3d8',
          300: '#9acfbd',
          400: '#67b39d',
          500: '#40916C', // secondary
          600: '#3d7d61',
          700: '#326750',
          800: '#2c5242',
          900: '#254438',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f2ede5',
          200: '#e5d9ca',
          300: '#d3bfa7',
          400: '#c2a989',
          500: '#A98467', // accent
          600: '#8f6d54',
          700: '#765a46',
          800: '#604b3d',
          900: '#503f35',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: [
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};