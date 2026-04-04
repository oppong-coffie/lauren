import hero3 from "../../assets/images/hero3.jpg"
export default function ThirdHeroSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          {/* Image Section - Left (md:55%) */}
          <div className="lg:w-[55%] relative group overflow-hidden" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[500px]">
              <img 
                src={ hero3} 
                alt="Couture Craftsmanship" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>
          
          </div>
          
          {/* Text Section - Right (md:45%) */}
          <div className="lg:w-[45%] flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-12 block" data-aos="fade-up" data-aos-delay="400">Exclusive Craft</span>
            
            <h2 className="text-4xl md:text-4xl font-serif text-primary-green mb-1 leading-[1.1] tracking-tight" data-aos="fade-up" data-aos-delay="600">
              The Art of <span className="italic font-light">Architectural</span> <br /> Couture
            </h2>
            
            <div className="w-16 h-[1.5px] bg-primary-green mb-6" data-aos="fade-in" data-aos-delay="800"></div>
            
            <div className="space-y-8 text-neutral-500 font-light leading-relaxed max-w-xl" data-aos="fade-up" data-aos-delay="1000">
              <p className="text-lg font-serif italic text-neutral-600">
                "We don't just design garments; we architect experiences of fabric and light."
              </p>
              <p className="text-base tracking-wide">
                Every stitch tells a story of dedication, precision, and a relentless pursuit of perfection.             </p>
            </div>
            
            <div className="mt-16" data-aos="fade-up" data-aos-delay="1200">
              <button className="relative px-12 py-5 bg-primary-green text-white text-[10px] uppercase tracking-[0.4em] font-bold group overflow-hidden transition-all duration-500 hover:bg-secondary-green">
                <span className="relative z-10">Discover the Atelier</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Subtle Stat Detail */}
            <div className="mt-20 flex items-center gap-10 border-t border-neutral-100 pt-10" data-aos="fade-up" data-aos-delay="1400">
                <div>
                    <h4 className="text-2xl font-serif text-primary-green">400+</h4>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Hand-Hours / Piece</p>
                </div>
                <div>
                    <h4 className="text-2xl font-serif text-primary-green">100%</h4>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Silk Reinforcement</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
