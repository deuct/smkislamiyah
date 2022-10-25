import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
// CK Editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import TestShowImg from "./TestShowImg";

function NewPosting({ title }) {
  // Upload Image to Database
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const [arrImgUpload, setArrImgUpload] = useState([]); //array for image upload
  const [showImgUpload, setShowImgUpload] = useState([]);
  const [checked, setChecked] = useState([]);

  const setChk = () => {
    console.log("setchk Work!");
    console.log(showImgUpload.length);
    setChecked(new Array(showImgUpload.length).fill(false));
  };

  useEffect(() => {
    if (showImgUpload.length !== 0) {
      console.log("useeffect img : " + showImgUpload.length);
      setChecked(new Array(showImgUpload.length).fill(false));
    }
  }, [showImgUpload]);

  const handleSubmit = (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    e.preventDefault();
    console.log("handlesubmit work");
    let formData = new FormData();
    formData.append("imgpost_dir", image.data);
    console.log("============Form Data===========");
    console.log(formData);
    setArrImgUpload((arrImgUpload) => [...arrImgUpload, formData]);
    setShowImgUpload((showImgUpload) => [...showImgUpload, image.preview]);
    // const showImg = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: e.target.files[0],
    // };
    // console.log("handlefilechange work");
    // console.log(img);
    // setImage(img);
    // const response = await axios.post(
    //   "http://localhost:5000/imgpost",
    //   formData,
    //   config
    // );
    // // console.log(status);
    // if (response) {
    //   setStatus(response.statusText);
    // } else {
    //   console.log("failed");
    // }
  };
  console.log("showImgUpload :" + showImgUpload.length);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    console.log("handlefilechange work");
    console.log(img);
    setImage(img);
  };
  // End upload image

  // Upload Image to State
  const handleOnChange = (position) => {
    const updateCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    console.log("Updatesetchecked " + updateCheckedState);
    setChecked(updateCheckedState);
  };

  console.log("===========123===========");
  console.log(showImgUpload);
  console.log(checked);
  console.log(arrImgUpload);

  // End Image State

  // Delete Img
  const deleteImg = () => {
    const imgCheckDel = checked.map((chk, index) => {
      if (chk === true) {
        console.log("deleted index: " + index);
        console.log(arrImgUpload[index]);
        const imgtoDelete = arrImgUpload[index];
        const imgshowToDelete = showImgUpload[index];
        console.log("========== arr img up ^ =======");
        setArrImgUpload((prev) =>
          prev.filter((arrImgUpload) => {
            console.log("============");
            console.log(imgtoDelete);
            console.log("============");
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
    console.log(checked);
  };
  // End Delete Img

  // Get date for new post
  var current = new Date();
  current.setDate(current.getDate() + 3);
  var dateNoow = new Date().toISOString().substring(0, 10);

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
                    placeholder="ann00001"
                    className="w-75"
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
                    defaultValue={dateNoow}
                    className="w-75"
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
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
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
                                  : "blue",
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
                      Delete image
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
                <Button variant="success" type="submit" className="mt-3 me-2">
                  Post
                </Button>
                <Button variant="primary" type="submit" className="mt-3">
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
