import { FaMobileAlt, FaLaptopCode, FaCogs } from 'react-icons/fa'

const services = [
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    text: 'Need custom app development services? We can help you to take advantage of the rapidly growing segment of mobile application development',
  },
  {
    title: 'Web Design',
    icon: <FaLaptopCode />,
    text: "Don't let your website be just another URL on the web! We never use a pre-designed template for your website. All design layouts are developed from ground up, meeting the exacting standards you demand",
  },
  {
    title: 'ERPs',
    icon: <FaCogs />,
    text: 'We help you to manage your business activities by integrating your back and front office applications',
  },
]

function Services() {
  return (
    <section id="services" className="px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Services</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2 md:gap-x-24 md:gap-y-14">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`flex items-start gap-5 ${i === 2 ? 'md:col-span-2 md:mx-auto md:max-w-xl' : ''}`}
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-50 text-3xl text-primary shadow md:h-32 md:w-32 md:text-5xl">
              {s.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary md:text-3xl">{s.title}</h3>
              <p className="mt-2 leading-7 md:text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
