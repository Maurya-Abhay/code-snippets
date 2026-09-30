import { useState } from 'react'

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

    // no backend yet, just show the message
    setSent(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const inputClass = 'mt-2 w-full border border-gray-300 px-3 py-3 outline-none focus:border-primary'

  return (
    <section id="contact" className="px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Contact Us</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto mt-10 max-w-5xl bg-white p-6 shadow-md md:p-8"
      >
        <h3 className="mb-6 text-xl">Send us a message</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-lg text-gray-400">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            {errors.name && <p className="mt-1 text-sm text-brand">{errors.name}</p>}
          </div>
          <div>
            <label className="text-lg text-gray-400">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className={inputClass} />
            {errors.email && <p className="mt-1 text-sm text-brand">{errors.email}</p>}
          </div>
          <div>
            <label className="text-lg text-gray-400">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
            {errors.phone && <p className="mt-1 text-sm text-brand">{errors.phone}</p>}
          </div>
          <div>
            <label className="text-lg text-gray-400">Company</label>
            <input name="company" value={form.company} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-lg text-gray-400">Message</label>
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
          className="mt-6 rounded bg-brand px-8 py-3 text-lg font-semibold text-white hover:bg-red-700"
        >
          Submit
        </button>

        {sent && (
          <p className="mt-4 text-green-700">Thanks for reaching out. We will get back to you soon.</p>
        )}
      </form>
    </section>
  )
}

export default Contact
