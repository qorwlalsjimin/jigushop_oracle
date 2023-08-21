import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function AdminJoinForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        adminUid: "",
        adminUpw: "",
        adminName: ""
    });

    // const [confirmPassword, setConfirmPassword] = useState();
    const [confirmationCode, setConfirmationCode] = useState();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // setConfirmPassword(event.target.confirmPassword);
        setConfirmationCode(event.target.confirmationCode);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        // if (formData.adminUpw === confirmPassword) {
        if (true) {
            try {
                const response = await axios.post(`/api/admin/join`, formData, {});
                setTimeout(() => {
                    window.alert('회원가입 완료!');
                    navigate("/admin_login");
                  }, 200);
            } catch (error) {
                window.alert('다시 시도해주세요.');
                setTimeout(() => {
                    navigate("/admin_join");
                  }, 200);
                console.error(error);
            }
        } else {
            window.alert('비밀번호가 다릅니다.');
        }
    };

    return (
        <>
            <Container className={`text-center mt-5`}>
                <Row className={`m-5 text-success`}>
                    <h1>관리자 회원가입</h1>
                </Row>
                <Row className={`w-50 mx-auto` }>
                    <form onSubmit={handleSubmit}>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">아이디 *</label>
                            <input
                                className="form-control"
                                type="text"
                                name="adminUid"
                                placeholder="아이디를 입력하세요"
                                value={formData.adminUid}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">비밀번호 *</label>
                            <input
                                className="form-control mb-1"
                                type="password"
                                name="adminUpw"
                                placeholder="최소 8자 비밀번호를 만들어주세요"
                                value={formData.adminUpw}
                                onChange={handleInputChange}
                            />
                            {/* <input
                                className="form-control"
                                type="password"
                                name="confirmPassword"
                                placeholder="비밀번호 확인"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            /> */}
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">이름 *</label>
                            <input
                                className="form-control"
                                type="text"
                                name="adminName"
                                placeholder="이름을(를) 입력하세요"
                                value={formData.adminName}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">확인코드 *</label>
                            <input
                                className="form-control"
                                type="text"
                                name="confirmationCode"
                                placeholder="관리자 확인코드를 입력해주세요"
                                value={formData.confirmationCode}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col md={12} className="d-flex justify-content-center mt-4"> 
                            <button className="btn btn-success w-100" type="submit">가입하기</button>
                        </Col>
                    </form>
                </Row>
            </Container>
        </>
    )
}
