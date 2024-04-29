// in this we will use only one useState by this we will get data from database. And also we will apply map() function in return section not in handleData function;

import React, { useEffect, useState } from "react";

const GiiveData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const resp = await fetch("http://localhost:8000/api/new/getInfo");

        const resData = await resp.json();

        console.log("All resData is --------->" + resData);
        console.log("All data is *********---->" + resData.data);

        setData(resData.data);
      } catch (error) {
        alert("Error occur");
        console.log("errererer erere " + error.message);
      }
    };
    handleData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((itm, index) => (
          <li key={index}>
            Name = {itm.name} &nbsp; Email = {itm.email} &nbsp; Contact ={" "}
            {itm.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiiveData;
