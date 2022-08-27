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
} from "react-icons/io5";
import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";

function Home() {
  return (
    <>
      <NavbarTop />
      <Row id="header" className="align-items-center justify-content-center">
        {/* <img src={headerImg} /> */}
        <div className="black-cover-header"></div>
        <Col xs={8} className="header-fill text-center">
          <h1>SMK ISLAMIYAH CIPUTAT</h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur, neque deserunt consequatur molestiae iste.
          </p>
          <Button className="btn-header">Know More</Button>
        </Col>
      </Row>
      <Row
        id="hdm-greeting"
        className="align-items-center justify-content-center"
      >
        <Col xs={8}>
          <h1 className="text-center mb-5">Headmaster Greetings</h1>
          <div className="hdm-greeting-fill d-flex">
            <img src={hdm} />
            <div className="hdm-greeting-desc mt-5">
              <h2 className="d-inline-block">Dian Rostikawati, S.E, M.M</h2>
              <p className="d-inline-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus aut dicta esse. Deleniti quos reiciendis vel
                ullam eos, et numquam?Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Molestiae, asperiores!
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center" id="facility">
        <Container className="text-center">
          <h1 className="text-center">Facility</h1>
          {/* <Col xs={12} className="card-holder d-flex justify-content-center"> */}
          <Col xs={3} className="d-inline-block mx-5">
            <div className="card-facility">
              <div className="cf-icon">
                <IoBasketballOutline size={50} />
                <h2>Lapangan</h2>
              </div>
            </div>
          </Col>
          <Col xs={3} className="d-inline-block mx-5">
            <div className="card-facility">
              <div className="cf-icon">
                <IoDesktopOutline size={50} />
                <h2>Lab Komputer</h2>
              </div>
            </div>
          </Col>
          <Col xs={3} className="d-inline-block mx-5">
            <div className="card-facility">
              <div className="cf-icon">
                <IoRestaurantOutline size={50} />
                <h2>Lab Tata Boga</h2>
              </div>
            </div>
          </Col>
          {/* </Col> */}
        </Container>
      </Row>
      <Row className="justify-content-center d-flex" id="activities">
        <h1 className="ac-ttl">Our Activities</h1>
        <Col xs={12} className="text-center">
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Activity Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Activity Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Activity Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Activity Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={lksSample} />
            <Card.Body>
              <Card.Title>Activity Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2} className="text-center">
          <Button className="btn-post">See All Activities</Button>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex" id="activities">
        <h1 className="ac-ttl">Announcement</h1>
        <Col xs={12} className="text-center">
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={ppdb} />
            <Card.Body>
              <Card.Title>Announcement Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card post-top">
            <Card.Img variant="top" src={ppdb} />
            <Card.Body>
              <Card.Title>Announcement Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={ppdb} />
            <Card.Body>
              <Card.Title>Announcement Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={ppdb} />
            <Card.Body>
              <Card.Title>Announcement Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="post-card">
            <Card.Img variant="top" src={ppdb} />
            <Card.Body>
              <Card.Title>Announcement Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                est provident tempore cumque facere eveniet ea, tenetur sunt
                expedita nesciunt labore...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2} className="text-center">
          <Button className="btn-post">See All Announcement</Button>
        </Col>
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
