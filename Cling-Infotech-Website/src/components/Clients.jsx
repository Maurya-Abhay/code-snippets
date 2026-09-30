import clients from '../data/clients'
import countries from '../data/countries'
import Reveal from './Reveal'

// list is repeated twice so the marquee loops without a gap
function Row({ list, className }) {
  const doubled = [...list, ...list]
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${className}`}>
        {doubled.map((c, i) => (
          <div
            key={c.name + i}
            className="flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm"
          >
            <span className={`text-center text-lg ${c.font}`} style={{ color: c.color }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Clients() {
  const half = Math.ceil(clients.length / 2)

  return (
    <section id="clients" className="py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-semibold uppercase tracking-wide text-brand">Our clients</p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl lg:text-5xl">
          Trusted by growing brands
        </h2>
      </Reveal>

      <div className="mt-12 space-y-4">
        <Row list={clients.slice(0, half)} className="animate-marquee" />
        <Row list={clients.slice(half)} className="animate-marquee-rev" />
      </div>

      <Reveal className="mx-auto mt-16 max-w-5xl px-5 text-center">
        <h3 className="text-2xl font-bold text-ink">Our global presence</h3>
        <p className="mt-2 text-gray-600">
          Expanding our footprint across diverse markets and cultures
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {countries.map((c) => (
            <span
              key={c.code}
              className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-4 text-sm font-medium shadow-sm"
            >
              <img
                src={`https://flagcdn.com/w80/${c.code}.png`}
                alt=""
                className="h-6 w-6 rounded-full object-cover"
                loading="lazy"
              />
              {c.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Clients
