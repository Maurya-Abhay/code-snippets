import { FaCube, FaFilm, FaEye, FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

const items = [
  {
    tag: '3D Animation',
    title: 'Logo animation',
    text: 'Animated logo reveals that make your brand stand out in the first few seconds.',
    icon: <FaCube />,
    bg: 'from-brand to-rose-900',
  },
  {
    tag: '3D Animation',
    title: 'Advertisement video',
    text: 'Product ad videos in 3D for launches, social media and exhibitions.',
    icon: <FaFilm />,
    bg: 'from-primary to-indigo-900',
  },
  {
    tag: 'AI',
    title: 'Surveillance model',
    text: 'An AI model that watches video and identifies suspicious activity automatically.',
    icon: <FaEye />,
    bg: 'from-emerald-600 to-slate-800',
  },
]

function TechFocus() {
  return (
    <section id="tech" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-semibold uppercase tracking-wide text-brand">Current tech focus</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl lg:text-5xl">
            What we are building right now
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group h-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/30">
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${item.bg}`}
                >
                  <span className="text-6xl text-white/30">{item.icon}</span>
                  <span className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink transition group-hover:scale-110">
                    <FaPlay className="ml-1" />
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-400">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechFocus
