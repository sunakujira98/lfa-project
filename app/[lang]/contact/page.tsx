import { Metadata } from 'next'

import { ContactSection } from '@/section/ContactSection'


export const metadata: Metadata = {
  title: 'Contact LFA | Office Interior | Commercial Design and Build',
  description: 'Start your office or commercial interior design project with LFA Studio. Contact us for expert advice and solutions. Partner with us at enquiry@lfa.com.sg.',
}

export default async function ContactPage() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <ContactSection />
    </div>
  )
}
