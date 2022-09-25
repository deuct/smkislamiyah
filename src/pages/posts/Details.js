import React from "react";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";

import programsCard from "../../images/programs-card.jpg";
import imgPpdb from "../../images/ppdb.jpg";
import lksSample from "../../images/lks-sample.jpg";

import "../../style/posts.css";

import { Col, Container, Row, Button } from "react-bootstrap";
import { IoTimeOutline, IoEye } from "react-icons/io5";

function DetailPost() {
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
            <Row>
              <img src={programsCard} />
            </Row>
            <Row>
              <h1>PEMENANG LOMBA LKS TINGKAT KOTA TANGERANG SELATAN</h1>
            </Row>
            <Row>
              <Button>Activities</Button>
              <Button>Design Graphic</Button>
              <IoTimeOutline size={20} />
              <span>14 Sept, 2022</span>
            </Row>
            <Row>
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
            <Row className="npr-card">
              <Col xs={6}>
                <Button>Activities</Button>
                <Button>Technology</Button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  consequatur?
                </p>
                <span>
                  <IoTimeOutline size={15} /> 14 Sept, 2022
                </span>
              </Col>
              <Col xs={6}>
                <img src={lksSample} />
              </Col>
            </Row>
            <Row className="npr-card">
              <Col xs={6}>
                <Button>Activities</Button>
                <Button>Technology</Button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  consequatur?
                </p>
                <span>
                  <IoTimeOutline size={15} /> 14 Sept, 2022
                </span>
              </Col>
              <Col xs={6}>
                <img src={lksSample} />
              </Col>
            </Row>
            <Row className="npr-card">
              <Col xs={6}>
                <Button>Activities</Button>
                <Button>Technology</Button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  consequatur?
                </p>
                <span>
                  <IoTimeOutline size={15} /> 14 Sept, 2022
                </span>
              </Col>
              <Col xs={6}>
                <img src={lksSample} />
              </Col>
            </Row>
            <Row className="npr-card">
              <Col xs={6}>
                <Button>Activities</Button>
                <Button>Technology</Button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  consequatur?
                </p>
                <span>
                  <IoTimeOutline size={15} /> 14 Sept, 2022
                </span>
              </Col>
              <Col xs={6}>
                <img src={lksSample} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}

export default DetailPost;
