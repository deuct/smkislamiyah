import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import NewerPostCard from "./NewerPostCard";

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
  console.log("============IDPOST : ", idpost, "============");

  // Farhan : Validasi jika akses detail post tanpa post id
  const navigate = useNavigate();
  if (idpost === undefined) {
    navigate("/404");
  }

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
  // const [firstImg, setFirstImg] = useState(1);
  // console.log("First img: " + firstImg);

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
        <Row id="breadcrumb-pd">
        <p>
          Home &gt; Announcement &gt;
          <span style={{ color: "yellow" }}> Details</span>
        </p>

        </Row>
        <Row id="post-detail-body">
          <Col md={10} xs={12}>
            {post.map((pos) => {
              return (
                <>
                  <Row className="pd-img">
                    {imgPost.slice(0, 1).map((imgpos) => {
                      const imgdir = imgpos.imgpost_dir.replace("\\", "/");
                      const urlimg = "http://localhost:5000/" + imgdir;
                      return (
                        <>
                          <img src={urlimg} />
                        </>
                      );
                    })}
                  </Row>
                  <Row id="title-pd-cat">
                    {/* <h2>Passing ID props : {idpost}</h2> */}
                    <h1>{pos.post_name}</h1>
                  </Row>
                  <Row id="pd-category">
                    <Button className="cat-btn">{pos.post_type}</Button>
                    {categories.map((categori) => {
                      return (
                        <>
                          <Button className="cat-btn">
                            {categori.categorypost_name}
                          </Button>
                        </>
                      );
                    })}
                    <IoTimeOutline size={20} />
                    <span className="pd-cat-time">{pos.createdAt}</span>
                  </Row>
                  <Row>
                    <div
                      dangerouslySetInnerHTML={{ __html: pos.post_desc }}
                    ></div>
                  </Row>
                  <Row>
                    {imgPost.map((imgpos) => {
                      const imgdir = imgpos.imgpost_dir.replace("\\", "/");
                      const urlimg = "http://localhost:5000/" + imgdir;
                      return (
                        <>
                          {/* <img
                            src={require(`../../post-images/${imgpos.imgpost_dir}`)}
                          /> */}
                          {/* <img src={urlimg} /> */}
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
                  {/* <Row id="circle-slider">
                    <Col xs={4} className="d-flex align-items-center">
                      <div className="cs-outline"></div>
                      <div className="cs-fill"></div>
                      <div className="cs-outline"></div>
                    </Col>
                  </Row> */}
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
