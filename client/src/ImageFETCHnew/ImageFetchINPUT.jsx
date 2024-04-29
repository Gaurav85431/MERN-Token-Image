/* Isme galti ye hai ki hmne append(); ka use nhi kiya hai

import React, { useState } from "react";

function ImageFetchINPUT() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, image }),
      });

      if (response) {
        alert("Data saved ");
      } else {
        alert("Unable to save data");
      }
    } catch (error) {
      console.log("An err occur");
      alert("Eror");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTitle("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />{" "}
        <br />
        <label>Image</label> <br />
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.files)}
          name="image"
        />
        <br />
        <button>Upload data</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default ImageFetchINPUT;

----------------------------------------------------------------
Using `FormData.append()` is a common approach when working with file uploads in React.js or any web development involving file uploads. However, it's not mandatory to use `FormData.append()` specifically. It's just one way to handle file uploads.

When working with file uploads, especially in conjunction with other form data, `FormData` provides a convenient way to collect and send data to the server. It allows you to construct a set of key/value pairs representing form fields and their values, including files.

The alternative to using `FormData` would be to construct your own request body manually, which can be more complex and error-prone, especially when dealing with files. `FormData` abstracts away much of this complexity and provides a cleaner interface for handling file uploads.

So, while `FormData.append()` is not strictly mandatory, it's highly recommended for handling file uploads in React.js applications due to its simplicity and convenience.
------------------------------------------------------------

*/

//
import React, { useState } from "react";

function ImageFetchINPUT() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // Store selected file(s) in state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); // Create FormData object
      formData.append("title", title);
      formData.append("image", image); // Append selected file to FormData

      const response = await fetch("http://localhost:8000/api/new/input", {
        method: "POST",
        body: formData, // Send FormData instead of JSON
      });

      if (response.ok) {
        alert("Data saved");
      } else {
        alert("Unable to save data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Error");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTitle("");
    setImage(null); // Reset selected file
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />{" "}
        <br />
        <label>Image</label> <br />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])} // Update selected file
          name="image"
        />
        <br />
        <button type="submit">Upload data</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default ImageFetchINPUT;
