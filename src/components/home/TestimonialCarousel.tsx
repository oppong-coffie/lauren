export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      text: "Absolutely stunning pieces! The quality and attention to detail is unmatched.",
      author: "Sophie Laurent",
      title: "Fashion Blogger"
    },
    {
      id: 2,
      text: "Every dress tells a story. Lauren Haute Couture is my go-to for special occasions.",
      author: "Marie Dubois",
      title: "Luxury Editor"
    },
    {
      id: 3,
      text: "The craftsmanship is exceptional. Worth every penny and then some.",
      author: "Elena Rossi",
      title: "International Stylist"
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-serif text-primary-green uppercase tracking-widest">What Our Clients Say</h2>
          <div className="w-16 h-[1px] bg-primary-green mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-neutral-50 p-10 border border-neutral-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 cursor-default"
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              <p className="text-lg font-serif italic text-neutral-600 mb-10 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-green mb-1">{testimonial.author}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
