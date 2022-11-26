// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// Styling
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Table,
  Modal,
} from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManageHeader(props) {
  // Generate token for every API post
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      const expr = expired * 1000;
      const curDate = currentDate.getTime();
      const exprRes = currentDate.getTime() - expr;
      const response = await axios.get("http://localhost:5000/token", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpired(decoded.exp);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // End generate token for every API post

  // Farhan : Get Header
  const [header, setHeader] = useState([]);

  useEffect(() => {
    getHeader();
  }, []);

  const getHeader = async () => {
    const response = await axios.get(`http://localhost:5000/header`);
    setHeader(response.data.result);
  };
  //  End Get Header

  return (
    <>
      <h1 className="fs-2 text-center">Manage Header</h1>
      <Row className="my-5">
        <Col xs={12}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Header Picture</th>
                <th>Header Code</th>
                <th style={{ width: 220 }}>Header Title</th>
                <th style={{ width: 220 }}>Description</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {header.map((heads) => {
                return (
                  <>
                    <tr key={heads.header_id}>
                      <td>
                        {heads.header_img_dir ? (
                          <img
                            src={`http://localhost:5000/${heads.header_img_dir.replace(
                              "\\",
                              "/"
                            )}`}
                            alt="header-img"
                            width="100px"
                          />
                        ) : (
                          <p>This staff doesn't have picture</p>
                        )}
                      </td>
                      <td>{heads.header_id}</td>
                      <td>{heads.header_title}</td>
                      <td>{heads.header_desc}</td>
                      <td>
                        <div className="d-flex">
                          <Link
                            to={`/dashboard/edit-header/?header_id=${heads.header_id}`}
                          >
                            <Button variant="success" value={heads.header_id}>
                              <IoEye />
                            </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
          <div style={{ marginBottom: "45px" }}></div>
        </Col>
      </Row>
    </>
  );
}

export default ManageHeader;
