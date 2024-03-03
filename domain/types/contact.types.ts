export type ContactAttribute = {
  displayName: string
  title: string
  subtitle: string
  createdAt: string // date
  updatedAt: string // date
  publishedAt: string // date
}

export type Contact = {
  data: {
    id: number
    attributes: ContactAttribute
  }
}
