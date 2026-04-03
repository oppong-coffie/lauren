import p1 from '../../assets/images/products/p1.jpg'
import p2 from '../../assets/images/products/p2.jpg'
import p3 from '../../assets/images/products/p3.jpg'
import p4 from '../../assets/images/products/p4.jpg'
import p5 from '../../assets/images/products/p5.jpg'
import p6 from '../../assets/images/products/p6.jpg'
import p7 from '../../assets/images/products/p7.jpg'
import p8 from '../../assets/images/products/p8.jpg'
import p9 from '../../assets/images/products/p9.jpg'
import p10 from '../../assets/images/products/p10.jpg'
import p11 from '../../assets/images/products/p11.jpg'
import p12 from '../../assets/images/products/p12.jpg'

const products = [
  { id: 1, name: 'Silk Evening Gown', price: '$2,450', image: p1, category: 'Couture', delay: 100 },
  { id: 2, name: 'Embroidered Blazer', price: '$1,890', image: p2, category: 'Ready-to-Wear', delay: 200 },
  { id: 3, name: 'Beaded Cocktail Dress', price: '$1,650', image: p3, category: 'Cocktail', delay: 300 },
  { id: 12, name: 'Lace Ensemble', price: '$2,100', image: p9, category: 'Sets', delay: 700 },
  { id: 4, name: 'Wool Pencil Skirt', price: '$845', image: p4, category: 'Apparel', delay: 400 },
  { id: 5, name: 'Cashmere Cardigan', price: '$1,200', image: p5, category: 'Knitwear', delay: 500 },
  { id: 6, name: 'Velvet Wrap Dress', price: '$1,450', image: p6, category: 'Evening', delay: 600 },
  { id: 7, name: 'African Print', price: '$2,100', image: p12, category: 'Sets', delay: 700 },
  { id: 8, name: 'Structured Coat', price: '$2,800', image: p8, category: 'Outerwear', delay: 800 },
  { id: 9, name: 'Ankara Print', price: '$2,100', image: p11, category: 'Sets', delay: 700 },
  { id: 10, name: 'Lauren Print', price: '$2,100', image: p7, category: 'Sets', delay: 700 },
  { id: 11, name: 'Kante Bridal', price: '$2,100', image: p10, category: 'Sets', delay: 700 },
  
  
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={product.delay}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-bone-white transition-all duration-700 hover:shadow-2xl hover:shadow-primary-green/10">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Hover Overlay: Add to Cart */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                  <button className="w-full py-3 bg-white text-primary-green text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary-green hover:text-white">
                    Buy Now
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-primary-green font-bold">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-6 flex flex-col items-center text-center">
                <h3 className="text-lg font-serif text-primary-green mb-1 hover:italic transition-all duration-300 cursor-pointer">
                  {product.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
