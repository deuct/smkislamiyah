// React Needed
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// Styling
import { Row, Col, Form, Button } from "react-bootstrap";
import { IoTrashOutline } from "react-icons/io5";

function NewPosting({ title }) {
  // Get id post
  const [idPost, setIdPost] = useState("");
  useEffect(() => {
    getIdPost();
  }, []);

  const getIdPost = async () => {
    const responseToken = await axios.get("http://localhost:5000/token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${responseToken.data.accessToken}`,
      },
      withCredentials: true,
    };
    const response = await axios.get(
      "http://localhost:5000/posts/getid/getidpost",
      config
    );

    if (response) {
      const resId = response.data.post_id;
      var idSplit = resId.match(/\d/g);
      idSplit = idSplit.join("");
      idSplit = parseInt(idSplit);
      idSplit += 1;
      console.log("wumbo");
      console.log(idSplit);
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
  const [postShortDesc, setPostShortDesc] = useState(
    "lorem ipsum doler sit amet babaudin dit amet balaka umanika tuturuse"
  );

  // Jalankan fungsi handleUploadPost setelah state statusCounter selesai di ubah
  useEffect(() => {
    if (statusCounter !== 0) {
      handleUploadPost();
    }
  }, [postStatus]);

  const handleUploadPost = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const postDataInsert = {
      data: {
        postCode: postCode,
        postTitle: postTitle,
        postStatus: postStatus,
        postType: postType,
        postShortDesc: postShortDesc,
        postDesc: postDesc,
        createdAt: postDate,
      },
    };
    const response = await axios.post(
      "http://localhost:5000/posts/newpost",
      config,
      postDataInsert
    );
    // console.log(status);
    if (response) {
      setStatus(response.statusText);
      console.log("post success");
    } else {
      // console.log("failed");
    }
    console.log("============DEBUGGING============");
    // console.log(e.target.value);
    console.log(postCode);
    console.log(postStatus);
    console.log(postTitle);
    console.log(postDate);
    const postCateg = postCategory.split(",");
    console.log(postCateg);
    console.log(postType);
    console.log(postDesc);
    console.log(arrImgUpload);

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
    // console.log("handlesubmit work");
    let formData = new FormData();
    formData.append("imgpost_dir", image.data);
    // console.log("============Form Data===========");
    // console.log(formData);
    setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
    setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
    // const showImg = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: e.target.files[0],
    // };
    // // console.log("handlefilechange work");
    // // console.log(img);
    // setImage(img);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    // console.log("handlefilechange work");
    // console.log(img);
    setImage(img);
  };
  // End upload image

  // Manipulate image state
  const handleOnChange = (position) => {
    const updateCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    // console.log("Updatesetchecked " + updateCheckedState);
    setChecked(updateCheckedState);
  };

  // console.log("===========123===========");
  // console.log(showImgUpload);
  // console.log(checked);
  // console.log(arrImgUpload);

  // End Image State

  // Delete Img from state
  const deleteImg = () => {
    const imgCheckDel = checked.map((chk, index) => {
      if (chk === true) {
        // console.log("deleted index: " + index);
        // console.log(arrImgUpload[index]);
        const imgtoDelete = arrImgUpload[index];
        const imgshowToDelete = showImgUpload[index];
        // console.log("========== arr img up ^ =======");
        setArrImgUpload((prev) =>
          prev.filter((arrImgUpload) => {
            // console.log("============");
            // console.log(imgtoDelete);
            // console.log("============");
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
    // console.log(checked);
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
  // console.log("=========post status=============");
  // console.log(postStatus);

  return (
    <>
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
                    <option value="1">Announcement</option>
                    <option value="2">Activity</option>
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
                        onClick={handleSubmit}
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
                    setPostStatus(e.target.value);
                    setStatusCounter(1);
                    // setPostShortDesc()
                    // handleUploadPost(e);
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
                    setPostStatus(e.target.value);
                    setStatusCounter(1);
                    // handleUploadPost(e);
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
