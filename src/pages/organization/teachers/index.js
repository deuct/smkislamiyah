// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
// Component
import NavbarTop from "../../components/NavbarTop";
import FooterBot from "../../components/FooterBot";
// Style
import "../../../style/teachers.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { IoSearch, IoPlayBackSharp } from "react-icons/io5";
import person from "../../../images/sample-alumni.jpg";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [load, setLoad] = useState(4);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/teachers/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        setTeachers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = () => {
    setLoad((prev) => prev + 4);
  };

  return (
    <>
      <NavbarTop isIndex={false} />
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container style={{ marginTop: "5vh" }}>
        <Row id="title-teachers" className="justify-content-center">
          <Col xs={8} className="text-center">
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
          <Col xs={2}>
            <Form.Select>
              <option>Filter by Status</option>
              <option>Active</option>
              <option>Pension</option>
            </Form.Select>
          </Col>
          <Col xs={2}>
            <Form.Select>
              <option>Filter by Jurusan</option>
              <option>Akuntansi</option>
              <option>TKJ</option>
              <option>Tata Boga</option>
            </Form.Select>
          </Col>
          <Col xs={2}>
            <Form.Select>
              <option>Filter by Matpel</option>
              <option>Bahasa Indonesia</option>
              <option>Agama Islam</option>
              <option>IPA</option>
              <option>IPS</option>
            </Form.Select>
          </Col>
          <Col xs={4}>
            <InputGroup>
              <Form.Control
                placeholder="Search Teachers"
                aria-label="Search Teachers"
              />
            </InputGroup>
          </Col>
          <Col xs={1}>
            <Button>
              <IoSearch />
            </Button>
          </Col>
        </Row>
        <Row id="teacher-list" class="text-center">
          {teachers.map((teacher) => {
            return (
              <>
                <Col xs={3}>
                  <div className="card-teachers">
                    <div className="body-ct">
                      <div className="img-ct">
                        <img
                          src={`http://localhost:5000/${teacher.teacher_photo_dir.replace(
                            "\\",
                            "/"
                          )}`}
                          alt="teacher-photo"
                        />
                      </div>
                      <div className="desc-ct">
                        <h3>{teacher.teacher_name}</h3>
                        <div className="divider-ct"></div>
                        <p>{teacher.teacher_matpel}</p>
                        <p>{teacher.teacher_status}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="my-3">
          <Button id="btn-teacher" onClick="loadData">
            LOAD MORE TEACHERS
          </Button>
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
