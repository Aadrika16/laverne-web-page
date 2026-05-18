import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './index.css'

const LaverneWhatsApp = () => {
  const [open, setOpen] = useState(false)

  const phoneNumber = '917330070077'

  const message =
    'Hello Laverne Team, I would like to know more about your services.'

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(url, '_blank')
  }

  return (
    <div className="lav-chat-wrapper">
      {open && (
        <div className="lav-chat-box">
          <div className="lav-header">
            <div>
              <h3>Laverne AI Assistant</h3>
              <p>Typically replies instantly</p>
            </div>
          </div>

          <div className="lav-message">
            <span>
              Hi 👋 Welcome to Laverne.
              <br />
              How can we help you today?
            </span>
          </div>

          <button onClick={openWhatsApp}>
            <FaWhatsapp />
            Continue on WhatsApp
          </button>
        </div>
      )}

      <div
        className="lav-floating-btn"
        onClick={() => setOpen(!open)}
      >
        <FaWhatsapp />
      </div>
    </div>
  )
}

export default LaverneWhatsApp