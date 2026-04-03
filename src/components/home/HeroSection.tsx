import heroVideo from '../../assets/video/hero-video.mp4'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
        >
          <source 
            src={heroVideo}
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight select-none">
          <span className="block" data-aos="fade-up" data-aos-delay="200">Timeless</span>
          <span className="block italic" data-aos="fade-up" data-aos-delay="600">Elegance</span>
        </h1>
        
        <p className="text-neutral-200 text-sm md:text-lg max-w-2xl mb-12 tracking-[0.3em] uppercase font-light leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
          Redefining luxury through the art of exceptional craftsmanship and sustainable green-led design.
        </p>
        
        <div data-aos="fade-up" data-aos-delay="1400">
          <button className="px-14 py-5 border border-white/50 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-primary-green hover:border-white transition-all duration-700 backdrop-blur-[2px]">
            The Atelier
          </button>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6" data-aos="fade-up" data-aos-delay="2000" data-aos-anchor-placement="top-bottom">
        <span className="text-[10px] text-white/60 uppercase tracking-[0.5em] font-medium vertical-rl rotate-180">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scrollIndicator_2s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}
