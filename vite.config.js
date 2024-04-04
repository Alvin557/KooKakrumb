import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactSpring from '@react-spring/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    reactSpring() // Add the react-spring plugin here
  ],
});
