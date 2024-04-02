export type PaginationParams = {
  limit: number
}

export type SortParams = {
  [index: number]: {
    [key: string]: 'asc' | 'desc'
  }
}

export type TQueryParams = {
  pagination?: PaginationParams
  sort?: SortParams
}

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
  | 'images.sustainable-materials'
  | 'text.1-line-1-font-text'
  | 'text.paragraph'
  | 'testimonial.testimonial-block'

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
      start: number
      limit: number
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

export type TCommonStrapiAttributes = {
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TCommonStrapiAttributes
    }[]
  }
}

export type TCommonStrapiData = {
  id: number
  attributes: TCommonStrapiAttributes
}
