import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';
export default function MyPageOrder() {
    const navigate = useNavigate();
    const [orderGroups, setOrderGroups] = useState([]); // 그룹화된 주문 정보

    useEffect(() => {
        axios.get(`/api/order/items`, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
        .then(response => {
            const orderItems = response.data;

            // 주문 아이템을 order_id를 기준으로 그룹화
            const groupedOrders = groupByOrderId(orderItems);
            console.log(groupedOrders)
            setOrderGroups(groupedOrders);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    // 주문 아이템을 order_id를 기준으로 그룹화하는 함수
    const groupByOrderId = (orderItems) => {
        const groupedOrders = {};

        orderItems.forEach(item => {
            if (!groupedOrders[item.orderId]) {
                groupedOrders[item.orderId] = [];
            }
            groupedOrders[item.orderId].push(item);
        });

        return groupedOrders;
    };

    return (
        <Row className='py-5'>
            <strong className={`${styles.menu_title} mb-1`}>주문 조회</strong>
            {Object.keys(orderGroups).map(orderId => (
                <div key={orderId}>
                    {/* 주문 정보 헤더 */}
                    <Row className='justify-content-between mt-4'>
                        <Col md={3} >
                            <span className={`${styles.order_number_title}`}>주문번호 </span>
                            <span className={`${styles.order_number} ms-2`}>{orderId}</span>
                        </Col>
                        <Col md={3} >
                            <span className={`${styles.order_date} float-end`}>주문일자 {"2023-08-28"}</span>
                        </Col>
                    </Row>
                    {/* 주문한 상품들 */}
                    {orderGroups[orderId].map((item, index) => (
                        <Col key={index} md={12} className={`mt-3 p-4 ${styles.order_box}`}>
                            {console.log(item)}
                            <Row className={`${styles.center}`}>
                                <Col md={1}><img src={item.img.split(',')[0]} style={{ width: "80px" }} alt="" /></Col>
                                <Col md={5}>
                                    <span className={`${styles.item_title}`}>{item.itemName}</span><br />
                                    <span className={`${styles.item_option}`}>{item.optionCnt}</span><br />
                                    {/* <span className={`${styles.item_price}`}>8,900원 / 1개</span><br /> */}
                                </Col>
                                <Col md={4}>
                                    <span className={styles.order_status}>주문완료</span>
                                </Col>
                                <Col md={2} >
                                    <span className={`float-end ${styles.info_button}`}>상세정보</span>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </div>
            ))}
        </Row>
    );
    
}
