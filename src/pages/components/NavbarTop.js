import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Row,
  NavItem,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import { IoGlobeOutline, IoChevronDownOutline } from "react-icons/io5";

function NavbarTop() {
  return (
    <>
      <Navbar expand="lg" id="navbarfarhan">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="55"
              height="30"
              className="d-inline-block align-top"
            />
            {""}
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
