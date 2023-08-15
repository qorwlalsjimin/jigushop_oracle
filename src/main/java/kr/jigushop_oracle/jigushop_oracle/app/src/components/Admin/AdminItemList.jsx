import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function AdminItemList() {

    const items = [
        {
            itemName: "유기농 배색 그물 장바구니",
            brandName: "지구샵",
            itemOption: ["분홍", "하양"],
            itemDesc: "지구샵과 연남점, 그로서리 매장의 포인트를 담은 유기농 그물장바구니에요.",
            itemImg: ["https://cdn.imweb.me/thumbnail/20221209/ef0ab51d01aad.jpg", "https://cdn.imweb.me/thumbnail/20221209/c6de72ee924a1.jpg", "https://cdn.imweb.me/thumbnail/20221209/1a903b53bdbdc.jpg"],
            itemPrice: 7000,
            itemCategory: 102
        },
        {
            itemName: "유기농 배색 그물 장바구니",
            brandName: "지구샵",
            itemOption: [],
            itemDesc: "지구샵과 연남점, 그로서리 매장의 포인트를 담은 유기농 그물장바구니에요.",
            itemImg: ["https://cdn.imweb.me/thumbnail/20221209/ef0ab51d01aad.jpg", "https://cdn.imweb.me/thumbnail/20221209/c6de72ee924a1.jpg", "https://cdn.imweb.me/thumbnail/20221209/1a903b53bdbdc.jpg"],
            itemPrice: 7000,
            itemCategory: 102
        },
        {
            itemName: "",
            brandName: "",
            itemOption: [],
            itemDesc: "",
            itemImg: "",
            itemPrice: "",
            itemCategory: ""
        },
    ]

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
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.itemName}</td>
                                <td>{item.brandName}</td>
                                <td>{item.itemOption.join(', ')}</td>
                                <td>{item.itemDesc}</td>
                                <td>{item.itemPrice}원</td>
                                <td>{item.itemCategory}번</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/add" className={`float-end`}>상품 등록하기</Link>

            </Container>
        </>
    )
}