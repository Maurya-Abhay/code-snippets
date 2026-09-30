import { useEffect, useRef, useState } from 'react'
import { FaCode, FaUsers, FaRegLightbulb, FaCoffee } from 'react-icons/fa'

const stats = [
  { icon: <FaCode />, value: 32387122, suffix: '', label: 'Lines of code written' },
  { icon: <FaUsers />, value: 350, suffix: '+', label: 'Happy clients' },
  { icon: <FaRegLightbulb />, value: 390, suffix: '+', label: 'Projects completed' },
  { icon: <FaCoffee />, value: 1500, suffix: '+', label: 'Coffees with clients' },
]

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let current = 0
    const step = Math.ceil(end / 60)
    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      setCount(current)
    }, 25)
    return () => clearInterval(timer)
  }, [start, end])

  return (
    <span>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // start counting once the strip is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative z-10 -mt-14 px-5 lg:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 rounded-3xl bg-ink px-4 py-9 text-white shadow-2xl md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center px-2 text-center ${
              i > 0 ? 'md:border-l md:border-white/10' : ''
            }`}
          >
            <div className="mb-3 text-2xl text-brand">{s.icon}</div>
            <p className="text-2xl font-extrabold md:text-3xl">
              <Counter end={s.value} suffix={s.suffix} start={visible} />
            </p>
            <p className="mt-1 text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
