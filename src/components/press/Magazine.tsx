import designerImg from '../../assets/images/press/lauren.jpg'
import logoImg from '../../assets/images/press/logo.png'
import { Globe, Phone, Star } from 'lucide-react'

export default function Magazine() {
  return (
    <section className="bg-neutral-50 py-16 px-4 md:px-8 font-serif text-[#333]">
      {/* Newspaper Container */}
      <div className="max-w-[850px] mx-auto bg-white border border-neutral-200 shadow-2xl p-8 md:p-12">
        
        {/* Header Section */}
        <header className="border-b-2 border-black pb-4 mb-8">
          <div className="flex justify-between items-end mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20">
              <img src={logoImg} alt="Africa Sleek Foundation Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-1 font-serif text-black">
                Africa Sleek Foundation
              </h1>
              <p className="text-sm md:text-base font-bold italic border-t border-b border-black py-1 tracking-[0.3em] uppercase">
                ⬦ Empowerment Newsletter ⬦
              </p>
            </div>
            <div className="hidden md:block w-20"></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-600">
            <span>Vol. 2, No. 2</span>
            <span>April 2026</span>
          </div>
        </header>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 gap-12">
          
          {/* Main Hero: Lauren Hanson */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <Star size={16} className="text-white" />
                  Lauren Hanson: The Visionary
                </div>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed text-justify">
                <p>
                  For Lauren Hanson, Founder of Lauren Haute Couture, fashion is an art of identity and quiet power. 
                  Her designs transcend clothing, becoming a language of elegance that empowers without overwhelming the wearer.
                </p>
                <p>
                  Inspired from an early age and shaped by the timeless grace of Audrey Hepburn, Lauren's aesthetic reflects 
                  sophistication, individuality, and restraint. Her creations embody a refined balance of confidence and femininity, 
                  crafted for the modern woman who commands presence with subtlety.
                </p>
                <p>
                  Rooted in purpose and guided by faith, Lauren continues to build a brand that celebrates 
                  empowerment through style. With gratitude for her journey, she remains poised for even greater heights ahead.
                </p>
              </div>

              {/* Quote Section */}
              <div className="bg-neutral-50 px-6 py-6 border-l-4 border-neutral-800 my-8">
                <p className="text-xs italic text-neutral-600 font-serif leading-relaxed">
                  "Let your individuality define you, not expectations. Stay disciplined in your craft and move with intention. 
                  True elegance is quiet, yet powerful. When you are grounded in who you are, your confidence becomes unmistakable."
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative group">
                <img 
                  src={designerImg} 
                  alt="Lauren Hanson" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md" 
                />
                <div className="mt-4 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-800">Lauren Hanson</p>
                  <p className="text-[10px] italic text-neutral-400 mt-1">Founder, Lauren Haute Couture</p>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-neutral-100 pt-12">
            
            {/* Block 1 */}
            <div className="border-t-2 border-neutral-800 pt-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-neutral-800">Business and Finance</h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                The importance of financial planning for financial independence. 
                <span className="font-bold block mt-2 text-neutral-900">Amaki Sogbodjor champions adopting the 50/30/20 rule.</span>
              </p>
            </div>

            {/* Block 2 */}
            <div className="border-t-2 border-neutral-800 pt-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-neutral-800">Health and Wellness</h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                Featuring <span className="font-bold text-neutral-900">Dr. Vanessa Stirzaker</span>, founder of Mamichie Healthcare. 
                Creator of the 3R Method™: Reset, Rebalance & Reclaim.
              </p>
            </div>

            {/* Block 3 */}
            <div className="border-t-2 border-neutral-800 pt-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-neutral-800">Style and Substance</h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                <span className="font-bold text-neutral-900">Elorm Sika Amankwa</span> writes about being multifaceted. 
                Embracing creativity and authenticity without limits.
              </p>
            </div>

            {/* Block 4 */}
            <div className="border-t-2 border-neutral-800 pt-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-neutral-800">Women in Science (STEM)</h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                <span className="font-bold text-neutral-900">Pendor Gedor</span> drives innovation in the oil industry 
                and champions women’s advancement in STEM.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Section */}
        <footer className="mt-16 border-t-2 border-black pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase font-bold tracking-tight">
              {/* <Instagram size={14} className="text-neutral-800" /> */}
              <span>Africa Sleek Foundation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-tight">
              <Globe size={14} className="text-neutral-800" />
              <span>www.africasleekfoundation.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 text-[10px] uppercase font-bold tracking-tight">
              <Phone size={14} className="text-neutral-800" />
              <span>+233 256 111 562</span>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400">
              Co-Founder : Natasha Bannerman-Kudjawu
            </p>
          </div>
        </footer>

      </div>
    </section>
  )
}
