import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Skills from './pages/Skills'
import Swap from './pages/Swap'
import Messages from './pages/Messages'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
