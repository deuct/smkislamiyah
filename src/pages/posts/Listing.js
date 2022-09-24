import React from "react";

import { Col, Row, Container, Button, InputGroup, Form } from "react-bootstrap";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";

import {
  IoSearch,
  IoTimeOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import "../../style/posts.css";
import lksSample from "../../images/lks-sample.jpg";

export default function Listing() {
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
        <Row id="post-intro" className="text-center">
          <Col xs={10}>
            <h1>Ada apa saja di SMK Islamiyah Ciputat ?</h1>
            <p>
              Cerita pengalaman, berita seru, pengumuman terbaru, artikel
              menarik dan berita terbaru akademik. Baca semua berita dan
              informasi tentang SMK Islamiyah disini.
            </p>
          </Col>
        </Row>
        <Row id="breadcrumb">Home &gt; Announcement</Row>
        <Row id="post-ctg-list">
          <Col xs={12} style={{ display: "flex", flexWrap: "nowrap" }}>
            <Button>All</Button>
            <Button>Announcements</Button>
            <Button>Articles</Button>
            <Button>Activities</Button>
            <Button>News</Button>
          </Col>
        </Row>
        <Row id="search-bar" className="justify-content-center">
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search your news..."
                aria-label="Search your news..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <IoSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row id="posts-list">
          <Row className="posts-list-card">
            <Col xs={9}>
              <Row className="plc-title">
                <h1>Pengumuman Peserta Terbaik di Kelas</h1>
              </Row>
              <Row
                className="plc-category"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <Col xs={12}>
                  <Button>Announcement</Button>
                  <Button>Akademik</Button>
                </Col>
              </Row>
              <Row className="plc-body">
                <h3>Pengumuman Peserta Terbaik di Kelas</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, quisquam animi aliquam est facere beatae consectetur
                  distinctio qui! Nobis modi vel quis expedita cum, soluta
                  tenetur iusto a sit adipisci culpa veniam vitae! Iusto, ab!
                </p>
              </Row>
              <Row className="plc-date" style={{ display: "flex" }}>
                <Col xs={12}>
                  <IoTimeOutline size={15} />
                  14 Sept, 2022
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <img src={lksSample} />
            </Col>
          </Row>
          <Row className="posts-list-card">
            <Col xs={9}>
              <Row className="plc-title">
                <h1>Pengumuman Peserta Terbaik di Kelas</h1>
              </Row>
              <Row
                className="plc-category"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <Col xs={12}>
                  <Button>Announcement</Button>
                  <Button>Akademik</Button>
                </Col>
              </Row>
              <Row className="plc-body">
                <h3>Pengumuman Peserta Terbaik di Kelas</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, quisquam animi aliquam est facere beatae consectetur
                  distinctio qui! Nobis modi vel quis expedita cum, soluta
                  tenetur iusto a sit adipisci culpa veniam vitae! Iusto, ab!
                </p>
              </Row>
              <Row className="plc-date" style={{ display: "flex" }}>
                <Col xs={12}>
                  <IoTimeOutline size={15} />
                  14 Sept, 2022
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <img src={lksSample} />
            </Col>
          </Row>
          <Row className="posts-list-card">
            <Col xs={9}>
              <Row className="plc-title">
                <h1>Pengumuman Peserta Terbaik di Kelas</h1>
              </Row>
              <Row
                className="plc-category"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <Col xs={12}>
                  <Button>Announcement</Button>
                  <Button>Akademik</Button>
                </Col>
              </Row>
              <Row className="plc-body">
                <h3>Pengumuman Peserta Terbaik di Kelas</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, quisquam animi aliquam est facere beatae consectetur
                  distinctio qui! Nobis modi vel quis expedita cum, soluta
                  tenetur iusto a sit adipisci culpa veniam vitae! Iusto, ab!
                </p>
              </Row>
              <Row className="plc-date" style={{ display: "flex" }}>
                <Col xs={12}>
                  <IoTimeOutline size={15} />
                  14 Sept, 2022
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <img src={lksSample} />
            </Col>
          </Row>
          <Row className="posts-list-card">
            <Col xs={9}>
              <Row className="plc-title">
                <h1>Pengumuman Peserta Terbaik di Kelas</h1>
              </Row>
              <Row
                className="plc-category"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <Col xs={12}>
                  <Button>Announcement</Button>
                  <Button>Akademik</Button>
                </Col>
              </Row>
              <Row className="plc-body">
                <h3>Pengumuman Peserta Terbaik di Kelas</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, quisquam animi aliquam est facere beatae consectetur
                  distinctio qui! Nobis modi vel quis expedita cum, soluta
                  tenetur iusto a sit adipisci culpa veniam vitae! Iusto, ab!
                </p>
              </Row>
              <Row className="plc-date" style={{ display: "flex" }}>
                <Col xs={12}>
                  <IoTimeOutline size={15} />
                  14 Sept, 2022
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <img src={lksSample} />
            </Col>
          </Row>
        </Row>
        <Row id="pagination" className="justify-content-center text-center">
          <Col xs={6}>
            <ul className="paginate">
              <li>
                <a>
                  <IoChevronBackOutline size={20} />
                </a>
              </li>
              <li>
                <a>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
              <li>
                <a>3</a>
              </li>
              <li>
                <a>
                  <IoChevronForwardOutline size={20} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}
