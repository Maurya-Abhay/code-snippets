import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section id="home">
      <h1 className="mb-5 mt-5 text-center text-[28px] font-semibold leading-10 md:mb-[70px] md:whitespace-nowrap md:text-[27px] md:uppercase md:leading-10">
        <span className="mb-[5px] block text-[#df1313] md:mb-0 md:inline">Making Your </span>
        <span className="block text-[#1363df] md:inline">Ideas Happen!</span>
      </h1>

      <div className="flex w-full flex-col-reverse items-center bg-[linear-gradient(265.31deg,#e72929_37.21%,#000_172.47%)] py-5 text-white md:h-[388px] md:flex-row md:justify-between md:px-5 md:py-0">
        <p className="mt-4 w-[90%] text-center text-[12px] leading-5 md:m-0 md:mx-[30px] md:max-w-[800px] md:text-justify md:text-[18px] md:leading-[30px]">
          We are an end-to-end IT Solutions providing major services such as website
          development, mobile application development, digital marketing, custom web portal,
          IT team for your next idea, ERP development, for all your business needs.
        </p>

        <img
          src={heroImg}
          alt="Team discussing a project"
          className="my-5 h-auto w-[90%] rounded-[5%] object-cover md:m-0 md:h-[388px] md:w-[424px] md:shrink-0 md:rounded-none"
        />
      </div>
    </section>
  )
}

export default Hero
