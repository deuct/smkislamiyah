// React Need
import React, { useEffect, useState } from "react";
import axios from "axios";
// Component
import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";
import DetailBkk from "./DetailBkk";
// Style
import { Container, InputGroup, Row, Col, Button, Form } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import "../../style/bkk-listing.css";

function Listing() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  };

  const client = axios.create({
    baseURL: "http://localhost:5000/jobs",
  });

  const [jobs, setJobs] = useState([]);
  const [load, setLoad] = useState(2);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    client.get("", config).then((response) => {
      setJobs(response.data);
    });
  }, []);

  const loadData = () => {
    setLoad((prev) => prev + 1);
  };

  const [bkkId, setBkkId] = useState("");

  const [isShown, setIsShown] = useState(false);

  const clickBkk = async (event) => {
    setBkkId(event.currentTarget.value);
    setIsShown((current) => !current);
  };

  return (
    <>
      <NavbarTop isIndex={false} />
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="bkk-listing"
        style={{ display: "none" }}
        readOnly
      />
      {/* <div id="navbar-id">test</div> */}
      <div id="navbar-bgz"></div>
      <Container style={{ marginTop: "5vh" }}>
        <Row id="title-bkk">
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
        <Row id="breadcrumb">
          <p>Home &gt; BKK</p>
        </Row>
        <Row id="search-bar" className="justify-content-center">
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search job..."
                aria-label="Search job..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <IoSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row id="list-job">
          <Col xs={4} id="list-job-left">
            {jobs.slice(0, load).map((job) => {
              return (
                <Row key={job.company_id}>
                  {/* <input type="text" name="bkkId" value={job.company_id} /> */}
                  <Button
                    type="button"
                    className="card-bkk-button"
                    value={job.company_id}
                    onClick={(event) => clickBkk(event)}
                  >
                    <div className="card-bkk">
                      <Col xs={2}>
                        <img
                          src={`http://localhost:5000/${job.company_logo.replace(
                            "\\",
                            "/"
                          )}`}
                          className="cbkk-img"
                          alt="company-logo"
                        />
                      </Col>
                      <Col xs={10} className="d-inline-block">
                        <div className="cbkk-fill">
                          <h1>{job.company_name}</h1>
                          <h2>{job.job_title}</h2>
                          <span className="status st-open">
                            {job.job_status}
                          </span>
                          <p>{job.job_short_desc}</p>
                          {/* <a className="cbkk-MI">More Information</a> */}
                        </div>
                      </Col>
                    </div>
                  </Button>
                </Row>
              );
            })}

            <Row className="text-center">
              <Col>
                <Button className="btn-loadmore mx-auto" onClick={loadData}>
                  Load More
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>{isShown && <DetailBkk bkkId={bkkId} />}</Col>
        </Row>
      </Container>
      <div className="footer-lock mt-5" style={{ height: "50px" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default Listing;
