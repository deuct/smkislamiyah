import React, { useEffect, useState } from "react";
import axios from "axios";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

import {
  Container,
  InputGroup,
  Row,
  Col,
  Button,
  Form,
  Navbar,
} from "react-bootstrap";

import "../../style/bkk-detail.css";
import PepsiLogo from "../../images/pepsi-logo.png";

function DetailBkk(props) {
  // const [bkkIds, setBkkIds] = useState("1");
  // setBkkIds("1");

  const client = axios.create({
    baseURL: "http://localhost:5000/jobs",
  });

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    get();
  }, []);

  // useEffect(() => {
  //   console.log(jobs);
  // }, [jobs]);

  const get = async () => {
    await client.get(props.bkkId).then((response) => {
      setJobs(response.data);
    });
  };
  return (
    <>
      {/* {jobs.map((job) => {
        return ( */}

      <Row className="bkkdetail-title">
        <img src={PepsiLogo} className="comp-logo-detail" />
        <h1>{props.bkkId}</h1>
        <h3>{jobs.company_name}</h3>
        <span className="status st-open">Open</span>
      </Row>
      <Row className="bkkdetail-body">
        <div className="detail-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          accusantium aut provident nulla nemo? Quod rem eum magni deserunt
          corrupti porro accusantium quidem facilis voluptate!
        </div>
        <div className="bkk-d-desc">
          <h2>JOB REQUIREMENT : </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dolorum dolor amet magni itaque placeat! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem ipsum assumenda id
            velit tempore sunt ex obcaecati aut natus quasi.
          </p>
        </div>
        <div className="bkk-d-desc">
          <h2>JOB DESCRIPTION : </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et
            necessitatibus qui labore! Perspiciatis quae soluta minima nostrum
            nisi, sunt repellendus odio ut rem velit!
          </p>
        </div>
        <div className="bkk-d-desc">
          <h2>COMPANY ADDRESS : </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </Row>

      {/* );
      })} */}
    </>
  );
}

export default DetailBkk;
