import clients from '../data/clients'

function Clients() {
  return (
    <section id="clients" className="bg-blush pb-14 pt-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Our Diverse Clientele</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
      </div>

      <div className="mx-auto mt-10 grid max-w-[1400px] grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-5">
        {clients.map((c) => (
          <div
            key={c.name}
            className="flex h-28 items-center justify-center rounded-md bg-white p-3 text-center shadow-md md:h-36"
          >
            <span
              className={`text-lg leading-tight md:text-xl ${c.font}`}
              style={{ color: c.color }}
            >
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
