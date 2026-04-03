import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import MapSection from '../components/contact/MapSection'
import SocialLinks from '../components/contact/SocialLinks'

export default function Contact() {
  return (
    <main className="page contact-page bg-[#f8f6f2] overflow-hidden">
      <ContactHero />
      
      <section className="relative py-32 bg-mesh overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col xl:flex-row items-center gap-20 xl:gap-32">
            
            {/* Left: Contact Form */}
            <div className="w-full xl:w-[60%]" data-aos="fade-up">
              <ContactForm />
            </div>

            {/* Right: Contact Information */}
            <div className="w-full xl:w-[40%]" data-aos="fade-up" data-aos-delay="200">
               <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-serif text-primary-green leading-tight tracking-[0.05em]">
                    The Lauren <span className="italic font-light text-glow">Showroom</span> 🏛️✨
                  </h2>
               </div>
               <ContactInfo />
            </div>

          </div>
        </div>
      </section>

      {/* <ContactGallery /> */}
      {/* <MapSection /> */}
      <SocialLinks />
    </main>
  )
}
