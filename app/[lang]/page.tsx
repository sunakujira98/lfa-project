import { Metadata } from 'next'

import HomeSection from '@/section/Home/HomeSection'

export const metadata: Metadata = {
  title: 'Office Interior Design That Works - LFA Singapore',
  description: 'Transform your workspace with LFA Studio’s unique office and commercial design. Expert team in Singapore for design and build. Explore our portfolio!',
}

export default function Home() {
  return (
    <div>
      <HomeSection />
    </div>
  )
}
