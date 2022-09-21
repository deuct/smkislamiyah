import React from "react";
import "../../style/home.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import headerImg from "../../images/header-1.jpg";
import hdm from "../../images/hdm.jpg";
import lksSample from "../../images/lks-sample.jpg";
import ppdb from "../../images/ppdb.jpg";
import {
  IoBasketballOutline,
  IoDesktopOutline,
  IoRestaurantOutline,
  IoMapOutline,
  IoTimeOutline,
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

function Home() {
  return (
    <>
      <NavbarTop />
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
            <Carousel.Caption>
              <h3 className="slide">First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100vh" }}>
            <img className="d-block w-100" src={headerTwo} alt="Second slide" />
            <Carousel.Caption>
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
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row id="welcome">
        <Col xs={8}>
          <h1 class="text-center my-3">
            SELAMAT DATANG DI SMK ISLAMIYAH CIPUTAT
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vel,
            perspiciatis, natus, itaque nemo rem earum consectetur porro
            assumenda tenetur provident quo temporibus est aliquam libero
            nesciunt error molestiae. Commodi?
          </p>
          <div class="divider-welcome"></div>
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
        <h1 className="ACT">ACTIVITY</h1>
        {/* <div className="divider-overview1"></div>  */}
        <h1 className="OACT">OUR ACTIVITIES</h1>
        <Col xs={12} className="text-center">
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", "flex-wrap": "nowrap" }}>
                <div className="kategori">
                  <Button>Announcement</Button>
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
              <Card.Text style={{ display: "flex", "flex-wrap": "nowrap" }}>
                <div className="kategori">
                  <Button>Announcement</Button>
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
      <Row className="justify-content-center d-flex" id="activities">
        <h1 className="ac-ttl">Announcement</h1>
        <h1 className="ac-ttl1">Related Announcement</h1>
        <Col xs={12} className="text-center">
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Lorem, ipsum dolor.</Card.Title>
              <Card.Text style={{ display: "flex", "flex-wrap": "nowrap" }}>
                <div className="kategori">
                  <Button>Announcement</Button>
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
              <Card.Text style={{ display: "flex", "flex-wrap": "nowrap" }}>
                <div className="kategori">
                  <Button>Announcement</Button>
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
          <Col style={{ display: "flex", "flex-wrap": "nowrap" }}>
            <h3>TESTIMONIALS</h3>
            <div className="yellow-line"></div>
          </Col>
        </Row>
        <Row>
          <h1>PROFILE ALUMNI</h1>
        </Row>
        <Row>
          <Col xs={10} style={{ display: "flex", "flex-wrap": "nowrap" }}>
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
        </Row>
        <Row>
          <div className="circle-slider-outline"></div>
          <div className="circle-slider-fill"></div>
          <div className="circle-slider-outline"></div>
        </Row>
      </Row>
      {/* <div className="map-bg">
        <IoMapOutline size={40} />
      </div>
      <div className="divider-maps"></div> */}
      <Row id="contact" className="justify-content-center">
        <h1 className="ct-ttl">Visit Our School</h1>
        <Col xs={12} className="text-center">
          <div class="mapouter mx-auto">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=smk%20islamiyah%20ciputat&t=&z=19&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
          <div className="contact-addr">
            <h2>Address</h2>
            <p>
              Jl. Ki Hajar Dewantara No.23, RT.1/RW.6, Ciputat, Kec. Ciputat,
              Kota Tangerang Selatan, Banten 15411
            </p>
          </div>
        </Col>
      </Row>
      <div className="contact-ready align-items-center">
        <div className="cr-left d-inline-block">
          <h1>Willing to contact us ?</h1>
          <h2>Hit the Get Started button</h2>
        </div>
        <div className="cr-right d-inline-block">
          <Button className="btn-cr">Get Started</Button>
        </div>
      </div>
      <div className="footer-lock" style={{ height: "20vh" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default Home;
