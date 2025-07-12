import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Swap from './pages/Swap';
import Messages from './pages/Messages';
import Navbar from './components/Navbar';
import SignUp from './pages/Signup';
import Login from './pages/Login'; 

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<div>Forgot Password Page Placeholder</div>} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
