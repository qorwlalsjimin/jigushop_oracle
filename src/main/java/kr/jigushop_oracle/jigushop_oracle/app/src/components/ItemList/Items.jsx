import React from 'react';
import { Container, Table, Row, Col } from 'reactstrap';
import styles from './Items.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartSVG } from "../../svgfiles/Heart.svg";
import { ReactComponent as HeartEmptySVG } from "../../svgfiles/HeartEmpty.svg";
import { ReactComponent as ReviewSVG } from "../../svgfiles/Review.svg";
import axios from 'axios';

export default function Items() {
    const [selectedCategory, setSelectedCategory] = useState(101);
    const [items, setItems] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // 카테고리 ID에 따른 API 엔드포인트 설정
        const categoryApiEndpoint = `api/item/items/${selectedCategory}`;

        // API 요청
        axios.get(categoryApiEndpoint)
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [selectedCategory]);




    //이미지 호버 이벤트
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            {/* 카테고리 선택 테이블 */}
            <Container>
                <Table className='table table-bordered text-center mb-5'>
                    <tbody>
                        <tr>
                            <td className={`${styles.td} ${selectedCategory === 101 ? styles.active : ''}`} onClick={() => handleCategoryClick(101)}>욕실</td>
                            <td className={`${styles.td} ${selectedCategory === 102 ? styles.active : ''}`} onClick={() => handleCategoryClick(102)}>주방</td>
                            <td className={`${styles.td} ${selectedCategory === 103 ? styles.active : ''}`} onClick={() => handleCategoryClick(103)}>생활</td>
                            <td className={`${styles.td} ${selectedCategory === 104 ? styles.active : ''}`} onClick={() => handleCategoryClick(104)}>음료용품</td>
                            <td className={`${styles.td} ${selectedCategory === 105 ? styles.active : ''}`} onClick={() => handleCategoryClick(105)}>화장품</td>
                        </tr>
                    </tbody>
                </Table>
                <hr className={`${styles.hr} mb-5`} />
            </Container>



            {/* 상품 목록 */}
            <Container className='mb-5'>
                <Row className='mb-5'>
                    <Col className='mb-5'>
                        <Row>
                            {items.map((item, index) => {
                                let imgArr = item.img.split(',');
                                return (
                                    <Col md={3} className='mb-5' key={item.itemId}>
                                        <Link to={`/item/${item.itemId}`} className={`text-decoration-none`}>
                                            <img
                                                src={hoveredIndex === index ? imgArr[1] : imgArr[0]}
                                                alt=""
                                                className={`w-100 mb-3`}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                            />
                                            <span className={`${styles.title_text}`}>{item.itemName}</span><br />
                                            <span className={styles.price_text}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span><br />
                                            <div className='mt-1'>
                                                {item.sale == "1" && <span className={`${styles.sale_text} me-1`}>SALE</span>}
                                                {item.best == "1" && <span className={`${styles.best_text}`}>BEST</span>}
                                            </div>
                                        </Link>
                                        <div className='mt-2 d-flex'>
                                            <div className={`me-2  ${styles.pointer}`}>
                                                <ReviewSVG /> <span className={styles.cnt_text}>0</span>
                                            </div>

                                            <div className={styles.pointer}>
                                                <HeartEmptySVG /> <span className={styles.cnt_text}>0</span>
                                            </div>
                                        </div>
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

