import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Cookies from 'js-cookie';

export default function AdminLoginForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        adminUid: "",
        adminUpw: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(credentials);

        try {
            const response = await axios.post(`/api/admin/login`, credentials, {});
            setTimeout(() => {
                navigate("/admin");
            }, 200);

            Cookies.set('loggedIn', 'true');
        } catch (error) {
            window.alert('로그인에 실패했습니다.'); setTimeout(() => {
                navigate("/admin_login");
            }, 200);
            console.error(error);
        }
    };

    return (
        <>
            <Container className={`text-center mt-5`}>
                <Row className={`m-5 text-success`}>
                    <h1>관리자 로그인</h1>
                </Row>
                <Row className={`w-50 mx-auto`}>
                    <form onSubmit={handleSubmit}>
                        <Col md={12} className="d-flex justify-content-center mt-2">
                            <input
                                className="form-control"
                                type="text"
                                name="adminUid"
                                placeholder="아이디"
                                value={credentials.adminUid}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col md={12} className="d-flex justify-content-center mt-2">
                            <input
                                className="form-control"
                                type="password"
                                name="adminUpw"
                                placeholder="비밀번호"
                                value={credentials.adminUpw}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col md={12} className="d-flex justify-content-center mt-4">
                            <button className="btn btn-success w-100" type="submit">로그인</button>
                        </Col>
                    </form>
                </Row>
            </Container>
        </>
    )
}
