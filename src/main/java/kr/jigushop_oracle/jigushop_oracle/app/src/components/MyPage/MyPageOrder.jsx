import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';

export default function MyPageOrder() {
    const navigate = useNavigate();

    return (
        <Row className='py-5'>
            <strong className={`${styles.order_title} mb-1`}>주문 조회</strong>
            <Row className='justify-content-between'>
                <Col md={3} >
                    <span className={`${styles.order_number_title}`}>주문번호 </span> <span className={`${styles.order_number} ms-2`}>{202307224224463}</span>
                </Col>
                <Col md={3} >
                    <span className={`${styles.order_date} float-end`}>주문일자 {"2023-07-22"}</span>
                </Col>
            </Row>

            <Col md={12} className={`mt-3`}>
                <Row className={`${styles.center}`}>
                    <Col md={2}><img src="https://cdn.imweb.me/thumbnail/20221029/32d73015877b5.jpg" className='w-50 ' alt="" /></Col>
                    <Col md={4}>
                        <p>미니 에코백</p>
                        <p>화이트</p>
                        <p>8,900원 / 1개</p>
                    </Col>
                    <Col md={4}>
                        취소완료
                    </Col>
                    <Col md={2}>
                        취소상세
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

