/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './packages/**/**/*.{ts,tsx,js,jsx}', './src/*.{ts,tsx,js,jsx}', './dist/**/**/**/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001A41',
        custom: {
          border_default: '#D9D9D9',
          border_tertiary: '#DFE5E8',
          primary: '#001A41',
          secondary: '#718290',
          red: '#FF0025',
          default: '#EEEFF2',
          success: '#D0FBE0',
          disabled: '#D1D3DB',
          grey: '#BFC9D0',
          warm: '#F9FAFB',
          warning: '#FFFBEC',
          error: '#B71932',
          info: '#EBF9FF',
          system_info: '#0050AE',
          text: {
            primary: '#001A41',
            secondary: {
              default: '#718290',
              light: '#44515D'
            },
            disabled: '#97A6B1',
            info: {
              link: '#0050AE'
            }
          },
          bar: {
            active: '#CD3266'
          }
        },
        
      },
    }
  },
};
