export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Unlock Skills. Exchange Knowledge.</h1>
        <p className="text-lg mb-6">StackIt lets you swap skills with a vibrant community. Learn, teach, and grow together.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Sign Up</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">Log In</button>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Web Development', 'Photography', 'Cooking'].map((skill, i) => (
            <div key={i} className="p-4 border rounded-lg shadow hover:shadow-md">
              <h3 className="text-lg font-semibold">{skill}</h3>
              <p className="text-gray-600 mt-2">Explore skilled users offering {skill.toLowerCase()} help and mentorship.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold">1. Create a Profile</h3>
            <p>List your skills and what you want to learn.</p>
          </div>
          <div>
            <h3 className="font-bold">2. Propose a Swap</h3>
            <p>Find users who match your learning goals and offer a skill exchange.</p>
          </div>
          <div>
            <h3 className="font-bold">3. Grow Together</h3>
            <p>Connect, collaborate, and build skills through community-powered learning.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
