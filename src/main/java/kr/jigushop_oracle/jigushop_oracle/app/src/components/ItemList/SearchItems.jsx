import React from 'react';
import { Container, Table, Row, Col } from 'reactstrap';
import styles from './SearchItems.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartSVG } from "../../svgfiles/Heart.svg";
import { ReactComponent as HeartEmptySVG } from "../../svgfiles/HeartEmpty.svg";
import { ReactComponent as ReviewSVG } from "../../svgfiles/Review.svg";
import axios from 'axios';

export default function SearchItems({ keyword }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!!keyword) { // keyword가 있을 때
            const fetchSearchResults = async () => {
                try {
                    const response = await axios.get(`/api/item/search?keyword=${keyword}`);
                    setItems(response.data); // 받아온 데이터로 bestItems 
                } catch (error) {
                    console.error(error);
                }
            };

            fetchSearchResults();
        }
    }, [keyword]);

    return (
        <>
            {/* 검색어 */}
            <Container>
                <Row className='my-5'>
                    <Col className={`text-center`}>
                        <span className={`${styles.keyword_text}`}>"{keyword}"</span>
                    </Col>
                </Row>
                <hr className={styles.hr} />
                <span className={`${styles.result_text}`}>{items.length}개의 검색 결과</span>
            </Container>



            {/* 상품 목록 */}
            <Container className='mt-4 mb-5'>
                <Row className='mb-5'>
                    <Col className='mb-5'>
                        <Row>
                            {items.map((item, index) => {
                                let imgArr = item.img.split(',');
                                return (
                                    <Col md={12} className='mb-5' key={item.itemId}>
                                        <Link to={`/item/${item.itemId}`} className={`text-decoration-none d-flex`}>
                                            <Col md={2}>
                                                <img
                                                    src={imgArr[0]}
                                                    alt=""
                                                    className={`w-75 mb-3`}
                                                />
                                            </Col>
                                            <Col md={10}>
                                                <div>
                                                    <span className={`${styles.category_text}`}>{
                                                        item.categoryId === 101 ? '욕실' :
                                                        item.categoryId === 102 ? '주방' :
                                                        item.categoryId === 103 ? '생활' :
                                                        item.categoryId === 104 ? '음료용품' :
                                                        item.categoryId === 105 ? '화장품' : ''}</span><br />
                                                    <span className={`${styles.title_text}`}>{item.itemName}</span><br />
                                                    <span className={`${styles.desc_text}`}>{item.itemDesc}</span><br />
                                                    <span className={styles.price_text}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span><br />
                                                </div>
                                            </Col>


                                        </Link>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

