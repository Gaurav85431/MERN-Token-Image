/*

import React, { useCallback, useEffect, useState } from "react";

function ImageFetchOutputImage() {
  const [image, setImage] = useState("");

  // const [error, setError] =useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const resp = await fetch(
        //   "http://localhost:8000/api/new/output-image/662f9861a07c78979dfe8c53"
        // );
        const respData = await fetch(
          "http://localhost:8000/api/new/output-image/662f9861a07c78979dfe8c53"
        );

        // console.log("Response =", resp);

        if (!respData.ok) {
          alert("Error");
        }
        // if (!resp.ok) {
        //   alert("Error");
        // }
        // const respData = await resp.json();

        console.log("Data received " + respData);
        // console.log("data isss" + respData.data);
        // console.log("Message is " + respData.message);

        console.log("resp5412------ " + respData.response);
        console.log("resp320----- ", respData.url);
        setImage(respData);
        // setImage(respData.url);
      } catch (error) {
        console.log("error = " + error);
        console.log("error of message " + error.message);
        alert("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Imageee</h1>
      <img src={image} alt="image" />
    </div>
  );
}

export default ImageFetchOutputImage;


*/

import React, { useEffect, useState } from "react";

function ImageFetchOutputImage() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const respData = await fetch(
        //   "http://localhost:8000/api/new/output-image/662f9861a07c78979dfe8c53"
        // );
        const respData = await fetch(
          "http://localhost:8000/api/new/output-image/662f70e27f7b2b82e40de094"
        );

        if (!respData.ok) {
          throw new Error("Failed to fetch image");
        }

        // Convert the image data to a data URL
        const blob = await respData.blob();
        const imageUrl = URL.createObjectURL(blob);

        setImage(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
        alert("Error fetching image");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Image</h1>
      {image && <img src={image} alt="image" />}
    </div>
  );
}

export default ImageFetchOutputImage;
