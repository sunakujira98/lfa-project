import { AboutUs } from '@/components/shared/AboutUs'
import { Awards } from '@/components/shared/Awards'
import { Clients } from '@/components/shared/Clients'
import { FeaturedProduct } from '@/components/shared/FeaturedProduct'
import { Hero } from '@/components/shared/Hero'
import { News } from '@/components/shared/News/News'
import { Recognition } from '@/components/shared/Recognition'
import { Service } from '@/components/shared/Service'
import { TestimonialSection } from '@/section/TestimonialSection/TestimonialSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <Clients />
      <AboutUs />
      <Service />
      <TestimonialSection />
      <Awards />
      <News />
      <Recognition />
    </div>
  )
}
