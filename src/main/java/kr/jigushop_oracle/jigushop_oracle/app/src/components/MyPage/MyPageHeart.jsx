import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';
import { useEffect } from 'react';

export default function MyPageHeart() {
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
                <strong className={`${styles.menu_title} mb-1 me-2`}>위시 리스트</strong> 
                <span className={`${styles.heart_count} rounded px-2`}>{items.length}</span>
            </Col>

            {/* 즐겨찾기한 상품들 */}
            <Col md={12} className={`mt-3 p-4`}>
                <Row>
                    {items.map((item, index) => {
                        let imgArr = String(item.img).split(',');
                        return (
                            <Col md={3} className='mb-5' key={item.itemId}>
                                <Link to={`/item/${item.itemId}`} className={`text-decoration-none`}>
                                    <img
                                        src={imgArr[0]}
                                        alt=""
                                        className={`w-100 mb-3`}
                                    />
                                    <span className={`${styles.title_text}`}>{item.itemName}</span><br />
                                    <span className={styles.price_text}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span><br />
                                    <div className='mt-1'>
                                        {item.sale == "1" && <span className={`${styles.sale_text} me-1`}>SALE</span>}
                                        {item.best == "1" && <span className={`${styles.best_text}`}>BEST</span>}
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    );
}

