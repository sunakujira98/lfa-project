import { Metadata } from 'next'

import { AboutUsSection } from '@/section/AboutUsSection'

export const metadata: Metadata = {
  title: 'Meet LFA: Leaders in Office and Commercial Interior Design',
  description: 'Discover why LFA is the top choice for office and commercial interior design in Singapore and across the region. Learn about our expert team and services. Click for more!',
}

export default async function AboutPage() {
  return (
    <div>
      <AboutUsSection />
    </div>
  )
}
