// import React, { useEffect, useState } from "react";

// const GetInfo = () => {
//   const [name, setName] = useState([]);
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         console.log("THis is first");

//         const res = await fetch("http://localhost:8000/api/new/getInfo");

//         if (!res.ok) {
//           // throw new Error("Failed to fetch data");
//           alert(
//             "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
//           );
//         }

//         console.log("res is  --------------------" + res);

//         const resData = await res.json();

//         console.log("data is " + resData);

//         console.log("data of res is " + resData.data);

//         setName(resData.name);
//         setEmail(resData.email);
//         setContact(resData.contact);
//       } catch (error) {
//         console.log("error ");
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Name email contact</h1>

//       {/* <h2>Name is -------</h2>
//       <ul>
//         {name.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>

//       <h2>contact is </h2>
//       <ul>
//         {contact.map((contact, index) => (
//           <li key={index}>{contact}</li>
//         ))}
//       </ul>

//       <h3>Email is </h3> */}
//       {/* <ul>{email.map((email, index))}</ul> */}

//       {/* ----------------- */}

//       <h2>Name is -------</h2>
//       {Array.isArray(name) ? (
//         <ul>
//           {name.map((name, index) => (
//             <li key={index}>{name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>{name}</p>
//       )}

//       <h2>contact is </h2>
//       {Array.isArray(contact) ? (
//         <ul>
//           {contact.map((contact, index) => (
//             <li key={index}>{contact}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>{contact}</p>
//       )}
//     </div>
//   );
// };

// export default GetInfo;

// --------------------------------------------------------------
import React, { useEffect, useState } from "react";

const GetInfo = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null); // State for storing error

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching data...");

        const res = await fetch("http://localhost:8000/api/new/getInfo");

        console.log("res is " + res);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const resData = await res.json();

        console.log("Data received:", resData);

        console.log("data is ", resData.data);

        console.log("MSG is ", resData.message);

        // setName(resData.data.name);
        // setEmail(resData.data.email);
        // setContact(resData.data.contact);

        setName(resData.data.map((item) => item.name));
        setEmail(resData.data.map((item) => item.email));
        setContact(resData.data.map((item) => item.contact));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error state
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Name email contact</h1>

      {error ? (
        <p>Error: {error}</p> // Render error message if there's an error
      ) : (
        <>
          <h2>Name is -------</h2>

          <ul>
            {name.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>

          {/* <p>{name}</p> */}

          <h2>Contact is </h2>
          <ul>
            {contact.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>

          <h3>Email is </h3>
          <ul>
            {email.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </>
        /**
         The difference between `setName(resData.data.name);` and `setName(resData.data.map((item) => item.name));` lies in the structure of the data being set and the way it's being processed.

1. **`setName(resData.data.name);`**: 
   - This line assumes that `resData.data` contains a single object with a `name` property. 
   - It directly sets the `name` state to the value of the `name` property of the first object in the `resData.data` array.

2. **`setName(resData.data.map((item) => item.name));`**: 
   - This line assumes that `resData.data` is an array of objects, each containing a `name` property.
   - It maps over each object in the `resData.data` array and extracts the `name` property from each object, creating a new array containing only the `name` values.
   - It then sets the `name` state to this new array of `name` values.

In summary:

- Use `setName(resData.data.name);` when you expect `resData.data` to contain a single object with a `name` property.
- Use `setName(resData.data.map((item) => item.name));` when you expect `resData.data` to be an array of objects and you want to extract the `name` properties from each object into an array.
         */
      )}
    </div>
  );
};

export default GetInfo;
