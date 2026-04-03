import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink } from 'lucide-react'

export default function ContactInfo() {
  const offices = [
    {
      name: 'Accra Showroom 🏛️',
      address: '123 Rue de la Paix, 75002 Paris, France',
      phone: '+33 (1) 234 567 89',
      hours: 'Mon-Sat: 11am - 7pm',
      status: 'Open'
    },
    {
      name: 'Customer Service 🛍️',
      email: 'hello@laurenhautecouture.com',
      phone: '+33 (1) 234 567 89',
      hours: 'Mon-Fri: 9am - 6pm CET',
      status: 'Online'
    }
  ]

  return (
    <div className="space-y-12">
      {offices.map((office, idx) => (
        <div 
          key={idx} 
          className="group glass-premium p-10 rounded-sm glow-primary hover:glow-primary-strong transition-all duration-700 border-l-4 border-primary-green/30 hover:border-primary-green"
          data-aos="fade-up"
          data-aos-delay={idx * 150}
        >
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-serif text-primary-green tracking-tight">{office.name}</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary-green/10 rounded-full">
              <div className="w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse shadow-[0_0_8px_rgba(4,66,44,0.6)]"></div>
              <span className="text-[8px] font-black uppercase tracking-widest text-primary-green">{office.status}</span>
            </div>
          </div>

          <div className="space-y-6">
            {office.address && (
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-primary-green shrink-0 mt-1" />
                <p className="text-sm text-neutral-600 font-serif leading-relaxed italic">{office.address}</p>
              </div>
            )}
            
            {office.email && (
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-primary-green shrink-0 mt-1" />
                <p className="text-sm text-neutral-600 font-serif leading-relaxed italic">{office.email}</p>
              </div>
            )}

            <div className="flex items-start gap-4">
              <Phone size={16} className="text-primary-green shrink-0 mt-1" />
              <p className="text-sm text-neutral-600 font-serif leading-relaxed italic">{office.phone}</p>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={16} className="text-primary-green shrink-0 mt-1" />
              <p className="text-sm text-neutral-600 font-serif leading-relaxed italic">{office.hours}</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-green/10 flex gap-6">
             <button className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-primary-green hover:text-neutral-900 transition-colors">
               <Calendar size={12} /> Book Appointment
             </button>
             <button className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-primary-green/40 hover:text-primary-green transition-colors">
               <ExternalLink size={12} /> Directions
             </button>
          </div>
        </div>
      ))}
    </div>
  )
}
