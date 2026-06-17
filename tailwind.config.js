/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'bg-blue-500',
    'text-white',
    'bg-gray-200',
    'text-black',
    'px-4',
    'py-2',
    'rounded',
  ],
}
