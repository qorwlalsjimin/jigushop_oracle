import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';

export default function MyPageOrder() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`/api/order/mypage`, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
        .then(response => {
            setItems(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <Row className='py-5'>
            <strong className={`${styles.menu_title} mb-1`}>주문 조회</strong>
            <Row className='justify-content-between'>
                <Col md={3} >
                    <span className={`${styles.order_number_title}`}>주문번호 </span> <span className={`${styles.order_number} ms-2`}>{202307224224463}</span>
                </Col>
                <Col md={3} >
                    <span className={`${styles.order_date} float-end`}>주문일자 {"2023-07-22"}</span>
                </Col>
            </Row>

            {/* 주문한 상품들 */}
            <Col md={12} className={`mt-3 p-4 ${styles.order_box}`}>
                <Row className={`${styles.center}`}>
                    <Col md={1}><img src="https://cdn.imweb.me/thumbnail/20221029/32d73015877b5.jpg" style={{width: "80px"}} alt="" /></Col>
                    <Col md={5}>
                        <span className={`${styles.item_title}`}>{`[${"에코백"}`}</span><br />
                        <span className={`${styles.item_option}`}>화이트</span><br />
                        <span className={`${styles.item_price}`}>8,900원 / 1개</span><br />
                    </Col>
                    <Col md={4}>
                        <span className={styles.order_status}>취소완료</span>
                    </Col>
                    <Col md={2} >
                        <span className={`float-end ${styles.info_button}`}>상세정보</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

