import React from 'react';
import style from './MainDisplayMission.module.css';
import { Col, Container, Row } from 'reactstrap';

export default function MainDisplayMission() {
  return (
    <div className={`mb-5 py-5 ${style.content}`}>
      <Container className='mb-5'>
        <span className={`${style.content_title}`}>JIGUSHOP MISSION</span>
        <Row className='mt-4 mb-5 justify-content-center'>
          <Col md={4} className='bg-white p-5 w-25 rounded mx-3'>
            <strong className={`${style.text}`}>우리가 줄인 플라스틱 제품</strong><br />
            <span className={`${style.text_value}`}>44,664kg</span>
          </Col>
          <Col md={4} className='bg-white p-5 w-25 rounded mx-3'>
            <strong className={`${style.text}`}>우리가 순환한 자원의 양</strong><br />
            <span className={`${style.text_value}`}>12,084개</span>
          </Col>
          <Col md={4} className='bg-white p-5 w-25 rounded mx-3'>
            <strong className={`${style.text}`}>사회, 환경적 활동 지원 금액</strong><br />
            <span className={`${style.text_value}`}>17,647,760원</span>
          </Col>
        </Row>
    </Container>
    </div>
    
  );
}
