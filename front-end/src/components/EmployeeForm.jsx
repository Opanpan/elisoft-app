import React, { useState, useEffect, useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

export default function ClientForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id_employee: Math.floor(Math.random() * 10000),
      username: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Row className="d-flex justify-content-center">
            <Col
              className="col-auto d-flex justify-content-center"
              style={{ backgroundColor: "red" }}
            >
              <Form.Control
                placeholder="Update Employee Name..."
                value={input}
                onChange={handleChange}
                name="username"
                ref={inputRef}
              />
              <Button className="ms-3" variant="primary" onClick={handleSubmit}>
                Update
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col className="col-auto">
              <Form.Control
                placeholder="Add Employee Name..."
                value={input}
                onChange={handleChange}
                name="username"
                ref={inputRef}
              />
            </Col>
            <Col>
              <Button variant="primary" onClick={handleSubmit}>
                Add
              </Button>
            </Col>
          </Row>
        </>
      )}
    </form>
  );
}
