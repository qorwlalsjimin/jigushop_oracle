import React, { useState } from 'react';
import styles from './MainDisplayNew.module.css';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function MainDisplayNew() {
  const newItems = [
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
          <Col md={3}>
            <strong className={`${styles.sharp_text}`}># NEW</strong><br />
            <div className='mt-4'>
              <span className={`${styles.desc_text}`}>지구샵만의 꼼꼼한 기준으로 입고된<br /></span>
              <span className={`${styles.desc_text}`}>새로운 제로웨이스트 제품을 만나보세요!<br /></span>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              {newItems.map((item, index) => (
                <Col md={3} className='mb-5' key={item.id}>
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
