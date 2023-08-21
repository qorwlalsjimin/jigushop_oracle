import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        memberUid: '',
        memberUpw: '',
        memberName: '',
        phone: '',
        gender: 'male', // default value
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('/api/member/join', formData);
            window.alert('회원가입 성공');
            setTimeout(() => {
                navigate("/login");
            }, 200);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="join container mb-5 pb-5">
            <form className="w-100" method="post" onSubmit={handleSubmit}>
                <div className="mt-5 mb-1 row justify-content-lg-center">
                    <div className="mb-3 col-sm-12 col-lg-6 row">
                        <div className="info_secret mb-1">
                            <div className="name mb-4">
                                <label className="form-label">아이디<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="text" className="form-control mb-4" id="id" name="memberUid" placeholder="아이디" onChange={handleChange}/>
                            </div>
                            {/* <!--//id--> */}
                            <div className="name mb-4">
                                <label className="form-label">비밀번호<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="password" className="form-control mb-1" id="pw" name="memberUpw" data-name="비밀번호" placeholder="문자, 숫자, 특수 문자가 들어간 최소 8자 비밀번호를 만들어주세요"  onChange={handleChange} />
                            </div>
                            {/* <!--//pass--> */}
                        </div>
                        {/* <!--//info_secret--> */}
                        <div className="info_basic">
                            <div className="name mb-4">
                                <label className="form-label">이름<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="text" className="form-control" id="name" name="memberName" data-name="이름" placeholder="이름을(를) 입력하세요"  onChange={handleChange}/>
                            </div>
                            {/* <!--//name--> */}
                            <div className="gender mb-4">
                                <label className="form-label">성별</label>
                                <div>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        <input className="form-check-input" type="radio" name="gender" value="male" checked={formData.gender === 'male'}  onChange={handleChange}/>
                                        남자
                                    </label>
                                    <br />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        <input className="form-check-input" type="radio" name="gender" value="female"  onChange={handleChange}/>
                                        여자
                                    </label>
                                </div>
                            </div>
                            {/* <!--//gender--> */}
                            <div className="number mb-4">
                                <label className="form-label">연락처</label>
                                <input type="tel" className="form-control" id="number" name="phone" placeholder="연락처" onChange={handleChange}/>
                            </div>
                            {/* <!--//name--> */}
                        </div>
                        {/* <!--//info_basic--> */}
                        <div className="btn">
                            <div className="btn_join d-grid">
                                <button type="submit" className="btn btn-success">가입하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

