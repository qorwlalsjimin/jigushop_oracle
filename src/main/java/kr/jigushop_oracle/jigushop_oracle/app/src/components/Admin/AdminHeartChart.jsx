import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Cookies from 'js-cookie';
import AdminNotice from "./AdminNotice";

const data = [
    { name: "욕실", value: 10 },
    { name: "주방", value: 25 },
    { name: "생활", value: 15 },
    { name: "음료용품", value: 30 },
    { name: "화장품", value: 30 }
];

export default function AdminHeartChart() {

    const [isLogin, setIsLogin] = useState(!!Cookies.get('loggedIn'));

    return ( isLogin ? 
        <Container className={`text-center mt-5`}>

            <Row className={`m-5 text-success`}>
                <h1>즐겨찾기 상품 분석 차트</h1>
            </Row>

            <ResponsiveContainer width="100%" height={700}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#ffae00" />
                </BarChart>
            </ResponsiveContainer>
        </Container>

        :

        <AdminNotice/>
    )
}