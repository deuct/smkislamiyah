// React Need
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
// Style
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
  IoSchoolOutline,
  IoSchool,
  IoLayers,
  IoPencilSharp,
  IoBookOutline,
  IoSchoolSharp,
  IoAccessibilityOutline,
} from "react-icons/io5";

function Sidenav() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

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
              onClick={() => setOpen1(!open1)}
              aria-controls="article-collapse"
              aria-expanded={open1}
              className="btn-collaps px-1"
            >
              <IoNewspaperOutline /> Article
            </Button>
            <Collapse in={open1}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-article/?role=add"}>
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
            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="article-collapse"
              aria-expanded={open2}
              className="btn-collaps px-1"
            >
              <IoPeopleOutline /> BKK
            </Button>
            <Collapse in={open2}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-bkk/?role=add"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-bkk"}>
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
              onClick={() => setOpen3(!open3)}
              aria-controls="article-collapse"
              aria-expanded={open3}
              className="btn-collaps px-1"
            >
              <IoAccessibilityOutline /> Teacher
            </Button>
            <Collapse in={open3}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-teacher/?role=add"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-teacher"}>
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
              onClick={() => setOpen4(!open4)}
              aria-controls="article-collapse"
              aria-expanded={open4}
              className="btn-collaps px-1"
            >
              <IoLayers /> Staff
            </Button>
            <Collapse in={open4}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-staff/?role=add"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-staff"}>
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
              onClick={() => setOpen5(!open5)}
              aria-controls="article-collapse"
              aria-expanded={open5}
              className="btn-collaps px-1"
            >
              <IoSchoolSharp /> Alumni
            </Button>
            <Collapse in={open5}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-alumni/?role=add"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-alumni"}>
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
              onClick={() => setOpen6(!open6)}
              aria-controls="article-collapse"
              aria-expanded={open6}
              className="btn-collaps px-1"
            >
              <IoBookOutline /> Programs
            </Button>
            <Collapse in={open6}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"new-program/?role=add"}>
                      <IoAddOutline />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to={"manage-program"}>
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
              onClick={() => setOpen7(!open7)}
              aria-controls="article-collapse"
              aria-expanded={open7}
              className="btn-collaps px-1"
            >
              <IoPencilSharp /> Customize
            </Button>
            <Collapse in={open7}>
              <div id="article-collapse">
                <ul className="px-2 pt-3 mb-4">
                  <li>
                    <Link to={"manage-header"}>
                      <IoSettingsOutline />
                      Header
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
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
