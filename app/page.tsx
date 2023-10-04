export const metadata = {
  title: 'Home - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import Stats from '@/components/stats'
import Carousel from '@/components/carousel'
import Tabs from '@/components/tabs'
import Process from '@/components/process'
import WhatsAppContactForm from '@/components/whatsapp-contact-form'
import TestimonialsBlocks from '@/components/testimonials-blocks'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <Hero />
      <Stats />
      <Carousel />
      {/* <Tabs /> */}
      {/* <Process /> */}
      <WhatsAppContactForm />
      {/* <TestimonialsBlocks /> */}
      {/* <FeaturesBlocks /> */}
      {/* <Cta /> */}
    </>
  )
}
