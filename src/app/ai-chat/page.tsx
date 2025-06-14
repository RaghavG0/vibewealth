// src/app/ai-chat/page.tsx
'use client'
import { useState } from 'react'

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you with your finance today?' }
  ])

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-4">AI Finance Chat</h2>
      <div className="p-4 flex flex-col space-y-4 max-w-md mx-auto border rounded-lg bg-white dark:bg-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === 'bot'
                ? 'bg-gray-200 dark:bg-gray-700 self-start'
                : 'bg-brand/30 self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l-md focus:outline-none"
          />
          <button className="px-4 bg-brand text-white rounded-r-md">Send</button>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        (This is a static UI. In a full implementation, user input would be sent to an AI API and responses would be appended to `messages`.)
      </p>
    </section>
  )
}
