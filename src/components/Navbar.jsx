import React, { useState } from "react";
import { Menu, X, Home, Zap, User, LogOut } from "lucide-react";

const Navbar = ({ onOpenHome, onOpenChooseTemplates, user, onLogin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-red-800 to-yellow-300 text-white shadow-md px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <h1 className="bg-gradient-to-r from-red-500 to-yellow-600 rounded-lg w-auto font-bold text-2xl">
            <span>Resume </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg"> Builder</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg items-center">
            <li onClick={onOpenHome}className="flex items-center gap-2 font-bold text-black hover:text-white transition hover:bg-gradient-to-r from-red-700 to-yellow-300 rounded-lg cursor-pointer"
            >
              <Home size={24} /> Home
            </li>
            <li onClick={onOpenChooseTemplates} className="flex items-center gap-2 font-bold text-black hover:text-white transition hover:bg-gradient-to-r from-red-700 to-yellow-300 rounded-lg cursor-pointer"
            >
              Get Started <Zap size={18} />
            </li>

            {/* Dynamic Login Section */}
            {!user ? (
              <li onClick={onLogin} className="flex items-center gap-2 font-bold text-black hover:text-white transition hover:bg-gradient-to-r from-red-700 to-yellow-300 rounded-lg cursor-pointer"
              >
                Login <User size={20} />
              </li>
            ) : (
              <li className="flex items-center gap-3">
                <img src={user.photo} alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="font-bold text-black">{user.name}</span>
                <button onClick={onLogout}className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  <LogOut size={16} /> Logout
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden font-bold text-2xl">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-20 left-0 h-full w-64 bg-gradient-to-r from-red-400 to-yellow-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-10 backdrop-blur-2xl`}
        >
          <ul className="flex flex-col mt-20 space-y-6 px-6 text-lg">
            <li onClick={onOpenHome}className="flex items-center gap-2 text-white font-bold text-2xl bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl cursor-pointer"
            >
              <Home size={24} /> Home
            </li>
            <li onClick={onOpenChooseTemplates}  className="flex items-center gap-2 text-white font-bold text-2xl bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl cursor-pointer"
            >
              Get Started <Zap size={18} />
            </li>

            {!user ? (
              <li onClick={onLogin}className="flex items-center gap-2 text-white font-bold text-2xl bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl cursor-pointer"
              >
                Login <User size={20} />
              </li>
            ) : (
              <li className="flex flex-col items-start gap-3 text-white font-bold text-xl bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl p-3">
                <div className="flex items-center gap-3">
                  <img src={user.photo} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
                  <span>{user.name}</span>
                </div>
                <button onClick={onLogout}className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
