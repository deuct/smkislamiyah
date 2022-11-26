// React Needed
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import moment from "moment/moment";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import viewToPlainText from "@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext";
// Styling
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import {
  IoTrashOutline,
  IoSunnySharp,
  IoArrowUndoOutline,
} from "react-icons/io5";

function NewPosting(props) {
  // Const Get params from url
  const [searchParams] = useSearchParams();
  const [paramsId, setParamsId] = useState(searchParams.get("post_id"));
  const [roleAction, setRoleAction] = useState(searchParams.get("role"));

  // Const modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);

  // Const Generate token API post
  const [name, setName] = useState(props.name);
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  // Const on form submit
  const [postCode, setPostCode] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postCategoryEdited, setPostCategoryEdited] = useState([]); //jika role = edit
  const [postCategoryString, setPostCategoryString] = useState("");
  const [postType, setPostType] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [postPhoto, setpostPhoto] = useState(null); //sama dengan arrImgUpload
  const [postStatus, setPostStatus] = useState("");
  const [statusCounter, setStatusCounter] = useState(0);
  const [postShortDesc, setPostShortDesc] = useState("");

  // Const image upload
  const [image, setImage] = useState({ preview: "", data: "" });
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState("");

  // Const get single post
  const [singlePost, setSinglePost] = useState([]);
  const [singlePostCategory, setSinglePostCategory] = useState([]);
  const [singlePostImg, setSinglePostImg] = useState([]);

  // Const id post
  const [idPost, setIdPost] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Modal after post
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-article");
  };
  // End modal after post

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
      setName(decoded.name);
      setExpired(decoded.exp);
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // End generate token for evvery API post

  // Get id post
  useEffect(() => {
    getIdPost();
  }, []);

  const getIdPost = async () => {
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
      // console.log("========this is resid==========");
      // console.log(resId);
      var idSplit = resId.match(/\d/g);
      idSplit = idSplit.join("");
      idSplit = parseInt(idSplit);
      idSplit += 1;
      setIdPost(idSplit);
    } else {
      setIdPost(1);
      console.log("failed getting ID");
    }
  };
  // End get id post

  // Get single post
  useEffect(() => {
    initializePost();
  }, [idPost]);

  const initializePost = async () => {
    if (roleAction === "edit") {
      const response = await axios.get(
        `http://localhost:5000/posts/${paramsId}`
      );
      const resCategory = await axios.get(
        `http://localhost:5000/posts/category/${paramsId}`
      );
      if (response && resCategory) {
        setSinglePost(response.data);
        setSinglePostCategory(resCategory.data);
      }
      setPostCategoryEdited([]);
    } else if (roleAction === "add") {
      console.log("=======idpostaction=========");
      console.log(idPost);
      setPostCode("PST" + idPost);
      setPostType("Announcement");
      // setFormData({
      //   ...formData,
      //   jobCode: "JOB" + idJob,
      //   jobStatus: "Open",
      //   companyCity: "Tangerang Selatan",
      // });
    }
  };

  console.log("========test postcode========");
  console.log(idPost);
  console.log(postCode);

  useEffect(() => {
    setValuePost();
  }, [singlePost]);

  useEffect(() => {
    setPostCategoryString(postCategoryEdited.toString());
  }, [postCategoryEdited]);

  useEffect(() => {
    // try {
    // if (responseImg) {
    //   responseImg.map((img) => {
    //     setShowImgUpload((showImgUpload) => [
    //       `http://localhost:5000/${img.imgpost_dir.replace("\\", "/")}`,
    //     ]);
    //   });
    // }
    // } catch (error) {
    //   console.log(error);
    // }
    setCurrentImg();
  }, [postCode]); //di set auto load setiap kali arrshowimg di modifikasi

  const setCurrentImg = async () => {
    const responseImg = await axios.get(
      `http://localhost:5000/posts/imgpost/${postCode}`
    );
    const responseImgAssign = responseImg.data.map((img) => {
      setShowImgUpload((showImgUpload) => [
        ...showImgUpload,
        `http://localhost:5000/${img.imgpost_dir.replace("\\", "/")}`,
      ]);
    });
  };

  const setValuePost = async () => {
    if (singlePostCategory.length !== 0) {
      singlePostCategory.map((category) => {
        setPostCategoryEdited((current) => [
          ...current,
          category.categorypost_name,
        ]);
      });
    }
    if (singlePost.length !== 0) {
      singlePost.map((post) => {
        var postDates = new Date(post.createdAt).toLocaleDateString();
        postDates = moment(postDates).format("YYYY-MM-DD");
        setPostCode(post.post_id);
        setPostDate(postDates);
        setPostTitle(post.post_name);
        setPostType(post.post_type);
        setPostDesc(post.post_desc);
        setPostStatus(post.post_status);

        // const responseImg = "test123";
        // console.log(responseImg);

        // if (responseImg) {
        // console.log(responseImg);
        // console.log(responseImg.data);
        // console.log(responseImg.data.result);
        // setShowImgUpload((showImgUpload) => [
        //   `http://localhost:5000/${job.company_logo.replace("\\", "/")}`,
        // ]);
        // } else {
        //   console.log("error getting images");
        // }
        // if (job.company_logo !== "") {
        // /posts/imgpost/
        //   setShowImgUpload((showImgUpload) => [
        //     `http://localhost:5000/${job.company_logo.replace("\\", "/")}`,
        //   ]);
        // }
      });
    }
  };
  // End single job

  // On form submit
  const handleUploadPost = async (e) => {
    const statusPost = e.target.value;

    if (
      postCode.length < 1 ||
      postTitle.length < 1 ||
      postType.length < 1 ||
      postDesc.length < 1
    ) {
      handleShowModal(false);
      setIsModalClose(true);
    } else {
      // Insert post to database
      if (roleAction === "add") {
        const shortDesc = postShortDesc.slice(0, 250);
        const postSlug =
          postTitle.replace(/\s/g, "-") + "-" + postCode.replace("PST", "");

        var response = await axiosJWT.post(
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
              postSlug: postSlug,
              createdAt: postDate,
            },
          }
        );
      } else if (roleAction === "edit") {
        const shortDesc = postShortDesc.slice(0, 250);
        const postSlug =
          postTitle.replace(/\s/g, "-") + "-" + postCode.replace("PST", "");

        var response = await axiosJWT.post(
          "http://localhost:5000/posts/updatepost",
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
              postSlug: postSlug,
              postDesc: postDesc,
              updatedAt: postDate,
            },
          }
        );
      }
      if (response) {
        // Start upload image to database based on postcode
        if (arrImgUpload.length === 0) {
          var newImg = "false";
        } else {
          var uploadImgProcess = await axios.all([
            arrImgUpload.map((item) => {
              axiosJWT.post("http://localhost:5000/imgpost", item, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                data: {
                  postCode: postCode,
                },
                withCredentials: true,
              });
            }),
          ]);
        }
        if (uploadImgProcess || newImg === "false") {
          // Upload category based on post code
          const postCateg = postCategory.split(",");
          console.log("=======post categ=======");
          console.log(postCateg);
          if (roleAction === "add") {
            var categoryPost = await axios.all([
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
          } else if (roleAction === "edit") {
            await axiosJWT.post(
              "http://localhost:5000/posts/updatecategory/delete",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                withCredentials: true,
                data: { postCode: postCode },
              }
            );
            var categoryPost = await axios.all([
              postCateg.map((item) => {
                axiosJWT.post("http://localhost:5000/posts/updatecategory", {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                  withCredentials: true,
                  data: { postCode: postCode, postCategory: item },
                });
              }),
            ]);
          }
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
    formData.append("value_id", JSON.stringify(postCode));
    setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
    setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
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

  console.log("============DEBUGGING============");
  console.log(postCategoryEdited);
  console.log(postCategoryEdited.toString());
  console.log(postCode);
  console.log(postStatus);
  console.log(postTitle);
  console.log(postDate);
  // const postCateg = postCategory.split(",");
  // console.log(postCateg);
  console.log(postType);
  console.log(postDesc);
  // console.log("=====================test show=============");
  console.log(arrImgUpload);
  console.log(showImgUpload);

  // End Image State

  // Delete Img from state
  const deleteImg = async () => {
    if (roleAction === "add") {
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
    } else if (roleAction === "edit") {
      const imgCheckDel = checked.map(async (chk, index) => {
        if (chk === true) {
          const imgtoDelete = arrImgUpload[index];
          const imgshowToDelete = showImgUpload[index];
          console.log("==========imgshow to delete========");
          console.log(imgshowToDelete);
          console.log("==========imgarray to delete========");
          console.log(imgtoDelete);
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
          // Slice img dir to get the directory -> process delete from database
          var imgDirSlice = showImgUpload[index].slice(22);
          imgDirSlice = imgDirSlice.replace("/", "\\");
          const resDelImg = await axiosJWT.post(
            `http://localhost:5000/post/img/delete?imgpost_for=${postCode}&image_dir=${imgDirSlice}`
          );
        }
      });
    }
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
        <div id="title-new-item" className="d-flex justify-content-between">
          <Link to={"/dashboard/manage-article"}>
            <Button variant="secondary">
              <IoArrowUndoOutline xs={25} /> Back
            </Button>
          </Link>
          {roleAction === "add" ? (
            <div className="text-center mx-auto w-auto">
              <h1 className="fs-2" style={{ fontWeight: "600" }}>
                New Post
              </h1>
              <p className="mx-auto" style={{ width: "100%", margin: 0 }}>
                Create a new post to make public can see it.
              </p>
            </div>
          ) : (
            <h1 className="my-3 fs-2 text-center mx-auto">Edit Post</h1>
          )}
        </div>
        <hr style={{ border: "1px solid gray" }} />
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
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      className="w-75"
                      onClick={(e) => setPostCode(e.target.value)}
                      value={"PST" + idPost}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      className="w-75"
                      onClick={(e) => setPostCode(e.target.value)}
                      value={postCode}
                    />
                  )}
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
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      placeholder="Title Post"
                      className="w-75"
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder="Title Post"
                      className="w-75"
                      onChange={(e) => setPostTitle(e.target.value)}
                      value={postTitle}
                    />
                  )}
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Post Category
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      placeholder="Pramuka, Paskibra"
                      className="w-75"
                      onChange={(e) => setPostCategory(e.target.value)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      defaultValue={postCategoryString}
                      // value={postCategoryString}
                      className="w-75"
                      onChange={(e) => setPostCategory(e.target.value)}
                    />
                  )}
                </Col>
              </Form.Group>
              <span style={{ color: "gray" }}>
                <p>
                  separate with comma if there is more thank one category.
                  example : pramuka, paskibra
                </p>
              </span>
              <br />
              <Form.Group className="mb-3 d-flex">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">
                    Post Type
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  {roleAction === "add" ? (
                    <Form.Select
                      aria-label="Select Post Type"
                      className="w-75"
                      onClick={(e) => setPostType(e.target.value)}
                      defaultValue="Announcement"
                    >
                      <option value="Announcement">Announcement</option>
                      <option value="Activities">Activities</option>
                    </Form.Select>
                  ) : (
                    <>
                      <Form.Select
                        aria-label="Select Post Type"
                        className="w-75"
                        onClick={(e) => setPostType(e.target.value)}
                        value={postType}
                      >
                        <option value="Activities">Activities</option>
                        <option value="Announcement">Announcement</option>
                      </Form.Select>
                    </>
                  )}
                </Col>
              </Form.Group>

              <Row className="d-flex my-5">
                <Col xs={3}>
                  <h2 className="me-3 p-1 text-left mb-3">Description</h2>
                </Col>
                <Col xs={12}>
                  {roleAction === "add" ? (
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
                          viewToPlainText(
                            editor.editing.view.document.getRoot()
                          )
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
                  ) : (
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
                      data={postDesc}
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
                          viewToPlainText(
                            editor.editing.view.document.getRoot()
                          )
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
                  )}
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
              <hr style={{ border: "1px solid gray" }} />
              <Col className="text-end" id="btn-submit-form">
                <Link to={"/dashboard/manage-article"}>
                  <Button
                    variant="danger"
                    type="button"
                    className="mt-3 me-2 btn-post-item"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  value="draft"
                  onClick={(e) => {
                    handleUploadPost(e);
                  }}
                  type="button"
                  className="mt-3 me-2 btn-post-item"
                >
                  Save as Draft
                </Button>
                <Button
                  variant="success"
                  value="posted"
                  onClick={(e) => {
                    handleUploadPost(e);
                  }}
                  type="button"
                  className="mt-3 me-2 btn-post-item"
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

export default NewPosting;
