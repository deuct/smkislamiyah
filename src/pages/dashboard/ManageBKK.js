// React Need
import React, { useState, useEffect } from "react";
import axios from "axios";
// Styling
import { Row, Col, Form, Button, InputGroup, Table } from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManageBKK() {
  // Farhan : Get Post, Paginate, Search
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [postTypes, setPostTypes] = useState("");
  useEffect(() => {
    getJobs();
  }, [page, keyword, postTypes]);

  const getJobs = async () => {
    const response = await axios.get(
      `http://localhost:5000/dash-listingbkk?search_query=${keyword}&page=${page}&limit=${limit}&post_type=${postTypes}`
    );
    setJobs(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg("The post that you're looking for is not found..");
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
  //  End Get Post, Paginate, Search

  // Filter
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleFilter = (e) => {
    setPage(0);
    setMsg("");
    if (e.target.value === "All") {
      setPostTypes("");
    } else {
      setPostTypes(e.target.value);
    }
  };
  // End Filter
  return (
    <>
      <h1 className="fs-2">Manage Jobs in BKK</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <IoAdd />
            New Jobs
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
                placeholder="Search Post"
                aria-label="Search Post"
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
                    <tr class={{ fontSize: "1.1rem" }}>
                      <td>{job.company_id}</td>
                      <td>{job.company_name}</td>
                      <td>{job.job_title}</td>
                      <td>{job.job_short_desc}</td>
                      <td>{job.job_status}</td>
                      <td>{job.createdAt}</td>
                      <td>
                        <div className="d-flex">
                          <Button variant="danger" className="me-2">
                            <IoTrashBin />
                          </Button>
                          <Button variant="success">
                            <IoEye />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default ManageBKK;
