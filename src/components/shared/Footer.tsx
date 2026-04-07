import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-green text-bone-white border-t border-primary-green/20 relative overflow-hidden">
      {/* Decorative Brand Watermark */}
      <div className="absolute -bottom-20 -left-20 text-[20rem] font-serif text-white/5 select-none pointer-events-none uppercase tracking-tighter">
        Bernykay
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div data-aos="fade-up">
            <h4 className="text-3xl font-serif mb-8 tracking-tight">Bernykay <br /> <span className="italic font-light">Stitches</span></h4>
            <p className="text-sm leading-loose text-bone-white/60 mb-10 max-w-xs font-light">
              Meticulously engineered garments for the visionary woman. Blending artisanal heritage with sustainable innovation.
            </p>
            <div className="flex gap-6">
              {[
                { name: 'Instagram', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { name: 'Facebook', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                { name: 'X', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -9.256M13.457 8.384l6.543 -8.384"></path></svg> },
                { name: 'Pinterest', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20c.463-3.133 1.137-5.942 1.34-6.848.33-1.474-.183-2.613-.183-3.955 0-2.316 1.385-3.87 3.32-3.87 1.83 0 2.825 1.353 2.825 2.973 0 1.841-1.187 4.593-1.802 7.151-.51 2.122 1.055 3.85 3.148 3.85 3.774 0 6.326-4.75 6.326-10.378 0-4.298-2.893-7.525-8.15-7.525-5.922 0-9.613 4.417-9.613 9.351 0 1.7 1.042 3.15 1.637 3.738-.19.78-.456 2.302-.553 2.696-.134.545-.63 1.144-.943 1.62-.266.406-.318.423-.058-.024.162-.28.878-1.503 1.258-2.923z"></path></svg> }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all duration-500 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div data-aos="fade-up" data-aos-delay="200">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-bone-white/30 mb-8">Navigation</h5>
              <ul className="flex flex-col gap-4">
                <li><Link to="/collections" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Collections</Link></li>
                <li><Link to="/shop" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Featured Shop</Link></li>
                <li><Link to="/lookbook" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Lookbook Series</Link></li>
                <li><Link to="/about" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Maison Story</Link></li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-bone-white/30 mb-8">Support</h5>
              <ul className="flex flex-col gap-4">
                <li><Link to="/contact" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Contact Concierge</Link></li>
                <li><a href="#" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Sustainability</a></li>
                <li><a href="#" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Shipping Policy</a></li>
                <li><a href="#" className="text-[13px] text-bone-white/60 hover:text-white transition-all duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-bone-white/30 mb-8">Stay Updated</h5>
            <p className="text-[13px] text-bone-white/60 mb-8 font-light italic">Join the maison for exclusive early access and seasonal updates.</p>
            <form className="flex flex-col gap-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full bg-transparent border-b border-bone-white/20 px-0 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-500"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-bone-white/20">
          <p>&copy; {currentYear} Bernykay Stitches. Crafted with precision.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
