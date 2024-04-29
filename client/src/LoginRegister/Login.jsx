import React, { useState } from "react";

function Login() {
  // It is for take input and send to server
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // It is for getting data from server and show to ui
  const [data, setData] = useState([]);
  const [myemail, setMyEmail] = useState([]);
  const [contact, setContact] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("98979798");
      const resp = await fetch("http://localhost:8000/api/login/SignIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const respData = await resp.json();

      if (respData) {
        console.log("Data is -=-=-=-=-=-====" + respData);
        console.log("Data is -=-=-=-=-=-====" + respData.data);
        console.log("data value is " + respData.data.data);
        alert("Login in success");
        console.log("Name is dta " + respData.data.name);

        setData(respData.data);

        // To get data
        setData(respData.data.name);
        setMyEmail(respData.data.email);
        setContact(respData.data.contact);
      } else {
        console.log("failed to respdata");
        alert("data failed to find i.e. respdata;");
      }
    } catch (error) {
      console.log("error is " + error.message);
      alert("error in loign" + error.message);
    }
  };

  const handleReset = (e) => {
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label> <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <br />
      <br />
      <div>
        <h1>Data are-</h1>
        {/* 
        {data.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))} */}
        <h2>Name:- {data}</h2>
        <h3>Email:- {myemail} </h3>
        <h3>Contact:- {contact}</h3>
      </div>
    </div>
  );
}

export default Login;
