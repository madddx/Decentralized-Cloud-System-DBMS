import React, { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dashboardView, setDashboardView] = useState(false);

  const handleLogin = () => {
    const email = "mh8077@srmist.edu.in"; // Hardcoded credentials
    const password = "mad123";

    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;

    if (inputEmail === email && inputPassword === password) {
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {!loggedIn ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 mb-3 text-black rounded"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 mb-3 text-black rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded transition"
          >
            Login
          </button>
        </div>
      ) : !dashboardView ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">Access Granted</h2>
          <button
            onClick={() => setDashboardView(true)}
            className="w-full bg-green-600 hover:bg-green-700 p-2 rounded transition mb-3"
          >
            Your Dashboard
          </button>
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 p-2 rounded transition">
            Create Server
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <button className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded transition mb-3">
            View Servers
          </button>
          <button className="w-full bg-teal-600 hover:bg-teal-700 p-2 rounded transition mb-3">
            Upload File
          </button>
          <button className="w-full bg-orange-600 hover:bg-orange-700 p-2 rounded transition">
            View/Download Files
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
