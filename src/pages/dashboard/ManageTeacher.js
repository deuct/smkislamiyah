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

function ManagePosting(props) {
  // Modal after delete item
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (selectedId, selectedImg, e) => {
    setShow(true);
    setSelectedId(selectedId);
    setSelectedImg(selectedImg);
    console.log("running handle show modal");
  };
  // End modal after post

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

  // Farhan : Get Jobs, Paginate, Search
  const [teacher, setTeacher] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [teacherStatus, setTeacherStatus] = useState("");
  useEffect(() => {
    getTeacher();
  }, [page, keyword, teacherStatus]);

  const getTeacher = async () => {
    const response = await axios.get(
      `http://localhost:5000/dash-listingteacher?search_query=${keyword}&page=${page}&limit=${limit}&teacher_status=${teacherStatus}`
    );
    setTeacher(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg("The jobs that you're looking for is not found..");
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };
  //  End Get Jobs, Paginate, Search

  // Filter
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleFilter = (e) => {
    setPage(0);
    setMsg("");
    if (e.target.value === "All") {
      setTeacherStatus("");
    } else {
      setTeacherStatus(e.target.value);
    }
  };
  // End Filter

  // Select id staff from table listing
  const [selectedId, setSelectedId] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const deleteStaff = async (key, photo) => {
    console.log("===========staff wil be deleted===========");
    console.log(key);
    console.log(photo);
    const response = await axiosJWT.post(
      `http://localhost:5000/teacher/delete?teacher_id=${key}&teacher_img=${photo}`
    );
    if (response) {
      console.log("success deleted data");
      handleCloseModal();
      window.location.reload();
    } else {
      console.log("failed deleted data");
    }
  };

  console.log("==========selected id=========");
  console.log(selectedId);

  return (
    <>
      {/* Modal After Delete Item */}
      <Modal
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleCloseModal}
      >
        <Modal.Body className="text-center">
          <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
            Are you sure want to delete this item ?
          </h3>
          <Button
            variant="secondary"
            className="mr-2"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            value={selectedId}
            onClick={
              (handleCloseModal,
              (e) => deleteStaff(e.target.value, selectedImg))
            }
          >
            Yes
          </Button>
        </Modal.Body>
      </Modal>
      <h1 className="fs-2">Manage Teacher</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <Link
              to={`/dashboard/new-teacher/?role=add`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <IoAdd />
              Add Teacher
            </Link>
          </Button>
        </Col>

        <Col xs={3}>
          <Form.Select
            value={selected}
            onChange={handleChange}
            onClick={handleFilter}
          >
            <option disabled={true} value="" selected>
              Filter by Status
            </option>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Pension">Pension</option>
          </Form.Select>
        </Col>

        <Col xs={3}>
          <form onSubmit={searchData}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search by name or matpel"
                aria-label="Search"
                aria-describedby="basic-addon1"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="primary" type="submit">
                <IoSearch />
              </Button>
            </InputGroup>
          </form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Teacher Picture</th>
                <th>Teacher Code</th>
                <th style={{ width: 220 }}>Teacher Name</th>
                <th style={{ width: 220 }}>Mata Pelajaran</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((tchr) => {
                return (
                  <>
                    <tr key={tchr.teacher_id}>
                      <td>
                        {tchr.teacher_photo_dir ? (
                          <img
                            src={`http://localhost:5000/${tchr.teacher_photo_dir.replace(
                              "\\",
                              "/"
                            )}`}
                            alt="teacher-image"
                            width="100px"
                          />
                        ) : (
                          <p>This staff doesn't have picture</p>
                        )}
                      </td>
                      <td>{tchr.teacher_id}</td>
                      <td>{tchr.teacher_name}</td>
                      <td>{tchr.teacher_matpel}</td>
                      <td>{tchr.teacher_status}</td>
                      <td>
                        <div className="d-flex">
                          <Button
                            variant="danger"
                            className="me-2"
                            value={tchr.teacher_id}
                            onClick={(e) =>
                              handleShowModal(
                                tchr.teacher_id,
                                tchr.teacher_photo_dir,
                                e
                              )
                            }
                          >
                            <IoTrashBin />
                          </Button>
                          <Link
                            to={`/dashboard/edit-teacher/?teacher_id=${tchr.teacher_id}&role=edit`}
                          >
                            <Button variant="success">
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
          <p>
            Total Rows : {rows} Page : {rows ? page + 1 : 0} of {pages}
          </p>
          <p>{msg}</p>
          <nav
            className="pagination is-centered"
            key={rows}
            role="navigation"
            aria-label="pagination"
          >
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              containerClassName={"pagination-list"}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              activeLinkClassName={"pagination-link is-current"}
              disabledLinkClassName={"pagination-link is-disabled"}
            />
          </nav>
          <div style={{ marginBottom: "45px" }}></div>
        </Col>
      </Row>
    </>
  );
}

export default ManagePosting;
