import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import logo from '../assets/logo.png'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Clients', href: '#clients' },
  { name: 'Team', href: '#team' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || open ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home">
          <img src={logo} alt="Cling" className="h-12 w-auto mix-blend-multiply" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-[15px] font-medium text-gray-700 transition-colors hover:text-brand"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand lg:flex"
        >
          Get a Quote <FiArrowUpRight />
        </a>

        <button
          className="text-3xl text-ink lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-100 py-3.5 text-lg font-medium"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-brand py-3 text-center font-semibold text-white"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
