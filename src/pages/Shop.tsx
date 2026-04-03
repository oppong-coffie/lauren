import ProductGrid from '../components/shop/ProductGrid'
import Background from '../assets/images/bg1.jpg'

export default function Shop() {
  return (
    <main className="min-h-screen bg-white">
    {/* Luxury Page Header */}
<section className="relative border-b border-primary-green/10 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={Background}
      alt="Shop Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/80"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
    <span 
      className="text-[10px] uppercase tracking-[0.8em] text-primary-green/60 font-bold mb-4 block"
      data-aos="fade-up"
    >
      Maison Collection
    </span>

    <h1 
      className="text-5xl md:text-7xl font-serif text-primary-green mb-6 leading-tight"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      The <span className="italic">Shop</span>
    </h1>

    <p 
      className="text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed tracking-wider font-light italic font-serif"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      Explore our curated selection of signature pieces, where architectural precision meets artisanal heritage.
    </p>

    <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="600">
      <div className="w-px h-16 bg-primary-green/20"></div>
    </div>
  </div>
</section>

      {/* Main Product Showcase */}
      <div className="relative">
        <ProductGrid />
      </div>
    </main>
  )
}
