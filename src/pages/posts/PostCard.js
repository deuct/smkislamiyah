import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import "../../style/posts-detail.css";


import lksSample from "../../images/lks-sample.jpg";

function PostCard(props) {
  const client = axios.create({
    baseURL: "http://localhost:5000/posts/category",
  });

  const [categories, setCategories] = useState([]);
  const [idpost, setIdPost] = useState("");

  useEffect(() => {
    client.get(`${props.idpost}`).then((response) => {
      setCategories(response.data);
      console.log("respon data: " + response.data);
    });
    setIdPost(props.idpost);
  }, [idpost]);

  if (!categories) return console.log("failed get category");

  return (
    <>
      <Row className="posts-list-card">
        <Col xs={9}>
          <Row className="plc-title">
            <Link to="/posts/detail" state={{ idpost }}>
              <h1 className="fw-bold">{props.title}</h1>
            </Link>
          </Row>
          <Row
            className="plc-category"
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <Col xs={12} className="d-flex">
              <Button>{props.typepost}</Button>
              {categories.map((category) => {
                return (
                  <h2 key={category.categorypost_id}>
                    <Button>{category.categorypost_name}</Button>
                  </h2>
                );
              })}
            </Col>
          </Row>
          <Row className="plc-body">
            <h3>{props.title}</h3>
            <p>{props.shortdesc}</p>
          </Row>
          <Row className="plc-date" style={{ display: "flex" }}>
            <Col xs={12}>
              <IoTimeOutline size={15} />
              {new Date(props.createdpost).toLocaleDateString()}
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <img src={lksSample} alt="post-image" />
        </Col>
      </Row>
    </>
  );
}

export default PostCard;
