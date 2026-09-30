import { useState } from 'react'
import Reveal from './Reveal'

const tabs = {
  Vision: 'Our goal is to deliver premier web design, development and marketing solutions that help our clients grow online profitably. We keep improving the quality of our work, our customer service, technology integration and innovation.',
  Mission: "We invest in our people, refine our processes and adopt new technologies so we can stay ahead in a fast changing digital world. We are agile with market trends and customer needs, and we want to be a trusted partner for businesses that want to outpace the competition.",
}

const timeline = [
  { year: '2019', text: 'Started out. We focused on building a strong foundation and our identity.' },
  { year: '2020', text: 'Added more services while staying committed to quality and customer satisfaction.' },
  { year: '2021', text: 'Gained momentum, grew our client base and started using new technologies.' },
  { year: '2022', text: 'Became a mature company, taking on bigger projects and lasting partnerships.' },
]

function About() {
  const [tab, setTab] = useState('Vision')

  return (
    <section id="about" className="bg-blush py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="font-semibold uppercase tracking-wide text-brand">Our story</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl lg:text-5xl">
            A team that cares about your growth
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of IT services like ERPs, websites, app development, support and
            innovation. We understand our customers and the industry at large, and we focus on
            the growth of every individual in our team.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex gap-2">
              {Object.keys(tabs).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    tab === t ? 'bg-brand text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Our {t}
                </button>
              ))}
            </div>
            <p className="mt-5 leading-7 text-gray-700">{tabs[tab]}</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="mb-8 text-2xl font-bold text-ink">A journey as dynamic as us</h3>
          <div className="relative border-l-2 border-brand/30 pl-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-blush bg-brand" />
                <p className="text-xl font-extrabold text-primary">{t.year}</p>
                <p className="mt-1 leading-7 text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
