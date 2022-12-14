import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
});

// you need to add process/emv as rule in vite //
// define: {
//   "process.env": {},
// },
