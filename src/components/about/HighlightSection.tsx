import { Trophy, Star, Crown } from 'lucide-react'

export default function HighlightSection() {
  const highlights = [
    { 
      title: 'International Fashion Award 2024 🏆', 
      desc: 'Best Luxury Couture Collection',
      icon: <Trophy size={40} />
    },
    { 
      title: 'Designer of the Year 2023 ✨', 
      desc: 'Fashion Council International',
      icon: <Star size={40} />
    },
    { 
      title: 'Sustainable Fashion Leader 2022 🌿', 
      desc: 'Global Fashion Recognition',
      icon: <Crown size={40} />
    },
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden bg-mesh">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-24" data-aos="fade-up">
           <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary-green/60 mb-6 block">Recognized Excellence</span>
           <h2 className="text-5xl md:text-7xl font-serif text-primary-green tracking-tight leading-tight italic font-light drop-shadow-sm">
             A Legacy of <span className="text-glow font-medium normal-case">Mastery & Innovation</span> 🖋️
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {highlights.map((highlight, idx) => (
            <div 
              key={idx} 
              className="group glass-premium p-16 rounded-sm border hover:border-primary-green/40 transition-all duration-700 glow-primary hover:glow-primary-strong text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="flex justify-center mb-10 text-primary-green/20 group-hover:text-primary-green group-hover:scale-110 transition-all duration-700 delay-100">
                {highlight.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-primary-green mb-6 leading-relaxed tracking-widest">{highlight.title}</h3>
              
              <div className="w-12 h-[1px] bg-primary-green/20 mx-auto mb-8 group-hover:w-24 transition-all duration-700"></div>
              
              <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-400 group-hover:text-primary-green transition-colors duration-700">
                {highlight.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Global CTA Placeholder */}
        <div className="mt-32 text-center" data-aos="zoom-in">
           <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary-green/20 via-primary-green/50 to-primary-green/20 animate-pulse-glow">
              <button className="px-12 py-5 bg-primary-green text-white rounded-full text-xs font-black uppercase tracking-[0.6em] hover:bg-neutral-900 transition-colors duration-500 shadow-2xl">
                 Experience The Maison 💎
              </button>
           </div>
        </div>
      </div>
    </section>
  )
}
