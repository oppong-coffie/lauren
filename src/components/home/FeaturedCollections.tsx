import { Link } from 'react-router-dom'
import kente from "../../assets/images/kente.jpg"
import kids from "../../assets/images/kid.jpg"
import bride from "../../assets/images/bride.jpg"

export default function FeaturedCollections() {
  const collections = [
    { 
        id: 1, 
        name: 'Kente Collection', 
        tagline: 'Royal Heritage', 
        image: kente,
        delay: '200ms'
    },
    { 
        id: 2, 
        name: 'Bridal Collection', 
        tagline: 'Elegance in White', 
        image: bride,
        delay: '400ms'
    },
    { 
        id: 3, 
        name: 'Kids Sparkle', 
        tagline: 'Young Royalty', 
        image: kids,
        delay: '600ms'
    },
  ]

  return (
    <section className="bg-white py-4 sm:py-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-6 block">The Seasonal Series</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-green leading-tight">Handcrafted <span className="italic font-light"></span> Collections</h2>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <Link 
              to="/collections" 
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-primary-green hover:text-secondary-green transition-colors"
            >
              Explore Our Show Room
              <div className="w-10 h-[1.5px] bg-primary-green group-hover:w-20 transition-all duration-700 ease-in-out"></div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <Link 
              key={col.id} 
              to="/collections" 
              className="group block relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>

              {/* Text Layer */}
              <div className="mt-8">
                <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-medium mb-3 block">{col.tagline}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-serif text-primary-green group-hover:italic transition-all duration-500">{col.name}</h3>
                  <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-primary-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>

              {/* Hover Luxury Border */}
              <div className="absolute top-0 left-0 w-full h-0 bg-primary-green/5 transition-all duration-700 group-hover:h-full"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
