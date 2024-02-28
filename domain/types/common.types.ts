export type SectionName =
  | 'home'
  | 'about'
  | 'roadmap'
  | 'utilities'
  | 'faq'
  | 'galleries'

export type AvailableComponents =
  | 'images.full-image'
  | 'images.side-by-side-image'
  | 'text.1-line-1-font-text'

export type StrapiSingleResponse<T> = {
  data: T
  meta: object
}

export type StrapiResponse<T> = {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type StrapiImageDetails = {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  url: string
}

export type StrapiImageAttributes = {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: string
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
}
