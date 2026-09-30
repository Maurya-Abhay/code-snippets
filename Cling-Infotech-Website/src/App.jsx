import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import TechFocus from './components/TechFocus'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappBtn from './components/WhatsappBtn'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <TechFocus />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsappBtn />
    </>
  )
}

export default App
