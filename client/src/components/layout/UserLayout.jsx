import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const UserLayout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-screen flex bg-[#070B10] text-white font-fantasy relative overflow-hidden">

      {/* ===== MOBILE OVERLAY BACKDROP ===== */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      {/* ===== LEFT SIDEBAR ===== */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#0D1922]
                    border-r border-[#895931]/40 shadow-xl p-5 flex flex-col gap-6
                    transform transition-transform duration-300 z-30
                    ${openMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* CLOSE BUTTON MOBILE */}
        <button
          onClick={() => setOpenMenu(false)}
          className="md:hidden absolute top-4 right-4 text-[#DFC89E]"
        >
          <X size={28} />
        </button>

        {/* LOGO */}
        <img
          src="/logo-nbg.png"
          alt="logo"
          className="w-40 mx-auto mt-2 mb-4 opacity-90 drop-shadow-[0_0_12px_rgba(223,200,158,0.4)]
                     hover:opacity-100 hover:scale-105 transition-all duration-300"
        />

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-lg">
          <Link
            to="/profile"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
            onClick={() => setOpenMenu(false)}
          >
            ✦ Profile
          </Link>
          <a
            href="#"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
          >
            ✦ Map
          </a>
          <a
            href="#"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
          >
            ✦ Quests
          </a>
          <Link
            to="/profile/character"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
            onClick={() => setOpenMenu(false)}
          >
            ✦ Character
          </Link>
          <a
            href="#"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
          >
            ✦ Items
          </a>
          <a
            href="#"
            className="hover:text-[#DFC89E] transition duration-300 hover:translate-x-1"
          >
            ✦ Relation
          </a>
        </nav>
      </div>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <div className="h-14 bg-gradient-to-r from-[#1B2A38] to-[#0F1922]
                        flex items-center justify-between px-6 shadow-lg
                        border-b border-[#895931]/30">

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#DFC89E]"
            onClick={() => setOpenMenu(true)}
          >
            <Menu size={32} />
          </button>

          <span className="font-semibold tracking-wide text-[#DFC89E]">
            ☽ Aether Winds Are Shifting. ☾
          </span>

          <button
            onClick={() => {
              handleLogout();
              setOpenMenu(false);
            }}  
            className="text-left hover:text-[#DFC89E] transition duration-300 hover:translate-x-1 cursor-pointer"
          >
            Sign Out
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>

        {/* BOTTOM BAR */}
        <div className="h-12 bg-gradient-to-r from-[#0F1922] to-[#1B2A38]
                        flex items-center justify-center shadow-inner
                        border-t border-[#895931]/20 text-xs sm:text-sm">
          <span className="text-[#DFC89E]/60">
            ✧ The Aether Flows Through All Things ✧
          </span>
        </div>

      </div>
    </div>
  );
};

export default UserLayout;
