import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './MyPage.module.css';
import { useEffect } from 'react';

export default function MyPageEdit() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(!!Cookies.get('MemberloggedIn'));

    const [formData, setFormData] = useState([]);

    /* 회원 정보 불러오기 */
    useEffect(() => {
        // 카테고리 ID에 따른 API 엔드포인트 설정
        const endpoint = `api/member/`;

        // API 요청
        axios.get(endpoint, {
            headers: {
                Cookie: Cookies.get('MemberloggedIn')
            }
        })
            .then(response => {
                setFormData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    // input 받기
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('/api/member/edit', formData);
            window.alert('회원 정보 수정 완료');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Row className='py-5'>
            <Col>
                <strong className={`${styles.menu_title} mb-1 me-2`}>정보 수정</strong>
            </Col>

            {/* 수정 폼 */}
            <Col md={12} className={`mt-3 p-4`}>
                <div className="join container mb-5 pb-5">
                    <form className="w-100" method="post" onSubmit={handleSubmit}>
                        <div className="mt-5 mb-1 row justify-content-lg-center">
                            <div className="mb-3 col-sm-12 col-lg-6 row">
                                <div className="info_secret mb-1">
                                    <div className="name mb-4">
                                        <label className="form-label">아이디<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                        <input type="text" className="form-control mb-4" id="id" name="memberUid" placeholder="아이디" onChange={handleChange} defaultValue={formData.memberUid} />
                                    </div>
                                    {/* <!--//id--> */}
                                    <div className="name mb-4">
                                        <label className="form-label">비밀번호<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                        <input type="password" className="form-control mb-1" id="pw" name="memberUpw" data-name="비밀번호" placeholder="문자, 숫자, 특수 문자가 들어간 최소 8자 비밀번호를 만들어주세요" onChange={handleChange} defaultValue={formData.memberUpw} />
                                    </div>
                                    {/* <!--//pass--> */}
                                </div>
                                {/* <!--//info_secret--> */}
                                <div className="info_basic">
                                    <div className="name mb-4">
                                        <label className="form-label">이름<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                        <input type="text" className="form-control" id="name" name="memberName" data-name="이름" placeholder="이름을(를) 입력하세요" onChange={handleChange} defaultValue={formData.memberName} />
                                    </div>
                                    {/* <!--//name--> */}
                                    <div className="gender mb-4">
                                        <label className="form-label">성별</label>
                                        <div>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleChange}
                                                />
                                                &nbsp;남자
                                            </label>
                                            <br />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleChange}
                                                />
                                                &nbsp;여자
                                            </label>
                                        </div>

                                    </div>
                                    {/* <!--//gender--> */}
                                    <div className="number mb-4">
                                        <label className="form-label">연락처</label>
                                        <input type="tel" className="form-control" id="number" name="phone" placeholder="연락처" onChange={handleChange} defaultValue={formData.phone} />
                                    </div>
                                    {/* <!--//name--> */}
                                </div>
                                {/* <!--//info_basic--> */}
                                <div className="btn">
                                    <div className="btn_join d-grid">
                                        <button type="submit" className="btn btn-success">수정하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    );
}

