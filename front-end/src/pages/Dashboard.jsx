import EmployeeList from "../components/EmployeeList";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

export default function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/");
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <EmployeeList />
        </Col>
      </Row>
    </Container>
  );
}
