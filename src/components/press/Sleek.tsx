import logoImg from '../../assets/images/press/logo.png'
import amakiImg from '../../assets/images/press/amaki.png'
import elormImg from '../../assets/images/press/elorm.png'
import natashaImg from '../../assets/images/press/natasha.png'
import { Globe, Phone, TrendingUp, Sparkles, BookOpen } from 'lucide-react'

export default function Sleek() {
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
          
          {/* Section 1: Business & Finance */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <TrendingUp size={16} className="text-white" />
                  Business & Finance
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-justify font-bold mt-2">
                Financial Planning for Financial Independence
              </p>
              <p className="text-sm leading-relaxed mb-4 text-justify">
                Financial planning is essential for maintaining stability, reducing stress, and building long-term security in uncertain economic times. It is recommended in helping individuals prepare for emergencies, avoid debt, achieve personal goals, support family responsibilities, seize investment opportunities, and plan for retirement. 
              </p>
              <p className="text-sm leading-relaxed text-justify">
                Developing this habit begins with a healthy mindset about money, tracking income and expenses, and creating a simple budget such as the 50% needs, 30% wants and 20% savings. Automating savings, setting short- and long-term goals, learning continuously, and controlling lifestyle inflation are key practices that lead to lasting financial independence.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={amakiImg} alt="Amaki Sogbodjor" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-md" />
              <div className="mt-3 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-tight text-neutral-800">Amaki Sogbodjor</p>
                <p className="text-[10px] text-neutral-500 italic mt-1 leading-tight">
                  Regional Head of Client Coverage and Solutions Business, Ecobank Ghana & AWA.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Style & Substance */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-100 pt-12">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <Sparkles size={16} className="text-white" />
                  Style & Substance
                </div>
              </div>
              <p className="text-sm leading-relaxed text-justify mb-4 italic">
                "You are not one thing. Not one path. I've seen this in my own journey, balancing a love for creativity and design with a foundation in business and strategy. For a long time, the world tries to define us by one strength, one identity. But the truth is, we are multifaceted."
              </p>
              <p className="text-sm leading-relaxed text-justify">
                You can love fashion and still think analytically. You can be an athlete and still explore leadership, creativity, or something completely unexpected. So don't shrink to fit expectations. Explore all of who you are. Because the moment you stop trying to fit into one box, is the moment you unlock who you're truly meant to be.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={elormImg} alt="Elorm Sika Amankwa" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-md" />
              <div className="mt-3 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-tight text-neutral-800">Elorm Sika Amankwa</p>
                <p className="text-[10px] text-neutral-500 italic mt-1 leading-tight">
                  Fashion Business & Growth Strategist, Ace Avenue Agency.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Word of God */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-100 pt-12">
            <div className="md:col-span-7">
              <div className="relative mb-6 flex items-center gap-3">
                <div 
                  className="bg-neutral-800 text-white py-2 pl-8 pr-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%)' }}
                >
                  <BookOpen size={16} className="text-white" />
                  Word of God
                </div>
              </div>
              <p className="text-sm leading-relaxed text-justify mb-4">
                <span className="font-bold">Psalm 46:10</span>, "Be still and know that I am God," redefines strength as quiet trust rather than constant striving. The verse invites us to pause amid busy lives and recognize God's sovereignty. 
              </p>
              <p className="text-sm leading-relaxed text-justify">
                In moments of challenge, it acts as a gentle reminder that surrender and stillness are not weakness but sources of true empowerment. By releasing control and trusting God's guidance, we find reassurance that we are never alone.
              </p>
            </div>
            <div className="md:col-span-5">
              <img src={natashaImg} alt="Natasha Bannerman-Kudjawu" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-md" />
              <div className="mt-3 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-tight text-neutral-800">Natasha Bannerman-Kudjawu</p>
                <p className="text-[10px] text-neutral-500 italic mt-1 leading-tight">
                  Co-Founder, Africa Sleek Foundation.
                </p>
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
