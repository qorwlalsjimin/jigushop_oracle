import { Col, Container, Row } from 'reactstrap';
import style from './Footer.module.css';
export default function Footer() {
    const footerStyles = {
        backgroundColor: "rgba(0,0,0,0)"
    }

    return (
        <footer className={`${style.footer}`}>
            <Container className='py-3'>
                <Row>
                    <Col md={3}>
                        <img className="w-75 ms-5 mt-2" src="https://cdn.imweb.me/thumbnail/20220504/5fd02ac97337a.png" />
                    </Col>
                    <Col md={9}>
                        <div className="etc">
                            <p>
                                · 회사명 : 주식회사 피스온테이블 | 대표자 : 김아리<br />
                                · 주소 : 서울특별시 동작구 성대로1길 16, 1층 | 이메일 : contact@jigushop.co.kr | 팩스 : 0303-3444-2050<br />
                                · 사업자등록번호 : 689-86-00791 | 통신판매업신고 : 제2018-서울동작-0295 사업자정보확인<br />
                                · 개인정보보호책임자 : 김아리 | 고객센터 : 02-812-2050 | 호스팅 제공자 : ㈜아임웹<br />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}