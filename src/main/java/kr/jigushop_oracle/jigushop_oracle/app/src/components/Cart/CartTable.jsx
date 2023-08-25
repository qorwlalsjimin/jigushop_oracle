import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import style from './CartTable.module.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartTable() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);
    }, []);

    console.log(cart)

    return (
        <Container>
            <Row>
                <Col md={12} className='mb-4'>
                    <span className={`${style.cart_title} me-3`}>장바구니</span>
                    <span className={`${style.cart_count} rounded px-2`}>1</span>
                </Col>
                <Col md={12}>
                    <table className={style.table}>
                        <thead>
                            <tr className='p-2'>
                                <th className={`${style.th} text-center p-3`}>✅</th>
                                <th className={`${style.th} ps-3`}>상품 정보</th>
                                <th className={`${style.th} text-center`}>수량</th>
                                <th className={`${style.th} text-center`}>주문금액</th>
                                <th className={`${style.th} text-center`}>배송 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && Object.entries(cart).map((item, index) => (
                                <CartItem
                                    key={index}
                                    img={item.img}
                                    itemName={item.itemName}
                                    option={item.option && Object.entries(item.option).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                    price={item.price}
                                />
                            ))}
                        </tbody>
                    </table>
                </Col>

                {/* 삭제 버튼 */}
                <Col className='mt-4'>
                    <button className={`${style.button} me-2`}>선택상품 삭제</button>
                    <button className={`${style.button}`}>품절상품 삭제</button>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5'>
                    <button className={`${style.order_button} mb-3`}>주문하기</button><br />
                    <Link to="/" className={style.keep_text}>계속 쇼핑하기</Link>
                </Col>
            </Row>
        </Container>
    );
}
