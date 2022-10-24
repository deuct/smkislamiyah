import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
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
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, [name, token, expired]);

  const refreshToken = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.get("http://localhost:5000/token", config);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpired(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expired * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpired(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidenav />
          <h2>Welcome</h2>
        </Col>
        <Col xs={9} className="pt-4">
          <Routes>
            <Route path="/" element={<DashHome name={name} />} />
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
