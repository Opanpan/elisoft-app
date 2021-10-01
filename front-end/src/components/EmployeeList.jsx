import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import Employee from "./Employee";
import Axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TodoList() {
  const [employees, setEmployees] = useState([]);

  const history = useHistory();

  // HANDLE LOGOUT
  const logout = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };

  // GET DATA FROM DATABASE
  useEffect(() => {
    Axios.get("http://localhost:8000/dashboard")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // HANDLE ADD EMPLOYEE
  const addEmployee = (employee) => {
    if (!employee.username || /^\s*$/.test(employee.username)) {
      return;
    }

    Axios.post("http://localhost:8000/dashboard", employee);

    const newEmployees = [employee, ...employees];
    setEmployees(newEmployees);
  };

  // HANDLE UPDATE EMPLOYEE
  const updateEmployee = (id_employee, newValue) => {
    if (!newValue.username || /^\s*$/.test(newValue.username)) {
      return;
    }

    const employee = { id_employee, username: newValue.username };

    Axios.post("http://localhost:8000/dashboard/update", employee);

    setEmployees((prev) =>
      prev.map((item) => (item.id_employee === id_employee ? newValue : item))
    );
    window.location.reload();
  };

  // HANDLE REMOVE EMPLOYEE
  const removeEmployee = (id_employee, username) => {
    const data = {
      id_employee,
      username,
    };

    Axios.post("http://localhost:8000/dashboard/delete", data).then((data) => {
      const removedEmployee = [...employees].filter(
        (employee) => employee.id_employee !== data.id_employee
      );
      setEmployees(removedEmployee);
      window.location.reload();
    });
  };
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Button onClick={logout} variant="danger">
            LOGOUT
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 style={{ color: "white" }} className="fontBold">
            LET'S ADD NEW EMPLOYEE
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <EmployeeForm onSubmit={addEmployee} />
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Employee
            employees={employees}
            updateEmployee={updateEmployee}
            removeEmployee={removeEmployee}
          />
        </Row>
      </Container>
    </Container>
  );
}

export default TodoList;
