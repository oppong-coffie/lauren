import { Milestone } from 'lucide-react'

export default function Heritage() {
  const milestones = [
    { year: '2004', event: 'Founded in Paris 🏛️', desc: 'The first atelier opens its doors.' },
    { year: '2008', event: 'First Flagship Store 🛍️', desc: 'A landmark expansion in fashion centers.' },
    { year: '2012', event: 'Expanding to 15 Countries 🌍', desc: 'Bringing luxury on a global scale.' },
    { year: '2018', event: 'Sustainable Collection 🌿', desc: 'Purity and purpose in every thread.' },
    { year: '2022', event: 'Fashion Excellence Award 🏆', desc: 'Recognized for top-tier craftsmanship.' },
    { year: '2026', event: 'Global Luxury Leader ✨', desc: 'Defining the future of high-fashion.' },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden bg-mesh">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-20" data-aos="fade-up">
           <div className="flex items-center justify-center gap-3 mb-6">
              <Milestone className="text-primary-green animate-pulse" size={24} />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-primary-green/60 px-4 py-2 border border-primary-green/20 rounded-full">Our Timeline</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-serif text-primary-green mb-10 leading-tight tracking-[0.05em]">
             Heritage & <span className="italic font-light text-glow">Tradition</span> 🏛️
           </h2>
        </div>

        <div className="relative">
          {/* Vertical Track */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary-green/20 to-transparent"></div>

          <div className="space-y-16">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Milestone Content */}
                <div className="w-full md:w-[45%]" data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}>
                   <div className="glass-premium p-8 rounded-sm glow-primary hover:glow-primary-strong transition-all duration-500 border-l-4 border-primary-green">
                      <h3 className="text-3xl font-serif text-primary-green mb-4">{milestone.year}</h3>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-4">{milestone.event}</h4>
                      <p className="text-xs text-neutral-500 font-serif leading-relaxed italic">{milestone.desc}</p>
                   </div>
                </div>

                {/* Glowing Dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-green rounded-full shadow-[0_0_15px_rgba(4,66,44,0.6)] z-10 border-4 border-white animate-pulse"></div>

                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
