import React, { useState } from "react";

function POSTDATA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8000/api/new/setInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact }),
      });

      if (resp) {
        alert("saved data");
      } else {
        alert("not data saved");
      }
    } catch (error) {
      console.log("error occur ", error);
      alert("Error occur");
    }
  };

  return (
    <div>
      <h1>post data</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default POSTDATA;
