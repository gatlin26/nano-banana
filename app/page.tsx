import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import { Generator } from '@/components/generator'
import ShowcaseSection from '@/components/showcase-section'
import HowItWorksSection from '@/components/how-it-works-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="generator">
        <Generator />
      </section>
      <ShowcaseSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  )
}