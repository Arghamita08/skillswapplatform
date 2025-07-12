import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">StackIt</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/swap">Swap</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}
