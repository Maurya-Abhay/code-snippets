const team = [
  { name: 'Rajesh Verma', role: 'Co-founder & Director', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Anita Sharma', role: 'Managing Director', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Karan Malhotra', role: 'CEO', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
]

function Team() {
  return (
    <section id="team" className="px-5 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand md:text-4xl">Meet Our Leadership Team</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-3">
        {team.map((p) => (
          <div key={p.name} className="rounded bg-white pb-6 pt-8 text-center shadow-md">
            <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-brand">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-10 text-xl font-semibold text-blue-900">{p.name}</h3>
            <p className="text-primary">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
