/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Next.js does not use import.meta.env or VITE_ variables. Remove these declarations.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
