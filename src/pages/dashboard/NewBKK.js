// React Needed
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// Styling
import { Row, Col, Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import { IoTrashOutline, IoSunnySharp } from "react-icons/io5";

function NewPosting(props) {
  // Navigation
  const navigate = useNavigate();

  // Generate token for every API post
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      const expr = expired * 1000;
      const curDate = currentDate.getTime();
      const exprRes = currentDate.getTime() - expr;
      // if (expired * 1000 > currentDate.getTime()) {
      // if (config.status === 401) {
      const response = await axios.get("http://localhost:5000/token", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpired(decoded.exp);
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // End generate token for evvery API post

  // Get id job
  const [idJob, setIdJob] = useState("");
  useEffect(() => {
    getIdJob();
  }, []);

  const getIdJob = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    const response = await axiosJWT.get(
      "http://localhost:5000/bkk/getid/getidbkk",
      config
    );

    if (response) {
      const resId = response.data.company_id;
      var idSplit = resId.match(/\d/g);
      idSplit = idSplit.join("");
      idSplit = parseInt(idSplit);
      idSplit += 1;
      setIdJob(idSplit);
    } else {
      console.log("failed getting job id");
    }
  };
  // End get id job

  // Modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-bkk");
  };

  // Handle insert data

  var initialFormData = {
    jobCode: "", // ambil last job id dari database
    companyName: "",
    jobTitle: "",
    jobStatus: "",
    companyCity: "",
    companyAddress: "",
    jobRequirement: "",
    description: "",
    companyLogo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  // Set last job database
  useEffect(() => {
    setFormData({
      ...formData,
      jobCode: "JOB" + idJob,
    });
  }, [idJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.jobCode === "" ||
      formData.companyName === "" ||
      formData.jobTitle === "" ||
      formData.jobStatus === "" ||
      formData.companyCity === "" ||
      formData.companyAddress === "" ||
      formData.jobRequirement === "" ||
      formData.description === ""
    ) {
      handleShowModal("failedpost");
      setIsModalClose(true);
    } else {
      try {
        const shortDesc = formData.description.slice(0, 250);
        let formDataUpload = new FormData();
        formDataUpload.append("companyName", formData.companyName);
        formDataUpload.append("companyLogo", image.data);
        formDataUpload.append("jobCode", formData.jobCode);
        formDataUpload.append("jobTitle", formData.jobTitle);
        formDataUpload.append("jobStatus", formData.jobStatus);
        formDataUpload.append("companyCity", formData.companyCity);
        formDataUpload.append("companyAddress", formData.companyAddress);
        formDataUpload.append("jobRequirement", formData.jobRequirement);
        formDataUpload.append("description", formData.description);
        formDataUpload.append("shortDesc", shortDesc);
        console.log(formDataUpload);
        const response = await axiosJWT.post(
          "http://localhost:5000/bkk/newbkk",
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
          setFormSuccess("Data Sent Correctly");
          setFormData(initialFormData);
          handleShowModal("successpost");
          setIsModalClose(true);
        } else {
          console.log("failed upload data");
        }
      } catch (err) {
        handleErrors(err);
      }
    }
  };

  const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
      const { errors } = err.response.data;
      let errorMsg = [];
      for (let error of errors) {
        const { msg } = error;
        errorMsg.push(msg);
      }
      setFormErrors(errorMsg);
    } else {
      setFormErrors(["error show..."]);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors([]);
    setFormSuccess("");
  };
  // End handle insert data

  // Upload Image to state
  const [image, setImage] = useState({ preview: "", data: "" });
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState("");

  // Useeffect set checked image
  useEffect(() => {
    if (showImgUpload.length !== 0) {
      setChecked(new Array(showImgUpload.length).fill(false));
    }
  }, [showImgUpload]);

  const handleSubmitImg = async (e) => {
    e.preventDefault();
    if (arrImgUpload.length >= 1) {
      handleShowModal("imguploadfailed");
      setIsModalClose(true);
    } else {
      let formData = new FormData();
      formData.append("imgpost_dir", image.data);
      setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
      setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
      setFormErrors([]);
      setFormSuccess("");
    }
  };

  useEffect(() => {
    if (arrImgUpload.length !== 0) {
      insertArrimgToFormdata();
    }
  }, [arrImgUpload]);

  const insertArrimgToFormdata = async () => {
    setFormData({
      ...formData,
      companyLogo: arrImgUpload[0],
    });
  };

  const handleFileChangeImg = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
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

  // Delete Img from state
  const deleteImg = () => {
    const imgCheckDel = checked.map((chk, index) => {
      if (chk === true) {
        const imgtoDelete = arrImgUpload[index];
        const imgshowToDelete = showImgUpload[index];
        setArrImgUpload((prev) =>
          prev.filter((arrImgUpload) => {
            return arrImgUpload !== imgtoDelete;
          })
        );
        setShowImgUpload((prev) =>
          prev.filter((showImgUpload) => {
            return showImgUpload !== imgshowToDelete;
          })
        );
      }
    });
  };
  // End Delete Img

  // Set modal body conditional
  const modalBody = (paramModals) => {
    if (paramModals === "successpost") {
      return (
        <>
          <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
            Successfully added new post. Please check your post in listing menu.
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
            Only allowed 1 images for company logo
          </h3>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </>
      );
    }
  };
  // End set modal body conditional
  console.log("========form data==========");
  console.log(formData);
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
      <div>
        <h1 className="my-3 fs-2 text-center">New Job</h1>
        <hr />
        <Row className="mt-5">
          <Col xs={8}>
            <Form
              onSubmit={handleSubmit}
              className="my-3 justify-content-center"
            >
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Job Code
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    className="w-75"
                    name="jobCode"
                    value={"JOB" + idJob}
                    onInput={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Company Name
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name..."
                    className="w-75"
                    name="companyName"
                    value={formData.companyName}
                    onInput={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Job Title
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter job title..."
                    className="w-75"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onInput={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">
                    Job Status
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75"
                    name="jobStatus"
                    value={formData.jobStatus}
                    onInput={handleChange}
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Company City
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75"
                    name="companyCity"
                    value={formData.companyCity}
                    onInput={handleChange}
                  >
                    <option value="Tangerang Selatan">Tangerang Selatan</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Surabaya">Surabaya</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Row className="d-flex my-5">
                <Col xs={12}>
                  <h2 className="me-3 p-1 text-left mb-3">Company Address</h2>
                </Col>
                <Col xs={12}>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Company Address"
                  >
                    <Form.Control
                      name="companyAddress"
                      value={formData.companyAddress}
                      onInput={handleChange}
                      as="textarea"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="d-flex my-5">
                <Col xs={3}>
                  <h2 className="me-3 p-1 text-left mb-3">Job Requirement</h2>
                </Col>
                <Col xs={12}>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Job Requirement"
                  >
                    <Form.Control
                      name="jobRequirement"
                      value={formData.jobRequirement}
                      onInput={handleChange}
                      as="textarea"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="d-flex my-5">
                <Col xs={3}>
                  <h2 className="me-3 p-1 text-left mb-3">Description</h2>
                </Col>
                <Col xs={12}>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Description"
                  >
                    <Form.Control
                      name="description"
                      value={formData.description}
                      onInput={handleChange}
                      as="textarea"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <h2 className="my-3">Company Logo</h2>
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
      </div>
    </>
  );
}

export default NewPosting;
