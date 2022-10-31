// React Needed
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import viewToPlainText from "@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext";
// Styling
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { IoTrashOutline, IoSunnySharp } from "react-icons/io5";

function NewPosting(props) {
  // Navigation
  const navigate = useNavigate();

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
    // if (show === false) {
    navigate("/dashboard/manage-article");
    // }
  };

  const [name, setName] = useState(props.name);
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  console.log("token posting: " + token);

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
      setName(decoded.name);
      setExpired(decoded.exp);
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Get id post
  const [idPost, setIdPost] = useState("");
  useEffect(() => {
    getIdPost();
  }, []);

  const getIdPost = async () => {
    console.log("props token in idpost: " + token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    const response = await axiosJWT.get(
      "http://localhost:5000/posts/getid/getidpost",
      config
    );

    if (response) {
      const resId = response.data.post_id;
      var idSplit = resId.match(/\d/g);
      idSplit = idSplit.join("");
      idSplit = parseInt(idSplit);
      idSplit += 1;
      setIdPost(idSplit);
    } else {
      console.log("failed getting ID");
    }
  };

  // On form submit
  const [postCode, setPostCode] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postType, setPostType] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [postPhoto, setpostPhoto] = useState(null); //sama dengan arrImgUpload
  const [postStatus, setPostStatus] = useState("");
  const [statusCounter, setStatusCounter] = useState(0);
  const [postShortDesc, setPostShortDesc] = useState("");

  // Jalankan fungsi handleUploadPost setelah state statusCounter selesai di ubah
  // useEffect(() => {
  //   if (statusCounter !== 0) {
  //     handleUploadPost();
  //   }
  // }, []);
  console.log("statuscounter: " + statusCounter);

  const handleUploadPost = async (e) => {
    console.log("token in handleupload: " + token);
    const statusPost = e.target.value;
    const shortDesc = postShortDesc.slice(0, 250);

    if (
      postCode.length < 1 ||
      postTitle.length < 1 ||
      postCategory.length < 1 ||
      postType.length < 1 ||
      postDesc.length < 1 ||
      arrImgUpload < 1
    ) {
      handleShowModal(false);
      setIsModalClose(true);
    } else {
      // Insert post to database
      const response = await axiosJWT.post(
        "http://localhost:5000/posts/newpost",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
          data: {
            postCode: postCode,
            postTitle: postTitle,
            postStatus: statusPost,
            postType: postType,
            postShortDesc: shortDesc,
            postDesc: postDesc,
            createdAt: postDate,
          },
        }
      );
      if (response) {
        // Start upload image to database based on postcode
        const uploadImgProcess = await axios.all([
          arrImgUpload.map((item) => {
            axiosJWT.post("http://localhost:5000/imgpost", item, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              withCredentials: true,
            });
          }),
        ]);
        if (uploadImgProcess) {
          // Upload category based on post code
          const postCateg = postCategory.split(",");
          const categoryPost = await axios.all([
            postCateg.map((item) => {
              axiosJWT.post("http://localhost:5000/posts/categorypost", {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                withCredentials: true,
                data: { postCode: postCode, postCategory: item },
              });
            }),
          ]);
          if (categoryPost) {
            setStatus(response.statusText);
            handleShowModal(true);
            setIsModalClose(true);
          }
        }
        // End upload image to database
      } else {
        console.log("failed");
      }
    }
    setStatusCounter(0);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imgpost_dir", image.data);
    // Tes form data
    formData.append("value_id", JSON.stringify(postCode));
    setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
    setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
    // const showImg = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: e.target.files[0],
    // };
    // setImage(img);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  // End upload image

  // Manipulate image state
  const handleOnChange = (position) => {
    const updateCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updateCheckedState);
  };

  // console.log("===========123===========");
  // console.log(showImgUpload);
  // console.log(checked);
  // console.log(arrImgUpload);
  console.log("============DEBUGGING============");
  console.log(postCode);
  console.log(postStatus);
  console.log(postTitle);
  console.log(postDate);
  const postCateg = postCategory.split(",");
  console.log(postCateg);
  console.log(postType);
  console.log(postDesc);
  console.log(arrImgUpload);

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

  // Get date for new post
  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    var current = new Date();
    current.setDate(current.getDate() + 3);
    var dateNoow = new Date().toISOString().substring(0, 10);
    setPostDate(dateNoow);
  };
  // End Get Date

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
          {paramModals ? (
            <>
              <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
                Successfully added new post. Please check your post in listing
                menu. Have a nice day!
                <IoSunnySharp size={25} style={{ color: "#ffaa00" }} />
              </h3>
              <Button
                variant="danger"
                onClick={(handleCloseModal, navigateAfterPost)}
              >
                Close
              </Button>{" "}
            </>
          ) : (
            <>
              <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
                failed added post. Please check your form.
              </h3>
              <Button variant="danger" onClick={handleCloseModal}>
                Close
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
      <div>
        <h1 className="my-3 fs-2 text-center">New Post</h1>
        <hr />
        <Row className="mt-5">
          <Col xs={8}>
            <Form className="my-3 justify-content-center">
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Post Code
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    readOnly="yes"
                    className="w-75"
                    onClick={(e) => setPostCode(e.target.value)}
                    value={"PST" + idPost}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Post Date
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="date"
                    defaultValue={postDate}
                    className="w-75"
                    onChange={(e) => setPostDate(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Title Post
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Title Post"
                    className="w-75"
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Post Category
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Pramuka, Paskibra"
                    className="w-75"
                    onChange={(e) => setPostCategory(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <span style={{ color: "gray" }}>
                <p>
                  separate with comma if there is more thank one category.
                  example : pramuka, paskibra
                </p>
              </span>
              <br />
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">
                    Post Type
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75"
                    onClick={(e) => setPostType(e.target.value)}
                  >
                    <option value="Announcement">Announcement</option>
                    <option value="Activity">Activity</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Row className="d-flex my-5">
                <Col xs={3}>
                  <h2 className="me-3 p-1 text-left mb-3">Description</h2>
                </Col>
                <Col xs={12}>
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      removePlugins: [
                        "EasyImage",
                        "ImageUpload",
                        "MediaEmbed",
                        "InsertTable",
                      ],
                      height: "500px",
                    }}
                    data="<p>Post Body</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      // console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      // console.log(
                      //   viewToPlainText(editor.editing.view.document.getRoot())
                      // );
                      setPostShortDesc(
                        viewToPlainText(editor.editing.view.document.getRoot())
                      );
                      setPostDesc(data);
                      // console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      // console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      // console.log("Focus.", editor);
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <h2 className="my-3">Post Photo Gallery</h2>
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
                                onClick={() => handleOnChange(index)}
                                value={index}
                                key={index}
                              />
                            </div>
                          </>
                        );
                      })}
                      {/* {imeg.map((imge, index) => {
                        return (
                          
                            <Button
                              className="imgbox-detail"
                              onClick={() => handleOnChange(index)}
                              style={{
                                backgroundColor:
                                  imgCheck === index ? "salmon" : "blue",
                              }}
                              key={index}
                            >
                              <p>{index}</p> */}
                      {/* <input
                                type="checkbox"
                                id={`imgpost-${index}`}
                                name={imge.title}
                                value={imge.title}
                                onChange={() => handleOnChange(index)}
                              /> */}
                      {/* <img src={imge.src} />
                              <p className="text-center">{imge.title}</p>
                            </Button>
                          
                        );
                      })} */}
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
                        onChange={handleFileChange}
                      />
                      <Button
                        className="mt-2"
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Upload
                      </Button>
                    </Form.Group>
                    {status && <p>{status}</p>}
                  </div>
                </Col>
              </Row>
              <Col className="text-end" id="btn-submit-form">
                <Button
                  variant="success"
                  value="posted"
                  onClick={(e) => {
                    // setPostStatus(e.target.value);
                    // setStatusCounter(1);
                    // setPostShortDesc()
                    handleUploadPost(e);
                  }}
                  type="button"
                  className="mt-3 me-2"
                >
                  Post
                </Button>
                <Button
                  variant="primary"
                  value="draft"
                  onClick={(e) => {
                    // setPostStatus(e.target.value);
                    // setStatusCounter(1);
                    handleUploadPost(e);
                  }}
                  type="button"
                  className="mt-3"
                >
                  Save as Draft
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
