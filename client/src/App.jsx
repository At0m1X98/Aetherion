import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/routes/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';
import CharacterPage from './pages/CharacterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         {/* Protected pages */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/character"
          element={
            <ProtectedRoute>
              <CharacterPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
