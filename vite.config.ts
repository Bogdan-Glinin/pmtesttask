import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'
import { Buffer } from "buffer";

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   Buffer,
  // },
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
      process: true,
    }),
  ],
});
