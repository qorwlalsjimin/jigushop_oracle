import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import styles from './Order.module.css';

export default function OrderForm() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(3000);
    const navigate = useNavigate();
    const memberUid = Cookies.get('MemberlogginIn');

    const [dataToSend, setDataToSend] = useState({});

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);
    }, []);
    

    // API 요청을 보내는 함수
    const sendCartData = async () => {
        try {
            const response = await axios.post('/api/order/add', dataToSend);
            console.log('API response:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    useEffect(() => {
        // cart 데이터 변경될 때마다 총 가격 계산
        const total = cart.reduce((total, item) => {
            const optionTotal = sumNumbers(Object.values(item.option || []));
            return total + item.price * optionTotal;
        }, 3000); // 기본 배송비

        setTotalPrice(total);
    }, [cart]);

    useEffect(() => {
        // cart 데이터 변경될 때마다 총 가격 계산
        const total = cart.reduce((total, item) => {
            const optionTotal = sumNumbers(Object.values(item.option || []));
            return total + item.price * optionTotal;
        }, 3000); // 기본 배송비

        setTotalPrice(total);
    }, [cart]);

    function sumNumbers(numbers) {
        const parsedNumbers = numbers.map(number => parseInt(number));
        return parsedNumbers.reduce((sum, number) => sum + number, 0);
    }

    useEffect(() => {
        const orderItems = [];
    
        for (const cartItem of cart) {
            const orderItem = {
                itemId: cartItem.itemId,
                optionCnt: cartItem.option
            };
            orderItems.push(orderItem);
        }

        const formattedOrderItems = orderItems.map(item => {
            const options = Object.keys(item.optionCnt).map(key => `${key}: ${item.optionCnt[key]}`).join(', ');
            return {
                itemId: item.itemId,
                optionCnt: options
            };
        });
        
        setDataToSend((prevData) => ({
            memberUid: Cookies.get('MemberloggedIn'),
            totalPrice: totalPrice,
            orderItems: formattedOrderItems
        }));
    }, [totalPrice, cart]);

    const onOrder = () => {
        console.log(dataToSend);
        sendCartData(); // sendCartData 호출
        // navigate("/mypage");
    }

    return (
        <div className={styles.background_gray}>
            <Container className='pb-5 px-5'>
                <Row className='text-center py-5 '>
                    <strong className={styles.order_text}>결제하기</strong>
                </Row>

                <Row>
                    <Col md={6}>
                        <Col md={12} className={`${styles.background_white} p-3 mb-3`}>
                            <strong className={styles.title_text}>주문 상품 정보</strong>
                            {cart && cart.map((item, index) => {
                                let price = item.price * sumNumbers(Object.entries(item.option).map(([key, value]) => ` ${value}`));
                                return (
                                    <Row className={` mt-3 p-2`} key={index}>
                                        <Col md={3}>
                                            <img src={item.img.split(',')[0]} alt="" className='w-100' />
                                        </Col>
                                        <Col md={9}>
                                            <span className={styles.option_name}>[{item.itemName}]</span><br />
                                            <span className={styles.option_detail}>{item.option && Object.entries(item.option).map(([key, value]) => `${key} - ${value}개`).join(', ')}</span><br />
                                            <strong className={styles.option_price}>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong><br />
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Col>
                        <Col md={12} className={`${styles.background_white} p-3`}>
                            <strong className={styles.title_text}>주문자 정보</strong>
                            <Row className='mt-3'>
                                <Col md={9}>
                                    <span className={styles.option_name}>백지민</span><br />
                                    <span className={styles.option_name}>01011112222</span><br />
                                    <span className={styles.option_name}>baek@naver.com</span>
                                </Col>
                                <Col md={3} className='text-end'>
                                    <span className={`${styles.order_button} px-2 py-1`}>수정</span>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col md={6}>
                        <Col md={12} className={`${styles.background_white} p-3 mb-3`}>
                            <strong className={styles.title_text}>주문 요약</strong>
                            <Row className='justify-content-between mt-2'>
                                <Col className={styles.order_price_text}>상품 가격</Col>
                                <Col className={`${styles.order_price_text} text-end`}>{String(totalPrice-3000).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Col>
                            </Row>
                            <Row className='justify-content-between'>
                                <Col className={styles.order_price_text}>배송비</Col>
                                <Col className={`${styles.order_price_text} text-end`}>+3,000원</Col>
                            </Row>
                            <hr />
                            <Row className='justify-content-between'>
                                <Col className={styles.option_name}>총 주문 금액</Col>
                                <Col className='text-end'><span><strong>{String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong></span></Col>
                            </Row>

                        </Col>
                        <Col md={12} className={`${styles.background_white} p-3`}>
                            <div>
                                <input type="checkbox" checked={true} /> <span className={styles.option_name}>전체동의</span> 
                            </div>
                            <div className='mt-2'>
                                &nbsp; &nbsp; <strong>ㄴ</strong> <input type="checkbox" checked={true} /> <span className={styles.option_name}>구매조건 확인 및 결제진행에 동의</span> 
                            </div>
                            <div className={`${styles.order_button} mt-3 py-2 text-center`} onClick={onOrder}>
                                <strong>결제하기</strong>
                            </div>
                        </Col>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}
