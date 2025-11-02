import React, { useState } from "react";
import { signInWithGoogle, logout } from "../firebase";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
      setUser(userData);
      onLogin(userData); // Pass user info to parent
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    onLogin(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6">
      {!user ? (
        <button onClick={handleLogin}className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <img src={user.photo} alt="profile" className="rounded-full w-16 h-16 mb-2" />
          <p className="font-semibold">{user.name}</p>
          <button onClick={handleLogout}className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-2 hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
