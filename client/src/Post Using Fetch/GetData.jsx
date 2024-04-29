import React, { useEffect, useState } from "react";

function GetData() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await fetch("http://localhost:8000/api/new/getInfo");

        const data = await res.json();
        console.log("data is ///*** " + data);
        console.log("data data is ///*** " + data.data);
        console.log("data message is ///*** " + data.message);

        setName(data.data.map((itm) => itm.name));
        setEmail(data.data.map((itm) => itm.email));
        setContact(data.data.map((itm) => itm.contact));
      } catch (error) {
        console.log("error while fetching data from GetData");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{contact}</h3>
    </div>
  );
}

export default GetData;
