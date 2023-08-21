import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export default function AdminItemList() {
    // 상품 목록
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    const handleLinkClick = async (itemId) => {
        try {
            console.log("클릭!")

            const response = await axios.delete(`/api/admin/delete_item/${itemId}`);

            if (response.status === 200) {
                console.log("상품 삭제 성공");
                // 삭제 후 상태 업데이트
                setItems(prevItems => prevItems.filter(item => item.itemId !== itemId));
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        let fetchUrl = `/api/admin/items`;
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url, {
                    headers: {}
                });
                setItems(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(fetchUrl);
    }, []);

    return (
        <>
            <Container className={`text-center mt-5`}>
                <Row className={`m-5 text-success`}>
                    <h1>등록된 상품</h1>
                </Row>

                <table className="table">
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <th>브랜드</th>
                            <th>옵션</th>
                            <th>상품 설명</th>
                            <th>가격</th>
                            <th>카테고리</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.itemName}</td>
                                <td>{item.brand}</td>
                                <td>{item.itemOption}</td>
                                <td>{item.itemDesc}</td>
                                <td>{item.price}원</td>
                                <td>{item.categoryId}번</td>
                                <td>
                                    <Link to={`/admin_form?class=edit&id=${item.itemId}`}>수정</Link> |
                                    <Link onClick={() => handleLinkClick(item.itemId)}> 삭제</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/admin_form?class=add" className={`float-end`}>상품 등록하기</Link>
            </Container>
        </>
    )
}
