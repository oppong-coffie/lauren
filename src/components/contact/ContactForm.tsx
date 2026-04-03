import { useState } from 'react'
import { Send, User, Mail, MessageSquare, ChevronRight } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for choosing Lauren Haute Couture. Our team will contact you shortly. ✨')
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
  }

  return (
    <div className="glass-premium p-10 md:p-16 rounded-sm glow-primary hover:glow-primary-strong transition-all duration-700 border-l-4 border-primary-green">
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-primary-green mb-4 leading-tight tracking-[0.05em]">
          Send us a <span className="italic font-light">Message</span> ✉️
        </h2>
        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-serif leading-relaxed italic">
          Please allow 24-48 hours for our concierge to respond. 🕊️
        </p>
      </div>

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label htmlFor="name" className="text-[10px] uppercase tracking-[0.5em] font-black text-primary-green/60 flex items-center gap-3">
              <User size={14} /> Full Name 👤
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-primary-green/5 border-b border-primary-green/20 py-4 px-2 focus:outline-none focus:border-primary-green focus:bg-white transition-all duration-500 font-serif text-neutral-800 placeholder-neutral-300"
              placeholder="Your Name..."
              required
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="text-[10px] uppercase tracking-[0.5em] font-black text-primary-green/60 flex items-center gap-3">
              <Mail size={14} /> Email 💌
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-primary-green/5 border-b border-primary-green/20 py-4 px-2 focus:outline-none focus:border-primary-green focus:bg-white transition-all duration-500 font-serif text-neutral-800 placeholder-neutral-300"
              placeholder="Your Email..."
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.5em] font-black text-primary-green/60">Subject ✨</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-primary-green/5 border-b border-primary-green/20 py-4 px-2 focus:outline-none focus:border-primary-green focus:bg-white transition-all duration-500 font-serif text-neutral-800 appearance-none cursor-pointer"
            required
          >
            <option value="General Inquiry">General Inquiry 🏛️</option>
            <option value="Bespoke Commission">Bespoke Commission ✂️</option>
            <option value="Bridal Appointment">Bridal Appointment 👰</option>
            <option value="Press & Media">Press & Media 📰</option>
            <option value="Collaboration">Collaboration 🤝</option>
          </select>
        </div>

        <div className="space-y-4">
          <label htmlFor="message" className="text-[10px] uppercase tracking-[0.5em] font-black text-primary-green/60 flex items-center gap-3">
            <MessageSquare size={14} /> Your Vision 🖋️
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-primary-green/5 border border-primary-green/10 py-6 px-6 focus:outline-none focus:border-primary-green focus:bg-white transition-all duration-500 font-serif text-neutral-800 placeholder-neutral-300 resize-none rounded-sm"
            placeholder="Tell us about your project or inquiry..."
            required
          ></textarea>
        </div>

        <div className="pt-6">
           <button 
             type="submit" 
             className="group relative flex items-center gap-4 bg-primary-green text-white px-12 py-5 rounded-sm text-[10px] font-black uppercase tracking-[0.6em] hover:bg-neutral-900 transition-all duration-500 shadow-2xl overflow-hidden"
           >
             <span className="relative z-10 flex items-center gap-3">Send Message <Send size={14} /></span>
             <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" size={16} />
             <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 skew-x-[-20deg]"></div>
           </button>
        </div>
      </form>
    </div>
  )
}
