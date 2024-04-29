/*
import React, { useEffect, useState } from "react";

function GetImage() {
  const [myData, setMyData] = useState(null);

  // useEffect(()=>{
  //     fetch('http://localhost:8000/api/new/getImage').then(response=>{
  //         response.json().then(myData=>{
  //             setMyData(myData)
  //         })
  //     })
  // },[])

  useEffect(() => {
    fetch("http://localhost:8000/api/new/getImage")
      .then((response) => {
        response.json();
        // console.log("data is 54 " + data.allData.message);
        console.log("hi " + myData);
        console.log("resp " + response);
        console.log("resp ok " + response.ok);
      })

      .then((data) => {
        setMyData(data);
        // console.log("response --------" + response);
        // console.log("data is " + data);
        // console.log("data is 5 " + data.allData);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  if (!myData) {
    return null;
  }

  return (
    <div>
      <h1>Get image:::</h1>

      <h1>All data --- {myData}</h1>

      <div className="image">
        <img src={myData.data.image} alt="Image" />
      </div>
    </div>
  );
}

export default GetImage;
*/

/*
import React, { useEffect, useState } from "react";

function GetImage() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/new/getImage")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("response is " + response);
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        // Data is now parsed JSON
        setMyData(data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  if (!myData) {
    return null;
  }

  // Construct the image URL by removing the 'public\' directory from the image path

  // const imageUrl = `http://localhost:8000/${myData.data[0].image.replace(
  //   "public\\",
  //   ""
  // )}`;

  // const imageUrl =
  // "https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain";

  return (
    <>
      <h1>Get image:::</h1>
      <h2>{myData.title}</h2>
      <div className="image">
        {/* Access the image URL from the data object * / }

        { /* <img src={myData.data.image} alt="Image" height="500px" width="400px" /> * /}

        <img src={imageUrl} alt="Image" />
      </div>
    </>
  );
}

export default GetImage;
*/

import React, { useEffect, useState } from "react";

function GetImage() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/new/getImage")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        // Data is now parsed JSON
        console.log("data.data =" + data.message);
        console.log("data.a =" + data.data[0].image);
        if (data.data.length > 0) {
          const imagePath = data.data[0].image.replace("public\\", "");
          setImageUrl(imagePath);
        } else {
          throw new Error("No image found in data");
        }
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  if (!imageUrl) {
    return null;
  }

  return (
    <div>
      <h1>Get image:::</h1>
      <div className="image">
        {/* Set the src attribute of the image to the relative image path */}
        <img src={`http://localhost:8000/${imageUrl}`} alt="Image" />

        {/* <img src={imageUrl} alt="my img" /> */}
      </div>
    </div>
  );
}

export default GetImage;
