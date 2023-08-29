import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function BoardWriteForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        boardId: '',
        nickname: '',
        title: '',
        content: '',
        boardTimestamp: '', 
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('/api/board/write', formData);
            window.alert('글 등록 완료');
            setTimeout(() => {
                navigate(-1);
            }, 200);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    return (
        <Container className='my-5 py-5 text-center'>
            <form method="post" onSubmit={handleSubmit}>
                <Row>
                    <Col md={9}>
                        <input type="text" className="form-control mb-4" id="id" name="title" placeholder="글 제목" onChange={handleChange}/>
                    </Col>
                    <Col md={3}>
                        <input type="text" className="form-control mb-4" id="id" name="nickname" placeholder="닉네임" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <textarea className="form-control mb-4" name="content" cols="30" rows="10" placeholder='내용' onChange={handleChange}></textarea>
                    </Col>
                </Row>
                <button className='btn btn-success'>작성 완료</button>
            </form>
        </Container>
    );
}

export default BoardWriteForm;
