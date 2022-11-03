import React from "react";

import "../../../style/teachers.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import NavbarTop from "../../components/NavbarTop";
import FooterBot from "../../components/FooterBot";
import { IoSearch, IoPlayBackSharp } from "react-icons/io5";
import person from "../../../images/sample-alumni.jpg";

function Teachers() {
  return (
    <>
      <NavbarTop />
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="bkk-listing"
        style={{ display: "none" }}
        readOnly
      />
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container style={{ marginTop: "5vh" }}>
        <Row id="title-teachers" className="justify-content-center">
          <Col md={8} xs={12} className="text-center">
            <h1>Teacher's of</h1>
            <h1>SMK Islamiyah Ciputat</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              quisquam velit modi sed ut quibusdam alias libero delectus in
              facilis blanditi.
            </p>
          </Col>
        </Row>
        <Row id="breadcrumb">
          <Col xs={12}>
            <p>
              Home &gt; Organization &gt;{" "}
              <span style={{ color: "yellow" }}>Teachers</span>
            </p>
          </Col>
        </Row>
        <Row id="search-bar">
          <Col md={3} xs={3}>
            <Form.Select>
              <option>Filter by Status</option>
              <option>Honorer</option>
              <option>Active</option>
              <option>Pengganti</option>
            </Form.Select>
          </Col>
          <Col md={3} xs={3}>
            <Form.Select>
              <option>Filter by Matpel</option>
              <option>Bahasa Indonesia</option>
              <option>Agama Islam</option>
              <option>IPA</option>
              <option>IPS</option>
            </Form.Select>
          </Col>
          <Col md={5} xs={4}>
            <InputGroup>
              <Form.Control
                placeholder="Search Teachers"
                aria-label="Search Teachers"
              />
            </InputGroup>
          </Col>
          <Col md={1} xs={2}>
            <Button>
              <IoSearch />
            </Button>
          </Col>
        </Row>
        <Row id="teacher-list" class="text-center">
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="card-teachers">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Teacher Name</h3>
                  <div className="divider-ct"></div>
                  <p>Mata Pelajaran</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Button id="btn-teacher">LOAD MORE TEACHERS</Button>
          <a href="#" className="mt-2 mb-4">
            <IoPlayBackSharp /> Back to Homepage
          </a>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}

export default Teachers;
