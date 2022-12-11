// React need
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
// Styling
import { Button, Col, Row, Container } from "react-bootstrap";
import FooterBot from "../components/FooterBot";
import NavbarTop from "../components/NavbarTop";
import "../../style/program-detail.css";
import {
  AiOutlineFileExcel,
  AiOutlineFileWord,
  AiOutlineFilePdf,
  AiOutlineFilePpt,
} from "react-icons/ai";
import profileKaprog from "../../images/8.jpg";
import AliceCarousel from "react-alice-carousel";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModalImage from "react-modal-image";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";

function ProgramDetail() {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // const baseURL = "http://localhost:5000";
  const slug = useParams();

  // Get jurusan id by slug
  const [idJurusan, setIdJurusan] = useState();

  useEffect(() => {
    getIdJurusan();
  }, [slug]);

  const getIdJurusan = async () => {
    try {
      const resIdJurusan = await axiosInstance.post(
        `/jurusan/getjurusanbyslug`,
        { programSlug: slug.programslug }
      );

      if (resIdJurusan) {
        setIdJurusan(resIdJurusan.data[0].jurusan_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Validation for not null id
  const navigate = useNavigate();
  if (idJurusan === null) {
    navigate("/404");
  }

  // get programs
  const [program, setProgram] = useState([]);
  const [visi, setVisi] = useState([]);
  const [misi, setMisi] = useState([]);

  useEffect(() => {
    getSingleProgram();
  }, [idJurusan]);

  const getSingleProgram = async () => {
    try {
      if (idJurusan.length > 0) {
        const resProgram = await axiosInstance.get(`/jurusan/${idJurusan}`);
        if (resProgram) {
          setProgram(resProgram.data[0]);
          setVisi(resProgram.data[0].jurusan_visi.split(","));
          setMisi(resProgram.data[0].jurusan_misi.split(","));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get dokumen, prestasi, gallery
  const [dokumen, setDokumen] = useState([]);
  const [prestasi, setPrestasi] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getDokPresGal();
  }, [idJurusan]);

  const getDokPresGal = async () => {
    try {
      const resDokumen = await axiosInstance.get(
        `/jurusan/dokumen/${idJurusan}`
      );
      if (resDokumen) {
        setDokumen(resDokumen.data);
      }

      const resPrestasi = await axiosInstance.get(
        `/jurusan/prestasi/${idJurusan}`
      );
      if (resPrestasi) {
        setPrestasi(resPrestasi.data);
      }

      const resGallery = await axiosInstance.get(
        `/jurusan/gallery/${idJurusan}`
      );
      if (resGallery) {
        setGallery(resGallery.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Carousel prestasi
  const [prestasiCarousel, setPrestasiCarousel] = useState([]);

  // console.log(prestasi);

  useEffect(() => {
    getPrestasiCarousel();
  }, [prestasi]);

  const getPrestasiCarousel = async () => {
    prestasi.map((prestasi) => {
      setPrestasiCarousel((prev) => [
        ...prev,
        <div className="pd-prestasi-content">
          <img
            src={`${baseURLAPI}/${prestasi.jp_img_dir.replace(/\\/g, "/")}`}
            alt="img-prestasi"
            style={{ minWidth: "200px", minHeight: "200px" }}
          />
          <div className="pd-prestasi-content-text">
            <h2>{prestasi.jp_name}</h2>
            <h2>{prestasi.jp_year}</h2>
            <h3>{prestasi.jp_position}</h3>
          </div>
        </div>,
      ]);
    });
  };

  const responsive = {
    0: { items: 3 },
  };

  // Gallery masonry
  const [masonryImage, setMasonryImage] = useState([]);

  useEffect(() => {
    getMasonryImage();
  }, [gallery]);

  const getMasonryImage = () => {
    gallery.map((img) => {
      setMasonryImage((prev) => [
        ...prev,
        `${baseURLAPI}/${img.jg_img_dir.replace(/\\/g, "/")}`,
      ]);
    });
  };

  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

  const renderNextButton = ({ isDisabled }) => {
    return <IoArrowForwardCircleSharp size={30} />;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <IoArrowBackCircle size={30} />;
  };

  return (
    <>
      <NavbarTop />
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container>
        <Row id="title-programs" className="justify-content-center">
          <Col xs={10} md={10} sm={12} className="text-center">
            <h1>{program.jurusan_name}</h1>
            <h1>of</h1>
            <h1>SMK Islamiyah Ciputat</h1>
          </Col>
        </Row>
        <Row id="breadcrumb">
          <Col xs={12}>
            <p>
              Home &gt; programs &gt; detail &gt;
              <span style={{ color: "yellow" }}>{program.jurusan_name}</span>
            </p>
          </Col>
        </Row>
        <Row id="program-detail" className="my-5">
          <Row className="justify-content-center my-3">
            <Col xs={6} className="text-center">
              {program.teacher_photo_dir === undefined ? (
                <p>cannot load image</p>
              ) : (
                <>
                  <img
                    src={`${baseURLAPI}/${program.teacher_photo_dir.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt="profile-kaprog"
                    className="pd-img-kaprog"
                  />
                </>
              )}
              <Row className="pd-title-kaprog">
                <h2>{program.teacher_name}</h2>
                <h3>Kepala Program</h3>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-tentang">
              <h2>Tentang Program</h2>
              <div className="pd-divider"></div>
              <div
                dangerouslySetInnerHTML={{ __html: program.jurusan_about }}
              ></div>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-vismis text-center">
              <div className="pd-vismis-content">
                <h2>Visi</h2>
                <ol>
                  {visi.map((vs) => {
                    return <li>{vs}</li>;
                  })}
                </ol>
              </div>
              <div xs={5} className="pd-vismis-content">
                <h2>Misi</h2>
                <ol>
                  {misi.map((ms) => {
                    return <li>{ms}</li>;
                  })}
                </ol>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-document">
              <h2>Document</h2>
              <div className="pd-divider"></div>
              <Row className="pd-document-box">
                <Col xs={12}>
                  {dokumen.map((dokumen) => {
                    const dokumenName = dokumen.jd_name
                      .replace(/[^.]*$/g, "")
                      .replace(/[.]/g, "");
                    let dokumenExt = dokumen.jd_name.slice(-5);
                    dokumenExt = dokumenExt.replace(/^[^.]*./g, "");
                    return (
                      <>
                        {dokumenExt === "xls" ? (
                          <a
                            href={`http://localhost:5000/${dokumen.jd_document_dir}`}
                          >
                            <Button className="pd-document-box-btn btn-xls">
                              <AiOutlineFileExcel />
                              {dokumenName}
                            </Button>
                          </a>
                        ) : dokumenExt === "docx" ? (
                          <a
                            href={`http://localhost:5000/${dokumen.jd_document_dir}`}
                          >
                            <Button className="pd-document-box-btn btn-word">
                              <AiOutlineFileWord />
                              {dokumenName}
                            </Button>
                          </a>
                        ) : dokumenExt === "pdf" ? (
                          <a
                            href={`http://localhost:5000/${dokumen.jd_document_dir}`}
                          >
                            <Button className="pd-document-box-btn btn-pdf">
                              <AiOutlineFilePdf />
                              {dokumenName}
                            </Button>
                          </a>
                        ) : dokumenExt === "pptx" ? (
                          <a
                            href={`http://localhost:5000/${dokumen.jd_document_dir}`}
                          >
                            <Button className="pd-document-box-btn btn-ppt">
                              <AiOutlineFilePpt />
                              {dokumenName}
                            </Button>
                          </a>
                        ) : (
                          <p>failed</p>
                        )}
                      </>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-prestasi">
              <h2 className="pd-prestasi-title">Prestasi</h2>
              <div className="pd-divider"></div>
              <Row>
                <AliceCarousel
                  mouseTracking
                  disableDotsControls
                  keyboardNavigation={true}
                  items={prestasiCarousel}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  autoPlay={true}
                  autoPlayInterval={5000}
                  infinite={true}
                  renderPrevButton={renderPrevButton}
                  renderNextButton={renderNextButton}
                />
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-gallery">
              <h2>Gallery </h2>
              <div className="pd-divider"></div>
              <Row>
                <ResponsiveMasonry
                  columnsCountBreakPoints={columnsCountBreakPoints}
                >
                  <Masonry columnsCount={3} gutter={4}>
                    {masonryImage.map((image) => (
                      <ModalImage
                        small={image}
                        large={image}
                        alt="jurusan-image"
                      />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col xs={12} className="pd-title">
              <h2>Struktur Organisasi</h2>
              <div className="pd-divider"></div>
              <Row>
                <div class="tree">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../images/1.jpg")} />
                        <span>Headmaster</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../images/2.jpg")} />
                            <span>Wakil</span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img src={require("../../images/3.jpg")} />
                                <span>Guru</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src={require("../../images/4.jpg")} />
                                <span>Guru</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <img src={require("../../images/5.jpg")} />
                            <span>Wakil</span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img src={require("../../images/6.jpg")} />
                                <span>Guru</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src={require("../../images/7.jpg")} />
                                <span>Guru</span>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">
                                    <img src={require("../../images/3.jpg")} />
                                    <span>Guru</span>
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <a href="#">
                                    <img src={require("../../images/3.jpg")} />
                                    <span>Staff</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={require("../../images/8.jpg")} />
                                <span>Staff</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <img src={require("../../images/5.jpg")} />
                            <span>Wakil</span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img src={require("../../images/6.jpg")} />
                                <span>Guru</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src={require("../../images/7.jpg")} />
                                <span>Guru</span>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">
                                    <img src={require("../../images/3.jpg")} />
                                    <span>Guru</span>
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <a href="#">
                                    <img src={require("../../images/3.jpg")} />
                                    <span>Staff</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={require("../../images/8.jpg")} />
                                <span>Staff</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
      <FooterBot />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .alice-carousel__prev-btn,
          .alice-carousel__next-btn {
            display: inline-block !important;
            color: rgb(11, 37, 103);
            padding: 10px 15px;
          }

          .alice-carousel__prev-btn:hover,
          .alice-carousel__next-btn:hover {
            color: rgb(46, 79, 160);
            cursor: pointer;
          } `,
        }}
      />
    </>
  );
}

export default ProgramDetail;
