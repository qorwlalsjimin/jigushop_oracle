import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Cookies from 'js-cookie';
import AdminNotice from "./AdminNotice";
import axios from 'axios';

export default function AdminHeartChart() {
    const [isLogin, setIsLogin] = useState(!!Cookies.get('loggedIn'));
    const [data, setData] = useState([]);

    // Map categoryId to corresponding category names
    const categoryIdToName = {
        101: "욕실",
        102: "주방",
        103: "생활",
        104: "음료용품",
        105: "화장품",
        "sum": "총합"
    };

    useEffect(() => {
        if (isLogin) {
            axios.get("/api/admin/chart") // Replace with your actual API endpoint
                .then(response => {
                    // Map categoryId to categoryName and update the data
                    const updatedData = response.data.map(item => ({
                        name: categoryIdToName[item.categoryId],
                        value: item.count
                    }));
                    setData(updatedData);
                    console.log(data[data.length-1].value)
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [isLogin]);

    const COLORS = ["#FF5733", "#FFA600", "#4CAF50", "#3498DB", "#9B59B6"];

    // Filter out the "총합" entry from data
    const filteredData = data.filter(entry => entry.name !== "총합");

    return (
        isLogin ?
        <Container className={`text-center mt-5`}>
            <Row className={`m-5 text-success`}>
                <h1>즐겨찾기 상품 분석 차트</h1>
            </Row>
            <ResponsiveContainer width="100%" height={700}>
                <PieChart>
                    <Pie
                        data={filteredData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={200}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
                    >
                        {filteredData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <Row>
                <span>
                    총 즐겨찾기 수: {data.length!=0 && data[data.length-1].value}개
                </span>
            </Row>
        </Container> :
        <AdminNotice/>
    )
}
