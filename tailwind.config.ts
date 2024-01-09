import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
    backgroundImage: {
      'canoe': "url('../public/canoe.jpeg')",
      'ghana': "url('../public/ghana.png')",
      'korea': "url('../public/korea.jpeg')",
      'melbourne': "url('../public/melbourne.jpeg')",
      'broadback': "url('../public/Broadback.png')",
      'bg-gradient-to-b': "linear-gradient(to bottom, var(--tw-gradient-stops));"
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}
export default config
