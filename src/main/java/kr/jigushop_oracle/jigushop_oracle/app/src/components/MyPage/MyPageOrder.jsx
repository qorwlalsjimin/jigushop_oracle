import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';

export default function MyPageOrder() {
    const [orderItemsMap, setOrderItemsMap] = useState({}); // 객체를 사용하여 주문번호별 아이템 그룹화

    useEffect(() => {
        axios.get(`/api/order/items`, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
            .then(response => {
                // 주문번호별로 아이템들을 그룹화
                console.log("***", response.data)
                const groupedItems = {};
                response.data.forEach(item => {
                    const orderId = item.orderId;
                    if (!groupedItems[orderId]) {
                        groupedItems[orderId] = [];
                    }
                    groupedItems[orderId].push(item);
                });
                setOrderItemsMap(groupedItems);
                console.log(groupedItems)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Row className='py-5'>
            <strong className={`${styles.menu_title} mb-1`}>주문 조회</strong>

            {/* 주문한 상품들 */}
            {Object.entries(orderItemsMap).map(([orderId, items]) => {
                let timestamp, totalPrice;
                for(let i = 0; i<items.length; i++){
                    if(items[i].orderId == orderId) {
                        timestamp = items[i].orderTimestamp;
                        totalPrice = items[i].totalPrice;                                           
                    }
                }
                return (
                    <div key={orderId}>
                        <Row className='justify-content-between mt-4'>
                            <Col md={3} >
                                <span className={`${styles.order_number_title}`}>주문번호 </span> <span className={`${styles.order_number} ms-2`}>{orderId}</span>
                            </Col>
                            <Col md={3} >
                                <span className={`${styles.order_date} float-end`}>주문일자 {timestamp.substr(0, 10)}</span>
                            </Col>
                        </Row>
                        {items && items.map((item, index) => {
                            return (
                                <Col md={12} className={`mt-3 p-4 ${styles.order_box}`}>
                                    <Row className={`${styles.center}`}>
                                        <Col md={1}><img src={item.img.split(',')[0]} style={{ width: "80px" }} alt="" /></Col>
                                        <Col md={5}>
                                            <span className={`${styles.item_title}`}>{item.itemName}</span><br />
                                            <span className={`${styles.item_option}`}>{item.optionCnt}</span><br />
                                            <span className={`${styles.item_price}`}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span><br />
                                        </Col>
                                        <Col md={4}>
                                            <span className={styles.order_status}>주문완료</span>
                                        </Col>
                                        <Col md={2} >
                                            <span className={`float-end ${styles.info_button}`}>상세정보</span>
                                        </Col>
                                    </Row>
                                </Col>)
                        })}
                        <Row md={12} className='float-end mb-5 pt-1'>
                            <span>총 결제 금액: {String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        </Row>
                    </div>
                );
            })}

        </Row>
    );
}
