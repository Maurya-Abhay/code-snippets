import { useState } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaHome, FaUsers, FaCog, FaFileAlt, FaQuoteLeft, FaSlidersH } from 'react-icons/fa'
import logo from '../assets/logo.png'

const links = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  {
    name: 'About Us',
    href: '#about',
    icon: <FaUsers />,
    sub: [
      { name: 'Our Story', href: '#about' },
      { name: 'Vision & Mission', href: '#vision' },
      { name: 'Leadership', href: '#team' },
    ],
  },
  {
    name: 'Services',
    href: '#services',
    icon: <FaSlidersH />,
    sub: [
      { name: 'App Development', href: '#services' },
      { name: 'Web Design', href: '#services' },
      { name: 'ERPs', href: '#services' },
    ],
  },
  {
    name: 'Solutions',
    href: '#tech',
    icon: <FaCog />,
    sub: [
      { name: '3D Animation', href: '#tech' },
      { name: 'AI / ML', href: '#tech' },
    ],
  },
  {
    name: 'Resources',
    href: '#testimonials',
    icon: <FaFileAlt />,
    sub: [
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  { name: 'Clients', href: '#clients', icon: <FaQuoteLeft /> },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenSub(null)
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-[15px]">
        <a href="#home" onClick={closeMenu}>
          <img src={logo} alt="Cling" className="h-[60px] w-auto md:h-10" />
        </a>

        {/* desktop menu */}
        <nav className="hidden items-center lg:flex">
          {links.map((item) => (
            <div key={item.name} className="group relative">
              <a
                href={item.href}
                className={`flex items-center gap-1.5 rounded-md px-3 py-7 text-base transition-colors hover:text-primary ${
                  item.name === 'Home' ? 'font-medium text-primary' : 'text-black'
                }`}
              >
                {item.name}
                {item.sub && <FiChevronDown className="text-base" />}
              </a>

              {item.sub && (
                <div className="invisible absolute left-0 top-full min-w-[200px] rounded-b-md border-t-2 border-brand bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.sub.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="block px-5 py-2 text-[15px] text-gray-700 hover:bg-blush hover:text-brand"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="text-3xl text-gray-900 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`absolute right-0 top-20 w-[78%] max-w-[300px] rounded-bl-xl bg-gradient-to-r from-brand-dark to-brand py-4 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {links.map((item) => (
          <div key={item.name}>
            <a
              href={item.sub ? undefined : item.href}
              onClick={() => {
                if (item.sub) setOpenSub(openSub === item.name ? null : item.name)
                else closeMenu()
              }}
              className={`mx-3 flex cursor-pointer items-center gap-4 rounded-md px-4 py-3 text-[17px] font-medium ${
                item.name === 'Home' ? 'bg-white/20' : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="flex-1">{item.name}</span>
              {item.sub && (
                <FiChevronDown
                  className={`transition-transform ${openSub === item.name ? 'rotate-180' : ''}`}
                />
              )}
            </a>

            {item.sub && openSub === item.name && (
              <div className="mx-3 mb-1 ml-14 flex flex-col text-[15px] text-white/90">
                {item.sub.map((s) => (
                  <a key={s.name} href={s.href} onClick={closeMenu} className="py-2">
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  )
}

export default Navbar
