import { useState } from 'react'

const mockSkills = [
  {
    id: 1,
    skill: 'Graphic Design',
    description: 'I can help with logos, posters, and branding.',
    user: 'Alice',
    category: 'Design',
    location: 'Delhi',
    rating: 4.5,
  },
  {
    id: 2,
    skill: 'Web Development',
    description: 'Front-end development using React and Tailwind.',
    user: 'Bob',
    category: 'Programming',
    location: 'Bangalore',
    rating: 4.8,
  },
  {
    id: 3,
    skill: 'Photography',
    description: 'Event and portrait photography.',
    user: 'Charlie',
    category: 'Art',
    location: 'Mumbai',
    rating: 4.3,
  },
]

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [minRating, setMinRating] = useState(0)

  const filteredSkills = mockSkills.filter((skill) => {
    return (
      skill.skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || skill.category === category) &&
      (location === '' || skill.location === location) &&
      skill.rating >= minRating
    )
  })

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Skill Marketplace</h2>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search skills..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Programming">Programming</option>
          <option value="Art">Art</option>
        </select>

        <select
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select
          className="border p-2 rounded"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
        >
          <option value="0">All Ratings</option>
          <option value="4">4+ stars</option>
          <option value="4.5">4.5+ stars</option>
        </select>
      </div>

      {/* Skill Listings */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <div key={skill.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-1">{skill.skill}</h3>
              <p className="text-gray-700 mb-2">{skill.description}</p>
              <div className="text-sm text-gray-600">
                <p><strong>User:</strong> {skill.user}</p>
                <p><strong>Category:</strong> {skill.category}</p>
                <p><strong>Location:</strong> {skill.location}</p>
                <p><strong>Rating:</strong> ⭐ {skill.rating}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No skills found matching your filters.</p>
        )}
      </div>
    </div>
  )
}
