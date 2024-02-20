import { Clients } from '@/components/shared/Clients'
import { FeaturedProduct } from '@/components/shared/FeaturedProduct'
import { Header } from '@/components/shared/Header'
import { Hero } from '@/components/shared/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProduct />
      <Clients />
    </div>
  )
}
