import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Step 1

export default function Skills() {
  const allSkills = [
    { id: 1, name: 'Web Development (React)', category: 'Tech' },
    { id: 2, name: 'Graphic Design (Figma)', category: 'Design' },
    { id: 3, name: 'Content Writing', category: 'Marketing' },
    { id: 4, name: 'Mobile App Development (Flutter)', category: 'Tech' },
    { id: 5, name: 'UI/UX Design', category: 'Design' },
    { id: 6, name: 'SEO Optimization', category: 'Marketing' },
    { id: 7, name: 'Data Analysis (Python)', category: 'Tech' },
    { id: 8, name: 'Video Editing', category: 'Multimedia' },
    { id: 9, name: 'Brand Strategy', category: 'Marketing' },
    { id: 10, name: 'Digital Painting', category: 'Design' },
    { id: 11, name: 'Cybersecurity Basics', category: 'Tech' },
    { id: 12, name: 'Photography', category: 'Multimedia' },
    { id: 13, name: 'Project Management', category: 'Business' },
    { id: 14, name: 'Public Speaking', category: 'Communication' },
    { id: 15, name: 'Copywriting', category: 'Marketing' },
  ];

  const [filterCategory, setFilterCategory] = useState('All');
  const navigate = useNavigate(); // ← Step 2

  const categories = ['All', ...new Set(allSkills.map(skill => skill.category))];
  const filteredSkills = allSkills.filter(skill =>
    filterCategory === 'All' ? true : skill.category === filterCategory
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Skills</h1>

      {/* Filter Section */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${filterCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(skill => (
            <div
              key={skill.id}
              onClick={() => navigate('/messages')} // ← Step 3
              className="cursor-pointer border border-gray-200 rounded-lg p-5 bg-gray-50 hover:shadow-md transition-shadow duration-200 hover:bg-blue-50"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-sm text-blue-600 font-medium">Category: {skill.category}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No skills found for this category.</p>
        )}
      </div>
    </div>
  );
}
