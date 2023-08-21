import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export default function AdminEditForm({ idProps }) {

    
    const navigate = useNavigate();

    const [item, setItem] = useState({
        itemId: "",
        itemName: "",
        brand: "",
        itemOption: "",
        itemDesc: "",
        img: "",
        price: "",
        categoryId: ""
    });

    // 원래 상품 데이터 불러오기
    useEffect(() => {
        let fetchUrl = `/api/admin/edit_item/${idProps}`;
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url, {
                    headers: {}
                });
                const { data } = response;
                setItem(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(fetchUrl);
    }, []);

    // input 받기
    const handleChanges = (event) => {
        const { name, value } = event.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    // submit
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            //응답 성공

            console.log(item);
            const response = await axios.post(`/api/admin/edit_item`,
              item,
              {}
            );
            
            // 세션 설정
            // setCookie("accessToken", `${accessToken}`);
      
            setTimeout(() => {
              alert(`'${item.itemName}' 상품 수정이 정상적으로 처리되었습니다.`);
              navigate("/admin");
            }, 200);
          } catch (error) {
            //응답 실패
            console.error(error);
          }
      
    }


    return (
        <>
            <Container className={`text-center mt-5 mb-5`}>

                <Row className={`m-5 text-success`}>
                    <h1>상품 수정</h1>
                </Row>

                <Row className={`w-50 mx-auto`}>
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="itemId" defaultValue={item.itemId} />
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">상품명</label>
                            <input className="form-control" defaultValue={item.itemName} name="itemName"
                                type="text" placeholder="상품명을 입력하세요" onChange={handleChanges} />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">브랜드명</label>
                            <input className="form-control mb-1" defaultValue={item.brand} name="brand"
                                type="text" placeholder="브랜드명을 입력하세요"  onChange={handleChanges} />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">옵션 추가</label>
                            <input className="form-control" type="text" defaultValue={item.itemOption} name="itemOption"
                                placeholder="쉼표로 구분해주세요 (ex. 분홍,하양)" onChange={handleChanges}  />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">상품 설명</label>
                            <textarea className="form-control" name="itemDesc" rows="3" defaultValue={item.itemDesc}
                                placeholder="상품 설명을 입력해주세요"  onChange={handleChanges} ></textarea>
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">이미지</label>
                            <textarea className="form-control" name="img" rows="3" defaultValue={item.img} 
                                placeholder="이미지 주소를 쉼표로 구분해주세요"  onChange={handleChanges} ></textarea>
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">가격</label>
                            <input className="form-control" type="text" defaultValue={item.price} name="price"
                                placeholder="가격을 입력해주세요" onChange={handleChanges}  />
                        </Col>
                        <Col md={12} className="mt-2 mb-4">
                            <label className="float-start">카테고리</label>
                            <select className="form-select" required name="categoryId"
                                    value={item.categoryId} onChange={handleChanges} >
                                <option disabled>카테고리를 선택해주세요</option>
                                <option value="101">욕실</option>
                                <option value="102">주방</option>
                                <option value="103">생활</option>
                                <option value="104">음료용품</option>
                                <option value="105">화장품</option>
                            </select>
                        </Col>


                        <Col md={12} className="d-flex justify-content-center mt-4">
                            <button className="btn btn-success w-100" type="submit">상품 수정</button>
                        </Col>
                    </form>
                </Row>


            </Container>
        </>
    )
}