declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_STRAPI_TOKEN: string
    readonly NEXT_PUBLIC_CMS_HOST: string
  }
}
