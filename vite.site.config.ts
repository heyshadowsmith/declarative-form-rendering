import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
    typeof __dirname !== "undefined"
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        outDir: "dist-docs",
        rollupOptions: {
            input: {
                main: path.resolve(dirname, "index.html"),
            },
        },
    },
});
