import { FaLinkedinIn } from 'react-icons/fa'
import Reveal from './Reveal'

const team = [
  { name: 'Rajesh Verma', role: 'Co-founder & Director', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Anita Sharma', role: 'Managing Director', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Karan Malhotra', role: 'CEO', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
]

function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="text-center">
        <p className="font-semibold uppercase tracking-wide text-brand">Leadership</p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl lg:text-5xl">
          Meet the people behind Cling
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3">
        {team.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <a
                  href="#"
                  aria-label={`${p.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-brand text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.name}</h3>
              <p className="text-primary">{p.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Team
