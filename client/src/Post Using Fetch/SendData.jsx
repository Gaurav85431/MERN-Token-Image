import React, { useState } from "react";

function SendData() {
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

      const resData = await resp.json();

      if (resp.ok) {
        alert("Saved data");
      }

      console.log("data -" + resData);
    } catch (error) {
      alert("error");
      console.log("Error is -> " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SendData;
