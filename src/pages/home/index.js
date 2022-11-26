import React, { useState } from "react";
import "../../style/home.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import headerImg from "../../images/header-1.jpg";
import hdm from "../../images/hdm.jpg";
import lksSample from "../../images/lks-sample.jpg";
import ppdb from "../../images/ppdb.jpg";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoBasketballOutline,
  IoSchoolSharp,
  IoApps,
  IoPersonAddOutline,
} from "react-icons/io5";
import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import Image from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import headerOne from "../../images/Header-2.jpg";
import headerTwo from "../../images/Header-3.jpg";
import headerThree from "../../images/Header-4.jpg";
import overviewYt from "../../images/overview-youtube.jpg";
import sampleAlumni from "../../images/sample-alumni.jpg";
import Collapse from "react-bootstrap/Collapse";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // Navbar Styling
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  // End Navbar Styling

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  // Get posts
  const [postsActivity, setPostsActivity] = useState([]);
  const [postsAnnouncement, setPostsAnnouncement] = useState([]);

  useEffect(() => {
    getPostsActivity();
    getPostsAnnouncement();
  }, []);

  const getPostsActivity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts?limit=5&post_type=activities`
      );
      if (response) {
        setPostsActivity(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPostsAnnouncement = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts?limit=5&post_type=announcement`
      );
      if (response) {
        setPostsAnnouncement(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Alice Carousel Posting
  const [postActivities, setPostActivities] = useState([]);
  const [postAnnouncement, setPostAnnouncement] = useState([]);

  useEffect(() => {
    postCarouselAct();
    postCarouselAnn();
  }, [postsActivity, postsAnnouncement]);

  const postCarouselAct = () => {
    console.log("act : " + postActivities.length);
    if (postActivities.length < 5) {
      postsActivity.map((post) => {
        setPostActivities((prev) => [
          ...prev,
          <div className="post-card-index">
            <div className="bg-post-card"></div>
            <img
              className="post-card-img"
              src={`http://localhost:5000/${post.imgpost_dir.replace(
                "\\",
                "/"
              )}`}
            />
            <div className="post-card-body">
              <div className="post-card-body-type">{post.post_type}</div>
              <div className="post-card-body-h1">{post.post_name}</div>
              <div className="post-card-body-date">October 9, 2022</div>
            </div>
          </div>,
        ]);
      });
    }
  };
  const postCarouselAnn = () => {
    if (postAnnouncement.length < 5) {
      postsAnnouncement.map((post) => {
        setPostAnnouncement((prev) => [
          ...prev,
          <div className="post-card-index">
            <div className="bg-post-card"></div>
            <img
              className="post-card-img"
              src={`http://localhost:5000/${post.imgpost_dir.replace(
                "\\",
                "/"
              )}`}
            />
            <div className="post-card-body">
              <div className="post-card-body-type">{post.post_type}</div>
              <div className="post-card-body-h1">{post.post_name}</div>
              <div className="post-card-body-date">October 9, 2022</div>
            </div>
          </div>,
        ]);
      });
    }
  };

  const responsive = {
    0: { items: 3 },
  };

  // Alice Carousel Alumni Testimonials
  const [testiAlumni, setTestiAlumni] = useState([]);
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    getAlumni();
  }, []);

  const getAlumni = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/alumnis/alumniindex/show`
      );

      if (response) {
        setTestiAlumni(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    alumniCarousel();
  }, [testiAlumni]);

  const alumniCarousel = async () => {
    testiAlumni.map((alumni) => {
      setAlumni((prev) => [
        ...prev,
        <div className="card-testimonials">
          <img
            src={`http://localhost:5000/${alumni.alumni_photo_dir.replace(
              "\\",
              "/"
            )}`}
            className="testi-alumni-img"
          />
          <div className="body-testimonials">
            <h3>{alumni.alumni_nama}</h3>
            <h4>{alumni.alumni_profesi}</h4>
            <p>{alumni.alumni_testi}</p>
          </div>
        </div>,
      ]);
    });
  };
  const responsiveTesti = {
    0: { items: 2 },
  };
  // End Alice Carousel

  // Get Header
  const [header, setHeader] = useState([]);

  useEffect(() => {
    getHeader();
  }, []);

  const getHeader = async () => {
    try {
      const responseHeader = await axios.get(`http://localhost:5000/header/`);

      if (responseHeader) {
        setHeader(responseHeader.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // End Get Header

  // console.log("=======DEBUGGING=====");

  return (
    <>
      <NavbarTop colorChange={colorChange} isIndex={true} />
      <Row id="header" className="align-items-center justify-content-center">
        <Carousel>
          {header.map((heads, idx) => (
            <Carousel.Item key={idx}>
              <div className="black-carousel"></div>
              <img
                className="d-block w-100"
                src={`http://localhost:5000/${heads.header_img_dir.replace(
                  "\\",
                  "/"
                )}`}
                alt={heads.header_title}
              />
              <Carousel.Caption className="slide">
                <h2>{heads.header_title}</h2>
                <p>{heads.header_desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={8}>
          <div id="welcome">
            <div id="welcome-fill" className="align-middle">
              <h1 className="text-center my-3">
                SELAMAT DATANG DI SMK ISLAMIYAH CIPUTAT
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                vel, perspiciatis, natus, itaque nemo rem earum consectetur
                porro assumenda tenetur provident quo temporibus est aliquam
                libero nesciunt error molestiae. Commodi?
              </p>
              <div className="divider-welcome"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col xs={10}>
          <div id="hdm-greeting">
            <div className="hdm-greeting-fill d-flex">
              <div id="hdm-image">
                <img src={hdm} />
                <h2 className="d-inline-block">Dian Rostikawati, S.E, M.M</h2>
              </div>
              <div className="hdm-greeting-desc mt-5">
                <h1 className="text-start mb-5">Headmaster Greetings</h1>
                <p className="d-inline-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae eveniet voluptate dicta doloribus voluptates natus
                  voluptatibus eaque libero impedit voluptatum blanditiis
                  debitis, dolorum rem, expedita minima numquam repudiandae
                  consectetur vel. Ut veritatis sed, consequatur dolorem
                  consectetur sequi autem voluptas est iure?
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row id="overview">
        <Col xs={10}>
          <div id="overview-fill">
            <div id="overview-video" className="mx-auto">
              <img src={overviewYt} />
            </div>
            <div id="overview-detail" className="mx-auto">
              <h1 className="OV">OVERVIEW</h1>
              <h1 className="WU">WHY US</h1>
              <div className="divider-overview"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates laboriosam exercitationem officia vel, molestias sint
                iusto adipisci odio laborum quisquam pariatur fugiat earum
                dolorem facere quaerat ipsum dolorum tempore mollitia.
              </p>
              <Button>KNOW MORE</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex" id="activities">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3>ACTIVITY</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1>OUR ACTIVITIES</h1>
        </Row>
        <div className="divider-overview1"></div>
        <Col xs={12} className="text-center">
          <AliceCarousel
            mouseTracking
            items={postActivities}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </Col>
      </Row>
      <Row className="justify-content-center d-flex" id="announcement">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3>Announcement</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1>Related Announcement</h1>
        </Row>
        <Col xs={12} className="text-center">
          <AliceCarousel
            mouseTracking
            items={postAnnouncement}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </Col>
      </Row>
      <Row id="testimonials">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3 className="testi">TESTIMONIALS</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1 className="prof">PROFILE ALUMNI</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <AliceCarousel
              mouseTracking
              items={alumni}
              responsive={responsiveTesti}
              controlsStrategy="alternate"
            />
          </Col>
        </Row>
      </Row>
      <Row id="card-index-section">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3 className="card-index-title">INFORMATION</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1 className="card-index-text">OUR INFORMATION</h1>
        </Row>
        <Row>
          <Col xs={3}>
            <Link to={`/`}>
              <div className="card-index">
                <div className="card-index-icon">
                  <IoBasketballOutline size={30} />
                </div>
                <div className="card-index-body">
                  <p>Fasilitas</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col xs={3}>
            <Link to={`/`}>
              <div className="card-index">
                <div className="card-index-icon">
                  <IoPersonAddOutline size={30} />
                </div>
                <div className="card-index-body">
                  <p>PPDB</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col xs={3}>
            <Link to={`/programs`}>
              <div className="card-index">
                <div className="card-index-icon">
                  <IoApps size={30} />
                </div>
                <div className="card-index-body">
                  <p>Jurusan</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col xs={3}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5hc3EdyosvkgQIHCYqMs1HjWJ1eqdItKXVj9tHY9vqii9MQ/viewform"
              target="_blank"
            >
              <div className="card-index">
                <div className="card-index-icon">
                  <IoSchoolSharp size={30} />
                </div>
                <div className="card-index-body">
                  <p>Penelusuran Alumni</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Row>
      {/* <Row id="faq">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3>F.A.Q</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1>FREQUENTLY ASKED QUESTION</h1>
        </Row>
        <Row>
          <Button
            onClick={() => setOpen1(!open1)}
            aria-controls="faq1"
            aria-expanded={open1}
            className="faq-btn"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            rerum.?
          </Button>
          <Collapse in={open1}>
            <div id="faq1" className="faq-capt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio maxime voluptatem dicta eaque odio. Accusantium
              repudiandae voluptate nulla error aperiam voluptas rem voluptatum,
              explicabo, blanditiis, accusamus repellendus voluptates eligendi
              nostrum.
            </div>
          </Collapse>
          <Button
            onClick={() => setOpen2(!open2)}
            aria-controls="faq2"
            aria-expanded={open2}
            className="faq-btn"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            rerum.?
          </Button>
          <Collapse in={open2}>
            <div id="faq2" className="faq-capt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio maxime voluptatem dicta eaque odio. Accusantium
              repudiandae voluptate nulla error aperiam voluptas rem voluptatum,
              explicabo, blanditiis, accusamus repellendus voluptates eligendi
              nostrum.
            </div>
          </Collapse>
        </Row>
      </Row> */}
      <Row id="contact">
        <Row>
          <Col xs={6}>
            <Row>
              <Col style={{ display: "flex", flexWrap: "nowrap" }}>
                <h3>CONTACT US</h3>
                <div className="yellow-line"></div>
              </Col>
            </Row>
            <Row>
              <h1>VISIT OUR SCHOOL</h1>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="ctc-menu">
            <IoLocationOutline size={25} className="simbol" />
            <p>
              (map)Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia recusandae tempora aliquid reiciendis sunt nam.
            </p>
          </Col>
          <Col xs={3} className="ctc-menu">
            <IoCallOutline size={25} className="simbol" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              recusandae tempora aliquid reiciendis sunt nam.
            </p>
          </Col>
          <Col xs={3} className="ctc-menu">
            <IoMailOutline size={25} className="simbol" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              recusandae tempora aliquid reiciendis sunt nam.
            </p>
          </Col>
        </Row>
      </Row>
      <Row id="lokasi" className="justify-content-center">
        <Col xs={12} className="text-center">
          <div className="mapouter mx-auto">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=smk%20islamiyah%20ciputat&t=&z=19&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
      <FooterBot />
    </>
  );
}

export default Home;
