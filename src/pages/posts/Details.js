import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import NewerPostCard from "./NewerPostCard";

import programsCard from "../../images/programs-card.jpg";
import imgPpdb from "../../images/ppdb.jpg";
import lksSample from "../../images/lks-sample.jpg";

import "../../style/posts.css";

import { Col, Container, Row, Button } from "react-bootstrap";
import { IoTimeOutline, IoEye } from "react-icons/io5";
import axios from "axios";

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
        <Row id="breadcrumb">Home &gt; Announcement &gt; Detail</Row>
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
                </>
              );
            })}

            <Row id="ra-card-title">
              <span>
                <h1>ARTICLE </h1> <div className="yellow-line"></div>
              </span>
              <h2>RELATED ARTICLE</h2>
            </Row>
            <Row id="ra-card">
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span>
                  <Button>ANNOUNCEMENT</Button>
                  <Button>Akademik</Button>
                  <IoTimeOutline size={20} />
                  14 Sept, 2022
                </span>
              </Col>
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span>
                  <Button>ANNOUNCEMENT</Button>
                  <Button>Akademik</Button>
                  <IoTimeOutline size={20} />
                  14 Sept, 2022
                </span>
              </Col>
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span>
                  <Button>ANNOUNCEMENT</Button>
                  <Button>Akademik</Button>
                  <IoTimeOutline size={20} />
                  14 Sept, 2022
                </span>
              </Col>
            </Row>
            <Row id="circle-slider">
              <Col xs={4} className="d-flex align-items-center">
                <div className="cs-outline"></div>
                <div className="cs-fill"></div>
                <div className="cs-outline"></div>
              </Col>
            </Row>
          </Col>
          <Col xs={2} id="new-post-right">
            <Row>Postingan Terbaru</Row>
            <Row>
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
