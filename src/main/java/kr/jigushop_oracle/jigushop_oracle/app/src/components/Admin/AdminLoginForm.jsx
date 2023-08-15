import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminLoginForm() {


    return (
        <>
            <Container className={`text-center mt-5`}>

                <Row className={`m-5 text-success`}>
                    <h1>관리자 로그인</h1>
                </Row>

                <Row className={`w-50 mx-auto` }>
                    <form action="" method="post">
                        <Col md={12} className="d-flex justify-content-center mt-2"> 
                            <input className="form-control" type="text" placeholder="아이디" />
                        </Col>

                        <Col md={12} className="d-flex justify-content-center mt-2"> 
                            <input className="form-control" type="text" placeholder="비밀번호" />
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