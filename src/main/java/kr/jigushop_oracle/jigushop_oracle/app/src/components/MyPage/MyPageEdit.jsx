import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';
import { useEffect } from 'react';

export default function MyPageEdit() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(!!Cookies.get('MemberloggedIn'));

    useEffect(() => {
        /* 상품 목록 불러오기 */
        // 카테고리 ID에 따른 API 엔드포인트 설정
        const endpoint = `api/heart/items`;

        // API 요청
        axios.get(endpoint, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
            .then(response => {
                setItems(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);


    return (
        <Row className='py-5'>
            <Col>
                <strong className={`${styles.menu_title} mb-1 me-2`}>정보 수정</strong>
            </Col>

            {/* 수정 폼 */}
            <Col md={12} className={`mt-3 p-4`}>
                에혀... 귀찮...
            </Col>
        </Row>
    );
}

