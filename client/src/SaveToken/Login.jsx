import React, { useState } from "react";

const LoginToken = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [token, setToken] = useState(localStorage.setItem("token", ""));
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/login/loginToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const resData = await response.json();

      /*   wrong hai ye
      if (resData.ok) {
        alert("Login Saved data");
      }
      */

      console.log("data --->" + resData);
      console.log("data 5454--->" + resData.data.name);
      console.log("data msg 5454--->" + resData.message);
      console.log("data token 5454--->" + resData.token);

      if (response.ok) {
        alert("Login");

        const tokens = await resData.token;
        // Save Token
        setToken(tokens);

        const storeToken = localStorage.setItem("token", tokens);
      } else {
        alert("Failed to Login");
      }
    } catch (error) {
      console.log("an err occured while LoginTOken " + error);
      alert("Error" + error.message);
      console.log(
        "an message of err occured while loginTOken " + error.message
      );
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button>Login</button>
        <button onClick={handleReset}>Clear </button>
      </form>
    </div>
  );
};

export default LoginToken;

/**  chat gpt se --
 
import React, { useState } from "react";

const LoginToken = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/login/loginToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const resData = await response.json();
        alert("Login");

        const token = resData.token;
        localStorage.setItem("token", token); // Save token to local storage
      } else {
        alert("Failed to Login");
      }
    } catch (error) {
      console.log("An error occurred while LoginToken " + error);
      alert("Error" + error.message);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button>Login</button>
        <button onClick={handleReset}>Clear</button>
      </form>
    </div>
  );
};

export default LoginToken;

  
  
  
 */
