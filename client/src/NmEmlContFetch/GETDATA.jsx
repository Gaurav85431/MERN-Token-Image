// import React, { useEffect, useState } from "react";

// const GETDATA = async () => {
//   const [name, setName] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [contact, setContact] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("http://localhost:8000/api/new/getInfo");

//         const resp = await response.json();

//         console.log("Response is " + resp);

//         console.log("data from response is " + resp.data);

//         setName(resp.data.map((itm) => itm.name));
//         setEmail(resp.data.map((itm) => itm.email));
//         setContact(resp.data.map((itm) => itm.contact));
//       } catch (error) {
//         console.log("error ocur");
//         alert("errorr");
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Get data</h1>
//       <h2>Nm = {name}</h2>
//       <h2>Eml = {email}</h2>

//       <h2>cont= {contact}</h2>

//       {/* {name.map((name) => (
//         <h2>Nm = {name}</h2>
//       ))}

//       {email.map((email) => (
//         <h2>Eml = {email}</h2>
//       ))}

//       {contact.map((contact) => (
//         <h2>cont= {contact}</h2>
//       ))} */}
//     </div>
//   );
// };

// export default GETDATA;

//////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

import React, { useEffect, useState } from "react";

const GETDATA = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/new/getInfo");
        const resp = await response.json();

        setName(resp.data.map((itm) => itm.name));
        setEmail(resp.data.map((itm) => itm.email));
        setContact(resp.data.map((itm) => itm.contact));
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again."); // Set error message
        setLoading(false); // Set loading to false in case of error
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h1>Get data</h1>
      {name.map((nm, index) => (
        <div key={index}>
          <h2>Nm = {nm}</h2>
          <h2>Eml = {email[index]}</h2>
          <h2>cont = {contact[index]}</h2>
        </div>
      ))}
    </div>
  );
};

export default GETDATA;
