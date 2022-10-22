import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import NewerPostCard from "./NewerPostCard";

import programsCard from "../../images/programs-card.jpg";
import imgPpdb from "../../images/ppdb.jpg";
import lksSample from "../../images/lks-sample.jpg";

import "../../style/posts-detail.css";

import { Col, Container, Row, Button } from "react-bootstrap";
import { IoTimeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import RelatedPost from "./RelatedPost";

function DetailPost(props) {
  // Farhan : Get post id from listing
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation hook");
  const idpost = location.state?.idpost;

  // Farhan : Fetch axios based on post id
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imgPost, setImgPost] = useState([]);

  useEffect(() => {
    getPost();
    getCategory();
    getImgpost();
  }, []);

  const getPost = async () => {
    const response = await axios.get(`http://localhost:5000/posts/${idpost}`);
    setPost(response.data);
  };
  console.log(idpost);
  const getCategory = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/category/${idpost}`
    );
    setCategories(response.data);
  };
  const getImgpost = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/imgpost/${idpost}`
    );
    setImgPost(response.data);
  };
  const [firstImg, setFirstImg] = useState(1);
  console.log("First img: " + firstImg);

  return (
    <>
      <NavbarTop />
      <Container>
        <div id="navbar-bgz"></div>
        {/* Navbar styling ketika di halaman tertentu */}
        <input
          type="text"
          id="navbar-id"
          value="bkk-listing"
          style={{ display: "none" }}
          readOnly
        />
        <Row id="breadcrumb-pd">Home &gt; Announcement &gt; Detail</Row>
        <Row>
          <Col xs={10}>
            {post.map((pos) => {
              return (
                <>
                  <Row>
                    {imgPost.slice(0, 1).map((imgpos) => {
                      return (
                        <>
                          <img
                            src={require(`../../post-images/${imgpos.imgpost_dir}`)}
                          />
                        </>
                      );
                    })}
                  </Row>
                  <Row>
                    <h2>Passing ID props : {idpost}</h2>
                    <h1>{pos.post_name}</h1>
                  </Row>
                  <Row>
                    <Button>{pos.post_type}</Button>
                    {categories.map((categori) => {
                      return (
                        <>
                          <Button>{categori.categorypost_name}</Button>
                        </>
                      );
                    })}
                    <IoTimeOutline size={20} />
                    <span>{pos.createdAt}</span>
                  </Row>
                  <Row>{pos.post_desc}</Row>
                  <Row>
                    {imgPost.map((imgpos) => {
                      return (
                        <>
                          <img
                            src={require(`../../post-images/${imgpos.imgpost_dir}`)}
                          />
                        </>
                      );
                    })}
                  </Row>
                  <Row id="ra-card-title">
                    <Row>
                      <Col style={{ display: "flex", "flex-wrap": "nowrap" }}>
                        <h3>Article</h3>
                        <div className="yellow-line"></div>
                      </Col>
                    </Row>
                    <Row>
                      <h1>Related Article</h1>
                    </Row>
                  </Row>
                  <Row id="ra-card">
                    <RelatedPost postType={pos.post_type} />
                  </Row>
                  <Row id="circle-slider">
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="cs-outline"></div>
                      <div className="cs-fill"></div>
                      <div className="cs-outline"></div>
                    </Col>
                  </Row>
                </>
              );
            })}
          </Col>
          <Col xs={2} id="new-post-right">
            <Row id="npr-title">
              <h3>Postingan Terbaru</h3>
              <div className="yellow-line"></div>
            </Row>
            <NewerPostCard />
          </Col>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}

export default DetailPost;
