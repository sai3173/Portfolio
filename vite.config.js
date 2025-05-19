import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // git subtree push --prefix dist origin gh-pages
    base: '/Portfolio/',
    plugins: [react()]
})
