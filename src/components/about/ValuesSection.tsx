import { ShieldCheck, Heart, Zap, Infinity } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    { title: 'Quality 💎', desc: 'Craftsmanship without compromise.', icon: <ShieldCheck size={32} /> },
    { title: 'Innovation ✨', desc: 'Sustaining luxury for the future.', icon: <Zap size={32} /> },
    { title: 'Individuality 🕊️', desc: 'Celebrating every unique silhouette.', icon: <Heart size={32} /> },
    { title: 'Timelessness 🕰️', desc: 'Elegance that transcends generations.', icon: <Infinity size={32} /> },
  ]

  return (
    <section className="relative py-32 bg-mesh overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-24" data-aos="fade-up">
           <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-green/80 mb-6 block">Our Core Pillars</span>
           <h2 className="text-4xl md:text-6xl font-serif text-primary-green tracking-tight leading-tight">
             Guided by <span className="italic font-light text-glow">Purpose & Integrity</span> ⚖️
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="group glass-premium p-12 rounded-sm border hover:border-primary-green/30 transition-all duration-700 glow-primary hover:glow-primary-strong"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 rounded-full bg-primary-green/5 flex items-center justify-center text-primary-green mb-8 group-hover:bg-primary-green group-hover:text-white transition-all duration-700">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif text-primary-green mb-4 uppercase tracking-widest">{value.title}</h3>
              <p className="text-sm font-light text-neutral-500 font-serif leading-relaxed italic">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
