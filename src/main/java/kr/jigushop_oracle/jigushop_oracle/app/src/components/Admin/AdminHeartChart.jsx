import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Cookies from 'js-cookie';
import AdminNotice from "./AdminNotice";
import axios from 'axios';

export default function AdminHeartChart() {

    const [isLogin, setIsLogin] = useState(!!Cookies.get('loggedIn'));    
    const [data, setData] = useState([]);

    useEffect(() => {
        if (isLogin) {
            axios.get("/api/admin/chart") // Replace with your actual API endpoint
                .then(response => {
                    setData(response.data); // Update the state with fetched data
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [isLogin]);

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
                    <Bar dataKey="count" fill="#ffae00" />
                </BarChart>
            </ResponsiveContainer>
        </Container>

        :

        <AdminNotice/>
    )
}