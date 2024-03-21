export interface IBasicContactEnquiry {
  companyName?: string
  contact: string
  email: string
  message: string
  name: string
  enquiryType: string
}

export interface IContactEnquiryAttribute extends IBasicContactEnquiry {
  createdAt: string // date
  updatedAt: string // date
  publishedAt: string // date
}

export type TContactEnquiry = {
  data: {
    id: number
    attributes: IContactEnquiryAttribute
  }
}
