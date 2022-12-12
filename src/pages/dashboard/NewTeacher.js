// React Needed
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
// Styling
import { Row, Col, Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import { IoSunnySharp, IoTrashOutline } from "react-icons/io5";

function NewTeacher(props) {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // Const API Token
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  // Const id teacher
  const [idTeacher, setIdTeacher] = useState("");

  // Const modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);

  // Const image upload
  const [image, setImage] = useState({ preview: "", data: "" });
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState("");

  // Const default form value
  var initialFormData = {
    teacherId: "", // ambil last job id dari database
    teacherName: "",
    teacherMatpel: "",
    teacherStatus: "",
    teacherPhoto: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // Const Get params from url
  const [searchParams] = useSearchParams();
  const [paramsId, setParamsId] = useState(searchParams.get("teacher_id"));
  const [roleAction, setRoleAction] = useState(searchParams.get("role"));

  // Const get single teacher
  const [singleTeacher, setSingleTeacher] = useState([]);

  // Navigation
  const navigate = useNavigate();

  // Generate token for every API post
  const axiosJWT = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      const expr = expired * 1000;
      const curDate = currentDate.getTime();
      const exprRes = currentDate.getTime() - expr;
      const response = await axiosInstance.get("/token", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpired(decoded.exp);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // End generate token for every API post

  // Get id teacher
  useEffect(() => {
    getIdTeacher();
  }, []);

  const getIdTeacher = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    const response = await axiosJWT.get("/teachers/getid/getidteacher", config);

    if (response) {
      const resId = response.data.teacher_id;
      if (resId !== undefined) {
        var idSplit = resId.match(/\d/g);
        idSplit = idSplit.join("");
        idSplit = parseInt(idSplit);
        idSplit += 1;
        setIdTeacher(idSplit);
      } else {
        setIdTeacher(1);
      }
    } else {
      console.log("failed getting teacher id");
    }
  };
  // End get id teacher

  // Modal after post
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-teacher");
  };
  // End modal after post

  // Get single teacher
  useEffect(() => {
    initializeTeacher();
  }, [idTeacher]);

  const initializeTeacher = async () => {
    if (roleAction === "edit") {
      const response = await axiosInstance.get(`/teachers/${paramsId}`);
      if (response) {
        setSingleTeacher(response.data.result);
      }
    } else if (roleAction === "add") {
      console.log("add post");
      setFormData({
        ...formData,
        teacherId: "TCH" + idTeacher,
        teacherStatus: "Active",
      });
    }
  };

  useEffect(() => {
    setValueTeacher();
  }, [singleTeacher]);

  const setValueTeacher = async () => {
    if (singleTeacher.length !== 0) {
      singleTeacher.map((teacher) => {
        setFormData({
          teacherId: teacher.teacher_id,
          teacherName: teacher.teacher_name,
          teacherMatpel: teacher.teacher_matpel,
          teacherStatus: teacher.teacher_status,
          teacherPhoto: teacher.teacher_photo_dir,
        });
        if (teacher.teacher_photo_dir !== "") {
          setShowImgUpload((showImgUpload) => [
            `${baseURLAPI}/${teacher.teacher_photo_dir.replace("\\", "/")}`,
          ]);
        }
      });
    }
  };
  // End single teacher

  // Handle insert data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.teacherId === "" ||
      formData.teacherName === "" ||
      formData.teacherMatpel === "" ||
      formData.teacherStatus === ""
    ) {
      handleShowModal("failedpost");
      setIsModalClose(true);
    } else {
      try {
        if (roleAction === "add") {
          let formDataUpload = new FormData();
          formDataUpload.append("teacherId", formData.teacherId);
          formDataUpload.append("teacherPhoto", image.data);
          formDataUpload.append("teacherName", formData.teacherName);
          formDataUpload.append("teacherMatpel", formData.teacherMatpel);
          formDataUpload.append("teacherStatus", formData.teacherStatus);
          const response = await axiosJWT.post(
            "/teachers/newteacher",
            formDataUpload,
            {
              headers: {
                "Content-Type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
          if (response) {
            setFormData(initialFormData);
            handleShowModal("successpost");
            setIsModalClose(true);
          } else {
            console.log("failed upload data");
          }
        } else if (roleAction === "edit") {
          let formDataUpload = new FormData();
          formDataUpload.append("teacherId", formData.teacherId);
          if (image.data === "") {
            formDataUpload.append("teacherPhoto", "");
            formDataUpload.append("isNewImage", "false");
          } else {
            formDataUpload.append("teacherPhoto", image.data);
            formDataUpload.append("isNewImage", "true");
          }
          formDataUpload.append("teacherName", formData.teacherName);
          formDataUpload.append("teacherMatpel", formData.teacherMatpel);
          formDataUpload.append("teacherStatus", formData.teacherStatus);
          const response = await axiosJWT.post(
            "/teachers/updateteacher",
            formDataUpload,
            {
              headers: {
                "Content-Type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
          if (response) {
            setFormData(initialFormData);
            handleShowModal("successpost");
            setIsModalClose(true);
          } else {
            console.log("failed upload data");
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // End handle insert data

  // Useeffect set checked image
  useEffect(() => {
    if (showImgUpload.length !== 0) {
      setChecked(new Array(showImgUpload.length).fill(false));
    }
  }, [showImgUpload]);

  const handleSubmitImg = async (e) => {
    e.preventDefault();
    if (arrImgUpload.length >= 1 || showImgUpload.length >= 1) {
      handleShowModal("imguploadfailed");
      setIsModalClose(true);
    } else {
      let formData = new FormData();
      formData.append("imgpost_dir", image.data);
      setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
      setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
    }
  };

  const handleFileChangeImg = (e) => {
    if (roleAction === "edit") {
      if (showImgUpload.length >= 1) {
        handleShowModal("imguploadfailed");
        setIsModalClose(true);
      } else if (arrImgUpload.length === 0) {
        const img = {
          name: e.target.files[0].name,
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        };
        setImage(img);
      }
    } else if (roleAction === "add") {
      const img = {
        name: e.target.files[0].name,
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };
      setImage(img);
    }
  };
  // End upload image

  // Manipulate image state
  const handleOnChangeImg = (position) => {
    const updateCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updateCheckedState);
  };
  // End Image State

  // Delete Img from state and also database if role = edit
  const deleteImg = async () => {
    if (roleAction === "edit") {
      try {
        const resDelImg = await axiosJWT.post(
          `/teacher/delete/img?teacher_img=${formData.teacherPhoto}&teacher_id=${formData.teacherId}`
        );
        if (resDelImg) {
          checked.map((chk, index) => {
            if (chk === true) {
              if (arrImgUpload.length > 0) {
                var imgtoDeleteori = arrImgUpload[index];
                var imgtoDelete = imgtoDeleteori.get("imgpost_dir");
                imgtoDelete = imgtoDelete.name;
              }
              const imgshowToDelete = showImgUpload[index];
              const imageToDelete = image;

              Object.entries(imageToDelete).map(([key, delimg]) => {
                console.log(key, " : ", delimg.toString());
                if (delimg.toString() === imgtoDelete) {
                  image.data = "";
                }
              });
              setArrImgUpload((prev) =>
                prev.filter((arrImgUpload) => {
                  return arrImgUpload !== imgtoDeleteori;
                })
              );
              setShowImgUpload((prev) =>
                prev.filter((showImgUpload) => {
                  return showImgUpload !== imgshowToDelete;
                })
              );
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (roleAction === "add") {
      checked.map((chk, index) => {
        if (chk === true) {
          if (arrImgUpload.length > 0) {
            var imgtoDeleteori = arrImgUpload[index];
            var imgtoDelete = imgtoDeleteori.get("imgpost_dir");
            imgtoDelete = imgtoDelete.name;
          }
          const imgshowToDelete = showImgUpload[index];
          const imageToDelete = image;

          Object.entries(imageToDelete).map(([key, delimg]) => {
            console.log(key, " : ", delimg.toString());
            if (delimg.toString() === imgtoDelete) {
              image.data = "";
            }
          });
          setArrImgUpload((prev) =>
            prev.filter((arrImgUpload) => {
              return arrImgUpload !== imgtoDeleteori;
            })
          );
          setShowImgUpload((prev) =>
            prev.filter((showImgUpload) => {
              return showImgUpload !== imgshowToDelete;
            })
          );
        }
      });
    }
  };
  // End Delete Img

  // Set modal body conditional
  const modalBody = (paramModals) => {
    if (paramModals === "successpost") {
      return (
        <>
          <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
            Successfully added new job. Please check your post in listing menu.
            Have a nice day!
            <IoSunnySharp size={25} style={{ color: "#ffaa00" }} />
          </h3>
          <Button
            variant="danger"
            onClick={(handleCloseModal, navigateAfterPost)}
          >
            Close
          </Button>
        </>
      );
    } else if (paramModals === "failedpost") {
      return (
        <>
          <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
            failed added post. Please check your form.
          </h3>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </>
      );
    } else if (paramModals === "imguploadfailed") {
      return (
        <>
          <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
            Only allowed 1 images for teacher image
          </h3>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </>
      );
    }
  };
  // End set modal body conditional

  return (
    <>
      {/* Modal After Insert Posting */}
      <Modal
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleCloseModal}
      >
        <Modal.Body className="text-center">
          {modalBody(paramModals)}
        </Modal.Body>
      </Modal>
      {roleAction === "add" ? (
        <h1 className="my-3 fs-2 text-center">New Teacher</h1>
      ) : (
        <h1 className="my-3 fs-2 text-center">Edit Teacher</h1>
      )}
      <hr />
      <Row className="mt-5">
        <Col xs={8}>
          <Form onSubmit={handleSubmit} className="my-3 justify-content-center">
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">
                  Teacher Code
                </Form.Label>
              </Col>
              <Col xs={10}>
                {roleAction === "add" ? (
                  <Form.Control
                    type="text"
                    readOnly="yes"
                    name="teacherId"
                    value={"TCH" + idTeacher}
                    onInput={handleChange}
                    className="w-75"
                  />
                ) : (
                  <Form.Control
                    type="text"
                    readOnly="yes"
                    name="teacherId"
                    value={formData.teacherId}
                    onInput={handleChange}
                    className="w-75"
                  />
                )}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">
                  Teacher Name
                </Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Teacher name"
                  className="w-75"
                  name="teacherName"
                  value={formData.teacherName}
                  onInput={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">
                  Teacher Matpel
                </Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Teacher Matpel"
                  className="w-75"
                  name="teacherMatpel"
                  value={formData.teacherMatpel}
                  onInput={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left ">
                  Teacher Status
                </Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Select
                  aria-label="Default select example"
                  className="w-75"
                  name="teacherStatus"
                  value={formData.teacherStatus}
                  onInput={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Pension">Pension</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Row>
              <Col xs={12}>
                <h2 className="my-3">Teacher Photo</h2>
                <div id="image-box">
                  <div className="imgbox-photos mb-4">
                    {showImgUpload.map((showImg, index) => {
                      return (
                        <>
                          <div
                            className="imgbox-detail"
                            key={index}
                            style={{
                              backgroundColor: checked[index]
                                ? "salmon"
                                : "RGB(184, 184, 184)",
                            }}
                          >
                            <img
                              src={showImg}
                              alt="img upload"
                              className="m-1"
                              onClick={() => handleOnChangeImg(index)}
                              value={index}
                              key={index}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <Col xs={3} className="justify-content-end ms-auto text-end">
                  <Button
                    variant="danger"
                    className="fs-8 mb-2 mt-4"
                    onClick={deleteImg}
                  >
                    <IoTrashOutline /> Delete image
                  </Button>
                </Col>
              </Col>
            </Row>
            <Row className="my-5">
              <Col xs={12}>
                <div id="upload-image">
                  <h1 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                    Upload New Image
                  </h1>
                  <p>Preview Image Upload</p>
                  {image.preview && (
                    <img
                      className="my-3"
                      src={image.preview}
                      width="100"
                      height="100"
                    />
                  )}
                  <Form.Group
                    controlId="formFileMultiple"
                    className="mb-3 mt-2"
                  >
                    <Form.Control
                      type="file"
                      name="file"
                      onChange={handleFileChangeImg}
                    />
                    <Button
                      className="mt-2"
                      type="button"
                      onClick={(e) => handleSubmitImg(e)}
                    >
                      Upload
                    </Button>
                  </Form.Group>
                  {status && <p>{status}</p>}
                </div>
              </Col>
            </Row>
            <Col className="text-end">
              <Button variant="success" type="submit" className="mt-3 mx-2">
                Post
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default NewTeacher;
