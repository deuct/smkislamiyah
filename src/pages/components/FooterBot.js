import React from "react";
import { Row, Col } from "react-bootstrap";
import logoSmk from "../../images/logo.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

function FooterBot() {
  return (
    <>
      <Row id="footer-top">
        <Col xs={3}>
          <div className="box-footer">
            <div className="box-footer-title">
              <img src={logoSmk} width="80px" />
              <h2>SMK ISLAMIYAH</h2>
            </div>
            <p>
              Jl. Ki Hajar Dewantara No.23, RT.1/RW.6, Ciputat, Kec. Ciputat,
              Kota Tangerang Selatan, Banten 15411
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Phone</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>0821 - xxxx - xxxx</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>smkislamiyah@gmail.com</td>
                </tr>
                <tr>
                  <td>Operasional</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>07:00 - 16:00 WIB</td>
                </tr>
              </tbody>
            </table>
            <p>
              <a href="#">
                <IoLogoInstagram size={35} />
              </a>
              <a href="#">
                <IoLogoFacebook size={35} />
              </a>
              <a href="#">
                <IoLogoLinkedin size={35} />
              </a>
              <a href="#">
                <IoLogoYoutube size={35} />
              </a>
            </p>
          </div>
        </Col>
        <Col xs={3}>
          <div className="menu-footer">
            <h2>ABOUT</h2>
            <ul>
              <li>
                <a href="#">Visi & Misi</a>
              </li>
              <li>
                <a href="#">Headmaster Greetings</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Curriculum</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={3}>
          <div className="menu-footer">
            <h2>ORGANIZATION</h2>
            <ul>
              <li>
                <a href="#">Structure</a>
              </li>
              <li>
                <a href="#">Teachers</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={3}>
          <div className="menu-footer">
            <h2>POST</h2>
            <ul>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row id="footer" className="align-items-center text-center">
        <Col className="mt-1">
          <p>&copy; 2022 SMK Islamiyah Ciputat</p>
        </Col>
      </Row>
    </>
  );
}

export default FooterBot;
