import { Col, Container, Row } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ItemDetailUpper.module.css";
import { ReactComponent as HeartSVG } from "../../svgfiles/Heart.svg";
import { ReactComponent as HeartEmptySVG } from "../../svgfiles/HeartEmpty.svg";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function ItemDetailUpper() {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);
    const [quantity, setQuantity] = useState(1); // 상품 갯수 
    const [selectedOptions, setSelectedOptions] = useState({}); // 선택한 옵션과 수량
    const [heartCnt, setHeartCnt] = useState(0); // 선택한 옵션과 수량
    const [isLogin, setIsLogin] = useState(!!Cookies.get('MemberloggedIn'));
    const navigate = useNavigate();

    let imgArr = String(item.img).split(",");
    const [presentImg, setPresentImg] = useState(imgArr[0]);

    let optionArr = String(item.itemOption).split(",");

    useEffect(() => {
        // API 요청
        axios.get(`/api/item/${itemId}`, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
            .then(response => {
                setItem(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


    }, [itemId]);

    //옵션 선택
    const handleChanges = (event) => {
        const { name, value } = event.target;

        setSelectedOptions((prevItem) => ({
            ...prevItem,
            [value]: 1
        }));

        console.log(selectedOptions);
    };

    //옵션 박스
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        console.log(quantity)
    };

    // 즐겨찾기
    const handleHeart = async (itemId) => {
        const heartForm = {
            memberUid: Cookies.get('MemberloggedIn'),
            itemId: itemId
        };

        if (isLogin) {
            if (item.heart==="1") { // 하트 취소할 때
                try {
                    const response = await axios.delete(`/api/heart/delete`, { data: heartForm });
                    console.log(response.data, "번 즐겨찾기 취소", item.heart);
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                }
            } else { // 하트 추가할 때
                try {
                    const response = await axios.post(`/api/heart/add`, heartForm, {});
                    console.log(response.data, "번 즐겨찾기 등록", item.heart);
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            window.alert('로그인 후 이용해주세요.');
        }
    };



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
                            {imgArr[2] && <img src={imgArr[2]} className={` ${styles.pointer} w-25`} />}
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

                        {/* 옵션 선택 */}
                        {item.itemOption && <div className="mt-4">
                            <span className={styles.left_text}>옵션 *</span>
                            <select className="form-select mt-2" required name="option" onChange={handleChanges}>
                                <option disabled value="" selected>옵션을 선택해주세요</option>
                                {item.itemOption.split(",").map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>}

                        {/* 선택한 옵션 박스 */}
                        {Object.keys(selectedOptions).length && <div className={`${styles.option_box} p-3 my-3`}>
                            <span className={styles.option_title_text}>수량</span>
                            <hr className={styles.dot} />
                            <Row className="justify-content-end">
                                <Col>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                        max="100"
                                    />
                                </Col>
                                <Col className={styles.option_price_text}>
                                    {String(item.price * quantity).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                                </Col>
                            </Row>
                        </div>}


                        <Row className="justify-content-end mt-4">
                            <Col className={styles.total_title_text}>총 상품금액({quantity}개)</Col>
                            <Col className={styles.total_price_text}>{String(item.price * quantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Col>
                        </Row>

                        <Row className="text-center mt-5">
                            <Col className={`py-3 me-1 ${styles.green_button}`}>구매하기</Col>
                            <Col className={`py-3 me-1 ${styles.button}`}>장바구니</Col>
                            <Col className={`py-3  ${styles.button} `} onClick={() => handleHeart(item.itemId)}> {item.heart==="1" ? <HeartSVG /> : <HeartEmptySVG />} <strong>{heartCnt}</strong></Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="text-center mb-5">
                    <hr className="mb-5" />
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