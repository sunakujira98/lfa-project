import {
  AboutUs,
  Awards,
  BigTestimonial,
  Clients,
  FeaturedProject,
  Hero,
  Recognition,
  Service,
  SideBySideNews,
} from './components'

export default function HomeSection() {
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
