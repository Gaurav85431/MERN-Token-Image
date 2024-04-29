import React, { useEffect, useState } from "react";

const Give = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function HandleData() {
      try {
        const resp = await fetch("http://localhost:8000/api/new/getInfo");
        const data = await resp.json();
        console.log("Dta is " + data);
        console.log("Original data is " + data.data);
        console.log("message is ---------" + data.message);

        setName(data.data.map((itm) => itm.name));
        // setContact(data.daa.contact);  // It will not works
        setContact(data.data.map((itm) => itm.contact));

        setEmail(data.data.map((itm) => itm.email));
      } catch (error) {
        console.log("an err occured " + error);
      }
    }
    HandleData(); //call function
  }, []);

  return (
    <div>
      <h1>Fetching data is sisisisi</h1>
      {/* {name.map((index, name) => (
        <h1 key={index}>My Name is --- {name}</h1>
      ))}
      {email.map((index, email) => (
        <h1 key={index}> My Email is --- {email} </h1>
      ))}
      {contact.map((index, contact) => (
        <h1 key={index}>My email is ------ {contact}</h1>
      ))} */}

      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{contact}</h1>
    </div>
  );
};

export default Give;
