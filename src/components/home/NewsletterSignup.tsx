export default function NewsletterSignup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <section className="bg-neutral-50 py-24 border-y border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-serif text-primary-green mb-4 uppercase tracking-[0.2em]" data-aos="fade-up" data-aos-delay="200">Stay Updated</h2>
        <p className="text-sm text-neutral-500 mb-10 tracking-wide" data-aos="fade-up" data-aos-delay="400">Subscribe to our newsletter for exclusive collections, styling tips, and special offers.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-6" data-aos="fade-up" data-aos-delay="600">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 bg-white border border-neutral-200 px-6 py-4 text-sm focus:outline-none focus:border-primary-green transition-colors duration-300"
          />
          <button 
            type="submit"
            className="bg-primary-green text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-secondary-green transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[10px] uppercase tracking-widest text-neutral-400" data-aos="fade-in" data-aos-delay="800">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
