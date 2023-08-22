import React, { useState,useEffect  } from 'react';
import styles from './MainDisplayBest.module.css';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';  

export default function MainDisplayBest() {

  const [bestItems, setBestItems] = useState([]); 

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
        const response = await axios.get('/api/item/items/best'); 
        setBestItems(response.data); 
        console.log(bestItems);
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
          <Col md={6}>
            <strong className={`${styles.sharp_text}`}># BEST</strong><br />
            <div className='mt-4'>
              <span className={`${styles.desc_text}`}>제로웨이스트 입문자도<br /></span>
              <span className={`${styles.desc_text}`}>어려움 없이 사용할 수 있는<br /></span>
              <span className={`${styles.desc_text}`}>베스트 제품!<br /><br /></span>
            </div>
            <img src="https://cdn.imweb.me/thumbnail/20220304/e7edd6d6a102d.jpg" className="rounded-circle w-75 mt-1 p-4" alt="item" />
          </Col>
          <Col md={6}>
            <Row>
              {bestItems.map((item, index) => {
                let imgArr = item.img.split(',');
                return(
                  <Col md={4} className='mb-5' key={item.itemId}>
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
                      {item.sale && <span className={`${styles.sale_text} me-1`}>SALE</span>}
                      {item.best && <span className={`${styles.best_text}`}>BEST</span>}
                    </div>
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
