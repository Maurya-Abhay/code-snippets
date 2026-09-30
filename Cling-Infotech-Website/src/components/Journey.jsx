const years = [
  { year: 'In 2019', text: 'A year of foundational growth and learning, we focused on building a strong foundation and establishing our identity.' },
  { year: 'In 2020', text: 'Solidifying our presence, we diversified our services and remained committed to quality and customer satisfaction.' },
  { year: 'In 2021', text: 'We gained momentum and recognition, expanding our client base and embracing new technologies and methodologies.' },
  { year: 'In 2022', text: 'A milestone year, we grew into a matured organization, taking on ambitious projects and building lasting partnerships.' },
]

function Journey() {
  return (
    <section className="bg-blush px-5 py-14 text-center">
      <h2 className="text-3xl font-bold text-brand md:text-4xl">A journey as dynamic as us</h2>
      <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-gray-900" />

      <p className="mx-auto mt-8 max-w-5xl text-base leading-8 md:text-xl md:leading-10">
        {years.map((y) => (
          <span key={y.year}>
            <span className="font-medium text-primary">{y.year}</span>, {y.text}{' '}
          </span>
        ))}
      </p>
    </section>
  )
}

export default Journey
