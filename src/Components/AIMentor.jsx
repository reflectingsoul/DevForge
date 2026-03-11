import { useState } from "react"
import axios from "axios"

function AIMentor() {

  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm ForgeAI, your coding mentor. Ask me anything about programming." }
  ])
  console.log(import.meta.env.VITE_OPENAI_KEY)

  const handleSend = async () => {

    if (!input.trim()) return

    const userMessage = { role: "user", text: input }

    setMessages((prev) => [...prev, userMessage])

    try {

   const handleSend = () => {

  if (!input.trim()) return

  const userMessage = { role: "user", text: input }

  setMessages((prev) => [...prev, userMessage])

  setTimeout(() => {

    const aiMessage = {
      role: "ai",
      text: "ForgeAI is under development. Soon it will answer programming questions using AI."
    }

    setMessages((prev) => [...prev, aiMessage])

  }, 1000)

  setInput("")
}

      const aiMessage = {
        role: "ai",
        text: res.data.choices[0].message.content
      }

      setMessages((prev) => [...prev, aiMessage])

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Something went wrong while contacting ForgeAI." }
      ])

    }

    setInput("")
  }

  return (
    <>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full text-white text-lg shadow-lg hover:bg-blue-500 transition"
      >
        AI
      </button>


      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-24 right-6 w-80 max-h-[500px] bg-gray-900 border border-gray-800 rounded-xl shadow-xl flex flex-col">

          {/* Header */}

          <div className="p-4 border-b border-gray-800">
            <h3 className="text-blue-400 font-semibold">
              ForgeAI — Coding Mentor
            </h3>
          </div>


          {/* Messages */}

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                {msg.text}
              </div>

            ))}

          </div>


          {/* Input */}

          <div className="p-3 border-t border-gray-800 flex gap-2">

            <input
              type="text"
              placeholder="Ask ForgeAI about coding..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-500 transition"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>
  )
}

export default AIMentor