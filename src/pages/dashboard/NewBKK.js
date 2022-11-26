// React Needed
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
// Styling
import { Row, Col, Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import {
  IoTrashOutline,
  IoSunnySharp,
  IoArrowUndoOutline,
} from "react-icons/io5";

function NewBKK(props) {
  // Const token for every API post
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  // Const get idjob
  const [idJob, setIdJob] = useState("");

  // Const modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);

  // Const default value
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

  // Const image upload set
  const [image, setImage] = useState({ preview: "", data: "" });
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState("");

  // Const Get params from url
  const [searchParams] = useSearchParams();
  const [paramsId, setParamsId] = useState(searchParams.get("company_id"));
  const [roleAction, setRoleAction] = useState(searchParams.get("role"));

  // Const get single job
  const [singleJob, setSingleJob] = useState([]);

  // Navigation
  const navigate = useNavigate();

  // Generate token for every API post
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
  // End generate token for every API post

  // Get id job
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
      setIdJob(1);
      console.log("failed getting job id");
    }
  };
  // End get id job

  // Modal after post
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-bkk");
  };
  // End modal after post

  // Get single job
  useEffect(() => {
    initializeJob();
  }, [idJob]);

  const initializeJob = async () => {
    if (roleAction === "edit") {
      const response = await axios.get(
        `http://localhost:5000/jobs/${paramsId}`
      );
      console.log("-------------response-----------");
      console.log(response.data.result);
      if (response) {
        setSingleJob(response.data.result);
      }
    } else if (roleAction === "add") {
      console.log("add post");
      setFormData({
        ...formData,
        jobCode: "JOB" + idJob,
        jobStatus: "Open",
        companyCity: "Tangerang Selatan",
      });
    }
  };

  useEffect(() => {
    setValueJob();
  }, [singleJob]);

  const setValueJob = async () => {
    if (singleJob.length !== 0) {
      singleJob.map((job) => {
        setFormData({
          jobCode: job.company_id, // ambil last job id dari database
          companyName: job.company_name,
          jobTitle: job.job_title,
          jobStatus: job.job_status,
          companyCity: job.company_city,
          companyAddress: job.company_address,
          jobRequirement: job.job_requirement,
          description: job.job_desc,
          companyLogo: job.company_logo,
        });
        if (job.company_logo !== "") {
          setShowImgUpload((showImgUpload) => [
            `http://localhost:5000/${job.company_logo.replace("\\", "/")}`,
          ]);
        }
      });
    }
  };
  // End single job

  // Handle insert data
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
        if (roleAction === "add") {
          let formDataUpload = new FormData();
          const shortDesc = formData.description.slice(0, 250);
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
            setFormData(initialFormData);
            handleShowModal("successpost");
            setIsModalClose(true);
          } else {
            console.log("failed upload data");
          }
        } else if (roleAction === "edit") {
          let formDataUpload = new FormData();
          const shortDesc = formData.description.slice(0, 250);
          if (image.data === "") {
            formDataUpload.append("companyLogo", "");
            formDataUpload.append("isNewImage", "false");
          } else {
            formDataUpload.append("companyLogo", image.data);
            formDataUpload.append("isNewImage", "true");
          }
          formDataUpload.append("companyId", formData.jobCode);
          formDataUpload.append("companyName", formData.companyName);
          formDataUpload.append("companyAddress", formData.companyAddress);
          formDataUpload.append("companyCity", formData.companyCity);
          formDataUpload.append("jobTitle", formData.jobTitle);
          formDataUpload.append("jobStatus", formData.jobStatus);
          formDataUpload.append("shortDesc", shortDesc);
          formDataUpload.append("description", formData.description);
          formDataUpload.append("jobRequirement", formData.jobRequirement);
          console.log(formDataUpload);
          const response = await axiosJWT.post(
            "http://localhost:5000/jobs/updatejob",
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

  // Handle Img on Submit (state)
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
  // End state image

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
          `http://localhost:5000/job/delete/img?company_logo=${formData.companyLogo}&company_id=${formData.jobCode}`
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
        <div id="title-new-item" className="d-flex justify-content-between">
          <Link to={"/dashboard/manage-bkk"}>
            <Button variant="secondary">
              <IoArrowUndoOutline xs={25} /> Back
            </Button>
          </Link>
          {roleAction === "add" ? (
            <div className="text-center mx-auto w-auto">
              <h1 className="fs-2" style={{ fontWeight: "600" }}>
                New Job
              </h1>
              <p className="mx-auto" style={{ width: "100%", margin: 0 }}>
                Create a newjob to make public can see it.
              </p>
            </div>
          ) : (
            <h1 className="my-3 fs-2 text-center mx-auto">Edit Job</h1>
          )}
        </div>
        <hr style={{ border: "1px solid gray" }} />
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
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      className="w-75"
                      name="jobCode"
                      value={"JOB" + idJob}
                      onInput={handleChange}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      className="w-75"
                      name="jobCode"
                      value={formData.jobCode}
                      onInput={handleChange}
                    />
                  )}
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
              <hr style={{ border: "1px solid gray" }} />
              <Col className="d-flex flex-row justify-content-end">
                <p className="align-self-center fw-bold me-3">
                  Finish filled the form ? then select the action
                </p>
                <Link to="/dashboard/manage-bkk">
                  <Button
                    variant="danger"
                    type="button"
                    className="mt-3 mx-2 btn-post-item"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  variant="success"
                  type="submit"
                  className="mt-3 mx-2 btn-post-item"
                >
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

export default NewBKK;
