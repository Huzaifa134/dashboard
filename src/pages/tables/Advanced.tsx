import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// components
import Table from "../../components/Table";

//dummy data
import { records as data } from "./data";

import TableBtn from "../../pages/tables/TableBtn";
const columns = [
  {
    Header: "Date",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Person Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Time In",
    accessor: "phone",
    sort: false,
  },
  {
    Header: "Time Out",
    accessor: "age",
    sort: true,
  },
  {
    Header: "Tidspunkt",
    accessor: "company",
    sort: false,
  },
  {
    Header: "Is Active",
    accessor: "time",
    sort: false,
  },
  {
    Header: "Save/Discard",
    accessor: "save",
    sort: false,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const Advanced = () => {
  return (
    <>
      {/* <PageTitle
        breadCrumbItems={[
          { label: "Tables", path: "/features/tables/advanced" },
          {
            label: "Advanced Tables",
            path: "/features/tables/advanced",
            active: true,
          },
        ]}
        title={"Advanced Tables"}
      /> */}

      {/* <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Pagination &amp; Sort</h4>
                            <p className="text-muted font-14 mb-4">
                                A simple example of table with pagination and column sorting
                            </p>

                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1 style={{ marginBottom: "60px" }}>Today</h1>
              <TableBtn />

              <div
                style={{
                  display: "flex",
                  gap: "100px",
                  marginBottom: "50px",
                  flexWrap: "wrap",
                  marginTop: "100px",
                }}
              >
                <div>
                  <Form.Label htmlFor="date">Select Date:</Form.Label> <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    style={{
                      padding: "7px",
                      width: "15rem",
                      border: "1px solid #CED4DA",
                      color: "#6C757D",
                    }}
                  />
                </div>
                <div>
                  <Form.Label>Select Persons Name:</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "15rem" }}
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* coppied */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1 style={{ marginBottom: "60px" }}>Other Day</h1>
              <TableBtn />
              <div
                style={{
                  display: "flex",
                  gap: "100px",
                  marginBottom: "50px",
                  flexWrap: "wrap",
                  marginTop: "100px",
                }}
              >
                <div>
                  <Form.Label htmlFor="date">Select Date:</Form.Label> <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    style={{
                      padding: "7px",
                      width: "15rem",
                      border: "1px solid #CED4DA",
                      color: "#6C757D",
                    }}
                  />
                </div>
                <div>
                  <Form.Label>Select Persons Name:</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "15rem" }}
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* coppiend end  */}
      {/* <Row>
        <Col>
          <Card>
            <Card.Body>
              modal 
              <div className="Modal">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    // width: "30%",
                    float: "right",
                  }}
                >
                  Add Times
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Check In</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <div>
                        <Form.Label>Select Persons Name:</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          style={{ width: "300px" }}
                        >
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div>
                        <Form.Label>Time In:</Form.Label> <br />
                        <input
                          value={currentDateTime.toLocaleTimeString("en-US", {
                            hour12: false,
                          })}
                          type="text"
                          name="time"
                          id="time"
                          style={{
                            width: "80px",
                            height: "35px",
                            border: "1px solid #CED4DA",
                            color: "#6C757D",
                          }}
                        />
                      </div>
                    </div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Comments</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Check In</Button>
                  </Modal.Footer>
                </Modal>
              </div>

              modal ends 
              <div
                style={{
                  display: "flex",
                  gap: "100px",
                  marginBottom: "50px",
                  flexWrap: "wrap",
                  marginTop: "40px",
                }}
              >
                <div>
                  <Form.Label htmlFor="date">Select Date:</Form.Label> <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    style={{
                      padding: "7px",
                      width: "15rem",
                      border: "1px solid #CED4DA",
                      color: "#6C757D",
                    }}
                  />
                </div>
                <div>
                  <Form.Label>Select Persons Name:</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "15rem" }}
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Expand Row</h4>
                            <p className="text-muted font-14 mb-4">Expand row to see more additional details</p>

                            <Table
                                columns={columns}
                                data={expandableRecords}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isExpandable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
    </>
  );
};

export default Advanced;
