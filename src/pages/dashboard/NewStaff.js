import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
// CK Editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TestShowImg from "./TestShowImg";

function NewPosting({ title }) {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
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
    const response = await axios.post(
      "http://localhost:5000/imgpost",
      formData,
      config
    );
    // console.log(status);
    if (response) {
      setStatus(response.statusText);
    } else {
      console.log("failed");
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    console.log("handlefilechange work");
    console.log(img);
    setImage(img);
  };

  return (
    <>
      {/* <div>
        <TestShowImg />
      </div> */}
      <div>
        {/* {image.preview && <img src={image.preview} width="100" height="100" />}
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFileChange}></input>
          <button type="submit">Submit</button>
        </form>
        {status && <h4>{status}</h4>} */}
        <h1 className="my-3 fs-2 text-center">New Staff</h1>
        <hr />
        <Row className="mt-5">
          <Col xs={8}>
            <Form className="my-3 justify-content-center">
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Teacher Code
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
                    Staff Name
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Announcement Title"
                    className="w-75"
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Staff Department
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Announcement Title"
                    className="w-75"
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">
                    Staff Status
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75"
                  >
                    <option value="1">Active</option>
                    <option value="2">Pension</option>
                    <option value="3">Leave</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Row>
                <Col xs={12}>
                  <h2 className="my-3">Staff Photo</h2>
                  <div id="image-box">
                    <div className="imgbox-photos mb-4">
                      <div className="imgbox-detail">
                        <img src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" />
                        <p className="text-center">Ballon.jpg</p>
                      </div>
                    </div>
                    {/* <Button
                    variant="danger"
                    className="fs-8 btn-imgdelete mb-2 me-2 mt-4"
                  >
                    Delete image
                  </Button> */}
                  </div>
                </Col>
              </Row>
              <Col className="text-end">
                <Button variant="success" type="submit" className="mt-3 mx-2">
                  Post
                </Button>
              </Col>
            </Form>
            {image.preview && (
              <img src={image.preview} width="100" height="100" />
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFileMultiple" className="mb-3 mt-2">
                <Form.Label>Upload new photo</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                />
                <Button type="submit">Upload</Button>
                {/* <Form.Control type="file" multiple /> */}
              </Form.Group>
            </Form>
            {status && <p>{status}</p>}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NewPosting;
