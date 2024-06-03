import { Metadata } from 'next'

import { NewsSection } from '@/section/NewsSection'

export const metadata: Metadata = {
  title: 'Office Design Trends and News - LFA Studio',
  description: 'Explore latest  trends t in office and commercial design. See how innovation reshapes commercial spaces in Singapore and around  the region. Click for updates!',
}

export default async function ServicesPage() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <NewsSection />
    </div>
  )
}
