import award1 from "../../assets/images/award1.png"
import award2 from "../../assets/images/award2.png"
import award3 from "../../assets/images/award3.png"
import award4 from "../../assets/images/award4.png"
import award5 from "../../assets/images/award5.jpg"


const awards = [
  {
    year: '2025',
    name: 'The Art Of Style Honour',
    org: 'Women Choice Award',
    image: award4,
    delay: 100,
  },
  {
    year: '2024',
    name: 'Global Enterpreneur Award',
    org: 'Global Enterpreneurship Festival',
    image: award5,
    delay: 200,
  },
  {
    year: '2023',
    name: 'Maison Excellence Award',
    org: 'Luxury Brand Federation',
    image: award2,
    delay: 300,
  },
  {
    year: '2022',
    name: 'Eco-Atelier Standard',
    org: 'Green Fashion Institute',
    image: award3,
    delay: 400,
  },
  {
    year: '2021',
    name: 'Heritage Preservation Prize',
    org: 'European Textiles Association',
    image: award1,
    delay: 500,
  },
  {
    year: '2020',
    name: 'Innovator of the Year',
    org: 'Digital Fashion Summit',
    image: award2,
    delay: 600,
  },
]

export default function Recognition() {
  // Duplicate the awards array for a seamless infinite scroll loop
  const infiniteAwards = [...awards, ...awards]

  return (
    <section className="bg-bone-white py-24 sm:py-12 overflow-hidden border-t border-primary-green/10">
      <div className="text-center mb-6" data-aos="fade-up">
        <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb- block">Accolades & Recognition</span>
        <h2 className="text-4xl md:text-6xl font-serif text-primary-green leading-tight">Industry <span className="italic font-light">Excellence</span></h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bone-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bone-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {infiniteAwards.map((award, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 mx-4 w-[350px] md:w-[450px] shadow-sm hover:shadow-2xl transition-all duration-700 border border-primary-green/5 hover:border-primary-green/20 flex-shrink-0"
            >
              {/* Year Background Element */}
              <div className="absolute top-8 right-1 text-6xl md:text-6xl font-serif text-primary-green/[0.06] group-hover:text-primary-green/[0.08] transition-colors duration-700 pointer-events-none">
                {award.year}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-green/40 mb-4 block group-hover:text-primary-green/80 transition-colors">
                    {award.org}
                  </span>
                  <div className="w-8 h-[1px] bg-primary-green/20 group-hover:w-16 transition-all duration-700"></div>
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-primary-green mb-2 leading-snug tracking-tight group-hover:italic transition-all duration-500 h-7 line-clamp-2">
                  {award.name}
                </h3>

                {/* Award Image Presentation */}
                <div className="mt-auto relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-b from-bone-white to-transparent p-2">
                  {/* Subtle Lighting Effect - using standard Tailwind gradient stops for better compatibility */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-1000"></div>
                  
                  <img
                    src={award.image}
                    alt={award.name}
                    className="h-full object-contain group-hover:scale-110 transition-all duration-1000 ease-out z-10"
                  />
                  
                  {/* Floating shadow element */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-primary-green/5 blur-xl group-hover:bg-primary-green/10 transition-all duration-700"></div>
                </div>

                {/* Decorative Detail */}
                <div className="absolute bottom-4 right-4 text-[8px] uppercase tracking-[0.4em] text-primary-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  Maison Excellence
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}