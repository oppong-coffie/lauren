import service1 from "../../assets/images/service1.jpg"
import bridal from "../../assets/images/bridal.jpg"
import consultation from "../../assets/images/consult.jpg"


export default function Offer() {
  const offerings = [
    {
      id: 1,
      title: 'Custom Tailoring',
      description: 'Handcrafted custom tailoring for the ultimate personalized fit.',
      image: service1,
      delay: '200ms'
    },
    {
      id: 2,
      title: 'Ready to Wear',
      description: 'Discover luxury in every day with our seasonal collections.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
      delay: '400ms'
    },
    {
      id: 3,
      title: 'Bridal Services',
      description: 'Exquisite bridal couture for your most unforgettable moments.',
      image: bridal,
      delay: '600ms'
    },
    {
      id: 4,
      title: 'Fashion Consultation',
      description: 'Private 1-on-1 styling sessions in the comfort of your home.',
      image: consultation,
      delay: '800ms'
    }
  ]

  return (
    <section className="bg-neutral-50 py-4 sm:pt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-4 block">Maison Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-green uppercase tracking-widest">Lauren Services</h2>
          <div className="w-16 h-[1px] bg-primary-green mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offer, index) => (
            <div 
              key={offer.id} 
              className="group relative h-[500px] overflow-hidden cursor-default"
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              {/* Background Image with Hover Effect */}
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-10 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/60 mb-4 block">Service 0{offer.id}</span>
                <h3 className="text-2xl font-serif mb-4 group-hover:italic transition-all duration-300">{offer.title}</h3>
                <p className="text-xs text-white/80 font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {offer.description}
                </p>
             
              </div>

              {/* Luxury Detail: Corner Highlight */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" data-aos="fade-in" data-aos-delay="400">
            <p className="text-xs text-neutral-400 font-medium tracking-widest leading-loose max-w-2xl mx-auto italic font-serif">
                "We provide more than just fashion; we offer a dedicated partnership in designing your ultimate personal expression."
            </p>
        </div>

      </div>
    </section>
  )
}
