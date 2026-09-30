import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../assets/logo.png'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Clients', href: '#clients' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'App Development',
  'Website Design',
  'ERP Solutions',
  'Digital Marketing',
  'IT Team for Startups',
  'Career Counselling',
]

function Footer() {
  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-1">
            <img src={logo} alt="Cling" className="h-11" />
          </div>
          <p className="mt-5 leading-7">
            Cling Info Tech Works Private Limited. End-to-end IT solutions for all your business
            needs.
          </p>
          <div className="mt-5 flex gap-3 text-white">
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-white">{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-white">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">Get in touch</h4>
          <p>+91 8264469132</p>
          <p className="mt-2">info@clinginfotech.com</p>
          <p className="mt-4 leading-7">Noida · Pune · Moradabad</p>
        </div>
      </div>

      <p className="border-t border-white/10 py-5 text-center text-sm">
        Copyright © Cling Infotech. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
