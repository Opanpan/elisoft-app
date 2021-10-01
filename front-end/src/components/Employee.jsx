import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Card, Col, Row, Button } from "react-bootstrap";

const Employee = ({ employees, removeEmployee, updateEmployee }) => {
  const [edit, setEdit] = useState({
    id_employee: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateEmployee(edit.id, value);
    setEdit({
      id_employee: null,
      value: "",
    });
  };

  if (edit.id) {
    return <EmployeeForm edit={edit} onSubmit={submitUpdate} />;
  }

  return employees.map((employee, index) => (
    <Col key={index} className="col-auto">
      <Card className="m-3">
        <Card.Body key={employee.id_employee}>{employee.username}</Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Button
                onClick={() =>
                  removeEmployee(employee.id_employee, employee.username)
                }
                variant="danger"
              >
                DELETE
              </Button>
            </Col>
            <Col>
              <Button
                variant="secondary"
                onClick={() => {
                  setEdit({
                    id: employee.id_employee,
                    value: employee.username,
                  });
                }}
              >
                EDIT
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  ));
};

export default Employee;
