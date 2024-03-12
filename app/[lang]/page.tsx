import { AboutUs } from '@/components/shared/AboutUs'
import { Awards } from '@/components/shared/Awards'
import { BigTestimonial } from '@/components/shared/BigTestimonial'
import { Clients } from '@/components/shared/Clients'
import { FeaturedProject } from '@/components/shared/FeaturedProject'
import { Hero } from '@/components/shared/Hero'
import { Recognition } from '@/components/shared/Recognition'
import { Service } from '@/components/shared/Service'
import { SideBySideNews } from '@/components/shared/SideBySideNews/SideBySideNews'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProject />
      <Clients />
      <AboutUs />
      <Service />
      <BigTestimonial />
      <Awards />
      <SideBySideNews />
      <Recognition />
    </div>
  )
}