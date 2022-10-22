import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import { IoTimeOutline } from "react-icons/io5";
import imgPpdb from "../../images/ppdb.jpg";

function RelatedPost(props) {
  // Farhan : Get post type of post
  const postType = props.postType;

  // Get post data
  const [relPost, setRelPost] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    getRelatedArticle();
  }, []);

  const getRelatedArticle = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/?post_type=${postType}&limit=${limit}`
    );
    setRelPost(response.data.result);
  };

  console.log(relPost);
  console.log(limit);

  return (
    <>
      {relPost.map((relPos) => {
        return (
          <>
            <Col xs={4} className="ra-card-detail">
              <img src={require("../../post-images/" + relPos.imgpost_dir)} />
              <h3>
                {props.postType}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                perferendis!
              </h3>
              <span>
                <Button className="ra-btn">ANNOUNCEMENT</Button>
                <Button className="ra-btn">Akademik</Button>
                <IoTimeOutline size={20} />
                14 Sept, 2022
              </span>
            </Col>
          </>
        );
      })}
    </>
  );
}

export default RelatedPost;
