import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Press', to: '/press' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center">
        {/* Logo Left */}
        <div className="flex-1">
          <Link to="/" className="flex items-center no-underline group scale-90 md:scale-75 origin-left w-fit">
            <div className="flex border border-primary-green items-stretch overflow-hidden backdrop-blur-sm">
              <div
                className="bg-primary-green text-white text-3xl font-serif flex items-center transition-all duration-300"
                style={{
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '16px',
                  paddingRight: '32px',
                  clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)"
                }}
              >
                Lauren
              </div>

              <div 
                className="text-primary-green text-xs font-semibold uppercase tracking-[0.3em] flex items-center whitespace-nowrap"
                style={{
                  paddingLeft: '12px',
                  paddingRight: '16px'
                }}
              >
                Haute Couture
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center gap-5 flex-none">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary-green after:origin-left after:transition-transform after:duration-300 ${isActive ? 'text-primary-green after:scale-x-100' : 'text-neutral-600 hover:text-primary-green after:scale-x-0 hover:after:scale-x-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions Right */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button className="text-neutral-700 hover:text-primary-green transition-colors duration-300 lg:block hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[1.5px] bg-primary-green transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-primary-green transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-4 h-[1.5px] bg-primary-green transition-transform duration-300 self-end ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px] w-6' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full bg-white z-[100] transition-transform duration-500 lg:hidden overflow-y-auto h-[70dvh] shadow-2xl border-b border-primary-green/10 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center pt-32 pb-16 h-auto gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `text-3xl font-serif tracking-[0.05em] transition-colors duration-300 ${isActive ? 'text-primary-green' : 'text-neutral-400 hover:text-primary-green'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
