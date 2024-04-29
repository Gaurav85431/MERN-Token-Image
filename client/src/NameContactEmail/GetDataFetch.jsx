import React, { useEffect, useState } from "react";

const GetDataFetch = () => {
  const [data, setData] = useState([]);
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

        setData(resData.data);
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
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>

          <h2>Contact is </h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.contact}</li>
            ))}
          </ul>

          <h3>Email is </h3>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.email}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GetDataFetch;
