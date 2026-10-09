module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        background: '#FAFAFA',
        foreground: '#0B1220',
        primary: '#0B1F3D',
        'on-primary': '#FFFFFF',
        'primary-hover': 'rgba(11, 31, 61, 0.9)',
        'primary-pressed': 'rgba(11, 31, 61, 0.8)',
        'secondary-container': '#E3ECE6',
        'on-secondary-container': '#145A32',
        tertiary: '#C9A227',
        'on-tertiary': '#1C1500',
        'on-tertiary-white': '#FFFFFF',
        'surface-container': '#F1F3F6',
        'surface-container-low': '#E6E9ED',
        outline: '#7A8492',
        'on-surface-variant': '#4A5568',
        error: '#B3261E',
        'on-error': '#FFFFFF',
      },
      borderRadius: {
        xs: '8px',
        small: '12px',
        m: '16px',
        large: '24px',
        xl: '28px',
        xxl: '32px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11, 18, 32, 0.05), 0 1px 3px rgba(11, 18, 32, 0.08)',
        md: '0 4px 6px rgba(11, 18, 32, 0.07), 0 2px 4px rgba(11, 18, 32, 0.06)',
        lg: '0 10px 15px rgba(11, 18, 32, 0.1), 0 4px 6px rgba(11, 18, 32, 0.05)',
        xl: '0 20px 25px rgba(11, 18, 32, 0.1), 0 8px 10px rgba(11, 18, 32, 0.06)',
      },
      spacing: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
