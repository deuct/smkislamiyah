import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import lksSample from "../../images/lks-sample.jpg";

function NewerPostCard() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts`);
      setPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);
  return (
    <>
      {post.map((pos) => {
        return (
          <Row className="npr-card" key={pos.post_id}>
            <Col xs={6}>
              <Button>Activities</Button>
              <Button>Technology</Button>
              <p>{pos.post_name}</p>
              <span>
                <IoTimeOutline size={15} /> 14 Sept, 2022
              </span>
            </Col>
            <Col xs={6}>
              <img src={lksSample} />
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default NewerPostCard;
