import { Link } from 'react-router-dom'
import woman1 from "../../assets/images/woman1.jpg"
import woman2 from "../../assets/images/woman2.jpg"
import woman3 from "../../assets/images/woman3.jpg"
import woman4 from "../../assets/images/woman4.jpg" 




export default function LaurenWomen() {
  const women = [
    {
      id: 1,
      name: 'First Lady',
      archetype: 'The Visionary',
      image: woman1,
      delay: '200ms'
    },
    {
      id: 2,
      name: 'Joyce',
      archetype: 'The Classicist',
      image: woman2,
      delay: '400ms'
    },
    {
      id: 3,
      name: 'Ann',
      archetype: 'The Modernist',
      image: woman3,
      delay: '600ms'
    },
    {
        id: 4,
        name: 'Her Excellency',
        archetype: 'The Curator',
        image: woman4,
        delay: '800ms'
    }
  ]

  return (
    <section className="bg-white py-24 sm:py-2 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-2" data-aos="fade-up">
          <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-4 block">Our Community</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-green uppercase tracking-[0.2em] leading-tight mb-4">The Bernykay Woman</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm leading-relaxed tracking-wider font-light italic font-serif">
            "A celebration of self-expression, elegance, and the timeless power of the modern woman."
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-4">
          {women.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden break-inside-avoid"
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              {/* Image Container with Hover Effects */}
              <div className="relative overflow-hidden bg-neutral-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/70 mb-2 block">{item.archetype}</span>
                  <h3 className="text-xl font-serif text-white">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* CTA: Be a Lauren woman */}
<div className="mt-1 text-center">
  <Link
    to="/contact"
    className="relative inline-block px-14 py-5 text-[11px] uppercase tracking-[0.5em] font-bold text-white bg-primary-green overflow-hidden group transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(4,66,44,0.3)]"
  >
    <span className="relative z-10">Be a Bernykay woman</span>

    {/* Hover background slide */}
    <span className="absolute inset-0 bg-secondary-green translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>

    {/* Elegant Shine Effect */}
    <span className="absolute top-0 -left-[100%] w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></span>
  </Link>
</div>

      </div>
    </section>
  )
}
