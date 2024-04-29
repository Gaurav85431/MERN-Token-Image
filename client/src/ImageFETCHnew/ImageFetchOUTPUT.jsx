import React, { useEffect, useState } from "react";

function ImageFetchOUTPUT() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      try {
        const resp = await fetch("http://localhost:8000/api/new/output");

        if (!resp) {
          alert("Unable To Fetch data");
        } else {
          const RespData = await resp.json();

          console.log("res -------*----- " + RespData);

          console.log("res of data -------*-----", RespData.data);

          console.log("res of message -------*-----", RespData.message);

          setData(RespData.data);
        }
      } catch (error) {
        alert("Err occured");
      }
    };

    GetData();
  }, []);

  return (
    <div>
      <h1>Fetch data image</h1>
      <ul>
        Title
        {data.map((itm, index) => (
          <li key={index}>{itm.title}</li>
        ))}
      </ul>
      <br />
      <ul>
        Image
        {data.map((itm, index) => (
          <li key={index}>{itm.image}</li>
        ))}
      </ul>
    </div>
  );
}

export default ImageFetchOUTPUT;
