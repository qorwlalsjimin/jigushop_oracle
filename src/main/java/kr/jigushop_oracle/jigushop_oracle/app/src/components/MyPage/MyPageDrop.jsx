import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';
import { useEffect } from 'react';

export default function MyPageDrop() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(!!Cookies.get('MemberloggedIn'));

    const handleDrop = () => {
        // API 요청
        axios.delete('api/member/drop', {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
        .then(response => {
            Cookies.remove('MemberLoggedIn');

            setTimeout(() => {
                navigate("/");
            }, 200);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }


    return (
        <Row className='py-5'>
            <Col className={`py-5 text-ceneter ${styles.order_box}`}>
                <div className='text-center'>
                    <strong className={`${styles.menu_title} mb-2 me-2`}>회원 탈퇴</strong>
                    <p className='mt-2'>가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지 않습니다. <br />
                        탈퇴후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지 않으며, <br />
                        사용 및 다운로드했던 쿠폰도 사용 불가능합니다.<br />
                        회원 탈퇴를 진행하시겠습니까?
                    </p>
                </div>
                <div className='text-center'>
                    <span className={`${styles.drop_button_left} me-2`}>취소</span>
                    <span onClick={handleDrop} className={`${styles.drop_button}`}>탈퇴하기</span>
                </div>
            </Col>
        </Row>
    );
}

