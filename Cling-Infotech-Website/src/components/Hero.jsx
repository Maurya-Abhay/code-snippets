import { FiArrowRight } from 'react-icons/fi'
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blush to-white">
      {/* soft background blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-20">
        <div>
          <span className="inline-block rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            IT Solutions · Since 2019
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            We turn your <span className="text-brand">ideas</span> into products people{' '}
            <span className="text-primary">love to use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Websites, mobile apps, ERPs and digital marketing, all under one roof. Tell us what
            you want to build and our team will take it from idea to launch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Start a Project <FiArrowRight />
            </a>
            <a
              href="#services"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-ink"
            >
              Our Services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-brand" /> Custom designs, no templates</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-brand" /> 350+ happy clients</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark" />
          <img
            src={heroImg}
            alt="Our team discussing a project"
            className="relative h-[380px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[440px]"
          />

          <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">
            <span className="text-3xl font-extrabold text-brand">390+</span>
            <span className="text-sm leading-tight text-gray-600">Projects<br />completed</span>
          </div>

          <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-xl sm:-right-6">
            <FaMapMarkerAlt className="text-primary" /> Noida · Pune · Moradabad
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
