import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.png'

const quickLinks = [
  'Home', '3D Videos', 'AI/ML', 'Services', 'Clients', 'Portfolio', 'Achievements',
  'Team', 'Career', 'Sitemap', 'Privacy Policy', 'Cancellation & Refund Policy', 'Terms and Conditions',
]

const services = [
  'App Development', 'Website Designing', 'Web Design', 'Digital Marketing',
  'Social Media Marketing', 'IT Team for Entrepreneurship', 'Career Counselling', 'ERPs',
]

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-red-100">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-3 md:px-12">
        <img src={logo} alt="Cling" className="h-14" />
        <div className="flex gap-3 text-white">
          <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xl">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-12 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold">Cling Info Tech Works Private Limited</h3>
          <h4 className="mt-6 text-2xl">Address</h4>

          <div className="mt-4 space-y-4 leading-6">
            <div>
              <h5 className="text-xl">Head Office Noida</h5>
              <p>130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, Uttar Pradesh - 201015</p>
            </div>
            <div>
              <h5 className="text-xl">Pune Office Address</h5>
              <p>2nd Floor, Raj Sqaure, Pashan - Sus Rd, near Abhinav kala college, opposite Reliance Fresh, Sutarwadi, Pashan, Pune, Maharashtra - 411021</p>
            </div>
            <div>
              <h5 className="text-xl">Moradabad Office Address</h5>
              <p>2/652, Avas Vikas, Buddhi Vihar Moradabad, UP - 244001</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-white"><FaMapMarkerAlt /></span>
              Maharashtra, Uttar Pradesh
            </p>
            <p className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-white"><FaPhoneAlt /></span>
              +91 8264469132
            </p>
            <p className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-white"><FaEnvelope /></span>
              info@clinginfotech.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Services</h3>
          <ul className="mt-6 space-y-4">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-brand">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-gray-300 py-4 text-center text-lg">
        Copyright © Cling Infotech All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
