import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const initial = user?.name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-10 text-white">

      {/* Profile Header */}
      <div className="flex flex-col items-center gap-4 w-full">

        {/* Avatar */}
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full 
                     bg-gradient-to-br from-[#DFC89E] to-[#8A5C30]
                     flex items-center justify-center 
                     text-3xl sm:text-4xl font-bold text-black
                     shadow-[0_0_20px_rgba(223,200,158,0.6)] 
                     border-4 border-[#DFC89E]/60"
        >
          {initial}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#DFC89E] text-center">
          {user.name}
        </h1>

        <p className="text-[#C6B9A5]/80 text-sm text-center">
          (Adventurer of the Aetherion Realms)
        </p>

        <Link
          to="/profile/edit"
          className="mt-3 px-4 py-2 sm:px-5 sm:py-2 bg-gradient-to-r 
                     from-[#DFC89E] to-[#8A5C30]
                     hover:from-[#8A5C30] hover:to-[#DFC89E]
                     text-black font-semibold rounded-lg transition shadow-lg"
        >
          ✎ Edit Profile
        </Link>
      </div>

      {/* Full-width Profile Info Card */}
      <div
        className="mt-10 w-full max-w-4xl mx-auto bg-[#0F1922]/80 rounded-xl 
                   p-6 sm:p-8 shadow-xl border border-[#895931]/30 backdrop-blur-sm"
      >
        <h2 className="text-xl sm:text-2xl mb-4 font-semibold text-[#DFC89E]">
          Basic Information
        </h2>

        <div className="flex flex-col gap-4 text-[#C8C8C8]">

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-[#DFC89E]/70">Email:</span>
            <span className="break-all">{user.email}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-[#DFC89E]/70">Played Time:</span>
            <span>— Coming Soon —</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-[#DFC89E]/70">Characters:</span>
            <span>— Coming Soon —</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
