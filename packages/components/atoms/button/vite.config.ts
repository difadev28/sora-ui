import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";
import fs from 'fs';

// https://vite.dev/config/
const copyPackageJson = () => {
  const src = path.resolve(__dirname, 'package.json'); // Resolve package.json path
  const dest = path.resolve(__dirname, '../../../../dist/components/button/package.json'); // Resolve destination path
  fs.copyFileSync(src, dest);
};
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ insertTypesEntry: true }), // Generate .d.ts
    {
      name: 'copy-package-json',
      closeBundle: copyPackageJson,
    },
  ],
  build: {
    outDir: path.resolve(__dirname, '../../../../dist/components/button/dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: "@sora-ui-material/button",
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', 'vite-plugin-dts', 'vite-plugin-css-injected-by-js'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
})
