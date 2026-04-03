import { Share2, Globe, Mail, Camera, Video } from 'lucide-react'

export default function SocialLinks() {
  const socials = [
    { icon: <Camera size={24} />, label: 'Instagram', color: 'text-[#E1306C]', href: '#' },
    { icon: <Share2 size={24} />, label: 'LinkedIn', color: 'text-[#0077B5]', href: '#' },
    { icon: <Globe size={24} />, label: 'Twitter', color: 'text-[#1DA1F2]', href: '#' },
    { icon: <Mail size={24} />, label: 'Facebook', color: 'text-[#4267B2]', href: '#' },
    { icon: <Video size={24} />, label: 'YouTube', color: 'text-[#FF0000]', href: '#' },
  ]

  return (
    <section className="relative py-24 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
        <div data-aos="fade-up" className="mb-16">
           <div className="flex items-center justify-center gap-3 mb-6">
              <Share2 className="text-primary-green animate-pulse" size={24} />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-white/40">Connect With The Maison</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-tight italic font-light">
             Beyond <span className="text-glow font-medium normal-case">Digital Borders</span> ✨🕊️
           </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              className={`group relative p-8 glass-premium rounded-full transition-all duration-700 glow-primary-stron ${social.color}`}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              aria-label={social.label}
            >
              <div className="relative z-10 group-hover:scale-125 transition-transform duration-700 transform-gpu">
                {social.icon}
              </div>
              <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-white/5 max-w-4xl mx-auto">
           <p className="text-xs font-black uppercase tracking-[0.5em] text-white/20">
             Narrating the future of luxury — follow our journey. 💎🖋️
           </p>
        </div>
      </div>
    </section>
  )
}
