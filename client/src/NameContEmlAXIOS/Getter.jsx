// jb api ko call  krenge to hm useEffect() k under krenge

import axios from "axios";
import React, { useEffect, useState } from "react";

const Getter = () => {
  const [myData, setMyData] = useState([]);

  // jb koi data hme chahiye to hm useState ka use karte hain.
  useEffect(() => {
    axios.get("http://localhost:8000/api/new/getInfo").then((response) => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("response from axios get is ", response);
      // setMyData(response.data);
      setMyData(response.data.data);

      console.log("Data is --==--==--==--==--==", response.data.data);
    });
  }, []);

  return (
    <div>
      {myData.map((data) => {
        // we'll use map() to show all data;
        return <div>{data.name}</div>;
      })}
    </div>
  );
};

export default Getter;
