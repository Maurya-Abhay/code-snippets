import { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Reveal from './Reveal'

const offices = [
  { city: 'Noida (Head Office)', address: '130-132, 2nd Floor, Wave Galleria, Wave City, NH-24, Uttar Pradesh - 201015' },
  { city: 'Pune', address: '2nd Floor, Raj Square, Pashan - Sus Rd, Pashan, Maharashtra - 411021' },
  { city: 'Moradabad', address: '2/652, Avas Vikas, Buddhi Vihar, UP - 244001' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email'
    if (form.phone && !/^[0-9+\-\s]{8,15}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number'
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    // no backend yet, so just show a thank you message
    setSent(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const inputClass =
    'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

  return (
    <section id="contact" className="bg-blush px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-5">
        {/* left: details */}
        <div className="bg-ink p-8 text-white md:p-10 lg:col-span-2">
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Let's build something together
          </h2>
          <p className="mt-4 text-gray-400">
            Have an idea or a project in mind? Send us a message and we will get back to you soon.
          </p>

          <div className="mt-8 space-y-5">
            <p className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand"><FaPhoneAlt /></span>
              +91 8264469132
            </p>
            <p className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand"><FaEnvelope /></span>
              info@clinginfotech.com
            </p>
          </div>

          <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
            {offices.map((o) => (
              <div key={o.city} className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold">{o.city}</p>
                  <p className="text-sm leading-6 text-gray-400">{o.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right: form */}
        <form onSubmit={handleSubmit} noValidate className="p-8 md:p-10 lg:col-span-3">
          <h3 className="mb-6 text-2xl font-bold text-ink">Send us a message</h3>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-600">Full name</label>
              <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
              {errors.name && <p className="mt-1 text-sm text-brand">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className={inputClass} />
              {errors.email && <p className="mt-1 text-sm text-brand">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
              {errors.phone && <p className="mt-1 text-sm text-brand">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm font-medium text-gray-600">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.message && <p className="mt-1 text-sm text-brand">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark sm:w-auto"
          >
            Send Message
          </button>

          {sent && (
            <p className="mt-4 font-medium text-green-700">
              Thanks for reaching out! We will get back to you soon.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
