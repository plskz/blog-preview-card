import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-yellow': '#F4D04E',
        // Neutral
        'neutral-white': '#FFFFFF',
        'neutral-grey': '#808080',
        'neutral-black': '#121212',
      },
    },
  },
  plugins: [],
}
export default config
