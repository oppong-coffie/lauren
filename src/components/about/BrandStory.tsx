import about1 from '../../assets/images/about/about1.jpg'
import { Sparkles } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="relative py-24 overflow-hidden bg-white bg-mesh">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-green/5 rounded-2xl animate-pulse-glow -z-10"></div>
              <img 
                src={about1} 
                alt="Lauren Haute Couture Atelier" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute bottom-6 left-6 glass-premium px-6 py-4 rounded-sm border-l-4 border-primary-green">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-green">Maison Heritage 🏛️</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-primary-green animate-pulse" size={20} />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-green/60">Our Legacy</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-primary-green mb-10 leading-[1.1] tracking-tighter">
              A Symphony of <br />
              <span className="italic font-light text-glow">Elegance & Art</span> ✨
            </h2>

            <div className="space-y-8 text-neutral-600 text-lg leading-relaxed font-light font-serif">
              <p>
                Lauren Haute Couture was founded in 2004 by visionary designer <span className="text-neutral-900 font-medium">Laurent Beaumont</span>, 
                who believed that luxury fashion should be a visceral encounter with beauty. What started 
                as a small, sun-drenched atelier in Paris has blossomed into a global beacon 
                of artisanal excellence. 💎
              </p>
              <p>
                Every piece is a testament to our sacred commitment to quality. We collaborate with 
                world-class master craftspeople, sourcing only the most ethereal materials to create 
                garments that live beyond the boundaries of season and trend. 🕊️
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-primary-green/5 rounded-full border border-primary-green/10">
                <span className="text-xl">🏆</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-green">20+ Years of Mastery</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-primary-green/5 rounded-full border border-primary-green/10">
                <span className="text-xl">🌍</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-green">International Presence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
