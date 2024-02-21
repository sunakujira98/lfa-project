import { AboutUs } from '@/components/shared/AboutUs'
import { Awards } from '@/components/shared/Awards'
import { Clients } from '@/components/shared/Clients'
import { FeaturedProduct } from '@/components/shared/FeaturedProduct'
import { Header } from '@/components/shared/Header'
import { Hero } from '@/components/shared/Hero'
import { News } from '@/components/shared/News/News'
import { Recognition } from '@/components/shared/Recognition'
import { Service } from '@/components/shared/Service'
import { Testimonial } from '@/components/shared/Testimonial'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProduct />
      <Clients />
      <AboutUs />
      <Service />
      <Testimonial />
      <Awards />
      <News />
      <Recognition />
    </div>
  )
}
