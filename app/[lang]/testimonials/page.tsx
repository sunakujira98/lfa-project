import { Metadata } from 'next'

import { TestimonialSection } from '@/section/TestimonialSection'

export const metadata: Metadata = {
  title: 'Happy Client Testimonials | Office & Commercial Design Services',
  description: 'Hear from our clients on why LFA Studio is the top choice for office and commercial interior design in Singapore and the region. Click to read their stories!',
}

export default async function ServicesPage() {
  return (
    <div className='max-w-screen-xl mx-auto px-4 lg:px-0'>
      <TestimonialSection />
    </div>
  )
}
