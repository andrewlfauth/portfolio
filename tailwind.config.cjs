/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const variants = ['material', 'red']

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
      },
      animation: {
        blink: 'pulse 1s linear infinite',
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
        redhat: '"Red Hat Mono", mono',
      },
    },
  },
  plugins: [customVariants],
}
