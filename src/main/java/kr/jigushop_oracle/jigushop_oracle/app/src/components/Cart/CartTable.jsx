import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'reactstrap';
import style from './CartTable.module.css';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartTable() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);
    }, []);

    // 주문하기 버튼
    const onOrder = () => {
        navigate("/order");
    }

    // 전체 삭제 버튼
    const onDelete = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Container>
            <Row>
                <Col md={12} className='mb-4'>
                    <span className={`${style.cart_title} me-3`}>장바구니</span>
                    <span className={`${style.cart_count} rounded px-2`}>{cart.length}</span>
                </Col>
                <Col md={12}>
                    <table className={style.table}>
                        <thead>
                            <tr className='p-2'>
                                <th className={`${style.th} text-center p-3`}><input type="checkbox" checked={true} /></th>
                                <th className={`${style.th} ps-3`}>상품 정보</th>
                                <th className={`${style.th} text-center`}>수량</th>
                                <th className={`${style.th} text-center`}>주문금액</th>
                                <th className={`${style.th} text-center`}>배송 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map((item, index) => (
                                <CartItem
                                    key={index}
                                    itemId={item.itemId}
                                    id={index}
                                    img={item.img.split(',')[0]}
                                    itemName={item.itemName}
                                    option={item.option && Object.entries(item.option).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                    price={item.price}
                                />
                            ))}
                        </tbody>
                    </table>
                </Col>

                {cart.length == 0 &&
                    <Container>
                        <Row>
                            <Col className='text-center my-5'>
                                <span><h2>장바구니가 비어있습니다</h2></span>
                            </Col>
                        </Row>
                    </Container>
                }

                {/* 삭제 버튼 */}
                <Col className='mt-4'>
                    <button className={`${style.button} me-2`} onClick={onDelete}>전체상품 삭제</button>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5'>
                    <button className={`${style.order_button} mb-3`} onClick={onOrder}>주문하기</button><br />
                    <Link to="/" className={style.keep_text}>계속 쇼핑하기</Link>
                </Col>
            </Row>

        </Container>
    );
}
