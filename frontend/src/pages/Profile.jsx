export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">Jane Doe</h2>
          <p className="text-gray-600">Creative designer & aspiring speaker.</p>
        </div>
      </div>

      {/* Skills Offered */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Skills Offered</h3>
        <ul className="space-y-2">
          <li className="border p-3 rounded">Graphic Design - 4.8⭐</li>
          <li className="border p-3 rounded">Brand Consulting - 4.6⭐</li>
        </ul>
      </div>

      {/* Skills Sought */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Skills Sought</h3>
        <ul className="space-y-2">
          <li className="border p-3 rounded">Public Speaking - To improve confidence in pitching ideas</li>
          <li className="border p-3 rounded">Video Editing - For social media content</li>
        </ul>
      </div>

      {/* Swap History */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Swap History</h3>
        <ul className="space-y-2">
          <li className="border p-3 rounded">
            Swapped Graphic Design with Alex (Completed)
          </li>
          <li className="border p-3 rounded">
            Requested Video Editing from Priya (Pending)
          </li>
        </ul>
      </div>
    </div>
  )
}
