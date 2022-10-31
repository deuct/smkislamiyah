import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style/not-found.css";

function PageNotFound() {
  return (
    <div id="nf-bg">
      <div id="not-found">
        <img src={require("../../images/404error.png")} width={"450px"} />
        <h1
          className="fw-bold"
          style={{ fontSize: "1.6rem", color: "RGB(68, 110, 194)" }}
        >
          404
        </h1>
        <h2
          className="fw-bold"
          style={{ fontSize: "1.4rem", color: "RGB(68, 110, 194)" }}
        >
          The page cannot be found!
        </h2>
        <Link to={"/"}>
          <Button>Go to Homepage</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
