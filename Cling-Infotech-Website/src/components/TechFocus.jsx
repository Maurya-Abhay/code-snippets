import { FaPlay } from 'react-icons/fa'
import logo from '../assets/logo.png'

function PlayButton() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white">
      <FaPlay className="ml-1" />
    </span>
  )
}

function TechFocus() {
  return (
    <section id="tech" className="bg-blush px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Current Tech Focus</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-12 md:grid-cols-2">
        <div className="text-center">
          <div className="relative flex h-56 items-center justify-center overflow-hidden bg-cyan-100">
            <div className="rounded-lg bg-white/70 px-6 py-4 shadow-inner">
              <img src={logo} alt="Cling logo" className="h-24" />
            </div>
            <PlayButton />
          </div>
          <h3 className="mt-4 text-xl font-semibold">3D Animation</h3>
          <p className="mt-1">Cling Logo animation</p>
        </div>

        <div className="text-center">
          <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-800">
            <p className="px-8 text-lg text-gray-400">Samsung Galaxy at 80% in VR Hall</p>
            <PlayButton />
          </div>
          <h3 className="mt-4 text-xl font-semibold">3D Animation</h3>
          <p className="mt-1">Advertisement video</p>
        </div>

        <div className="text-center md:col-span-2 md:mx-auto md:w-1/2">
          <div className="relative flex h-56 items-center justify-center overflow-hidden bg-stone-500">
            <div className="h-32 w-44 rounded bg-stone-700/70" />
            <PlayButton />
          </div>
          <h3 className="mt-4 text-xl font-semibold">AI</h3>
          <p className="mt-1">The Surveillance Model identifies suspicious activity in the video</p>
        </div>
      </div>
    </section>
  )
}

export default TechFocus
