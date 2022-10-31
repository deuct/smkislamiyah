import React from "react";

import "../../../style/staff.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import NavbarTop from "../../components/NavbarTop";
import FooterBot from "../../components/FooterBot";
import { IoSearch, IoPlayBackSharp } from "react-icons/io5";
import person from "../../../images/sample-alumni.jpg";

function Staff() {
  return (
    <>
      <NavbarTop />
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="staff"
        style={{ display: "none" }}
        readOnly
      />
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container style={{ marginTop: "5vh" }}>
        <Row id="title-Staffs" className="justify-content-center">
          <Col xs={8} className="text-center">
            <h1>Staff of</h1>
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
              Home &gt; Organization &gt;
              <span style={{ color: "yellow" }}>Staff</span>
            </p>
          </Col>
        </Row>
        <Row id="search-bar">
          <Col xs={6}>
            <Form.Select>
              <option>Filter by Status</option>
              <option>Dewan Pengawas</option>
              <option>Tata Usaha</option>
              <option>Keuangan</option>
              <option>Kebersihan</option>
            </Form.Select>
          </Col>
          <Col xs={5}>
            <InputGroup>
              <Form.Control
                placeholder="Search Staffs"
                aria-label="Search Staffs"
              />
            </InputGroup>
          </Col>
          <Col xs={1}>
            <Button>
              <IoSearch />
            </Button>
          </Col>
        </Row>
        <Row id="Staff-list" class="text-center">
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="card-Staffs">
              <div className="body-ct">
                <div className="img-ct">
                  <img src={person} alt="" />
                </div>
                <div className="desc-ct">
                  <h3>Staff Name</h3>
                  <div className="divider-ct"></div>
                  <p>Department</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Button id="btn-Staff">LOAD MORE STAFFS</Button>
          <a href="#" className="mt-2 mb-4">
            <IoPlayBackSharp /> Back to Homepage
          </a>
        </Row>
      </Container>
      <FooterBot />
    </>
  );
}

export default Staff;
