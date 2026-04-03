import heroBg from '../../assets/images/contact/hero.png'
import { Sparkles } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-neutral-900 border-b border-primary-green/20">
      {/* Background Image with Cinematic Look */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-10000 ease-linear"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          animation: 'slowZoom 40s infinite alternate'
        }}
      ></div>
      
      {/* Editorial Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-neutral-900/90 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 bg-mesh opacity-20"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-white">
        <div data-aos="fade-down" data-aos-delay="200" className="flex items-center justify-center gap-3 mb-8">
           <Sparkles className="text-primary-green animate-pulse" size={18} />
           <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.8em] text-white/50">L'Atelier Contact</span>
        </div>
        
        <h1 
          className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-[0.05em] drop-shadow-2xl"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Get In <span className="italic font-light text-glow">Touch</span> ✨
        </h1>
        
        <p 
          className="text-sm md:text-xl font-light italic font-serif text-white/70 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Whether for an editorial inquiry or to visit our Accra showroom, <br className="hidden md:block" /> 
           💎🕊️
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}} />
    </section>
  )
}
