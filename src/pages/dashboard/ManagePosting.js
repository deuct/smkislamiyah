import React from "react";
import { Row, Col, Form, Button, InputGroup, Table } from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManagePosting({ title }) {
  return (
    <>
      <h1 className="fs-2">Manage {title}</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <IoAdd />
            New {title}
          </Button>
        </Col>

        <Col xs={3}>
          <Form.Select>
            <option>Filter by Category</option>
            <option value="external">external</option>
            <option value="internal">internal</option>
            <option value="competition">competition</option>
          </Form.Select>
        </Col>

        <Col xs={3}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <Button variant="primary">
              <IoSearch />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table striped hover>
            <thead>
              <tr>
                <th>{title} Code</th>
                <th style={{ width: 220 }}>Title</th>
                <th>Short Description</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ann000001</td>
                <td>Title Posting Satu</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae laboriosam expedita, sapiente perspiciatis ea
                  ducimus?
                </td>
                <td style={{ color: "#B99E00" }}>Draft</td>
                <td className="d-flex">
                  <Button variant="danger" className="me-2">
                    <IoTrashBin />
                  </Button>
                  <Button variant="success">
                    <IoEye />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>ann000002</td>
                <td>Title Posting Tiga</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae laboriosam expedita, sapiente
                </td>
                <td style={{ color: "#079630" }}>Posted</td>
                <td className="d-flex">
                  <Button variant="danger" className="me-2">
                    <IoTrashBin />
                  </Button>
                  <Button variant="success">
                    <IoEye />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>ann000003</td>
                <td>Title Posting Tiga</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae laboriosam expedita, sapiente perspiciatis ea
                  ducimus? Lorem, ipsum dolor.
                </td>
                <td style={{ color: "#B99E00" }}>Draft</td>
                <td className="d-flex">
                  <Button variant="danger" className="me-2">
                    <IoTrashBin />
                  </Button>
                  <Button variant="success">
                    <IoEye />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default ManagePosting;
