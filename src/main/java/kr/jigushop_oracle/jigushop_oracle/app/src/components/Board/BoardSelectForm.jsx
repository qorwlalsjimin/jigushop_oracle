import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function BoardSelectForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        boardId: '',
        nickname: '',
        title: '',
        content: '',
        boardTimestamp: '', 
    });

    useEffect(() => {
        // 데이터를 받아오는 로직
        axios.get(`/api/board/${id}`) // GET 요청을 사용하여 데이터를 받아옴
            .then(response => {
                // 받아온 데이터를 폼 데이터에 설정
                const boardData = response.data; // 실제 데이터 형식에 따라 수정해야 함
                setFormData({
                    ...formData,
                    ...boardData // 받아온 데이터를 기존 폼 데이터에 병합
                });
            })
            .catch(error => {
                console.error('Error fetching board data:', error);
            });
    }, []); // 컴포넌트가 마운트된 후에 한 번만 실행

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    return (
        <Container className='my-5 py-5 text-center'>
            <form method="post">
                <Row>
                    <Col md={9}>
                        <input type="text" className="form-control mb-4" id="id" name="title" placeholder="글 제목" onChange={handleChange} value={formData.title} />
                    </Col>
                    <Col md={3}>
                        <input type="text" className="form-control mb-4" id="id" name="nickname" placeholder="닉네임" onChange={handleChange} value={formData.nickname} />
                    </Col>
                    <Col>
                        <textarea className="form-control mb-4" name="content" cols="30" rows="10" placeholder='내용' onChange={handleChange} value={formData.content}></textarea>
                    </Col>
                </Row>
                <Link to="/board"><span>게시판 돌아가기</span></Link>
            </form>
        </Container>
    );
}

export default BoardSelectForm;
