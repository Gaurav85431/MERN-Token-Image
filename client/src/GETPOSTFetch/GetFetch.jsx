import React, { useEffect, useState } from "react";

const GetFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      try {
        const resp = await fetch("http://localhost:8000/api/new/GetInfo");
        if (!resp) {
          alert("Unable to fetch data");
        } else {
          const RespDataJSON = await resp.json();

          console.log("Response is " + RespDataJSON);

          console.log("res data " + RespDataJSON.data);
          console.log("res data is message " + RespDataJSON.message);

          setData(RespDataJSON.data);
        }
      } catch (error) {
        alert("error occur");
      }
    };
    GetData();
  }, []);

  return (
    <>
      <ul>
        Name is ---------
        {data.map((itm, index) => (
          <li key={index}>{itm.name}</li>
        ))}
      </ul>
      <ul>
        Email is ---
        {data.map((itm, index) => (
          <li key={index}>{itm.email}</li>
        ))}
      </ul>
      <ul>
        Contact is ---
        {data.map((itm, index) => (
          <li key={index}>{itm.contact}</li>
        ))}
      </ul>
    </>
  );
};

export default GetFetch;
