import PressHero from '../components/press/PressHero'
import Magazine from '../components/press/Magazine'
import HealthNews from '../components/press/HealthNews'
import Sleek from '../components/press/Sleek'

export default function Press() {
  return (
    <main className="page press-page">
      <PressHero />
      <HealthNews />
      <Sleek />
      <Magazine />
    </main>
  )
}
