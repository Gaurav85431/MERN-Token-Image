import React, { useState } from "react";

function PostImage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/image/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, image }),
      });

      console.log("image title imae---------" + response);

      if (response.ok) {
        alert("Data inserted");
      } else {
        alert("Not inserted");
      }
    } catch (error) {
      console.log("error in handlesubmit catch");
    }
  };

  const ResetValue = async (e) => {
    e.preventDefault();
    try {
      setTitle("");

      const input = document.querySelector('input[type="file"]');
      if (input) {
        input.value = ""; // Clear the selected file
      }

      setImage(null);
    } catch (error) {
      console.log("Err in reset value catch");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h1>Post Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label>Image</label> <br />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          // value={image}
        />
        <br />
        <button>Submit</button>
        <button onClick={ResetValue}>Reset</button>
      </form>
    </div>
  );
}

export default PostImage;
