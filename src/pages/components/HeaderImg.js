import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../style/HeaderImg.css";

import programsImg from "../../images/programs.jpg";

function HeaderImg({ title }) {
  return (
    <>
      <Row id="header-img">
        <Col xs={12}>
          <div className="headerimg-black"></div>
          <img src={programsImg} alt="header-img" />
          <div className="headerfill">
            <h1>SMK Islamiyah {title}</h1>
          </div>
        </Col>
      </Row>
      <div id="divider-header"></div>
    </>
  );
}

export default HeaderImg;
