import React from 'react';
import { Row, Col } from 'reactstrap';
import style from './CartTable.module.css';

export default function CartItem({ img, itemName, option, price }) {
    return (
        <tr className={`${style.tr}`}>
            <td className={`${style.td} ${style.td_check} p-3`}>
                <Row>
                    <Col md={2}>
                        ✅
                    </Col>
                </Row>
            </td>
            <td className={`${style.td} ${style.td_info} p-3`}>
                <Row>
                    <Col md={2}>
                        <img src={img} alt="" className='w-100' />
                    </Col>
                    <Col md={9}>
                        <span className={style.text}>{itemName}</span>
                    </Col>
                    <Col md={1}>
                        <span className={style.text}>X</span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_cnt}>
                <Row>
                    <Col className='text-center'>
                        <span className={`${style.text} mb-3`}>{option}</span><br />
                        <span className={style.button}>옵션/수량 변경</span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_price}>
                <Row>
                    <Col className='text-center'>
                        <span className={`${style.text} mb-2`}>{price}원</span><br />
                        <span className={`${style.button} mt-2`}>바로구매</span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_delivery}>
                <Row>
                    <Col className='text-center'>
                        <span className={style.text}>3,000원</span><br />
                        <span className={style.text}>택배</span>
                    </Col>
                </Row>
            </td>
        </tr>
    );
}
