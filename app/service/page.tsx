import type { Metadata } from 'next'

import { ServiceSection } from '@/section/ServiceSection'

export const metadata: Metadata = {
  title: 'Expert Office Interior Design Services - LFA Studio',
  description: "Explore LFA Studio's expert services in office and commercial interior design in Singapore. Create dynamic, engaging workplaces. Click to see our solutions today.",
}

export default async function ServicesPage() {
  return (
    <div className='max-w-screen-xl mx-auto px-4 lg:px-0'>
      <ServiceSection />
    </div>
  )
}
