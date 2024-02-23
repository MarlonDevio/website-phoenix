import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

const scssResources = `
@import "./src/styles/variables.scss";
@import "./src/styles/mixins.scss";
@import "./src/styles/layouts.scss";
@import "./src/styles/helpers.scss";
@import "./src/styles/fontStyles.scss";
`;
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssResources
      }
    }
  }
});
