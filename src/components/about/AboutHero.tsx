import atelierBg from '../../assets/images/about/atelier.png'
import { ChevronDown } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-900 border-b border-primary-green/20">
      {/* Background Image with Cinematic Zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${atelierBg})`,
          animation: 'kenburns 30s infinite alternate'
        }}
      ></div>
      
      {/* Editorial Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-neutral-900/90 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-mesh opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-white">
        <div data-aos="fade-down" data-aos-delay="200" className="mb-8">
           <span className="inline-block px-8 py-3 rounded-full border border-white/20 text-[10px] md:text-sm font-black uppercase tracking-[0.8em] text-white/50 bg-white/5 backdrop-blur-md">
             The Maison Distinction 🏛️
           </span>
        </div>
        
        <h1 
          className="text-6xl md:text-9xl font-serif mb-10 leading-tight tracking-[0.05em] drop-shadow-2xl"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Beyond <br />
          <span className="italic font-light text-glow">The Seams</span> ✨
        </h1>
        
        <p 
          className="text-sm md:text-xl font-light italic font-serif text-white/70 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          The narrative of craftsmanship of Lauren Haute Couture. 💎🕊️
        </p>

        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
           <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white/30">Scroll to Explore</span>
           <ChevronDown size={20} className="text-white/40" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          from { transform: scale(1.1) translate(0%, 0%); }
          to { transform: scale(1.2) translate(-2%, -2%); }
        }
      `}} />
    </section>
  )
}
