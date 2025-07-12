import React, { useState } from 'react'

const mockUsers = [
  { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1', specialization: 'Graphic Design' },
  { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2', specialization: 'React Developer' },
  { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3', specialization: 'Photography' },
]

const mockMessages = {
  1: [
    { sender: 'you', text: 'Hi Alice, want to swap design skills?' },
    { sender: 'Alice', text: 'Yes! Let’s do it.' },
  ],
  2: [
    { sender: 'you', text: 'Hey Bob, can you help with React?' },
    { sender: 'Bob', text: 'Sure! What’s the problem?' },
  ],
  3: [
    { sender: 'you', text: 'Hello Charlie, interested in photography swap?' },
    { sender: 'Charlie', text: 'I’m in. When do we start?' },
  ],
}

export default function Messages() {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [inputMessage, setInputMessage] = useState('')

  const selectedUser = mockUsers.find(user => user.id === selectedUserId)
  const messages = selectedUserId ? mockMessages[selectedUserId] : []

  const handleSend = () => {
    if (!inputMessage.trim()) return
    messages.push({ sender: 'you', text: inputMessage })
    setInputMessage('')
  }

  return (
    <div className="flex h-[80vh]">
      {/* Left: Profile List */}
      <div className="w-1/3 border-r p-4 bg-gray-50 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Choose a User</h2>
        <div className="space-y-4">
          {mockUsers.map(user => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition ${
                selectedUserId === user.id ? 'bg-blue-200' : 'bg-white'
              }`}
              onClick={() => setSelectedUserId(user.id)}
            >
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Chat Window */}
      <div className="flex-1 flex flex-col p-4">
        {selectedUser ? (
          <>
            <div className="border-b pb-2 mb-4 flex items-center gap-3">
              <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-lg font-bold">{selectedUser.name}</h3>
                <p className="text-sm text-gray-500">{selectedUser.specialization}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-xs p-2 rounded-lg ${
                    msg.sender === 'you'
                      ? 'bg-blue-600 text-white ml-auto'
                      : 'bg-gray-200 text-black mr-auto'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border p-2 rounded"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg">
            Select a user to start chatting.
          </div>
        )}
      </div>
    </div>
  )
}
