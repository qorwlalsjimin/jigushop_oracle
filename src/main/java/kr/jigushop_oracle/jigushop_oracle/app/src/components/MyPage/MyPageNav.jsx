import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import MyPageOrder from './MyPageOrder';
import MyPageWelcome from './MyPageWelcome';

export default function MyPageNav() {
    const navigate = useNavigate();

    return (
        <Container className='my-5'>
            <Row className='py-5'>
                <Col md={2}>
                    <ul>
                        <li>주문 조회</li>
                        <li>위시 리스트</li>
                        <li>정보 수정</li>
                        <li>회원 탈퇴</li>
                    </ul>
                </Col>
                <Col md={10}>
                    <MyPageWelcome/>
                    <MyPageOrder/>
                </Col>
            </Row>
        </Container>
    );
}

