import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import style from './CartTable.module.css';

export default function CartTable() {

    return (
        <Container>
            <Row>
                <Col md={12} className='mb-4'>
                    <span className={`${style.cart_title} me-3`}>장바구니</span>
                    <span className={`${style.cart_count} rounded px-2`}>1</span>
                </Col>
                <Col md={12}>
                    <table className='table'>
                        <tr>
                            <th scope="col">상품 정보</th>
                            <th>수량</th>
                            <th>주문금액</th>
                            <th>배송 정보</th>
                        </tr>
                        <tr>
                            <td>
                                <Row>
                                    <Col md={2}>
                                        <img src="https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg" alt="" className='w-50' />
                                    </Col>
                                    <Col md={9}>
                                        <span>[지구샵] 마일드고체치약 (저불소자몽향) 150정입</span>
                                    </Col>
                                    <Col md={1}>
                                        <span>X</span>
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col>
                                        <span>1</span>
                                        <span>옵션/수량 변경</span>
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col>
                                        <span>5360원</span>
                                        <span>바로구매</span>
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col>
                                        <span>3,000원</span>
                                        <span>택배</span>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    </table>
                </Col>

                {/* 삭제 버튼 */}
                <Col>
                    <button>선택상품 삭제</button>
                    <button>품절상품 삭제</button>
                </Col>
            </Row>
        </Container>
    );
}