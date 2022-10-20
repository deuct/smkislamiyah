import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Button, Collapse } from "react-bootstrap";
import {
  IoPersonCircle,
  IoExit,
  IoHomeOutline,
  IoNewspaperOutline,
  IoMegaphoneOutline,
  IoPeopleOutline,
  IoAddOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Sidenav() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const navigate = useNavigate();
  const Logout = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      await axios.delete("http://localhost:5000/logout", config);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidenav">
      <Col className="text-center mt-3">
        <img
          src="https://osissmkislamiyahciputat.files.wordpress.com/2020/02/yayasan.png"
          width="50"
          height="50"
          className="sidenav-img mx-auto"
        />{" "}
      </Col>
      <div className="sidenav-fill px-3">
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <IoHomeOutline />
              &nbsp;Home
            </Link>
          </li>
          <li>
            <Link to={"profile"}>
              <IoPersonCircle />
              &nbsp;Profile
            </Link>
          </li>
          <li>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="announcement-collapse"
              aria-expanded={open}
              className="btn-collaps px-1"
            >
              <IoMegaphoneOutline /> Announcement
            </Button>
            <Collapse in={open}>
              <div id="announcement-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-announcement"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-announcement"}>
                      <IoSettingsOutline />
                      Manage
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li>
            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="article-collapse"
              aria-expanded={open2}
              className="btn-collaps px-1"
            >
              <IoNewspaperOutline /> Article
            </Button>
            <Collapse in={open2}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-article"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-article"}>
                      <IoSettingsOutline />
                      Manage
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li>
            <a href="#">
              <IoPeopleOutline />
              &nbsp;BKK
            </a>
          </li>
        </ul>
      </div>
      <Col>
        <Row className="sidenav-footer">
          <Button onClick={Logout} variant="danger" className="nav-btnexit">
            <IoExit /> Exit
          </Button>
        </Row>
      </Col>
    </div>
  );
}

export default Sidenav;
