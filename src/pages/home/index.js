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

function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <NavbarTop />
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="home"
        style={{ display: "none" }}
        readOnly
      />
      <Row id="header" className="align-items-center justify-content-center">
        {/* <img
          src={headerImg}
          style={{ position: "absolute", height: "100vh" }}
        />
        <div className="black-cover-header"></div>
        <Col xs={8} className="header-fill text-center">
          <h1>SMK ISLAMIYAH CIPUTAT</h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur, neque deserunt consequatur molestiae iste.
          </p>
          <Button className="btn-header">Know More</Button>
        </Col> */}
        <Carousel style={{ color: "black" }}>
          <Carousel.Item style={{ height: "100vh" }}>
            <img className="d-block w-100" src={headerOne} alt="First slide" />
            <Carousel.Caption className="slide">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100vh" }}>
            <img className="d-block w-100" src={headerTwo} alt="Second slide" />
            <Carousel.Caption className="slide">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100vh" }}>
            <img
              className="d-block w-100"
              src={headerThree}
              alt="Third slide"
            />
            <Carousel.Caption className="slide">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row id="welcome">
        <Col xs={8}>
          <h1 className="text-center my-3">
            SELAMAT DATANG DI SMK ISLAMIYAH CIPUTAT
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vel,
            perspiciatis, natus, itaque nemo rem earum consectetur porro
            assumenda tenetur provident quo temporibus est aliquam libero
            nesciunt error molestiae. Commodi?
          </p>
          <div className="divider-welcome"></div>
        </Col>
      </Row>
      <Row
        id="hdm-greeting"
        className="align-items-center justify-content-center"
      >
        <Col xs={8}>
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
                voluptatibus eaque libero impedit voluptatum blanditiis debitis,
                dolorum rem, expedita minima numquam repudiandae consectetur
                vel. Ut veritatis sed, consequatur dolorem consectetur sequi
                autem voluptas est iure?
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row id="overview">
        <Col xs={4}>
          <img src={overviewYt} />
        </Col>
        <Col xs={6}>
          <h1 className="OV">OVERVIEW</h1>
          <h1 className="WU">WHY US</h1>
          <div className="divider-overview"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            laboriosam exercitationem officia vel, molestias sint iusto adipisci
            odio laborum quisquam pariatur fugiat earum dolorem facere quaerat
            ipsum dolorum tempore mollitia.
          </p>
          <Button>KNOW MORE</Button>
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
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", flexWrap: "nowrap" }}>
                <div className="kategori">
                  <Button className="an">Announcement</Button>
                  <Button>Akademik</Button>
                </div>
                <div className="time-card">
                  <p>
                    <IoTimeOutline size={20} /> 14 Sept, 2022
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", flexWrap: "nowrap" }}>
                <div className="kategori">
                  <Button className="an">Announcement</Button>
                  <Button>Akademik</Button>
                </div>
                <div className="time-card">
                  <p>
                    <IoTimeOutline size={20} /> 14 Sept, 2022
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
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
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", flexWrap: "nowrap" }}>
                <div className="kategori">
                  <Button className="an">Announcement</Button>
                  <Button>Akademik</Button>
                </div>
                <div className="time-card">
                  <p>
                    <IoTimeOutline size={20} /> 14 Sept, 2022
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", flexWrap: "nowrap" }}>
                <div className="kategori">
                  <Button className="an">Announcement</Button>
                  <Button>Akademik</Button>
                </div>
                <div className="time-card">
                  <p>
                    <IoTimeOutline size={20} /> 14 Sept, 2022
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
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
        {/* <Row className="justify-content-center d-flex" id="tpa-card">
          <Col xs={3} className="tpa-card-detail">
            <img src={sampleAlumni} className="testi-alumni-img" />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              perferendis!               
            </h3>
            <span className="tpa-foot-card">
              <IoTimeOutline size={20} />
              14 Sept, 2022
            </span>
          </Col>
          <Col xs={3} className="tpa-card-detail">
            <img src={sampleAlumni} className="testi-alumni-img" />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              perferendis!               
            </h3>
            <span className="tpa-foot-card">
              <IoTimeOutline size={20} />
              14 Sept, 2022
            </span>
          </Col>
          <Col xs={3} className="tpa-card-detail">
            <img src={sampleAlumni} className="testi-alumni-img" />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              perferendis!               
            </h3>
            <span className="tpa-foot-card">
              <IoTimeOutline size={20} />
              14 Sept, 2022
            </span>
          </Col>
        </Row> */}
        <Row>
          <Col xs={12} style={{ display: "flex", flexWrap: "nowrap" }}>
            <div className="card-testimonials">
              <img src={sampleAlumni} className="testi-alumni-img" />
              <div className="body-testimonials">
                <h3>Name</h3>
                <h4>Profesi</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur dolorum ex consequatur atque nulla laborum quae
                  iure! Sint expedita voluptatibus odio incidunt minima
                  doloremque? Quod repellat vel facilis id iure!
                </p>
              </div>
            </div>
            <div className="card-testimonials">
              <img src={sampleAlumni} className="testi-alumni-img" />
              <div className="body-testimonials">
                <h3>Name</h3>
                <h4>Profesi</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur dolorum ex consequatur atque nulla laborum quae
                  iure! Sint expedita voluptatibus odio incidunt minima
                  doloremque? Quod repellat vel facilis id iure!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} className="my-3 justify-content-center" style={{ display: "flex", flexWrap: "nowrap" }}>
            <div className="circle-slider-outline"></div>
            <div className="circle-slider-fill"></div>
            <div className="circle-slider-outline"></div>
          </Col>
        </Row>
        {/* <Row className="my-3 justify-content-center">
        </Row> */}
      </Row>
      <Row id="faq">
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
      </Row>
      <Row id="contact">
        <Row>
          <Col style={{ display: "flex", flexWrap: "nowrap" }}>
            <h3>CONTACT US</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1>VISIT OUR SCHOOL</h1>
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
      {/* <div className="map-bg">
        <IoMapOutline size={40} />
      </div>
      <div className="divider-maps"></div> */}
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
      {/* <div className="footer-lock"> */}
      <FooterBot />
      {/* </div> */}
    </>
  );
}

export default Home;
