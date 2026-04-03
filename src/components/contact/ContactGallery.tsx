import ambienceImg from '../../assets/images/contact/ambience.png'
import craftImg from '../../assets/images/about/craft.png'
import atelierImg from '../../assets/images/about/atelier.png'
import storefrontImg from '../../assets/images/contact/storefront.png'

export default function ContactGallery() {
  const images = [
    { src: ambienceImg, label: 'L\'Atelier Detail ✒️', span: 'col-span-1 row-span-1' },
    { src: craftImg, label: 'Mastering The Seams ✂️', span: 'col-span-1 row-span-1' },
    { src: storefrontImg, label: 'Parisian Storefront 🏛️', span: 'col-span-2 row-span-2' },
    { src: atelierImg, label: 'Maison Heritage 🕊️', span: 'col-span-1 row-span-1' },
  ]

  return (
    <section className="relative py-32 bg-neutral-900 overflow-hidden">
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-green/5 blur-[120px] animate-pulse-glow -z-[1]"></div>
       
       <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
         <div className="text-center mb-24" data-aos="fade-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white/30 mb-6 block">Atmosphere & Spirit</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-tight italic font-light drop-shadow-sm">
              Discover The <span className="text-glow font-medium normal-case">Narrative Interior</span> 💎🖋️
            </h2>
         </div>

         {/* Bento Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
            {images.map((image, idx) => (
               <div 
                 key={idx} 
                 className={`relative group overflow-hidden rounded-sm glass-premium border border-white/5 glow-primary transition-all duration-700 ${image.span}`}
                 data-aos="zoom-in"
                 data-aos-delay={idx * 150}
               >
                  <img 
                    src={image.src} 
                    alt={image.label} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                     <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20">
                       {image.label}
                     </p>
                  </div>
               </div>
            ))}
         </div>
       </div>
    </section>
  )
}
