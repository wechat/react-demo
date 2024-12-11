import path from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: () => {
      return {
        '@': path.resolve(__dirname, './src'),
      };
    },
  },
});
