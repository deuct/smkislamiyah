import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import NewerPostCard from "./NewerPostCard";

import programsCard from "../../images/header-1.jpg";
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
        <Row id="breadcrumb-pd"><p>Home &gt; Announcement &gt; Detail</p> </Row>
        <Row id="post-detail-body">
          <Col xs={10}>
            <div className="pd-img" >
              <img src={programsCard} />
            </div>
            <Row id="title-pd-cat">
              <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                accusamus! Veniam reprehenderit labore eligendi? </h1>
            </Row>
            <Row id="pd-category" >
              <Button className="cat-btn">Activities</Button>
              <Button className="cat-btn">Design Graphic</Button>
              <div className="pd-cat-time">
                <IoTimeOutline size={20} />
                14 Sept, 2022
              </div>
            </Row>
            <Row id="pd-isi">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                accusamus! Veniam reprehenderit labore eligendi? Cupiditate enim
                tenetur natus eum quia, quaerat amet omnis placeat facilis ullam
                tempora iusto quae minima. Excepturi error porro minus dolorem
                alias, sit sequi tenetur similique facilis qui, repudiandae
                quisquam modi fugit eos ducimus odio pariatur non explicabo,
                illo veritatis quia molestias! Hic a autem nulla. Molestiae
                voluptatum consequuntur velit possimus. Consectetur deleniti
                optio reprehenderit harum numquam, incidunt, cum quo quaerat
                distinctio a omnis doloremque repellat quia? Doloremque sint
                ipsum natus. Saepe amet dicta asperiores rem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                mollitia eos, magnam adipisci totam necessitatibus, numquam
                incidunt facere ad impedit quas doloremque! Sequi saepe
                blanditiis animi provident porro repellat illum. Accusantium sit
                amet dolores ipsum alias impedit modi dignissimos! Maiores quia
                blanditiis, hic placeat ipsa molestiae, similique debitis autem
                fugit quasi quo sint ex incidunt veniam. Consequatur quis a
                aspernatur? Tenetur praesentium impedit quasi assumenda ex
                possimus. Veniam explicabo ipsum perferendis, exercitationem
                sequi debitis illum accusamus natus libero consequuntur minus
                tenetur obcaecati dolore, animi nam. Illum reprehenderit
                suscipit pariatur tenetur! Pariatur harum, iusto non maxime
                repudiandae qui impedit molestias amet saepe odit iste? Adipisci
                fugit repellendus eaque rerum? Ab ad, facilis explicabo
                praesentium quaerat dolorem voluptate rem ullam aliquid aperiam?
                Vitae rem fugit quis ea, sunt cupiditate, laborum necessitatibus
                esse unde aliquid nostrum ipsam accusantium. Repellendus
                molestiae culpa modi fuga hic corrupti, blanditiis quidem sequi,
                mollitia itaque necessitatibus deserunt maxime!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis doloribus repellendus, voluptatibus deserunt fugiat
                rerum distinctio earum velit ab veniam ipsam corporis autem
                alias similique perspiciatis nam sed minus esse! Corporis totam
                possimus est nam accusantium deleniti praesentium iste sequi,
                porro nobis temporibus delectus reiciendis ad eveniet quod
                minima autem quos voluptate repellendus libero, repudiandae
                facere. Voluptates voluptatem laborum laboriosam! Itaque vitae
                id, tempora ad facere nisi ipsa harum suscipit sapiente
                voluptatum. Odio tempore doloremque recusandae ab modi,
                distinctio provident! Inventore sunt et explicabo aspernatur
                beatae nulla cupiditate ea veniam. Earum, facilis. Aspernatur
                aut cupiditate iusto illum optio quisquam assumenda veniam, id,
                odit possimus molestias repudiandae eveniet perspiciatis
                delectus commodi, fugiat praesentium quibusdam eligendi ea totam
                quidem reprehenderit. Eaque, praesentium!
              </p>
            </Row>
            <Row id="ra-card-title">
                  <Row>
                <Col style={{ display: "flex", "flex-wrap": "nowrap" }}>
                  <h3 >Article</h3>
                  <div className="yellow-line"></div>
                </Col>
              </Row>
              <Row>
                <h1>Related Article</h1>
              </Row>
            </Row>
            <Row id="ra-card">
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span className="ra-foot-card">
                  <Button className="ra-btn">Announcement</Button>
                  <Button className="ra-btn">Akademik</Button>
                  <div className="ra-time">
                    <IoTimeOutline size={20} />
                    14 Sept, 2022
                  </div>
                </span>
              </Col>
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span className="ra-foot-card">
                  <Button className="ra-btn">Announcement</Button>
                  <Button className="ra-btn">Akademik</Button>
                  <div className="ra-time">
                    <IoTimeOutline size={20} />
                    14 Sept, 2022
                  </div>
                </span>
                
              </Col>
              <Col xs={3} className="ra-card-detail">
                <img src={imgPpdb} />
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  perferendis!
                </h3>
                <span className="ra-foot-card">
                  <Button className="ra-btn">Announcement</Button>
                  <Button className="ra-btn">Akademik</Button>
                  <div className="ra-time">
                    <IoTimeOutline size={20} />
                    14 Sept, 2022
                  </div>
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
