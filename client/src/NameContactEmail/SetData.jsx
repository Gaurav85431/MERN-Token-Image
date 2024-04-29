import React, { useState } from "react";

function SetData() {
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
      console.log("Respnse iis  " + response);

      if (response) {
        alert("Save data");
        console.log("data saved");
      }
    } catch (error) {
      console.log("An error occured" + error);
      console.log("An error occured" + error.message);
      alert("error  ");
    }
  };

  return (
    <>
      <h1>Set data </h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />

        <label>Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>
        <br />
        <br />

        <button type="submit">Submit</button>
        {/* 
            <button type='submit'>Submit</button>: This button has its type attribute explicitly set to "submit". When placed within a form element, clicking this button will submit the form's data to the server for processing.

<button>Submit</button>: This button does not have its type attribute specified. In this case, the default behavior is assumed, which is also "submit". So, functionally, it behaves the same as the first button when placed within a form element.

Both buttons will generally have the same visual appearance and behavior when clicked within a form. However, specifying type='submit' explicitly makes it clearer for developers that the button's purpose is to submit the form.






        */}
      </form>
    </>
  );
}

export default SetData;
