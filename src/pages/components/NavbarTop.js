import React from "react";
import { Navbar, Container, Nav, Row, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";

function NavbarTop(props) {
  console.log(props.isIndex);
  if (!props.isIndex) {
    require("../../style/nav-notindex.css");
  }
  return (
    <>
      <Navbar
        expand="lg"
        id="navbarfarhan"
        className={props.colorChange ? "colorChange" : ""}
        style={{ backgroundColor: props.isIndex ? "transparent" : "white" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="55"
              height="30"
              className="d-inline-block align-top"
              alt="navbartop-img"
            />
            <Row className="align-items-center ms-1">
              <div id="nb-ttl">SMK ISLAMIYAH CIPUTAT</div>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Programs</NavDropdown.Item>
                <NavDropdown.Item href="#">Curriculum</NavDropdown.Item>
                <NavDropdown.Item href="#">Facility</NavDropdown.Item>
                <NavDropdown.Item href="#">Ekstrakulikuler</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Headmaster Greetings
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Visi & Misi</NavDropdown.Item>
                <NavDropdown.Item href="#">History</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Organization" id="basic-nav-dropdown">
                <NavDropdown.Item href="/organization/orgstruct">
                  Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="/organization/teachers">
                  Teachers
                </NavDropdown.Item>
                <NavDropdown.Item href="/organization/staff">
                  Staff
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Post" id="basic-nav-dropdown">
                <NavDropdown.Item href="/posts/">Activity</NavDropdown.Item>
                <NavDropdown.Item href="/posts/">Announcement</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/bkk">BKK</Nav.Link>
              <Nav.Link href="#">Dapodik</Nav.Link>
              <Nav.Link href="#">PPDB</Nav.Link>
              <Nav.Link href="#">PIP</Nav.Link>
              {/* Fitur Bahasa (disabled) <NavDropdown
                title={
                  <span>
                    <IoGlobeOutline />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ID</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
