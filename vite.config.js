import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://Jairdevv.github.io/aprendiendo-react/tree/main/proyects/02-tic-tac-toe",
});
