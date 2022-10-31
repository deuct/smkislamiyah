import React from "react";
import { Row, Col, Form, Button, InputGroup, Table } from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManagePosting({ title }) {
  return (
    <>
      <h1 className="fs-2">Manage Staff</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <IoAdd />
            New Staff
          </Button>
        </Col>

        {/* <Col xs={3}>
          <Form.Select>
            <option>Filter by Company</option>
            <option value="external">external</option>
            <option value="internal">internal</option>
            <option value="competition">competition</option>
          </Form.Select>
        </Col> */}

        <Col xs={6}>
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
                <th>Staff Code</th>
                <th style={{ width: 220 }}>Staff Name</th>
                <th style={{ width: 220 }}>Department</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Jane Obey</td>
                <td>Cleaning Specialis</td>
                <td>Active</td>
                <td className="d-flex align-items-center">
                  <Button variant="danger" className="me-2">
                    <IoTrashBin />
                  </Button>
                  <Button variant="success">
                    <IoEye />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>001</td>
                <td>Jane Obey</td>
                <td>Cleaning Specialis</td>
                <td>Active</td>
                <td className="d-flex align-items-center">
                  <Button variant="danger" className="me-2">
                    <IoTrashBin />
                  </Button>
                  <Button variant="success">
                    <IoEye />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>001</td>
                <td>Jane Obey</td>
                <td>Cleaning Specialis</td>
                <td>Active</td>
                <td className="d-flex align-items-center">
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
