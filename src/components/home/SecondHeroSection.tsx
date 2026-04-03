import hero2 from "../../assets/images/hero2.jpg"
import nanama3 from "../../assets/images/nanama3.jpg"
import nanama2 from "../../assets/images/nanama2.jpg"
import nanama from "../../assets/images/nanama.jpg"

export default function SecondHeroSection() {
  return (
    <section>
      {/* Triple Image Background Layer with Top-Aligned Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Triptych Parallax container */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-stretch">
          {/* Panel 1 */}
          <div 
            className="hidden md:block flex-1 h-full bg-fixed bg-cover bg-top border-r-[0.1px] border-white/5"
            style={{ backgroundImage: `url(${hero2})` }}
          />
          {/* Panel 2 (Center / Mobile Focus) */}
          <div 
            className="flex-1 h-full bg-fixed bg-cover bg-top"
            style={{ backgroundImage: `url(${nanama3})` }}
          />
          {/* Panel 3 */}
          <div 
            className="hidden md:block flex-1 h-full bg-fixed bg-cover bg-top border-l-[0.1px] border-white/5"
            style={{ backgroundImage: `url(${nanama2})` }}
          />
        </div>

        {/* Global Dark Overlay and Blur */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] z-10 pointer-events-none"></div>
        
        {/* Floating Content Card */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white p-12 lg:p-0 backdrop-blur-sm boder border-white/20 max-w-4xl mx-auto mx-4 opacity-0 animate-fade-in [animation-delay:400ms] pointer-events-auto">
            <h2 className="text-3xl md:text-7xl font-serif tracking-tight leading-tight uppercase">
              Lauren <span className="italic font-light">Haute Couture</span>
            </h2>
            <div className="w-24 h-[3px] bg-white/50 mx-auto"></div>
            <p className="tracking-[0.5em] uppercase text-[10px] sm:text-xs font-semibold text-white/80">
              Elegant • Timeless • Luxury
            </p>
          </div>
        </div>
      </div>

      {/* Elegant Intro Text Section */}
   
    </section>
  )
}
