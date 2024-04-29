import React, { useState } from "react";

function PostFetch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8000/api/new/SetInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact }),
      });

      if (resp) {
        alert("Data inserted");
      } else {
        alert("Unable to insert");
      }
    } catch (error) {
      alert("Error occur");
    }
  };

  const handleReset = (e) => {
    // Clear everything
    e.preventDefault();
    setName("");
    setEmail("");
    setContact("");
  };

  return (
    <>
      <h1>POST DATA using Post fetch===================================</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br></br>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Email</label> <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Contact</label> <br />
        <input
          type="phone"
          name="contact"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}

export default PostFetch;
