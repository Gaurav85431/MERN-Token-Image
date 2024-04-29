import React, { useState } from "react";

function Take() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/setInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact }),
      });

      console.log("Respnse iis ->>>>>>>>>>>>>>>>>>>>>>>  " + response);

      if (response.ok) {
        alert("Data saved");
      } else {
        alert("Data not saved");
      }
    } catch (error) {
      console.log("err occur");
      alert("Error in the catch");
    }
  };

  // to reset form
  const handleReset = (e) => {
    e.preventDefault(); // prevent submit
    setName("");
    setEmail("");
    setContact("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Contact</label>
      <input
        type="phone"
        value={contact}
        name="contact"
        onChange={(e) => setContact(e.target.value)}
      />
      <br />
      <br />
      <button>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Take;
