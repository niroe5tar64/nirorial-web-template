import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Settings to generate React Components
  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
