import React from 'react';
import { Row, Col } from 'reactstrap';
import style from './CartTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function CartItem({ img, itemName, option, price }) {

    const extractQuantity = (input) => {
        const matches = input.match(/\d+/g);
        if (!matches) {
            return 0; // 숫자가 없는 경우 0을 반환
        }

        const sum = matches.reduce((acc, num) => acc + parseInt(num), 0);
        return sum;
    };

    let optionArr = option.split(',');

    return (
        <tr className={`${style.tr}`}>
            <td className={`${style.td} ${style.td_check} p-3`}>
                <Row>
                    <Col md={2}>
                        <input type="checkbox" checked={true} />
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
                        {optionArr.filter(option => !option.includes("수량")).map((filteredOption, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>
                                        <span className={style.option_title}>{filteredOption}개</span>
                                    </Col>
                                    <Col>
                                        <span className={style.option_title}>
                                            <FontAwesomeIcon icon={faX} />
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Col>
                    <Col md={1}>
                        <span className={style.text}><FontAwesomeIcon icon={faX} /></span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_cnt}>
                <Row>
                    <Col className='text-center'>
                        <span className={`${style.text} mb-3`}>{extractQuantity(option)}</span><br />
                        <span className={style.button}>옵션/수량 변경</span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_price}>
                <Row>
                    <Col className='text-center'>
                        <span className={`${style.text} mb-2`}>{String(price * extractQuantity(option)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span><br />
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
