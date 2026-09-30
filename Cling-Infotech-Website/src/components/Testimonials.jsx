import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Rohit Mehra',
    role: '',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service',
  },
  {
    name: 'Sneha Agrawal',
    role: 'Founder - Learnly.in',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "Cling Info Tech' professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
  },
  {
    name: 'Elizabeth Thomas',
    role: 'Founder - Speech Ally',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
  },
  {
    name: 'Vikram Joshi',
    role: 'Director - Joshi Traders',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'They delivered our ERP on time and were always available when we had questions. The team is polite, quick and really knows the work.',
  },
  {
    name: 'Meera Nair',
    role: 'Founder - Craftly',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: 'Our new website looks great on every device and our enquiries went up within the first month. Thank you team Cling for the support.',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(3)

  // 1 card on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const setView = () => {
      const w = window.innerWidth
      setPerView(w < 768 ? 1 : w < 1024 ? 2 : 3)
    }
    setView()
    window.addEventListener('resize', setView)
    return () => window.removeEventListener('resize', setView)
  }, [])

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const visible = []
  for (let i = 0; i < perView; i++) {
    visible.push(testimonials[(current + i) % testimonials.length])
  }

  return (
    <section id="testimonials" className="bg-blush px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Testimonials</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
        <p className="mx-auto mt-6 max-w-4xl leading-8 md:text-lg">
          Your Voice, Our Pride! Dive into the heartfelt accounts of our valued patrons. From
          life-changing experiences to exceptional service, their stories illuminate the essence
          of our commitment. Join our family of satisfied customers and witness firsthand the
          transformative power of our offerings. Your satisfaction is our greatest achievement!
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((t, i) => (
          <div
            key={t.name + i}
            className="relative rounded-xl bg-white px-6 pb-8 pt-14 text-center shadow-lg"
          >
            <img
              src={t.img}
              alt={t.name}
              className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white object-cover"
            />
            <p className="leading-7">{t.text}</p>
            <h4 className="mt-6 text-2xl">{t.name}</h4>
            {t.role && <p className="mt-1 text-lg">{t.role}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setCurrent(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-3.5 w-3.5 rounded-full border-2 border-gray-800 ${
              current === i ? 'bg-gray-900' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
