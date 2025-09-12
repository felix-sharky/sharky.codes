// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.HOST,
    integrations: [sitemap(), svelte()],

    experimental: {

    },

    vite: {
        resolve: {
            alias: {
                '@icons': path.resolve(process.cwd(), 'src/icons')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    }
});
