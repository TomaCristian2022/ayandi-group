/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E8E8',
        secondary: '#E8E8E8',
        magenta: '#FF0486',
        yellow: '#DFFE02',
        pink:'#FF0486'
      },
      backgroundImage: {
        'office': "url('./assets/office.webp')",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        continuousScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.1)' },
        },
        scrollBidirectional: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(-100% + 100vw))' }, 
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        continuousScale: 'continuousScale 5s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        scrollBidirectional: 'scrollBidirectional 80s ease-in-out infinite',
      },
      fontFamily: {
        primary: ['Neune Black', 'sans-serif'],
        secondary: ['Anthony', 'sans-serif'],
      },
      plugins: [
        require('@tailwindcss/line-clamp'),
      ],
    },
  },
};
