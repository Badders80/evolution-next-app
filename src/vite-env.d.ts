/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FUTUREVERSE_CLIENT_ID: string;
  readonly VITE_FUTUREVERSE_ENVIRONMENT: 'staging' | 'production';
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_POST_LOGOUT_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
