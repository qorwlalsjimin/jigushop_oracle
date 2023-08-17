import React, { useState } from 'react';
import styles from './MainDisplayBest.module.css';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function MainDisplayBest() {

  const bestItems = [
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    {
      id: 1,
      images: ['https://cdn.imweb.me/thumbnail/20220816/f258d50637def.jpg', 'https://cdn.imweb.me/thumbnail/20220816/daf2f6bd8f9db.jpg'],
      title: '[지구샵] 마일드고체치약',
      price: '5360원',
      sale: true,
      best: true
    },
    
    // 다른 아이템들도 추가
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
              {bestItems.map((item, index) => (
                <Col md={4} className='mb-5' key={item.id}>
                  <Link to="/" className={`text-decoration-none`}>
                    <img
                      src={hoveredIndex === index ? item.images[1] : item.images[0]}
                      alt=""
                      className={`w-100 mb-3`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <span className={`${styles.title_text}`}>{item.title}</span><br />
                    <span className={styles.price_text}>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span><br />
                    <div className='mt-1'>
                      {item.sale && <span className={`${styles.sale_text} me-1`}>SALE</span>}
                      {item.best && <span className={`${styles.best_text}`}>BEST</span>}
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
