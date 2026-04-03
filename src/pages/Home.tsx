import HeroSection from '../components/home/HeroSection'
import SecondHeroSection from '../components/home/SecondHeroSection'
import ThirdHeroSection from '../components/home/ThirdHeroSection'
import FeaturedCollections from '../components/home/FeaturedCollections'
import Offer from '../components/home/Offer'
import Why from '../components/home/Why'
import Recognition from '../components/home/Recognition'
import LaurenWomen from '../components/home/LaurenWomen'
import BrandIntro from '../components/home/BrandIntro'
import NewsletterSignup from '../components/home/NewsletterSignup'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SecondHeroSection />
      <ThirdHeroSection />
      <FeaturedCollections />
      <Offer />
      <Why />
      <Recognition />
      <LaurenWomen />
      <BrandIntro />
      {/* <TestimonialCarousel /> */}
      <NewsletterSignup />
    </div>
  )
}
