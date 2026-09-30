import { FaMobileAlt, FaLaptopCode, FaCogs, FaBullhorn, FaUsers, FaRobot } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'

const services = [
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    text: 'Custom mobile apps for Android and iOS, built to take advantage of the fast growing app market.',
  },
  {
    title: 'Website Design',
    icon: <FaLaptopCode />,
    text: 'No pre-made templates. Every layout is designed from scratch to match your brand and goals.',
  },
  {
    title: 'ERP Solutions',
    icon: <FaCogs />,
    text: 'Manage your whole business in one place by connecting your back office and front office tools.',
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn />,
    text: 'SEO, social media and campaigns that bring real customers to your website.',
  },
  {
    title: 'IT Team for Startups',
    icon: <FaUsers />,
    text: 'Got an idea but no tech team? Get developers and designers who work like part of your company.',
  },
  {
    title: '3D & AI',
    icon: <FaRobot />,
    text: '3D animation, ad videos and AI models like our video surveillance system.',
  },
]

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="font-semibold uppercase tracking-wide text-brand">What we do</p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl lg:text-5xl">
          Everything you need to get online and grow
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 100}>
            <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-2xl text-brand transition group-hover:bg-brand group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Talk to us <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Services
