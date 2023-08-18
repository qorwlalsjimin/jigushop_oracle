import { Col, Container, Row } from 'reactstrap';
export default function MainDisplayNews() {
    return (
        <div style={{backgroundColor: "#ffffe9"}}>
            <Container className='my-5 py-5'>
                <Row>
                    <Col>
                        <img className="w-100 rounded" src="./img/cardnews1.jpg" />
                    </Col>
                    <Col>
                        <img className="w-100 rounded" src="./img/cardnews2.png" />
                        <img className="w-100 rounded mt-4" src="./img/cardnews3.jpg" />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
