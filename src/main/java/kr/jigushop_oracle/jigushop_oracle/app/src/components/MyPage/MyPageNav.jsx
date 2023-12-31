import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import MyPageOrder from './MyPageOrder';
import MyPageWelcome from './MyPageWelcome';
import MyPageHeart from './MyPageHeart';
import styles from './MyPage.module.css';
import MyPageEdit from './MyPageEdit';
import MyPageDrop from './MyPageDrop';
import { useEffect } from 'react';

export default function MyPageNav() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("order");
    const [isLogin, setIsLogin] = useState(!!Cookies.get('MemberloggedIn'));

    const handleList = (selectedMenu) => {
        setMenu(selectedMenu);
        console.log(selectedMenu)
    }

    useEffect(() => {
        console.log(isLogin)
        if (!isLogin)
            navigate("/login");
    }, [isLogin])

    return (
        <Container className='my-5'>
            <Row className='py-5'>
                <Col md={2}>
                    <ul className={styles.pointer}>
                        <li  onClick={() => handleList("order")}  className={`mb-3`}>주문 조회</li>
                        <li  onClick={() => handleList("heart")}  className={`mb-3`}>위시 리스트</li>
                        <li  onClick={() => handleList("edit")}  className={`mb-3`}>정보 수정</li>
                        <li  onClick={() => handleList("drop")} >회원 탈퇴</li>
                    </ul>
                </Col>
                <Col md={10}>
                    <MyPageWelcome/>
                    {menu=="order" && <MyPageOrder/>}
                    {menu=="heart" && <MyPageHeart/>}
                    {menu=="edit" && <MyPageEdit/>}
                    {menu=="drop" && <MyPageDrop/>}
                </Col>
            </Row>
        </Container>
    );
}

