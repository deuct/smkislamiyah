// React Need
import React, { useEffect, useState } from "react";
import axios from "axios";
// Component
import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
// Styling
import {
  Col,
  Row,
  Container,
  Button,
  InputGroup,
  Form,
  Pagination,
} from "react-bootstrap";

import {
  IoSearch,
  IoTimeOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import "../../style/posts.css";
import PostCard from "./PostCard";
import ReactPaginate from "react-paginate";

export default function Listing() {
  // Farhan : Get Post, Paginate, Search
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [postTypes, setPostTypes] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getPosts();
  }, [page, keyword, postTypes]);

  const getPosts = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts?search_query=${keyword}&page=${page}&limit=${limit}&post_type=${postTypes}`
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

  // Get Type Post
  const postType = ["All", "Announcement", "Activities"];
  const handlePostType = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    if (e.target.value === "All") {
      setPostTypes("");
    } else {
      setPostTypes(e.target.value);
    }
  };
  return (
    <>
      <NavbarTop />
      <Container>
        <div id="navbar-bgz"></div>
        {/* Navbar styling ketika di halaman tertentu */}
        <input
          type="text"
          id="navbar-id"
          value="bkk-listing"
          style={{ display: "none" }}
          readOnly
        />
        <Row id="post-intro" className="text-center">
          <Col xs={12}>
            <h1>Ada apa saja di SMK Islamiyah Ciputat ?</h1>
            <p>
              Cerita pengalaman, berita seru, pengumuman terbaru, artikel
              menarik dan berita terbaru akademik. Baca semua berita dan
              informasi tentang SMK Islamiyah disini.
            </p>
          </Col>
        </Row>
        <Row id="breadcrumb">
          <p>Home &gt; Announcement</p>
        </Row>
        <Row id="post-ctg-list">
<<<<<<< HEAD
          <Col xs={12} style={{ display: "flex", flexWrap: "nowrap" }}>
=======
          <Col xs={4} style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between", width: "27%" }}>
>>>>>>> 0e07282 (31102022)
            {postType.map((postType) => {
              return (
                <>
                  <Button value={postType} onClick={(e) => handlePostType(e)}>
                    {postType}
                  </Button>
                </>
              );
            })}
          </Col>
        </Row>
        <Row id="search-bar" className="justify-content-center">
          <Col xs={12}>
            <form onSubmit={searchData}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search your news..."
                  aria-label="Search your news..."
                  aria-describedby="basic-addon2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  type="submit"
                >
                  <IoSearch />
                </Button>
              </InputGroup>
            </form>
          </Col>
        </Row>
        <Row id="posts-list">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.post_id}
                title={post.post_name}
                typepost={post.post_type}
                idpost={post.post_id}
                shortdesc={post.post_shortdesc}
                createdpost={post.createdAt}
              />
            );
          })}
        </Row>
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
      </Container>
      <FooterBot />
    </>
  );
}
