import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./LoginRegister.scss";
import Axios from "axios";

export default function Login({ setIsLogin }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    Axios.post("http://localhost:8000/login", data)
      .then((res) => {
        localStorage.setItem("auth", res.data.auth);
        history.push("/dashboard");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container id="loginComponent" fluid>
      <Row className="d-flex justify-content-center">
        <Col className="col-auto p-0">
          <div className="leftContent d-flex justify-content-center align-items-center">
            <div className="contentItem">
              <h1
                style={{
                  fontSize: "50px",
                  color: "white",
                }}
                className="fontBold"
              >
                Selamat Datang!
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
                onClick={() => setIsLogin(false)}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </Col>
        <Col className="col-auto p-0">
          <div className="rightContent d-flex justify-content-center align-items-center">
            <div className="contentItem">
              <h2 className="fontBold" style={{ color: "white" }}>
                Hai, Apa Kabar ?{" "}
              </h2>
              <h5
                className="fontLight"
                style={{ color: "white", marginTop: "10px" }}
              >
                Login Untuk Melanjutkan
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
                      <Button
                        className="customButton registerButton fontBold"
                        bsPrefix="super-btn"
                        type="submit"
                      >
                        LOGIN
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
