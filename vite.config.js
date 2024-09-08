import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
});//todo esto se puede hacer con create-react-app. Pero con Vite es más rápido y sencillo.