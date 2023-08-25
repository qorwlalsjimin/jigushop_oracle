import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        memberUid: "",
        memberUpw: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(credentials);

        try {
            const response = await axios.post(`/api/member/login`, credentials, {});
            setTimeout(() => {
                window.alert('로그인 성공');
                navigate("/");
            }, 200);

            Cookies.set('MemberloggedIn', credentials.memberUid);
        } catch (error) {
            window.alert('로그인에 실패했습니다.'); setTimeout(() => {
                navigate("/login");
            }, 200);
            console.error(error);
        }
    };

    const styles = {
        marginTop: "200px",
    }
    return (
        <>
            <div className="container mb-5 pb-5" style={styles}>
                <div className="img_box text-center">
                    <img className="w-25 mx-auto" src="https://cdn.imweb.me/thumbnail/20200516/bd6d0ab83943e.jpg" alt="Logo" />
                </div>
                <form className="w-100" method="post" onSubmit={handleSubmit}>
                    <div className="mt-2 mb-1 row justify-content-center">

                        <div className="mb-3 col-sm-12 col-lg-6 row">
                            <div className="info_secret mb-1">
                                <div className="mb-2">
                                    <input type="text" className="form-control" id="id" name="memberUid" placeholder="아이디" onChange={handleInputChange}/>
                                </div>
                                <div className="mb-1">
                                    <input type="password" className="form-control" id="pass" name="memberUpw" placeholder="비밀번호" onChange={handleInputChange} />
                                </div>
                            </div>
                            {/* <!--//info_basic--> */}
                            <div className="btn">
                                <div className="btn_join d-grid">
                                    <button type="submit" className="btn btn-success">로그인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <!--//container--> */}
        </>
    );
}

