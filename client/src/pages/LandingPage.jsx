	import React, { useEffect, useState, useContext } from 'react'
	import { AuthContext } from '../context/AuthContext';
	import { useNavigate } from 'react-router-dom'

	const LandingPage = () => {
		const [serverOnline, setServerOnline] = useState(false);
		const { user, loading } = useContext(AuthContext);
		const navigate = useNavigate();

		useEffect(() => {
			if (!loading && user) {
				navigate('/profile'); // redirect if already logged in
			}
		}, [user, loading, navigate]);

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
			</div>
		)
	}

	export default LandingPage
