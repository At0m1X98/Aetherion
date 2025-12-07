	import React, { useEffect, useState, useContext } from 'react'
	import { AuthContext } from '../context/AuthContext';
	import { useNavigate } from 'react-router-dom'

	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

	const LandingPage = () => {
		const [serverOnline, setServerOnline] = useState(false);
		const { user, loading } = useContext(AuthContext);
		const navigate = useNavigate();

		useEffect(() => {
			if (!loading && user) {
				navigate('/profile'); // redirect if already logged in
			}
		}, [user, loading, navigate]);

		// Check server status
  		useEffect(() => {
		const checkServer = async () => {
			try {
				const res = await fetch(`${API_BASE}/health`);
				setServerOnline(res.ok);
			} catch {
				setServerOnline(false);
			}
		};

    checkServer(); // initial check
    const interval = setInterval(checkServer, 5000); // check every 5 sec
    return () => clearInterval(interval);
  }, []);

		return (
			<div className='relative min-h-screen flex flex-col items-center justify-center'>

				{/*Background video*/}
				<video
					autoPlay
					loop
					muted
					className="absolute top-0 left-0 w-full h-full object-cover"
					src='/storm-back.mp4'
				></video>

				{/*Overlay*/}
				<div className='absolute top-0 left-0 w-full h-full bg-black/90'></div>

				{/*Main Content*/}
				<div className='relative z-10 text-center p-10 text-white flex flex-col items-center'>
					<img src="./logo-nbg.png" alt="logo" className='w-125 h-auto'/>
					<p className="text-lg text-slate-300 max-w-xl text-center mb-10 font-fantasy">
						A magical multiplayer tabletop world where realms shift, heroes rise, and the map itself breathes with Aether.
					</p>
					<button 
						className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#DFC89E] to-[#895931] hover:from-[#895931] hover:to-[#895931] rounded-xl text-lg font-fantasy font-semibold text-white shadow-lg hover:shadow-[#DFC89E] transition-all duration-700"
						onClick={() => navigate('/login')}
					>
						Enter the Realms
					</button>
				</div>

				{/* Server Status */}
      			<div className='fixed bottom-4 right-4 flex items-center gap-2 text-white text-lg font-semibold z-30'>
        			<span>Server</span>
        			<span className={`w-3 h-3 rounded-full ${serverOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
      			</div>
			</div>
		)
	}

	export default LandingPage
