import { AboutUs } from '@/components/shared/AboutUs'
import { Awards } from '@/components/shared/Awards'
import { BigTestimonial } from '@/components/shared/BigTestimonial'
import { Clients } from '@/components/shared/Clients'
import { FeaturedProduct } from '@/components/shared/FeaturedProduct'
import { Hero } from '@/components/shared/Hero'
import { News } from '@/components/shared/News/News'
import { Recognition } from '@/components/shared/Recognition'
import { Service } from '@/components/shared/Service'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <Clients />
      <AboutUs />
      <Service />
      <BigTestimonial />
      <Awards />
      <News />
      <Recognition />
    </div>
  )
}
