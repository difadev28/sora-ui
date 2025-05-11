import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";
import fs from 'fs';

// https://vite.dev/config/
const copyPackageJson = () => {
  const src = path.resolve(__dirname, 'package.json');
  const destDir = path.resolve(__dirname, 'dist');
  const dest = path.resolve(destDir, 'package.json');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('package.json berhasil dicopy ke dist/');
  } else {
    console.warn('package.json tidak ditemukan di', src);
  }
};
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ insertTypesEntry: true }), // Generate .d.ts
    {
      name: 'copy-package-json',
      closeBundle: () => {
        setTimeout(() => {
          copyPackageJson()
        }, 100)
      },
    },
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: "@potloc-shared-component/dropdown",
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vite-plugin-dts', 'vite-plugin-css-injected-by-js'],
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
