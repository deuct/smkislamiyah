import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

function Profile() {
  return (
    <>
      <h1 className="fs-2 mt-3">Profile Setting</h1>
      <Row className="justify-content-center mt-5">
        <Col xs={8}>
          <Card className="mx-auto my-5">
            <Card.Body className="text-center">
              <Card.Title>Change Password</Card.Title>
              <hr />
              <Form className="mt-3 justify-content-center">
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                  <Col xs={3}>
                    <Form.Label className="me-3 p-1 text-left">
                      Username
                    </Form.Label>
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      type="text"
                      readonly="yes"
                      placeholder="smkislamiyah"
                      className="w-75"
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                  <Col xs={3}>
                    <Form.Label className="me-3 p-1 text-left">
                      Old password
                    </Form.Label>
                  </Col>
                  <Col xs={10}>
                    <Form.Control type="password" className="w-75" />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                  <Col xs={3}>
                    <Form.Label className="me-3 p-1 text-left">
                      New password
                    </Form.Label>
                  </Col>
                  <Col xs={10}>
                    <Form.Control type="password" className="w-75" />
                  </Col>
                </Form.Group>

                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
