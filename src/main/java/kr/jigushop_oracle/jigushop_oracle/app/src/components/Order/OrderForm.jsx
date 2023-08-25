import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import styles from './Order.module.css';

export default function OrderForm() {
    const navigate = useNavigate();

    const onOrder = () => {
        navigate("/mypage");
    }

    return (
        <div className={styles.background_gray}>
            <Container className='pb-5'>
                <Row className='text-center py-5 '>
                    <strong className={styles.order_text}>결제하기</strong>
                </Row>
                <Row>
                    <Col md={6} className={`${styles.background_white} p-3 mb-3`}>
                        <strong className={styles.title_text}>주문 상품 정보</strong>
                        <Row className={` mt-3 p-2`}>
                            <Col md={3}>
                                <img src="https://cdn.imweb.me/thumbnail/20220102/d4477032b8ccf.jpg" alt="" className='w-100'/>
                            </Col>
                            <Col md={9}>
                                <div>
                                    <span className={styles.option_name}>[비건 립밤]</span><br />
                                    <span className={styles.option_detail}>코랄 - 1개</span><br />
                                    <strong>13,500원</strong><br />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={5} className={`${styles.background_white} p-3 mb-3`}>
                        <strong className={styles.title_text}>주문 요약</strong>
                        <Row className='justify-content-between'>
                            <Col>상품 가격</Col>
                            <Col className='text-end'>15,000원</Col>
                        </Row>
                        <Row className='justify-content-between'>
                            <Col>배송비</Col>
                            <Col className='text-end'>+3,000원</Col>
                        </Row>
                        <hr />
                        <Row className='justify-content-between'>
                            <Col>총 주문 금액</Col>
                            <Col className='text-end'><span><strong>18,000원</strong></span></Col>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Col md={6} className={`${styles.background_white} p-3`}>
                        <strong className={styles.title_text}>주문자 정보</strong>
                        <Row className='mt-3'>
                            <Col md={9}>
                                <span>백지민</span><br />
                                <span>01011112222</span><br />
                                <span>baek@naver.com</span>
                            </Col>
                            <Col md={3}  className='text-end'>
                                <span>수정</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={5} className={`${styles.background_white} p-3`}>
                        <div>
                            <input type="checkbox" name="" id="" /> 전체동의 
                        </div>
                        <div className='mt-2'>
                            &nbsp; &nbsp; <strong>ㄴ</strong> <input type="checkbox" name="" id="" /> 구매조건 확인 및 결제진행에 동의
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
