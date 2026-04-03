import why from "../../assets/images/why.jpg"

export default function Why() {
  const distinguishPoints = [
    {
      id: 1,
      title: 'Architectural Precision',
      description: 'Our designs aren’t just worn; they are engineered for a flawless architectural fit',
      delay: 200
    },
    {
      id: 2,
      title: 'Sustainable Grandeur',
      description: 'We exclusively source award-winning eco-fabrics from ethical looms',
      delay: 400
    },
    {
      id: 3,
      title: 'Artisanal Heritage',
      description: 'Every stitch follows techniques passed down through generations of couture masters',
      delay: 600
    }
  ]

  return (
    <section className="bg-[#f8f6f2] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary-green/60 font-bold mb-6 block">
              The Distinction
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-primary-green mb-12 leading-tight">
              Why Choose <br />
              <span className="italic font-light">Lauren Haute Couture</span>
            </h2>

            <div className="space-y-10">
              {distinguishPoints.map((point) => (
                <div key={point.id} className="group">
                  <h3 className="text-xl font-serif text-primary-green mb-2 uppercase tracking-wider">
                    {point.title}
                  </h3>

                  <div className="w-12 h-[1px] bg-primary-green/30 mb-4 group-hover:w-24 transition-all duration-700"></div>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed tracking-wide max-w-md">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={why}
                alt="Why Lauren"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary-green/20"></div>

            {/* Background block */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary-green/5 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  )
}