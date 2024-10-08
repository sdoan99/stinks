import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import JournalPage from './components/JournalPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-blue-300">Home</Link>
              </li>
              <li>
                <Link to="/journal" className="text-white hover:text-blue-300">Trading Journal</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;