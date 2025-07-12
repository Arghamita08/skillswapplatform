export default function Swap() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Swap Proposal</h2>

      {/* Swap Details */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Swap Details</h3>
        <div className="border p-4 rounded">
          <p><strong>You offer:</strong> Graphic Design</p>
          <p><strong>You seek:</strong> Public Speaking</p>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Terms & Conditions</h3>
        <textarea
          className="w-full border rounded p-3"
          placeholder="Propose a time, location (if needed), and expectations..."
        ></textarea>
      </section>

      {/* Messaging */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Message</h3>
        <div className="border p-3 rounded bg-gray-50">
          <p><strong>You:</strong> Hey! I'd love to exchange skills this weekend. Let me know what works for you!</p>
        </div>
        <input
          className="mt-2 w-full border rounded p-2"
          type="text"
          placeholder="Type your message..."
        />
      </section>

      {/* Proposal Status */}
      <section>
        <h3 className="text-lg font-bold mb-2">Proposal Status</h3>
        <span className="inline-block px-3 py-1 text-sm rounded bg-yellow-200 text-yellow-800">Pending</span>
      </section>
    </div>
  )
}
