import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import imgPpdb from "../../images/ppdb.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function RelatedPost(props) {
  // Farhan : Get post type of post
  const postType = props.postType;

  // Get post data
  const [relPost, setRelPost] = useState([]);
  const [limit, setLimit] = useState(6);
  const [resItem, setResItem] = useState([]); //array pemecah respons

  useEffect(() => {
    getRelatedArticle();
    // mapItem();
  }, []);

  const getRelatedArticle = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/?post_type=${postType}&limit=${limit}`
    );
    setRelPost(response.data.result);
  };

  console.log(relPost);
  console.log(limit);
  // Farhan : Carousel
  const responsive = {
    0: { items: 3 },
  };

  const asd = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];

  // const mapItem = async () => {
  //   relPost.map((relPos) => {
  //     resItem.push(relPos);
  //     // setResItem((resItem) => [...resItem, relPos]);
  //     // setResItem(relPos);
  //   });
  // };

  const handleDragStart = (e) => e.preventDefault();
  const itemz = relPost.map((relPos, index) => [
    // return (
    // <>
    <Col
      // xs={4}
      // lg={4}
      className="d-inline-block ra-card-detail item"
      data-value={index}
      onDragStart={handleDragStart}
    >
      <div className="ra-bd mx-2 p-3" style={{ width: "100%" }}>
        <img src={require("../../post-images/" + relPos.imgpost_dir)} />
        <h3>{relPos.post_shortdesc}</h3>
        <span>
          <Button className="ra-btn">{relPos.post_type}</Button>
          <IoTimeOutline size={20} />
          14 Sept, 2022
        </span>
      </div>
    </Col>,
    // </>
    // );
  ]);

  console.log("===========itemz==========");
  console.log(itemz);
  console.log("===========asd==========");
  console.log(asd);
  console.log("===========relpost==========");
  console.log(relPost);
  // console.log("===========relitems==========");
  // // console.log(relPost);

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={itemz}
        responsive={responsive}
        controlsStrategy="alternate"
      />
      {/* {relPost.map((relPos) => {
        return (
          <>
            <Col xs={4} className="ra-card-detail">
              <img src={require("../../post-images/" + relPos.imgpost_dir)} />
              <h3>{relPos.post_shortdesc}</h3>
              <span>
                <Button className="ra-btn">{relPos.post_type}</Button>
                <IoTimeOutline size={20} />
                14 Sept, 2022
              </span>
            </Col>
          </>
        );
      })} */}
    </>
  );
}

export default RelatedPost;
