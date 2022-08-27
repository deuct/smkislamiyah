import React from "react";
import { useState } from "react";
import "../../style/dashboard.css";
import { Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// Component Load
import DashHome from "./DashHome";
import Sidenav from "./Sidenav";
import Profile from "./Profile";
import NewPosting from "./NewPosting";
import EditPosting from "./EditPosting";
import ManagePosting from "./ManagePosting";

function Dashboard() {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidenav />
        </Col>
        <Col xs={9} className="pt-4">
          <Routes>
            <Route path="/" element={<DashHome />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="new-article"
              element={<NewPosting title="Article" />}
            />
            <Route
              path="new-announcement"
              element={<NewPosting title="Announcement" />}
            />
            <Route
              path="manage-article"
              element={<ManagePosting title="Article" />}
            />
            <Route
              path="manage-announcement"
              element={<ManagePosting title="Announcement" />}
            />
            <Route
              path="edit-article"
              element={<EditPosting title="Article" />}
            />
            <Route
              path="edit-announcement"
              element={<EditPosting title="Announcement" />}
            />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
