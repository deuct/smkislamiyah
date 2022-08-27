import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import BarChart from "./components/BarChart";
import { IoBook, IoPaperPlaneOutline, IoBriefcaseSharp } from "react-icons/io5";
import { UserData } from "./Data";
import { useState } from "react";

function DashHome() {
  // Chart JS
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Web Visitors",
        data: UserData.map((data) => data.visitor),
        backgroundColor: ["#FF8552"],
      },
    ],
  });
  // End Chart

  return (
    <>
      <h1 className="dashboard-title">Home</h1>
      <Row className="justify-content-start">
        <h1 className="fs-3 mb-3">Posting Acumulation</h1>
        <Col xs={3} className="align-middle">
          <div className="stats-card d-flex">
            <Col xs={2}>
              <IoBook size={40} />
            </Col>
            <Col xs={8} className="ps-3">
              <h2>Total Article</h2>
              <p>129</p>
            </Col>
          </div>
        </Col>
        <Col xs={3}>
          <div className="stats-card d-flex">
            <Col xs={2}>
              <IoPaperPlaneOutline size={40} />
            </Col>
            <Col xs={8} className="ps-3">
              <h2>Total Announcement</h2>
              <p>150</p>
            </Col>
          </div>
        </Col>
        <Col xs={3}>
          <div className="stats-card d-flex">
            <Col xs={2}>
              <IoBriefcaseSharp size={40} />
            </Col>
            <Col xs={8} className="ps-3">
              <h2>Total Jobs</h2>
              <p>54</p>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4" xs={3}>
          <h2 className="fs-3 mt-2 mb-2">Visitors Graphic</h2>
          <Form.Select>
            <option>Filter by years</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="my-3 mb-5">
        <Col>
          <BarChart chartData={userData} />
        </Col>
      </Row>
    </>
  );
}

export default DashHome;
