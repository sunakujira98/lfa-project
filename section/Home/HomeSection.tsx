import {
  AboutUs,
  Awards,
  BigTestimonial,
  Clients,
  FeaturedProject,
  Hero,
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
      <BigTestimonial hideLogo={false} />
      <Awards />
      <SideBySideNews />
      {/* <Recognition /> */}
    </div>
  )
}
