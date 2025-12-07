import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api/user';
import { AuthContext } from '../context/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await registerUser({ name, email, password });
      login(userData); 
      navigate('/profile'); // go straight to profile after onboarding
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="/fantasy-bg.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90"></div>

      {/* Logo (top left) */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-20 flex items-center gap-2"
      >
        <img 
          src="/logo-nbg.png" 
          alt="Logo"
          className="w-35 h-35 object-contain drop-shadow-lg hover:scale-105 transition"
        />
      </Link>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-[#0F1922]/90 rounded-xl shadow-lg text-white flex flex-col gap-6 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded bg-[#19232F]/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded bg-[#19232F]/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded bg-[#19232F]/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="cursor-pointer px-4 py-3 bg-gradient-to-r from-[#DFC89E] to-[#895931] hover:from-[#895931] hover:to-[#895931] rounded-xl font-semibold text-white transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
