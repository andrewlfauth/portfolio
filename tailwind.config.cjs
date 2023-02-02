/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const variants = ['material', 'catppuccin', 'nightowl']

const customVariants = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const element = e(`${variant}${separator}${className}`)
        return `.${variant} .${element}`
      })
    })
  )
})

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'mat-purple': '#C591E8',
        'mat-green': '#69FF94',
        'mat-blue': '#56b6c2',
        'mat-red': '#FF5370',
        'mat-pink': '#F07178',
        'mat-orange': '	#F78C6C',
        'mat-bg': '#0f0f0f',
        'mat-yellow': '#FFCB6B',
        'cat-bg': '#1b1b29',
        'cat-text': '#cdd6f4',
        'cat-blue': '#8AADF4',
        'cat-pink': '#F5BDE6',
        'cat-purple': '#B7BDF8',
        'cat-green': '#a6e3a1',
        'cat-yellow': '#f9e2af',
        'cat-red': '#f38ba8',
        'cat-border': '#6c7086',
        'nightowl-bg': '#011627',
        'nightowl-text': '#d6deeb',
        'nightowl-red': '#ef5350',
        'nightowl-blue': '#82AAFF',
        'nightowl-orange': '#f78c6c',
        'nightowl-magenta': '#c792ea',
        'nightowl-yellow': '#addb67',
        'nightowl-border': '#1d3b53',
      },
      animation: {
        blink: 'blink 1s linear infinite',
        blinkCat: 'blinkCat 1s linear infinite',
        blinkOwl: 'blinkOwl 1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%': {
            background: '#F78C6C',
            boxShadow: '0 0 5px #F78C6C',
          },
          '25%': {
            background: '#F07178',
            boxShadow: '0 0 5px #F07178',
          },
          '50%': {
            background: '#F78C6C',
            boxShadow: '0 0 5px #F78C6C',
          },
          '75%': {
            background: '#F07178',
            boxShadow: '0 0 5px #F07178',
          },
          '100%': {
            background: '#FF5370',
            boxShadow: '0 0 5px #FF5370',
          },
        },
        blinkCat: {
          '0%': {
            background: '#B7BDF8',
            boxShadow: '0 0 5px #B7BDF8',
          },
          '25%': {
            background: '#8AADF4',
            boxShadow: '0 0 5px #8AADF4',
          },
          '50%': {
            background: '#F5BDE6',
            boxShadow: '0 0 5px #F5BDE6',
          },
          '75%': {
            background: '#8AADF4',
            boxShadow: '0 0 5px #8AADF4',
          },
          '100%': {
            background: '#F5BDE6',
            boxShadow: '0 0 5px #F5BDE6',
          },
        },
        blinkOwl: {
          '0%': {
            background: '#f78c6c',
            boxShadow: '0 0 5px #f78c6c',
          },
          '25%': {
            background: '#82AAFF',
            boxShadow: '0 0 5px #82AAFF',
          },
          '50%': {
            background: '#f78c6c',
            boxShadow: '0 0 5px #f78c6c',
          },
          '75%': {
            background: '#82AAFF',
            boxShadow: '0 0 5px #82AAFF',
          },
          '100%': {
            background: '#f78c6c',
            boxShadow: '0 0 5px #f78c6c',
          },
        },
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
        redhat: '"Red Hat Mono", mono',
        gor: '"EB Garamond", serif',
      },
    },
  },
  plugins: [customVariants],
}
