import {
  AvailableComponents,
  SortParams,
  StrapiImageAttributes,
} from './common.types'
import { Award } from './award.types'
import { Industry } from './industry.types'
import { TService } from './services.types'
import { Region } from './region.types'

export type TProjectFilter = {
  industryId?: string
  serviceId?: string
  regionId?: string
  hasVideo?: string
  isAwardWinning?: string
  limit?: number
  start?: number
  sort?: SortParams
}

export type ProjectDetail = {
  id: number
  title: string
  description: string
  __component: AvailableComponents
}

export type ProjectAttribute = {
  title: string
  description: string
  createdAt: string // date
  updatedAt: string // date
  publishedAt: string // date
  isFeatured: boolean
  location: string
  completionDate: string // date
  comingSoon: boolean
  thumbnail: {
    data: {
      attributes: StrapiImageAttributes
    }
  }
  image: {
    data: {
      attributes: StrapiImageAttributes
    }[]
  }
  industry: {
    data: Industry
  }
  region: {
    data: Region
  }
  service: {
    data: TService
  }
  detail: ProjectDetail[]
  awards: {
    data: Award[]
  }
  locale: string
  localizations: {
    data: {
      id: number
      attributes: ProjectAttribute
    }[]
  }
}

export type Project = {
  id: number
  localeId?: number
  attributes: ProjectAttribute
}
