import AboutHero from '../components/about/AboutHero'
import BrandStory from '../components/about/BrandStory'
import Heritage from '../components/about/Heritage'
import DesignerProfile from '../components/about/DesignerProfile'
import ValuesSection from '../components/about/ValuesSection'
import TeamGrid from '../components/about/TeamGrid'
import HighlightSection from '../components/about/HighlightSection'

export default function About() {
  return (
    <main className="page about-page">
      <AboutHero />
      <BrandStory />
      <Heritage />
      <DesignerProfile />
      <ValuesSection />
      <TeamGrid />
      <HighlightSection />
    </main>
  )
}
