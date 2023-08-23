import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';

export default function MyPageWelcome() {
    const navigate = useNavigate();

    return (
        <Row className={`justify-content-center mx-auto my-5 ${styles.center}`}>
            <Col md={1} className='text-center'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className={`w-100 ${styles.round}`} />
            </Col>
            <Col md={4}>
                <span className={styles.welcome_text}>{Cookies.get("MemberloggedIn")} 님 안녕하세요.</span>
            </Col>
        </Row>
    );
}

