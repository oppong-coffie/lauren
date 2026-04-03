import { Link } from 'react-router-dom'

export default function BrandIntro() {
  return (
    <section className="bg-white mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-serif text-primary-green leading-tight">About Lauren Haute Couture</h2>
          <div className="space-y-6 text-neutral-600 max-w-xl">
            <p className="text-lg leading-relaxed">
              For over two decades, Lauren Haute Couture has been synonymous with exquisite design and impeccable craftsmanship. 
            </p>
            <p className="text-base leading-relaxed">
              Each garment is meticulously handcrafted using the finest materials from around the world, 
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-2 px-10 py-4 border border-primary-green text-primary-green text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary-green hover:text-white transition-all duration-300"
          >
            Learn More About Our Story
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div 
            className="bg-neutral-50 p-10 text-center border border-neutral-100 flex flex-col justify-center gap-2 hover:shadow-xl transition-shadow duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-4xl font-serif text-primary-green">20+</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Years of Excellence</p>
          </div>
          <div 
            className="bg-neutral-50 p-10 text-center border border-neutral-100 flex flex-col justify-center gap-2 hover:shadow-xl transition-shadow duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-4xl font-serif text-primary-green">50k+</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Happy Clients</p>
          </div>
          <div 
            className="bg-neutral-50 p-10 text-center border border-neutral-100 flex flex-col justify-center gap-2 hover:shadow-xl transition-shadow duration-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-4xl font-serif text-primary-green">100%</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Quality Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
