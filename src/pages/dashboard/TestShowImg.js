import React, { useState, useEffect } from "react";
import axios from "axios";

function TestShowImg() {
  const [images, setImages] = useState();
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.get("http://localhost:5000/imgpost", config);
      console.log("result");
      console.log(response.data);
      console.log(response.data.response);
      setImages(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(images);
  return (
    <>
      <div>
        <p>Fetch Image</p>
        {/* Contoh cara fetch image */}
        {/* {images.map((imageSingle) => {
          return (
            <>
              <img
                src={`http://localhost:5000/images/${imageSingle.imgpost_name}`}
                alt={imageSingle.imgpost_name}
              />
            </>
          );
        })} */}
      </div>
    </>
  );
}

export default TestShowImg;
