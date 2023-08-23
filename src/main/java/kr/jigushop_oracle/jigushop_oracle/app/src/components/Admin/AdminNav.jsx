import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./AdminNav.module.css";
import Cookies from 'js-cookie';

export default function AdminNav() {
    
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(!!Cookies.get('loggedIn'));
    console.log(isLogin);
    
    const handleLogout = () => {
        Cookies.remove('loggedIn'); // loggedIn 쿠키 제거
        setIsLogin(false); // 로그인 상태 업데이트
        console.log(isLogin);
        navigate("/admin");
    };

    return (
        <>
            <Container className={`mt-5 mb-5 ${styles.flex}`}>
                <Link to="/admin" className="d-flex text-decoration-none">
                    <img src="https://cdn.imweb.me/thumbnail/20220905/5c39e2a86b3f3.png" alt="" />
                    <p className={styles.admintext}>관리자</p>
                </Link>
                
                <div className={isLogin ? styles.hidden : ""}>
                    <Link to="/admin_login" className={styles.small_text}>로그인</Link>
                    <Link to="/admin_join" className={styles.small_text}>회원가입</Link>
                </div>
                <div className={`${!isLogin ? styles.hidden : styles.flex} ${styles.flexContainer}`}>
                    <div>
                        <span onClick={handleLogout} className={styles.small_text}>로그아웃</span>
                    </div>
                    <div className={styles.function}>
                        <Link to="/admin_form?class=add" className={styles.yellow_text}>등록</Link>
                        <Link to="/admin_chart" className={styles.yellow_text}>분석</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}