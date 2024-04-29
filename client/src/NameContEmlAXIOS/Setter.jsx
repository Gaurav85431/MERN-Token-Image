// post data using axios;

import React, { useState } from "react";
import axios from "axios";

function Setter() {
  const data = { name: "", email: "", contact: "" };
  const [inputData, setInputData] = useState(data);

  // when user insert krega use hm input data ka  current value me set karana  hoga.
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    // pehle ka data rkho waise ka waise
  }

  function handleSubmit(e) {
    e.preventDefault();
    // jo data ko post krana hai (i.e. inputData) usko v vejo as a 2nd parameter
    axios
      .post("http://localhost:8000/api/new/setInfo", inputData)
      .then((response) => {
        alert("save");
        console.log("Response is", response);
      })
      .catch((error) => {
        console.log("error is " + error);
      });
  }

  return (
    <>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={inputData.name}
        onChange={handleData} // en value m jb v koi change ho to hmara event call ho
      ></input>{" "}
      <br />
      <label> Email</label>
      <input
        type="email"
        name="email"
        value={inputData.email}
        onChange={handleData}
      />{" "}
      <br />
      <label> Contact </label>
      <input
        type="phone"
        name="contact"
        value={inputData.contact}
        onChange={handleData}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Setter;
