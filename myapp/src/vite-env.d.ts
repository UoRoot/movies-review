/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMBD_API_URL: string;
  readonly VITE_TMBD_API_KEY: string;
  readonly VITE_HEADER_AUTHENTICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
