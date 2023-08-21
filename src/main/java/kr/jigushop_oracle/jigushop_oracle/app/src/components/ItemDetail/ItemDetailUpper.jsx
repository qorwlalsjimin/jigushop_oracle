import { Col, Container, Row } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ItemDetailUpper.module.css";
import { ReactComponent as HeartSVG } from "../../svgfiles/Heart.svg";
import { ReactComponent as HeartEmptySVG } from "../../svgfiles/HeartEmpty.svg";

export default function ItemDetailUpper() {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);

    let imgArr = String(item.img).split(",");
    const [presentImg, setPresentImg] = useState(imgArr[0]);

    useEffect(() => {
        // API 요청
        axios.get(`/api/item/${itemId}`)
            .then(response => {
                setItem(response.data[0]); // 받아온 데이터로 bestItems 업데이트
                // console.log(response.data[0]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [itemId]);


    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className="p-5">
                        <div>
                            <img src={imgArr[0]} className={`w-100`} />
                        </div>
                        <div className={`d-flex py-3`}>
                            <img src={imgArr[0]} className={` ${styles.pointer} w-25 me-1`} />
                            <img src={imgArr[1]} className={` ${styles.pointer} w-25 me-1`} />
                            <img src={imgArr[2]} className={` ${styles.pointer} w-25`} />
                        </div>
                    </Col>
                    <Col md={6} className="p-5">
                        <div>
                            <span className={`${styles.name_text} me-2`}>[{item.brand}] {item.itemName}</span>

                            {item.sale && <span className={`${styles.sale_text} me-1`}>SALE</span>}
                            {item.best && <span className={`${styles.best_text}`}>BEST</span>}
                        </div>
                        <div>
                            <span>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                            <hr className={styles.gray} />
                        </div>
                        <div className="mt-5">
                            <p className={styles.desc_text}>{item.itemDesc}</p>

                            <span className={styles.left_text}>원산지</span> <span className={styles.right_text}>대한민국</span> <br />
                            <span className={styles.left_text}>브랜드</span> <span className={styles.right_text}>{item.brand}</span> <br />
                            <span className={styles.left_text}>구매혜택</span> <span className={styles.right_text}>포인트 적립예정</span> <br />
                            <span className={styles.left_text}>배송 방법</span> <span className={styles.right_text}>택배</span> <br />
                            <span className={styles.left_text}>배송비</span> <span className={styles.right_text}>3,000원</span> <br />
                        </div>
                        <div className={`${styles.option_box} p-3 my-3`}>
                            <span className={styles.option_title_text}>수량</span>
                            <hr className={styles.dot} />
                            <Row className="justify-content-end">
                                <Col>박스</Col>
                                <Col className={styles.option_price_text}>{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Col>
                            </Row>
                        </div>

                        <Row className="justify-content-end mt-4">
                            <Col className={styles.total_title_text}>총 상품금액({1}개)</Col>
                            <Col className={styles.total_price_text}>{String(item.price * 1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Col>
                        </Row>

                        <Row className="text-center mt-5">
                            <Col className={`py-3 me-1 ${styles.green_button}`}>구매하기</Col>
                            <Col className={`py-3 me-1 ${styles.button}`}>장바구니</Col>
                            <Col className={`py-3  ${styles.button} `}><HeartEmptySVG /></Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="text-center mb-5">
                    <hr className="mb-5"/>
                    <Col md={12} className="text-center mt-5">
                        <img src={imgArr[0]} alt="" />
                    </Col>
                    <Col md={12} className="my-5">
                        <span className={styles.desc_text}>{item.itemDesc}</span>
                    </Col>
                    <Col md={12} className="text-center mt-5">
                        <img src={imgArr[1]} alt="" />
                    </Col>
                    <Col md={12} className="text-center mt-5 mb-5">
                        <img src={imgArr[2]} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}