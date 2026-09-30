import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Reveal from './Reveal'

const testimonials = [
  {
    name: 'Rohit Mehra',
    role: 'Business Owner',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service.',
  },
  {
    name: 'Sneha Agrawal',
    role: 'Founder, Learnly.in',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "Their professionalism and efficiency surpassed our expectations, and they understood our needs really well. Rarely do we find such a reliable partner in today's market.",
  },
  {
    name: 'Elizabeth Thomas',
    role: 'Founder, Speech Ally',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "Choosing Cling Info Tech was one of the best decisions we made. The team's creativity and strategic approach turned our vision into reality, and their support throughout the process was outstanding.",
  },
  {
    name: 'Vikram Joshi',
    role: 'Director, Joshi Traders',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'They delivered our ERP on time and were always available when we had questions. The team is polite, quick and really knows the work.',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  // auto slide, restarts whenever the user changes the slide
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [current])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="bg-blush py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-semibold uppercase tracking-wide text-brand">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl lg:text-5xl">
            Your voice, our pride
          </h2>
        </Reveal>

        <div className="relative mt-12 rounded-3xl bg-white px-6 pb-10 pt-14 shadow-xl md:px-14">
          <span className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-brand text-xl text-white">
            <FaQuoteLeft />
          </span>

          <p key={current} className="min-h-[140px] text-lg leading-8 text-gray-700 md:text-xl md:leading-9">
            {t.text}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-bold text-ink">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-brand hover:text-brand"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    current === i ? 'w-8 bg-brand' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-brand hover:text-brand"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
