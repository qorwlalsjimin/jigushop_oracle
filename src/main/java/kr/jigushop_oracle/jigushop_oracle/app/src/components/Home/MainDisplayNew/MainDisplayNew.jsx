import React, { useState,useEffect } from 'react';
import styles from './MainDisplayNew.module.css';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';  

export default function MainDisplayNew() {
  
  const [newItems, setNewItems] = useState([]); 

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/item/items/sale'); 
        setNewItems(response.data); 
        console.log(newItems);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Container className='my-5 py-5'>
        <Row className='mt-5'>
          <Col md={3}>
            <strong className={`${styles.sharp_text}`}># SALE</strong><br />
            <div className='mt-4'>
              <span className={`${styles.desc_text}`}>지구샵만의 꼼꼼한 기준으로 입고된<br /></span>
              <span className={`${styles.desc_text}`}>제로웨이스트 제품을 할인된 가격에 만나보세요!<br /></span>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              {newItems.map((item, index) => {
                let imgArr = item.img.split(',');
                return(
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
                  </Link>
                </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
