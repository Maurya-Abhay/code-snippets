import { FaWhatsapp } from 'react-icons/fa'

function WhatsappBtn() {
  return (
    <a
      href="https://wa.me/918264469132"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-4xl text-green-500 shadow-lg md:bottom-8 md:right-6 md:h-20 md:w-20 md:text-5xl"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappBtn
