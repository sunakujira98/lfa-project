import { Metadata } from 'next'

import { FaqSection } from './components'

export const metadata: Metadata = {
  title: 'LFA Singapore: Explore Our Interior Design Services | FAQ',
  description: 'Discover how LFA Studio shapes stunning, efficient workspaces with our FAQ. Learn about our services and start your design journey with us today!',
}

export default async function FaqPage() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <FaqSection />
    </div>
  )
}
