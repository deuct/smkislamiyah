// React Needed
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
// Styling
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { IoSunnySharp, IoTrashOutline } from "react-icons/io5";

function NewStaff(props) {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // Const imgupload set
  const [image, setImage] = useState({ preview: "", data: "" });
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState("");

  // Const Get params from url
  const [searchParams] = useSearchParams();
  const [paramsId, setParamsId] = useState(searchParams.get("alumni_id"));
  const [roleAction, setRoleAction] = useState(searchParams.get("role"));

  // Const Generate token for every API post
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  // Const modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);

  // Const default variable form
  var initialFormData = {
    alumniId: "", // ambil last job id dari database
    alumniNama: "",
    alumniProfesi: "",
    alumniTesti: "",
    isIndex: "",
    alumniPhoto: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // Const get single alumni
  const [singleAlumni, setSingleAlumni] = useState([]);

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

  // Get id alumni
  const [idAlumni, setIdAlumni] = useState("");

  useEffect(() => {
    getIdAlumni();
  }, []);

  const getIdAlumni = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    const response = await axiosJWT.get("/alumnis/getid/getidalumni", config);

    if (response) {
      const resId = response.data.alumni_id;
      console.log(resId);
      if (resId !== undefined) {
        var idSplit = resId.match(/\d/g);
        idSplit = idSplit.join("");
        idSplit = parseInt(idSplit);
        idSplit += 1;
        setIdAlumni(idSplit);
      } else {
        setIdAlumni(1);
      }
    } else {
      console.log("failed getting alumni id");
    }
  };
  // End get id staff

  // Modal after post
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-alumni");
  };
  // End modal after post

  // Get single staff
  useEffect(() => {
    initializeStaff();
  }, [idAlumni]);

  const initializeStaff = async () => {
    if (roleAction === "edit") {
      console.log("edit");
      const response = await axiosInstance.get(`/alumnis/${paramsId}`);
      //   console.log("=======test========");
      //   console.log(response.data.result);
      if (response) {
        setSingleAlumni(response.data.result);
      }
    } else if (roleAction === "add") {
      console.log("add post");
      setFormData({
        ...formData,
        alumniId: "ALMN" + idAlumni,
        isIndex: "Yes",
      });
    }
  };
  //   console.log("========test========");
  //   console.log(formData.alumniId);
  useEffect(() => {
    setValueAlumni();
  }, [singleAlumni]);

  const setValueAlumni = async () => {
    if (singleAlumni.length !== 0) {
      singleAlumni.map((alumni) => {
        setFormData({
          alumniId: alumni.alumni_id,
          alumniNama: alumni.alumni_nama,
          alumniProfesi: alumni.alumni_profesi,
          alumniTesti: alumni.alumni_testi,
          isIndex: alumni.isIndex,
          alumniPhoto: alumni.alumni_photo_dir,
        });
        if (alumni.alumni_photo_dir !== "") {
          setShowImgUpload((showImgUpload) => [
            `${baseURLAPI}/${alumni.alumni_photo_dir.replace("\\", "/")}`,
          ]);
        }
      });
    }
  };
  // End single staff

  // Handle insert data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.alumniId === "" ||
      formData.alumniNama === "" ||
      formData.alumniProfesi === "" ||
      formData.alumniTesti === "" ||
      formData.isIndex === ""
    ) {
      handleShowModal("failedpost");
      setIsModalClose(true);
    } else {
      try {
        if (roleAction === "add") {
          let formDataUpload = new FormData();
          formDataUpload.append("alumniId", formData.alumniId);
          formDataUpload.append("alumniPhoto", image.data);
          formDataUpload.append("alumniNama", formData.alumniNama);
          formDataUpload.append("alumniProfesi", formData.alumniProfesi);
          formDataUpload.append("alumniTesti", formData.alumniTesti);
          formDataUpload.append("isIndex", formData.isIndex);
          const response = await axiosJWT.post(
            "/alumnis/newalumni",
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

          console.log(formDataUpload);
        } else if (roleAction === "edit") {
          let formDataUpload = new FormData();
          formDataUpload.append("alumniId", formData.alumniId);
          if (image.data === "") {
            formDataUpload.append("alumniPhoto", "");
            formDataUpload.append("isNewImage", "false");
          } else {
            formDataUpload.append("alumniPhoto", image.data);
            formDataUpload.append("isNewImage", "true");
          }

          formDataUpload.append("alumniNama", formData.alumniNama);
          formDataUpload.append("alumniProfesi", formData.alumniProfesi);
          formDataUpload.append("alumniTesti", formData.alumniTesti);
          formDataUpload.append("isIndex", formData.isIndex);

          console.log(formDataUpload);

          const response = await axiosJWT.post(
            "/alumnis/updatealumni",
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
          `/alumnis/delete/img?alumni_img=${formData.alumniPhoto}&alumni_id=${formData.alumniId}`
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
            Successfully added new alumni. Please check your post in listing
            menu. Have a nice day!
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
            Only allowed 1 images for alumni image
          </h3>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </>
      );
    }
  };
  // End set modal body conditional
  //   console.log("===========form data==============");
  //   console.log(formData);
  //   console.log(formDataUplo);
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
        <h1 className="my-3 fs-2 text-center">New Alumni</h1>
      ) : (
        <h1 className="my-3 fs-2 text-center">Edit Alumni</h1>
      )}
      <hr />
      <Row className="mt-5">
        <Col xs={8}>
          <Form onSubmit={handleSubmit} className="my-3 justify-content-center">
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">
                  Alumni Code
                </Form.Label>
              </Col>
              <Col xs={10}>
                {roleAction === "add" ? (
                  <>
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      name="alumniId"
                      value={"ALMN" + idAlumni}
                      onInput={handleChange}
                      className="w-75"
                    />
                  </>
                ) : (
                  <>
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      name="alumniId"
                      value={formData.alumniId}
                      onInput={handleChange}
                      className="w-75"
                    />
                  </>
                )}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">Nama</Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Nama"
                  className="w-75"
                  name="alumniNama"
                  defaultValue={formData.alumniNama}
                  onInput={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">Profesi</Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Profesi"
                  className="w-75"
                  name="alumniProfesi"
                  defaultValue={formData.alumniProfesi}
                  onInput={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left">
                  Testimonial
                </Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Testimonials"
                  className="w-75"
                  name="alumniTesti"
                  defaultValue={formData.alumniTesti}
                  onInput={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Col xs={3}>
                <Form.Label className="me-3 p-1 text-left ">
                  Ditampilkan di index ?
                </Form.Label>
              </Col>
              <Col xs={10}>
                <Form.Select
                  aria-label="Default select example"
                  className="w-75"
                  name="isIndex"
                  value={formData.isIndex}
                  onInput={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Row>
              <Col xs={12}>
                <h2 className="my-3">Alumni Photo</h2>
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

export default NewStaff;
