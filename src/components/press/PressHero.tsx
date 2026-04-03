import heroBg from '../../assets/images/news.jpg'

export default function PressHero() {
  return (
    <section className="relative w-full h-[30vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Parallax & Optimization */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-10000 ease-linear"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          animation: 'kenburns 40s infinite'
        }}
      ></div>
      
      {/* Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-50/10 backdrop-blur-[2px]"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <div data-aos="fade-up" data-aos-delay="200">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-white/70 mb-6 drop-shadow-sm">
            Official
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-tight drop-shadow-xl"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          News
        </h1>
        
        <div 
          className="w-20 h-[2px] bg-white mx-auto mb-10 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>
        
        <p 
          className="text-sm md:text-lg font-light italic font-serif text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          "Editorial highlights and global features from the world of <br className="hidden md:block" /> 
          Lauren Haute Couture"
        </p>
      </div>

      {/* Styled Transition Bottom Edge (helps blend into newspaper components) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.1) translate(0%, 0%); }
          50% { transform: scale(1.2) translate(-2%, -2%); }
          100% { transform: scale(1.1) translate(0%, 0%); }
        }
      `}} />
    </section>
  )
}
