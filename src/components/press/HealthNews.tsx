import logoImg from '../../assets/images/press/logo.png'
import drVanessaImg from '../../assets/images/press/dr_vanessa.png'
import achimotaImg from '../../assets/images/press/achimota.png'
import pendorImg from '../../assets/images/press/pendor.png'
import { Globe, Phone, HeartPulse, Users, GraduationCap } from 'lucide-react'

export default function HealthNews() {
  return (
    <section className="bg-neutral-50 py-16 px-4 md:px-8 font-serif text-[#333]">
      {/* Newspaper Container */}
      <div className="max-w-[850px] mx-auto bg-white border border-neutral-200 shadow-2xl p-8 md:p-12">
        
        {/* Header Section */}
        <header className="border-b-2 border-black pb-4 mb-8">
          <div className="flex justify-between items-end mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20">
              <img src={logoImg} alt="Africa Sleek Foundation Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-1 font-serif text-black">
                Africa Sleek Foundation
              </h1>
              <p className="text-sm md:text-base font-bold italic border-t border-b border-black py-1 tracking-[0.3em] uppercase">
                ⬦ Empowerment Newsletter ⬦
              </p>
            </div>
            <div className="hidden md:block w-20"></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-600">
            <span>Vol. 2, No. 2</span>
            <span>April 2026</span>
          </div>
        </header>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 gap-12">
          
          {/* Section 1: Health & Wellness */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <HeartPulse size={16} className="text-white" />
                  Health & Wellness
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-justify">
                Midlife often arrives quietly, then all at once. Sleep fragments. Energy drops. Weight shifts despite doing the right things. Focus softens. Mood changes. Many women are told this is part of getting older. It is not that simple. Midlife reflects a shift in biology, not a failure of willpower. Hormones respond to signals such as light, sleep, movement, stress, and nutrition. These signals regulate circadian rhythm, metabolic stability and cortisol patterns. When rhythm is lost, the system becomes unstable. What many women experience is not decline, but adaptation without the right support.
              </p>
              <p className="text-sm leading-relaxed text-justify">
                The 3R Method™ provides that structure: <span className="font-bold">Reset</span> restores biological signals. <span className="font-bold">Rebalance</span> introduces targeted hormones, nutrition and lifestyle support. <span className="font-bold">Reclaim</span> rebuilds strength, resilience, and long-term health. Midlife becomes a period of precision, clarity and control.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={drVanessaImg} alt="Dr. Vanessa Stirzaker" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-md" />
              <div className="mt-3 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-tight text-neutral-800">Dr. Vanessa Susane Stirzaker</p>
                <p className="text-[10px] text-neutral-500 italic mt-1 leading-tight">
                  Menopause Specialist, Creator of 3R Method™, Founder of Mamichie Healthcare in London.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Empowerment Talks */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-100 pt-12">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <Users size={16} className="text-white" />
                  Empowerment Talks
                </div>
              </div>
              <p className="text-sm leading-relaxed text-justify">
                In collaboration with the OAA 2001 Year Group, the Foundation delivered a career guidance session at Achimota School, impacting more than 200 students who actively participated, asked thoughtful questions, and explored their future possibilities.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={achimotaImg} alt="Achimota School Talks" className="w-full rounded-sm shadow-sm opacity-90" />
              <p className="mt-2 text-[9px] text-neutral-400 italic">
                Image: Africa Sleek Foundation and OAA 2001 Career Guidance Talk at Achimota Senior High School.
              </p>
            </div>
          </section>

          {/* Section 3: Women in Science (STEM) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-100 pt-12">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <GraduationCap size={16} className="text-white" />
                  Women in Science (STEM)
                </div>
              </div>
              <p className="text-sm leading-relaxed text-justify mb-4">
                Pendor's looking to focus on the nexus between engineering, law and most recently business as it pertains to the changing energy landscape. Following 6 years of working as a petroleum engineer at Tullow, she is pursuing an MBA at Oxford University, building up on degrees in Geological Engineering and Oil, Gas and Mining Law from University of Mines and Technology and Nottingham Trent University respectively.
              </p>
              <p className="text-sm leading-relaxed text-justify">
                She is quite the zealot when it comes to foundational learning and pushing the frontiers of one's knowledge reaching the peak of the proverbial learning curve. She is a proponent of human rights and inclusivity and is a happy parent of a golden retriever Podrick and a mongrel Barima.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={pendorImg} alt="Pendor Gedor" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-md" />
              <div className="mt-3 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-tight text-neutral-800">Pendor Gedor</p>
                <p className="text-[10px] text-neutral-500 italic mt-1">Oxford MBA '26</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Section */}
        <footer className="mt-16 border-t-2 border-black pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase font-bold tracking-tight">
              {/* <Instagram size={14} className="text-neutral-800" /> */}
              <span>Africa Sleek Foundation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-tight">
              <Globe size={14} className="text-neutral-800" />
              <span>www.africasleekfoundation.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 text-[10px] uppercase font-bold tracking-tight">
              <Phone size={14} className="text-neutral-800" />
              <span>+233 256 111 562</span>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400">
              Co-Founder : Natasha Bannerman-Kudjawu
            </p>
          </div>
        </footer>

      </div>
    </section>
  )
}
