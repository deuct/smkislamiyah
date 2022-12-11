// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
// Style
import { Col, Row, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function RelatedPost(props) {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // Farhan : Get post type of post
  const postType = props.postType;

  // Get post data
  const [relPost, setRelPost] = useState([]);
  const [limit, setLimit] = useState(6);
  const [resItem, setResItem] = useState([]); //array pemecah respons

  useEffect(() => {
    getRelatedArticle();
  }, []);

  const getRelatedArticle = async () => {
    const response = await axiosInstance.get(
      `/posts/?post_type=${postType}&limit=${limit}`
    );
    setRelPost(response.data.result);
  };

  // Farhan : Carousel
  const responsive = {
    0: { items: 3 },
  };

  const handleDragStart = (e) => e.preventDefault();
  const itemz = relPost.map((relPos, index) => [
    <>
      <Col
        className="d-inline-block ra-card-detail item"
        data-value={index}
        onDragStart={handleDragStart}
      >
        <div className="ra-bd mx-2 p-3" style={{ width: "100%" }}>
          <img
            src={`${baseURLAPI}/${relPos.imgpost_dir.replace("\\", "/")}`}
            style={{ width: "auto", height: "180px" }}
          />
          <h3>{relPos.post_shortdesc}</h3>
          <span>
            <Button className="ra-btn">{relPos.post_type}</Button>
            <IoTimeOutline size={20} />
            <p className="ra-date">14 Sept, 2022</p>
          </span>
        </div>
      </Col>
    </>,
  ]);

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={itemz}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
}

export default RelatedPost;
