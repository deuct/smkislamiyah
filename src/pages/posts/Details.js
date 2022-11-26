// React Need
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Component
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import NewerPostCard from "./NewerPostCard";
import RelatedPost from "./RelatedPost";
// Style
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModalImage from "react-modal-image";
import "../../style/posts-detail.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { IoTimeOutline, IoEye } from "react-icons/io5";

function DetailPost(props) {
  // Farhan : Get post id from listing
  // const location = useLocation();
  // const idpost = location.state.idpost;

  // Farhan : get url-slug
  const slug = useParams();
  const [idPost, setIdPost] = useState([]);

  // Farhan : get id post by slug
  useEffect(() => {
    getIdPostBySlug();
  }, [slug]);

  const getIdPostBySlug = async () => {
    try {
      const resIdPost = await axios.post(
        `http://localhost:5000/posts/getpostbyslug`,
        { postSlug: slug.postslug }
      );

      if (resIdPost) {
        setIdPost(resIdPost.data[0].post_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Farhan : Validasi jika akses detail post tanpa post id
  const navigate = useNavigate();
  if (idPost === null) {
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
  }, [idPost]);

  const getPost = async () => {
    if (idPost.length > 0) {
      const response = await axios.get(`http://localhost:5000/posts/${idPost}`);
      if (response) {
        setPost(response.data);
      }
    }
  };
  const getCategory = async () => {
    if (idPost.length > 0) {
      const response = await axios.get(
        `http://localhost:5000/posts/category/${idPost}`
      );
      setCategories(response.data);
    }
  };

  const getImgpost = async () => {
    if (idPost.length > 0) {
      const response = await axios.get(
        `http://localhost:5000/posts/imgpost/${idPost}`
      );
      setImgPost(response.data);
    }
  };

  // Loop image url for mansory
  const [arrMasonry, setArrMasonry] = useState([]);
  useEffect(() => {
    getArrMasonry();
  }, [imgPost]);

  const getArrMasonry = () => {
    imgPost.map((img) => {
      setArrMasonry((prev) => [
        ...prev,
        "http://localhost:5000/" + img.imgpost_dir.replace("\\", "/"),
      ]);
    });
  };
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

  return (
    <>
      <NavbarTop isIndex={false} />
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
        <Row id="breadcrumb-pd">Home &gt; Post &gt; Detail</Row>
        <Row id="post-detail-body">
          <Col xs={10}>
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
                    <div className="pd-time">
                      <IoTimeOutline size={20} className="mr-2" />
                      <span className="pd-cat-time">{pos.createdAt}</span>
                    </div>
                  </Row>
                  <Row>
                    <div
                      dangerouslySetInnerHTML={{ __html: pos.post_desc }}
                    ></div>
                  </Row>
                  <Row className="my-5">
                    <div className="gallery-post-title">
                      <span className="gpt-line"></span>
                      <p>Post Gallery</p>
                      <span className="gpt-line"></span>
                    </div>
                    <ResponsiveMasonry
                      columnsCountBreakPoints={columnsCountBreakPoints}
                    >
                      <Masonry columnsCount={3} gutter={4}>
                        {arrMasonry.map((image) => (
                          <ModalImage
                            small={image}
                            large={image}
                            alt="post image"
                          />
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </Row>
                  <Row id="ra-card-title" className="mt-3">
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
