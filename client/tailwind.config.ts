// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], // ✅ All files using classes
  safelist: ['text-red-500', 'bg-blue-500'],   // Optional: if you're dynamically using class names
  theme: {
    extend: {},
  },
  plugins: [],
};
