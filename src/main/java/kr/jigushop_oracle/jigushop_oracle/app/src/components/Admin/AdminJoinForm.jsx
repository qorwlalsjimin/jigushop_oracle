import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminJoinForm() {


    return (
        <>
            <Container className={`text-center mt-5`}>

                <Row className={`m-5 text-success`}>
                    <h1>관리자 회원가입</h1>
                </Row>

                <Row className={`w-50 mx-auto` }>
                    <form action="" method="post">
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">아이디 *</label>
                            <input className="form-control" type="text" placeholder="아이디를 입력하세요" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">비밀번호 *</label>
                            <input className="form-control mb-1" type="password" placeholder="최소 8자 비밀번호를 만들어주세요" />
                            <input className="form-control" type="password" placeholder="비밀번호 확인" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">이름 *</label>
                            <input className="form-control" type="text" placeholder="이름을(를) 입력하세요" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4"> 
                            <label className="float-start">확인코드 *</label>
                            <input className="form-control" type="text" placeholder="관리자 확인코드를 입력해주세요" />
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