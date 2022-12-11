// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Styling
import "../../style/programs.css";
import {
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Container,
  Card,
} from "react-bootstrap";
import { IoSearch, IoPlayBackSharp } from "react-icons/io5";

import programsCard from "../../images/programs-card.jpg";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

function Programs() {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  const [programs, setPrograms] = useState([]);
  // const baseURL = "http://localhost:5000";

  useEffect(() => {
    getAllProgram();
  }, []);

  const getAllProgram = async () => {
    try {
      const resProgram = await axiosInstance.get(`/jurusan`);

      if (resProgram) {
        setPrograms(resProgram.data.result);
      } else {
        console.log("failed getting programs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(programs);

  return (
    <>
      <NavbarTop />
      {/* <Row id="programs-intro" className="text-center">
        <Col xs={12}>
          <h1>Program Keahlian di SMK Islamiyah Ciputat</h1>
          <p>
            Cerita pengalaman, berita seru, pengumuman terbaru, artikel menarik
            dan berita terbaru akademik. Baca semua berita dan informasi tentang
            SMK Islamiyah disini.
          </p>
        </Col>
      </Row>
      <Row id="breadcrumb">
        <p>Home &gt; Programs</p>
      </Row> */}
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container>
        <Row id="title-programs" className="justify-content-center">
          <Col xs={10} md={10} sm={12} className="text-center">
            <h1>Programs</h1>
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
              Home &gt; programs &gt;
              <span style={{ color: "yellow" }}>all</span>
            </p>
          </Col>
        </Row>
        <Row>
          <div id="programs-intro">
            <h1>Programs Keahlian</h1>
            <p>
              Tentukan program keahlian seru sesuai passionmu dari SMK Islamiyah
              Ciputat!
            </p>
          </div>
        </Row>
        <Row id="list-programs" className="my-5">
          {programs.map((program) => {
            return (
              <Col xs="4">
                <div className="card-programs" key={program.jurusan_id}>
                  <img
                    src={`${baseURLAPI}/${program.jg_img_dir.replace(
                      /\\/g,
                      "/"
                    )}`}
                  />
                  <div className="card-programs-body">
                    <h1>{program.jurusan_name}</h1>
                    <p>
                      {program.jurusan_about
                        .slice(0, 250)
                        .replace(
                          /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                          ""
                        )}
                    </p>
                    <Link
                      to={`/programs/detail/${program.jurusan_slug}`}
                      className="btn-details-program"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="my-3">
          <a href="#" className="mt-2 mb-4">
            <IoPlayBackSharp /> Back to Homepage
          </a>
        </Row>
      </Container>
      <div className="footer-lock mt-5" style={{ height: "50px" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default Programs;
