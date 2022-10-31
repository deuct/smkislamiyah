import React from "react";
import { Row, Col, Form, Button, InputGroup, Table } from "react-bootstrap";
import { IoAdd, IoSearch, IoTrashBin, IoEye } from "react-icons/io5";

function ManagePosting({ title }) {
  return (
    <>
      <h1 className="fs-2">Manage Jobs in BKK</h1>
      <Row className="my-5 mt-3">
        <Col>
          <Button variant="success">
            <IoAdd />
            New Jobs
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
                <th>Job Code</th>
                <th style={{ width: 220 }}>Company Name</th>
                <th style={{ width: 220 }}>Job Title</th>
                <th>Job Desc</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ann000001</td>
                <td>Pepsi Ltd.</td>
                <td>Administrator</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  aut suscipit voluptates tempore corrupti nisi numquam adipisci
                  nam libero cumque!
                </td>
                <td style={{ color: "#B99E00" }}>Closed</td>
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
                <td>ann000001</td>
                <td>Pepsi Ltd.</td>
                <td>Administrator</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  aut suscipit voluptates tempore corrupti nisi numquam adipisci
                  nam libero cumque!
                </td>
                <td style={{ color: "#B99E00" }}>Closed</td>
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
                <td>ann000001</td>
                <td>Pepsi Ltd.</td>
                <td>Administrator</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  aut suscipit voluptates tempore corrupti nisi numquam adipisci
                  nam libero cumque!
                </td>
                <td style={{ color: "#B99E00" }}>Closed</td>
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
                <td>ann000001</td>
                <td>Pepsi Ltd.</td>
                <td>Administrator</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  aut suscipit voluptates tempore corrupti nisi numquam adipisci
                  nam libero cumque!
                </td>
                <td style={{ color: "#B99E00" }}>Closed</td>
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
                <td>ann000001</td>
                <td>Pepsi Ltd.</td>
                <td>Administrator</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  aut suscipit voluptates tempore corrupti nisi numquam adipisci
                  nam libero cumque!
                </td>
                <td style={{ color: "#B99E00" }}>Closed</td>
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
