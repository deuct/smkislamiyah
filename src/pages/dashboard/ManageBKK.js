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

function ManageBKK(props) {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

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
  // End modal after delete item

  // Generate token for every API post
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  const axiosJWT = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      const expr = expired * 1000;
      const curDate = currentDate.getTime();
      const exprRes = currentDate.getTime() - expr;
      const response = await axiosInstance.get("/token", {
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
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  useEffect(
    () => {
      getJobs();
    },
    [page, keyword, jobStatus],
    [jobs]
  );

  const getJobs = async () => {
    const response = await axiosInstance.get(
      `/dash-listingbkk?search_query=${keyword}&page=${page}&limit=${limit}&job_status=${jobStatus}`
    );
    setJobs(response.data.result);
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
      setJobStatus("");
    } else {
      setJobStatus(e.target.value);
    }
  };
  // End Filter

  // Select id job from table listing
  const [selectedId, setSelectedId] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const deleteJob = async (key, photo) => {
    const response = await axiosJWT.post(
      `/job/delete?job_id=${key}&job_img=${photo}`
    );
    if (response) {
      console.log("success deleted data");
      handleCloseModal();
      window.location.reload();
    } else {
      console.log("failed deleted data");
    }
  };

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
              (handleCloseModal, (e) => deleteJob(e.target.value, selectedImg))
            }
          >
            Yes
          </Button>
        </Modal.Body>
      </Modal>
      <h1 className="fs-2">Manage Jobs in BKK</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <Link
              to={"/dashboard/new-bkk/?role=add"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <IoAdd />
              Add Job
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
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </Form.Select>
        </Col>

        <Col xs={3}>
          <form onSubmit={searchData}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search Job..."
                aria-label="Search Job..."
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
                <th>Job Code</th>
                <th>Company Logo</th>
                <th style={{ width: 220 }}>Company Name</th>
                <th style={{ width: 220 }}>Job Title</th>
                <th>Job Desc</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                return (
                  <>
                    <tr class={{ fontSize: "1.1rem" }} key={job.company_id}>
                      <td>{job.company_id}</td>
                      <td>
                        <img
                          src={`${baseURLAPI}/${job.company_logo.replace(
                            "\\",
                            "/"
                          )}`}
                          alt="job-image"
                          width="100px"
                        />
                      </td>
                      <td>{job.company_name}</td>
                      <td>{job.job_title}</td>
                      <td>{job.job_short_desc}</td>
                      <td>{job.job_status}</td>
                      <td>{job.createdAt}</td>
                      <td>
                        <div className="d-flex">
                          <Button
                            variant="danger"
                            className="me-2"
                            value={job.company_id}
                            onClick={(e) =>
                              handleShowModal(job.company_id, job._photo_dir, e)
                            }
                          >
                            <IoTrashBin />
                          </Button>
                          <Link
                            to={`/dashboard/edit-bkk/?company_id=${job.company_id}&role=edit`}
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

export default ManageBKK;
