import marcImg from '../../assets/images/why3.jpeg'
import { Share2 } from 'lucide-react'

export default function TeamGrid() {
  const team = [
    { name: 'Bernice Arthur', role: 'Founder & Head of Design', img: marcImg, desc: 'Mastering the art of silhouettes 🎨' },
    // { name: 'Sophie Moreau', role: 'Production Manager', img: sophieImg, desc: 'Ensuring artisanal precision 🛠️' },
    // { name: 'Jean Dupont', role: 'Master Craftsman', img: jeanImg, desc: 'Generations of tailoring mastery 🧵' },
    // { name: 'Alice Blanchard', role: 'Textile Expert', img: craftImg, desc: 'Sourcing the finest global fabrics 🌿' },
  ]

  return (
    <section className="relative py-32 bg-neutral-900 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-green/10 blur-[180px] animate-pulse-glow -z-[1]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-24" data-aos="fade-up">
           <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white/40 mb-6 block">Our Master Artisans</span>
           <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-tight flex items-center justify-center gap-4">
             The Hands of <span className="italic font-light text-glow">Excellence</span> ✨
           </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-sm glass-premium border border-white/5 glow-primary transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="relative h-[450px] overflow-hidden transition-all duration-1000">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 glass-premium backdrop-blur-[25px] bg-black/60 border-t border-white/10 translate-y-[20%] group-hover:translate-y-0 transition-transform duration-700">
                   <h3 className="text-xl font-serif text-white mb-1 uppercase tracking-widest">{member.name}</h3>
                   <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary-green mb-4">{member.role}</p>
                   <p className="text-xs text-neutral-400 font-serif leading-relaxed italic mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                     {member.desc}
                   </p>
                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                      <Share2 size={14} className="text-white hover:text-primary-green transition-colors pointer-events-auto cursor-pointer" />
                      <span className="text-white text-xs hover:text-primary-green cursor-pointer">💼</span>
                      <span className="text-white text-xs hover:text-primary-green cursor-pointer">📸</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
