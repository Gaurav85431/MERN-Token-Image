import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, contact }),
      });
      console.log("response is 42232" + response);
      if (response) {
        alert("Data saved");
        console.log("data saved successfully");
      } else {
        alert("Data not saved");
        console.log("data not saved successfully");
      }
    } catch (error) {
      alert("Error occured", error.message);
      console.log("Error occured ", error.message);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setContact("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* style={"border":"2px soild red"} */}
        <label>Name</label> <br />
        <input
          type="text"
          input="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          input="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          input="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <label>Contact</label>
        <br />
        <input
          type="phone"
          input="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Sign Up</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
};

export default Register;
