// React Needed
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Component
import ReactPaginate from "react-paginate";
// Styling
import { Row, Col, Form, Button, InputGroup, Table } from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManagePosting() {
  // Farhan : Get Post, Paginate, Search
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [postTypes, setPostTypes] = useState("");
  useEffect(() => {
    getPosts();
  }, [page, keyword, postTypes]);

  const getPosts = async () => {
    const response = await axios.get(
      `http://localhost:5000/dash-listingpost?search_query=${keyword}&page=${page}&limit=${limit}&post_type=${postTypes}`
    );
    setPosts(response.data.result);
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
  console.log("========posttype=========");
  console.log(postTypes);
  return (
    <>
      <h1 className="fs-2">Manage Post</h1>
      <Row className="my-5 mt-3 mx-2">
        <Col>
          <Button variant="success">
            <Link
              to={"/dashboard/new-article"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <IoAdd />
              New Post
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
              Filter by Category
            </option>
            <option value="">All</option>
            <option value="announcement">Announcement</option>
            <option value="activity">Activity</option>
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
      <Row className="mx-2">
        <Col xs={12}>
          <Table striped hover style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Post Code</th>
                <th style={{ width: 180 }}>Title</th>
                <th>Short Description</th>
                <th>Status</th>
                <th>Type</th>
                <th>Created At</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <>
                    <tr class={{ fontSize: "1.1rem" }}>
                      <td>{post.post_id}</td>
                      <td>{post.post_name}</td>
                      <td>{post.post_shortdesc}</td>
                      {post.post_status === "posted" ? (
                        <td style={{ color: "green", fontWeight: "600" }}>
                          {post.post_status}
                        </td>
                      ) : (
                        <td style={{ color: "#B99E00", fontWeight: "600" }}>
                          {post.post_status}
                        </td>
                      )}
                      <td>{post.post_type}</td>
                      <td>{post.createdAt}</td>
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
              {/* <tr>
                <td>ann000001</td>
                <td>Title Posting Satu</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae laboriosam expedita, sapiente perspiciatis ea
                  ducimus?
                </td>
                <td style={{ color: "#B99E00" }}>Draft</td>
                <td>Announcement</td>
                <td>26 oktober 2022</td>
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
              </tr> */}
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
