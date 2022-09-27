import React from "react";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";

import { Container, Col, Row } from "react-bootstrap";
import "../../style/bkk-listing.css";

export default function HistoriesBKK() {
  return (
    <>
      <NavbarTop />
      <div id="navbar-bgz"></div>

      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="bkk-listing"
        style={{ display: "none" }}
        readOnly
      />
      <Container className="mt-3">
        <Row id="breadcrumb">Home &gt; BKK &gt; Details BKK</Row>
        <Row id="title-bkk" style={{ marginTop: "5vh" }}>
          <Col xs={4}>
            <h1>BKK</h1>
            <h1>Bursa Kerja Khusus</h1>
          </Col>
          <Col xs={8}>
            <h3>Bursa Kerja Khusus</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis a consectetur provident dolor odit, at laborum
              aliquam eos suscipit magni labore,              
            </p>
            <a href="#">More information...</a>
          </Col>
        </Row>
        <Row className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            consectetur amet, necessitatibus minima commodi minus hic enim
            perspiciatis quas suscipit voluptatem quos magni blanditiis atque
            explicabo assumenda, saepe culpa ipsam. Officiis dicta in fugiat
            deleniti error, perferendis numquam tempora laboriosam explicabo
            vero? Excepturi incidunt modi ipsum atque minima officia sequi
            facilis beatae, adipisci perspiciatis molestias fugit aliquam
            doloremque quis debitis. Officia sunt amet vel quae labore quo
            cumque deleniti animi veritatis. Natus assumenda ullam, sunt
            doloremque nisi, aspernatur fuga ipsam repudiandae amet voluptates
            unde magni fugit consequatur aperiam.
          </p>
          <p>
            Vitae, adipisci. Doloremque minus fugit amet cumque ullam atque,
            quos distinctio fuga similique ex asperiores deleniti nisi repellat
            accusamus saepe in culpa beatae libero doloribus eligendi?
            Perspiciatis at placeat illo quibusdam dolorem. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Culpa doloribus eveniet atque
            odio voluptate dolores, ducimus illum impedit laudantium
            voluptatibus? Mollitia ipsum fuga maxime, expedita sunt doloremque
            accusantium sapiente tenetur? Laboriosam repudiandae impedit qui a
            provident quia excepturi! Ipsum, odit eveniet explicabo ipsa nemo
            dolores aliquid. Odit quas, quibusdam repudiandae delectus nemo
            accusamus sed corrupti, optio omnis eligendi qui laborum.
          </p>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}
