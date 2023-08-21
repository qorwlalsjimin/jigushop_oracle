import { Container, Row, Col } from "react-bootstrap";

export default function AdminNotice() {
    
    return (
        
        <Container className="mt-5">
            <Row className="mt-5">
                <Col className="text-center mt-5">
                    <span className="mt-5" style={{fontSize: "30px"}}>로그인 후 접근 가능합니다.</span>
                </Col>
            </Row>
        </Container>
    )
}