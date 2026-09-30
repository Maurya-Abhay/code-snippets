import { FaWhatsapp } from 'react-icons/fa'

function WhatsappBtn() {
  return (
    <a
      href="https://wa.me/918264469132"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-lg transition hover:scale-110 md:bottom-7 md:right-7"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappBtn
