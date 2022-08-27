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
import { IoGlobeOutline } from "react-icons/io5";

function NavbarTop() {
  return (
    <>
      <Navbar expand="lg" id="navbarfarhan">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="55"
              height="30"
              className="d-inline-block align-top"
            />
            {""}
            <Row className="align-items-center ms-1">
              <div id="nb-ttl">SMK Islamiyah</div>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Visi & Misi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Headmaster Greetings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Programs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Curriculum
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Organization" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Teachers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Post" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Activity</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Announcement
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">BKK</Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <IoGlobeOutline />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ID</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
