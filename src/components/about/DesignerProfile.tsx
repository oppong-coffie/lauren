import laurentImg from '../../assets/images/about/about2.jpg'
import { Palette, Feather, Award } from 'lucide-react'

export default function DesignerProfile() {
  return (
    <section className="relative py-32 overflow-hidden bg-neutral-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/20 blur-[150px] animate-pulse-glow -z-[1]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-[45%]" data-aos="fade-up">
            <div className="relative group transition-all duration-1000 shadow-2xl rounded-sm overflow-hidden">
              <img 
                src={laurentImg} 
                alt="Laurent Beaumont" 
                className="w-full h-auto scale-100 group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 glass-premium backdrop-blur-[20px] bg-black/40 border-t border-white/10">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-12 h-[1px] bg-white/50"></div>
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">The Creative Soul 👩‍🎨</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[55%] text-white" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-[0.05em]">
              Meet Lauren <span className="italic font-light text-glow">Hanson</span>
            </h2>
            <p className="text-secondary-green uppercase font-black tracking-[0.8em] text-[10px] md:text-sm mb-12 flex items-center gap-3">
               Founder & Creative Director <Award size={18} />
            </p>
            
            <div className="space-y-5 text-neutral-300 text-lg md:text-xl font-light font-serif leading-relaxed">
              <p>
                Lauren's design philosophy is rooted in the belief that fashion should 
                celebrate individuality while maintaining timeless elegance. With a background 
                in fine arts and textile design, she brings an artistic vision to every collection. 🎨
              </p>
              <p>
                Her work has been featured in international fashion publications and she has 
                received numerous accolades for her innovative approach to luxury fashion. 💎
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               <div className="flex items-start gap-4 p-6 glass-premium rounded-sm hover:border-primary-green transition-all duration-500">
                  <Palette className="text-primary-green shrink-0" size={24} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Artistic Vision</h4>
                    <p className="text-[10px] text-neutral-400 font-serif leading-relaxed italic">"Every garment is a canvas, every stitch a brushstroke." 🕊️</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-6 glass-premium rounded-sm hover:border-primary-green transition-all duration-500">
                  <Feather className="text-primary-green shrink-0" size={24} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Quiet Minimalism</h4>
                    <p className="text-[10px] text-neutral-400 font-serif leading-relaxed italic">"Luxury is found in the subtlety of the unseen details." ✨</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
