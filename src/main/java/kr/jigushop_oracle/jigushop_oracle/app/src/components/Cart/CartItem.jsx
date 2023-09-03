import React from 'react';
import { Row, Col, Modal } from 'reactstrap';
import style from './CartTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function CartItem({ id, itemId, img, itemName, option, price }) {

    const [optionArr, setOptionArr] = useState(option.split(','));

    const sumAllNumbersInOptionArr = () => {
        let totalSum = 0;

        optionArr.forEach((option) => {
            const { value } = extractKeyValue(option);
            const numericValue = parseInt(value);

            if (!isNaN(numericValue)) {
                totalSum += numericValue;
            }
        });

        return totalSum;
    };

    const extractQuantity = (input) => {
        const matches = input.match(/\d+/g);
        if (!matches) {
            return 0; // 숫자가 없는 경우 0을 반환
        }

        const sum = matches.reduce((acc, num) => acc + parseInt(num), 0);
        return sum;
    };

    const extractKeyValue = (input) => {
        const [key, value] = input.split(":");
        return { key: key.trim(), value: value.trim() };
    };


    const handleDelete = (itemId) => {
        // 로컬스토리지에서 아이템 목록 가져오기
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // 아이템 삭제를 위해 해당 아이템 찾기
        const updatedCartItems = cartItems.filter(item => item.itemId !== itemId);

        // 업데이트된 목록을 로컬스토리지에 저장
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        window.location.reload();
    }

    // 수량 조절
    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        const name = event.target.name;

        const updatedOptionArr = optionArr.map((option) => {
            if (option.includes(name)) {
                const { key } = extractKeyValue(option);
                return `${key}: ${newQuantity}`;
            }
            return option;
        });

        setOptionArr(updatedOptionArr);
        console.log(optionArr)
    };


    //조절 완료 버튼
    const [isDone, setIsDone] = React.useState(true);

    const onClickButton = () => {
        setIsDone(true);
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    
        const itemIndex = cartData.findIndex(item => item.itemId === itemId);
    
        if (itemIndex !== -1) {
            const updatedItem = { ...cartData[itemIndex] };
            
            // optionArr 값을 업데이트한 후, 객체로 묶어서 option 객체에 반영합니다.
            const updatedOptions = {};
            optionArr.forEach(option => {
                const { key } = extractKeyValue(option);
                const value = parseInt(extractKeyValue(option).value);
                updatedOptions[key] = value;
            });
            
            updatedItem.option = updatedOptions;
    
            cartData[itemIndex] = updatedItem;
    
            localStorage.setItem("cart", JSON.stringify(cartData));
        }
    };
    



    const handleShow = () => {
        setIsDone(false);
    }

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
                                </Row>
                            </div>
                        ))}
                    </Col>
                    <Col md={1}>
                        <span className={`${style.text} ${style.pointer}`}><FontAwesomeIcon icon={faX} onClick={() => handleDelete(itemId)} /></span>
                    </Col>
                </Row>
            </td>
            <td className={style.td && style.td_cnt}>
                <Row>
                    {isDone ?
                        <Col className='text-center'>
                            <span className={`${style.text} mb-3`}>{sumAllNumbersInOptionArr()}</span><br />
                            <span className={style.button} onClick={() => handleShow(id)}>수량 변경</span>
                        </Col>
                        :
                        <Col className='text-center'>
                            {optionArr.map((filteredOption, index) => {
                                const { key, value } = extractKeyValue(filteredOption);

                                return (
                                    <div key={index}>
                                        <Row>
                                            <Col>
                                                <span className={style.option_title}>
                                                    {key}:
                                                    <input
                                                        type="number"
                                                        name={key}
                                                        value={value}
                                                        className='w-25'
                                                        onChange={handleInputChange}
                                                        min="1"
                                                        max="100"
                                                    />
                                                </span>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}
                            <button className={style.button} onClick={onClickButton}>완료</button>
                        </Col>
                    }


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
