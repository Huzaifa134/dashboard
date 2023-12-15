import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   clock
  // clock
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <>
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
                <Form.Label>Current Time :</Form.Label> <br />
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
                  disabled
                />
              </div>
            </div>
            <div>
              <Form.Label>Time In:</Form.Label> <br />
              <input
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Check In</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Example;
