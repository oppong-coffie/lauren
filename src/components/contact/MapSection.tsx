import storefrontImg from '../../assets/images/contact/storefront.png'
import { MapPin, ArrowRight } from 'lucide-react'

export default function MapSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden bg-mesh">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2" data-aos="fade-right">
             <div className="relative group grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm overflow-hidden border border-primary-green/10">
                <img 
                  src={storefrontImg} 
                  alt="Lauren Haute Couture Storefront" 
                  className="w-full h-[600px] object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                <div className="absolute bottom-10 left-10 glass-premium px-8 py-6 rounded-sm border-l-4 border-primary-green">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-green flex items-center gap-3">
                     <MapPin size={14} /> Visit The Maison 🏛️
                   </p>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
             <div className="mb-12">
                <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-green/60 mb-6 block">Our Location</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary-green mb-8 leading-tight tracking-[0.05em]">
                  Parisian <br />
                  <span className="italic font-light text-glow">Elegance</span> 🕊️✨
                </h2>
                <div className="w-20 h-[1px] bg-primary-green/30 mb-10"></div>
                
                <div className="space-y-8 text-neutral-600 text-lg leading-relaxed font-light font-serif italic">
                  <p>
                    Nestled in the heart of Paris, our flagship showroom resides on a street where fashion history is narrated through 
                    every stone and window. 🖋️
                  </p>
                  <p>
                    We invite you to experience our world of bespoke tailoring and modern couture first-hand. 💎
                  </p>
                </div>

                <div className="mt-16 flex flex-col md:flex-row gap-8">
                   <button className="flex items-center gap-4 bg-primary-green text-white px-10 py-5 rounded-sm text-[10px] font-black uppercase tracking-[0.6em] hover:bg-neutral-900 transition-all duration-500 shadow-2xl">
                     Get Directions <ArrowRight size={14} />
                   </button>
                   <button className="flex items-center gap-4 text-primary-green px-10 py-5 rounded-sm text-[10px] font-black uppercase tracking-[0.6em] border border-primary-green/20 hover:border-primary-green hover:bg-primary-green/5 transition-all duration-500">
                     Virtual Tour 🏛️
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
