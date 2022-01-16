interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_DEV_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
