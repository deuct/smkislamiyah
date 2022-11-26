// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Styling
import { Row, Col, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import "../../style/posts-detail.css";

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
    setIdPost(props.idpost); // untuk link ke detail post
  }, [idpost]);

  const [imgPostListing, setImgPostListing] = useState([]);
  useEffect(() => {
    getImgpostListing();
  }, []);

  const getImgpostListing = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts/imgpost/${props.idpost}`,
        {
          params: {
            _limit: 1,
          },
        }
      );
      console.log("success response image");
      if (response) {
        setImgPostListing(response.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!categories) return console.log("failed get category");

  return (
    <>
      <Row className="posts-list-card">
        <Col xs={9}>
          <Row className="plc-title">
            {/* <Link to={`/posts/detail/${props.postSlug}`} state={{ idpost }}> */}
            <Link to={`/posts/detail/${props.postSlug}`}>
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
          {imgPostListing.slice(0, 1).map((img) => {
            return (
              <>
                <img
                  src={`http://localhost:5000/${img.imgpost_dir.replace(
                    "\\",
                    "/"
                  )}`}
                  alt="post-image"
                />
              </>
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default PostCard;
