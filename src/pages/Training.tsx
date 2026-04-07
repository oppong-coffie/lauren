import { Link } from 'react-router-dom'
import { BookOpen, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import bridalImg from '../assets/images/bridal.jpg'
import consultImg from '../assets/images/consult.jpg'
import whyImg from '../assets/images/cert.jpeg'

export default function Training() {
  const courses = [
    {
      title: "One Month Intensive",
      subtitle: "Corsetry and Bridal Class",
      duration: "4 Weeks",
      description: "A fast-paced, high-impact program designed to master the fundamentals of luxury bridal construction.",
      features: [
        "Over-bust & Under-bust Corsets",
        "Victorian & Cup Corsets",
        "Mermaid & Ball Gown Construction",
        "Lace Placement & Embellishment",
        "Precision Pattern Drafting"
      ],
      image: consultImg,
      schedule: "16th Feb – 13th March 2026",
      registration: "Ends 11th February",
      venue: "Asankram Breman"
    },
    {
      title: "Couture Mastery",
      subtitle: "Extended Corsetry and Bridal Class",
      duration: "6 Weeks",
      description: "Our most comprehensive program, adding advanced skirt construction and deeper technical mastery.",
      features: [
        "All 4-Week Syllabus Items",
        "Advanced Six Pieces Skirt",
        "Extended Fitting Workshops",
        "Business of Bridal Consulting",
        "Advanced Textile Engineering"
      ],
      image: bridalImg,
      schedule: "8th May – 24th June 2026",
      registration: "Ends 13th May",
      venue: "Business Resource Center, Opposite Uptown Junction"
    }
  ]

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Training Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-primary-green">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={whyImg} 
            alt="Training Background" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-green/80 to-primary-green" />
        
        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <span className="text-secondary-green uppercase tracking-[0.6em] text-[10px] md:text-sm font-bold mb-4 block">
            The Institute
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-[0.05em]">
            Berny Kay <span className="italic font-light">Academy</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed tracking-wider font-light uppercase">
            Empowering the next generation of couture designers through artisanal mastery.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-green mb-8 leading-tight">
              Artisanal Heritage, <br />
              <span className="italic font-light text-primary-green/70">Modern Mastery</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-12 leading-relaxed font-light">
              At the Berny Kay Academy, we believe that true luxury is found in the details. Our curriculum is designed to bridge the gap between traditional craftsmanship and contemporary design, giving our students the tools to create garments that are both timeless and innovative.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-green/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 text-primary-green">Expert Tutors</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Learn directly from our head designers and master tailors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-green/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 text-primary-green">Limited Intake</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Small class sizes ensure personalized feedback and attention.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
             <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={whyImg} alt="Mastery" className="w-full h-full object-cover grayscale brightness-75" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl max-w-xs hidden md:block">
                <p className="text-primary-green font-serif italic text-xl mb-4">"Precision is the foundation of excellence."</p>
                <div className="w-10 h-[1px] bg-primary-green/30" />
             </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-primary-green/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-4 block">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-green uppercase tracking-[0.2em]">Our Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="bg-white group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary-green/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-green">{course.duration}</span>
                  </div>
                </div>
                
                <div className="p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-primary-green mb-1">{course.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-secondary-green font-bold">{course.subtitle}</p>
                  </div>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">
                    {course.description}
                  </p>
                  
                  <div className="space-y-8 mb-10">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-800 mb-4 border-b border-primary-green/10 pb-2">What you will learn</h4>
                        <ul className="space-y-3">
                        {course.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 items-center text-xs tracking-wider text-neutral-400 capitalize">
                            <CheckCircle2 size={14} className="text-secondary-green flex-shrink-0" />
                            {feature}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="bg-primary-green/5 p-6 space-y-4">
                        <div className="flex gap-3 items-start">
                            <Users size={16} className="text-primary-green mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-primary-green">Session Dates</p>
                                <p className="text-xs text-neutral-600 italic mt-1 font-serif">{course.schedule}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Award size={16} className="text-primary-green mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-primary-green">Venue</p>
                                <p className="text-xs text-neutral-600 mt-1">{course.venue}</p>
                            </div>
                        </div>
                        <div className="pt-2 border-t border-primary-green/5">
                             <p className="text-[9px] uppercase tracking-widest text-rose-600 font-black">{course.registration} ⚠️</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-primary-green/5">
                    <Link 
                        to="/contact" 
                        className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-green group"
                    >
                        Enroll Now 
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <a href="tel:+233543147824" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-primary-green transition-colors">+233 54 314 7824</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <BookOpen className="text-secondary-green mx-auto mb-10" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif text-primary-green mb-8 leading-tight">
            Ready to Master the <br /> <span className="italic font-light text-secondary-green">Art of Corsetry?</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mb-12 font-light leading-loose tracking-[0.3em] uppercase max-w-2xl mx-auto">
            Join our next intake and transform your passion into professional excellence.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <Link 
                to="/contact" 
                className="inline-block px-14 py-5 bg-primary-green text-white text-[11px] font-bold uppercase tracking-[0.5em] transition-all hover:bg-secondary-green hover:-translate-y-1 shadow-[0_20px_40px_rgba(4,66,44,0.2)]"
            >
                Register Now
            </Link>
            <a 
                href="https://wa.me/233543147824" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-14 py-5 border border-primary-green/20 text-primary-green text-[11px] font-bold uppercase tracking-[0.5em] transition-all hover:border-primary-green hover:-translate-y-1"
            >
                WhatsApp Inquiry
            </a>
          </div>

          <div className="pt-12 border-t border-primary-green/10 flex flex-wrap justify-center gap-10 opacity-60">
             <div className="text-[10px] uppercase tracking-widest font-bold">TikTok: @BernyKayStitches</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">Instagram: Berny Kay Stitches</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">Phone: +233 54 314 7824</div>
          </div>
        </div>
      </section>
    </main>
  )
}
