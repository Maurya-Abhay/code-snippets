import { useEffect, useRef, useState } from 'react'
import { FaCode, FaUsers, FaRegLightbulb, FaCoffee } from 'react-icons/fa'

const stats = [
  { icon: <FaCode />, value: 32387122, suffix: '', label: 'Number of lines of code' },
  { icon: <FaUsers />, value: 350, suffix: '+', label: 'Happy clients' },
  { icon: <FaRegLightbulb />, value: 390, suffix: '+', label: 'Projects Completed' },
  { icon: <FaCoffee />, value: 1500, suffix: '+', label: 'Coffee With Clients' },
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
      {count}
      {suffix}
    </span>
  )
}

function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // start counting when the card comes into view
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
    <div className="relative z-10 -mt-6 px-4 md:-mt-[30px]">
      <div
        ref={ref}
        className="mx-auto flex w-full max-w-[808px] flex-wrap items-start justify-center rounded-[6px] bg-white p-4 text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] md:min-h-[138px] md:flex-nowrap md:p-5"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="my-2 flex min-w-0 basis-[calc(50%_-_16px)] flex-col items-center gap-1 px-1 md:mx-[10px] md:my-[10px] md:basis-[calc(25%_-_20px)]"
          >
            <div className="text-[40px] leading-none text-primary md:text-[30px]">{s.icon}</div>
            <p className="mt-[10px] w-full break-words text-[14px] font-semibold leading-5 tabular-nums md:text-[15px]">
              <Counter end={s.value} suffix={s.suffix} start={visible} />
            </p>
            <p className="mt-[2px] w-full text-[13px] leading-5 md:text-[14px]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
