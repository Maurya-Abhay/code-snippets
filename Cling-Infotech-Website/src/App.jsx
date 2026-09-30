import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import GlobalPresence from './components/GlobalPresence'
import Clients from './components/Clients'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Journey from './components/Journey'
import Services from './components/Services'
import TechFocus from './components/TechFocus'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
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
        <GlobalPresence />
        <Clients />
        <About />
        <VisionMission />
        <Journey />
        <Services />
        <TechFocus />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappBtn />
    </>
  )
}

export default App
