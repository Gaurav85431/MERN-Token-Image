import axios from "axios";
import React, { useState } from "react";

function Delete() {
  const data = { fname: "", lastName: "" };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1") // hm koi data ko na to post na hi put karana chahte hai to hm 2nd paramter (, inputData) nhi denge.
      .then((response) => {
        console.log(response);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault(); //prevent reload

    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData) // jo v data hm form me fill karenge whi data ko update karana hai
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData} // en value m jb v koi change ho to hmara event call ho
      ></input>
      <br />
      <label> Email</label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleData}
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
