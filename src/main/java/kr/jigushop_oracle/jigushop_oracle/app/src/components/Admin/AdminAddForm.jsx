import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminAddForm() {
    const navigate = useNavigate();

    const initialItem = {
        itemName: "",
        brand: "",
        itemOption: "",
        itemDesc: "",
        img: "",
        price: "",
        categoryId: 101
    };

    const [item, setItem] = useState(initialItem);

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(item);
        try {
            const response = await axios.post(`/api/admin/add_item`, item, {});
            setTimeout(() => {
                alert(`'${item.itemName}' 상품 등록이 정상적으로 처리되었습니다.`);
                navigate("/admin");
              }, 200);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className={`text-center mt-5 mb-5`}>
            <Row className={`m-5 text-success`}>
                <h1>상품 등록</h1>
            </Row>

            <Row className={`w-50 mx-auto`}>
                <form onSubmit={handleSubmit}>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">상품명</label>
                        <input className="form-control" name="itemName" type="text" placeholder="상품명을 입력하세요" onChange={handleChanges} />
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">브랜드명</label>
                        <input className="form-control mb-1" name="brand" type="text" placeholder="브랜드명을 입력하세요" onChange={handleChanges} />
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">옵션 추가</label>
                        <input className="form-control" type="text" name="itemOption" placeholder="쉼표로 구분해주세요 (ex. 분홍,하양)" onChange={handleChanges} />
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">상품 설명</label>
                        <textarea className="form-control" name="itemDesc" rows="3" placeholder="상품 설명을 입력해주세요" onChange={handleChanges}></textarea>
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">이미지</label>
                        <textarea className="form-control" name="img" rows="3" placeholder="이미지 주소를 쉼표로 구분해주세요" onChange={handleChanges}></textarea>
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">가격</label>
                        <input className="form-control" type="text" name="price" placeholder="가격을 입력해주세요" onChange={handleChanges} />
                    </Col>
                    <Col md={12} className="mt-2 mb-4">
                        <label className="float-start">카테고리</label>
                        <select className="form-select" required name="categoryId" onChange={handleChanges}>
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
    );
}
