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
import NewBkk from "./NewBKK";
import ManageBKK from "./ManageBKK";
import NewTeacher from "./NewTeacher";
import ManageTeacher from "./ManageTeacher";
import NewStaff from "./NewStaff";
import ManageStaff from "./ManageStaff";
import ManageHeader from "./ManageHeader";
import NewHeader from "./NewHeader";
import ManageAlumni from "./ManageAlumni";
import NewAlumni from "./NewAlumni";
import NewProgram from "./NewProgram";
import ManageProgram from "./ManageProgram";

function Dashboard() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    console.log("running refresh");
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
        // Jika belum login arahkan ke not found (security reason)
        navigate("/404");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expired * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        // config.withCredentials = true;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpired(decoded.exp);
        console.log("running axios interceptor");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  console.log("expired passing: " + expired);
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidenav />
          {/* <h2>Welcome</h2> */}
        </Col>
        <Col xs={10} style={{ marginLeft: "-10px" }} className="pt-4">
          <Routes>
            <Route path="/" element={<DashHome name={name} />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="new-article"
              element={
                <NewPosting
                  token={token}
                  name={name}
                  expired={expired}
                  role="new"
                />
              }
            />
            <Route
              path="manage-article"
              element={
                <ManagePosting token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="edit-article"
              element={
                <NewPosting
                  token={token}
                  name={name}
                  expired={expired}
                  role="edit"
                />
              }
            />
            <Route
              path="new-bkk"
              element={<NewBkk token={token} name={name} expired={expired} />}
            />
            <Route
              path="edit-bkk"
              element={<NewBkk token={token} name={name} expired={expired} />}
            />
            <Route
              path="manage-bkk"
              element={
                <ManageBKK token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="new-teacher"
              element={
                <NewTeacher token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="edit-teacher"
              element={
                <NewTeacher token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="manage-teacher"
              element={
                <ManageTeacher token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="new-staff/"
              element={<NewStaff token={token} name={name} expired={expired} />}
            />
            <Route
              path="edit-staff/"
              element={<NewStaff token={token} name={name} expired={expired} />}
            />
            <Route
              path="manage-staff"
              element={
                <ManageStaff token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="new-alumni"
              element={
                <NewAlumni token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="edit-alumni"
              element={
                <NewAlumni token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="manage-alumni"
              element={
                <ManageAlumni token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="new-program"
              element={
                <NewProgram token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="edit-program"
              element={
                <NewProgram token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="manage-program"
              element={
                <ManageProgram token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="edit-header"
              element={
                <NewHeader token={token} name={name} expired={expired} />
              }
            />
            <Route
              path="manage-header"
              element={
                <ManageHeader token={token} name={name} expired={expired} />
              }
            />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
