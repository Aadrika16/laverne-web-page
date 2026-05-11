import {useState} from 'react'
import {MessageCircle, Send, X} from 'lucide-react'
import './index.css'

const LaverneAssistant = () => {
  const [showChat, setShowChat] = useState(false)

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi 👋 Welcome to Laverne. How can we help you today?',
    },
  ])

  const [input, setInput] = useState('')

  const quickReplies = [
    'Interior Design',
    'Architecture',
    'Pricing',
    'Book Consultation',
  ]

  const generateReply = text => {
    const message = text.toLowerCase()

    if (message.includes('interior')) {
      return 'Laverne provides luxury interior design solutions for homes, offices and commercial spaces ✨'
    }

    if (message.includes('architecture')) {
      return 'We create modern architectural concepts with elegant and functional designs 🏛️'
    }

    if (message.includes('pricing')) {
      return 'Our pricing depends on project size and requirements. Please book a consultation for detailed pricing.'
    }

    if (message.includes('consultation')) {
      return 'Thank you 😊 Our team will contact you shortly to schedule your consultation.'
    }

    return 'Thank you for contacting Laverne ✨ Our assistant will help you shortly.'
  }

  const sendMessage = value => {
    const messageText = value || input

    if (messageText.trim() === '') {
      return
    }

    const userMessage = {
      type: 'user',
      text: messageText,
    }

    const botReply = {
      type: 'bot',
      text: generateReply(messageText),
    }

    setMessages(prev => [...prev, userMessage, botReply])

    setInput('')
  }

  return (
    <div>
      {!showChat && (
        <button
          className="floating-btn"
          onClick={() => setShowChat(true)}
        >
          <MessageCircle size={30} />
        </button>
      )}

      {showChat && (
        <div className="chat-card">
          <div className="chat-header">
            <div className="header-left">
              <div className="bot-logo">L</div>

              <div>
                <h1 className="title">Laverne Assistant</h1>
                <p className="status">Online</p>
              </div>
            </div>

            <button
              className="close-btn"
              onClick={() => setShowChat(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((each, index) => (
              <div
                key={index}
                className={
                  each.type === 'user'
                    ? 'user-container'
                    : 'bot-container'
                }
              >
                <div
                  className={
                    each.type === 'user'
                      ? 'user-message'
                      : 'bot-message'
                  }
                >
                  {each.text}
                </div>
              </div>
            ))}

            <div className="quick-replies">
              {quickReplies.map(each => (
                <button
                  key={each}
                  className="reply-btn"
                  onClick={() => sendMessage(each)}
                >
                  {each}
                </button>
              ))}
            </div>
          </div>

          <div className="input-section">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  sendMessage()
                }
              }}
            />

            <button
              className="send-btn"
              onClick={() => sendMessage()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LaverneAssistant