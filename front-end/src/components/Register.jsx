import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Axios from "axios";

export default function Register({ setIsLogin }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    Axios.post("http://localhost:8000/register", data)
      .then((res) => {
        setValue("email", "");
        setValue("password", "");
        setValue("confirmPassword", "");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col className="col-auto p-0">
          <div className="leftContent d-flex justify-content-center align-items-center">
            <div className="contentItem">
              <h2 className="fontBold" style={{ color: "white" }}>
                Selamat Datang !
              </h2>
              <h5
                className="fontLight"
                style={{ color: "white", marginTop: "10px" }}
              >
                Ayo buat akunmu sendiri
              </h5>
              <Container fluid style={{ marginTop: "50px" }}>
                <Row>
                  <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="formBox">
                        <Form.Control
                          id="username"
                          type="email"
                          placeholder="Username"
                          className="formInput"
                          {...register("email", {
                            required: true,
                          })}
                        />
                        {errors.email?.type === "required" && (
                          <p>username berupa alamat email aktif</p>
                        )}
                      </Form.Group>
                      <Form.Group className="formBox">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="formInput"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                        {errors.password?.type === "required" && (
                          <p>Password Tidak Boleh Kosong</p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p>Password harus terdiri dari 6 karakter </p>
                        )}
                      </Form.Group>
                      <Form.Group className="formBox">
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          className="formInput"
                          {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                              value === password.current || "Do not Match",
                          })}
                        />
                        {errors.confirmPassword?.type === "required" && (
                          <p>Password Tidak Boleh Kosong</p>
                        )}
                        {errors.confirmPassword?.type === "validate" && (
                          <p>Konfirmasi Password dari Kolom Sebelumnya</p>
                        )}
                      </Form.Group>
                      <Button
                        className="customButton registerButton fontBold"
                        bsPrefix="super-btn"
                        type="submit"
                      >
                        REGISTER
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
        <Col className="col-auto p-0">
          <div className="rightContent d-flex justify-content-center align-items-center">
            <div className="contentItem">
              <h1
                style={{
                  fontSize: "50px",
                  color: "white",
                }}
                className="fontBold"
              >
                Hai, Apa Kabar?
              </h1>
              <h3
                style={{ color: "white", marginTop: "10px" }}
                className="fontLight"
              >
                Ayo buat akunmu sendiri
              </h3>
              <Button
                className="customButton loginButton fontBold"
                bsPrefix="super-btn"
                type="submit"
                onClick={() => setIsLogin(true)}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
