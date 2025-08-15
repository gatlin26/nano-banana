import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import { Generator } from '@/components/generator'
import ShowcaseSection from '@/components/showcase-section'
import HowItWorksSection from '@/components/how-it-works-section'
import UserReviews from '@/components/user-reviews'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header>
        <Navigation />
      </header>
      <main>
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>
        <section id="generator" aria-label="AI Image Generator Tool">
          <Generator />
        </section>
        <section id="showcase" aria-label="Image Examples Gallery">
          <ShowcaseSection />
        </section>
        <section id="how-it-works" aria-label="How Nano Banana Works">
          <HowItWorksSection />
        </section>
        <section id="reviews" aria-label="User Reviews and Testimonials">
          <UserReviews />
        </section>
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}