import countries from '../data/countries'

function GlobalPresence() {
  return (
    <section id="presence" className="mt-16">
      <div className="px-4 text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Our Global Presence</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
        <p className="mt-6 text-base md:text-xl">
          Expanding our global footprint across diverse markets and cultures
        </p>
      </div>

      <div className="mt-8 bg-blush py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-5 md:grid-cols-4">
          {countries.map((c) => (
            <div key={c.code} className="flex flex-col items-center">
              <img
                src={`https://flagcdn.com/w320/${c.code}.png`}
                alt={`${c.name} flag`}
                className="h-24 w-36 object-cover md:h-[125px] md:w-[188px]"
                loading="lazy"
              />
              <p className="mt-3 text-sm md:text-base">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
