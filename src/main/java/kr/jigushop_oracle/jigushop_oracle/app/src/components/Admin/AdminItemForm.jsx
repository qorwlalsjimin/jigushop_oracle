import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminItemForm() {

    const [itemName, setItemName] = useState();
    const [brandName, setBrandName] = useState();
    const [itemOption, setItemOption] = useState();
    const [itemDesc, setItemDesc] = useState();
    const [itemImg, setItemImg] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemCategory, setItemCategory] = useState();


    const handleFormSubmit = (event) => {
        event.preventDefault();

        setItemName(event.target.item_name.value);
        setBrandName(event.target.brand_name.value);
        setItemOption(event.target.item_option.value);
        setItemDesc(event.target.item_desc.value);
        setItemImg(event.target.item_img.value);
        setItemPrice(event.target.item_price.value);
        setItemCategory(event.target.category.value);
    };

    return (
        <>
            <Container className={`text-center mt-5 mb-5`}>

                <Row className={`m-5 text-success`}>
                    <h1>상품 등록</h1>
                </Row>

                <Row className={`w-50 mx-auto`}>
                    <form onSubmit={handleFormSubmit}>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">상품명</label>
                            <input className="form-control" name="item_name" type="text" placeholder="상품명을 입력하세요" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">브랜드명</label>
                            <input className="form-control mb-1" name="brand_name" type="text" placeholder="브랜드명을 입력하세요" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">옵션 추가</label>
                            <input className="form-control" type="text" name="item_option" placeholder="쉼표로 구분해주세요 (ex. 분홍,하양)" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">상품 설명</label>
                            <textarea className="form-control" name="item_desc" rows="3" placeholder="상품 설명을 입력해주세요"></textarea>
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">이미지</label>
                            <textarea className="form-control" name="item_img" rows="3" placeholder="이미지 주소를 쉼표로 구분해주세요"></textarea>
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">가격</label>
                            <input className="form-control" type="text" name="item_price" placeholder="가격을 입력해주세요" />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">카테고리</label>
                            <select className="form-select" required name="category">
                                <option disabled value="">카테고리를 선택해주세요</option>
                                <option value="101">욕실</option>
                                <option value="102">주방</option>
                                <option value="103">생활</option>
                                <option value="104">음료용품</option>
                                <option value="105">화장품</option>
                            </select>
                        </Col>


                        <Col md={12} className="d-flex justify-content-center mt-4">
                            <button className="btn btn-success w-100" type="submit">상품 등록</button>
                        </Col>
                    </form>
                </Row>


            </Container>
        </>
    )
}