import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import styles from './Order.module.css';

export default function OrderForm() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);
    }, []);

    console.log(cart[0])


    const onOrder = () => {
        navigate("/mypage");
    }

    return (
        <div className={styles.background_gray}>
            <Container className='pb-5 px-5'>
                <Row className='text-center py-5 '>
                    <strong className={styles.order_text}>결제하기</strong>
                </Row>
                <Row className='px-5'>
                    <Col md={6} className={`${styles.background_white} p-3 mb-3`}>
                        <strong className={styles.title_text}>주문 상품 정보</strong>
                        {cart && cart.map((item, index) => (
                            <Row className={` mt-3 p-2`} key={index}>
                                <Col md={3}>
                                    <img src={item.img.split(',')[0]} alt="" className='w-100' />
                                </Col>
                                <Col md={9}>
                                    <span className={styles.option_name}>[{item.itemName}]</span><br />
                                    <span className={styles.option_detail}>{item.option && Object.entries(item.option).map(([key, value]) => `${key} - ${value}개`).join(', ')}</span><br />
                                    <strong className={styles.option_price}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong><br />
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={5} className={`${styles.background_white} p-3 mb-3`}>
                        <strong className={styles.title_text}>주문 요약</strong>
                        <Row className='justify-content-between mt-2'>
                            <Col className={styles.order_price_text}>상품 가격</Col>
                            <Col className={`${styles.order_price_text} text-end`}>15,000원</Col>
                        </Row>
                        <Row className='justify-content-between'>
                            <Col className={styles.order_price_text}>배송비</Col>
                            <Col className={`${styles.order_price_text} text-end`}>+3,000원</Col>
                        </Row>
                        <hr />
                        <Row className='justify-content-between'>
                            <Col>총 주문 금액</Col>
                            <Col className='text-end'><span><strong>18,000원</strong></span></Col>
                        </Row>

                    </Col>
                </Row>

                <Row className='px-5'>
                    <Col md={6} className={`${styles.background_white} p-3`}>
                        <strong className={styles.title_text}>주문자 정보</strong>
                        <Row className='mt-3'>
                            <Col md={9}>
                                <span>백지민</span><br />
                                <span>01011112222</span><br />
                                <span>baek@naver.com</span>
                            </Col>
                            <Col md={3} className='text-end'>
                                <span>수정</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={5} className={`${styles.background_white} p-3`}>
                        <div>
                            <input type="checkbox" checked={true} /> 전체동의
                        </div>
                        <div className='mt-2'>
                            &nbsp; &nbsp; <strong>ㄴ</strong> <input type="checkbox" checked={true} /> 구매조건 확인 및 결제진행에 동의
                        </div>
                        <div className={`${styles.order_button} mt-3 py-2 text-center`} onClick={onOrder}>
                            <strong>결제하기</strong>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
