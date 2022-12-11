// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
// Style
import { Row, Col, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";

function NewerPostCard() {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    try {
      const response = await axiosInstance.get(`/posts?limit=5`);
      setPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("newerpost=========");
  console.log(post);
  return (
    <>
      {post.map((pos) => {
        return (
          <Row className="npr-card" key={pos.post_id}>
            <Row className="justify-content-start">
              <Col xs={12} className="text-center">
                <img
                  src={`${baseURLAPI}/${pos.imgpost_dir.replace("\\", "/")}`}
                />
              </Col>
            </Row>
            <Row className="npr-body">
              <div className="npr-body-btn">
                <Button className="npr-btn">{pos.post_type}</Button>
              </div>
              <p>{pos.post_name}</p>
              <span className="npr-body-date">
                <IoTimeOutline size={15} /> 14 Sept, 2022
              </span>
            </Row>
          </Row>
        );
      })}
    </>
  );
}

export default NewerPostCard;
