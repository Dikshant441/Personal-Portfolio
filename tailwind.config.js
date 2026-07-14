/** @type {import('tailwindcss').Config} */

// Tokens are RGB triplets in globals.css so Tailwind opacity
// modifiers (e.g. bg-accent/10) keep working.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: token('background'),
        foreground: token('foreground'),
        muted: {
          DEFAULT: token('muted'),
          foreground: token('muted-foreground'),
        },
        accent: {
          DEFAULT: token('accent'),
          secondary: token('accent-secondary'),
          foreground: token('accent-foreground'),
        },
        border: token('border'),
        card: token('card'),
        ring: token('ring'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(26, 26, 26, 0.04)',
        md: '0 4px 12px rgba(26, 26, 26, 0.06)',
        lg: '0 8px 24px rgba(26, 26, 26, 0.08)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
