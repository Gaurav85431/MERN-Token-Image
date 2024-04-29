import React, { useState } from "react";

function Logout() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      setToken("");
      localStorage.removeItem("token");
      alert("log out");
    } catch (error) {
      alert("Logout error");
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
