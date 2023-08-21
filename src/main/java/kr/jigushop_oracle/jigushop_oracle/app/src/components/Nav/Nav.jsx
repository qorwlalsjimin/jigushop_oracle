import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { cartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as CartSVG } from "../../svgfiles/Cart.svg";
import { useState } from "react";
import Cookies from 'js-cookie';

export default function Nav() {

    const [isLogin, setIsLogin] = useState(Cookies.get('MemberloggedIn') === 'true');
    console.log(isLogin);

    const handleLogout = () => {
        const confirmed = window.confirm(`로그아웃하시겠습니까?`);
        
        if (confirmed) {
            Cookies.remove('MemberloggedIn'); // loggedIn 쿠키 제거
            setIsLogin(false); // 로그인 상태 업데이트
            console.log(isLogin);
        }
    };

    const navStyle = {
        outline: "none",
        cursor: "pointer"
    }

    return (
        <header>
            {/* <!--로고 있는 top nav--> */}
            <Container className='mb-4'>
                <div className="row justify-content-end pt-lg-3 pt-sm-2 me-xxl-4 me-lg-0">
                    <div className="nav_logo col-6">
                        <Link to="/"><img className="top_nav_logo_img mt-1 pt-md-1 wd-75"
                            src="https://cdn.imweb.me/thumbnail/20220504/5fd02ac97337a.png" alt="지구샵"
                            width="158.535211268" /></Link>
                    </div>
                    <div className="nav_nav col-6 mt-3">
                        {/* <!--로그인되어 있을때--> */}
                        <div className={`${!isLogin ? "hidden" : ""}`}>
                            <span className="p-2 logout_text" id="join" onClick={handleLogout}>로그아웃</span>
                            <NavLink to="/cart"><span className="p-2"> <CartSVG /> </span></NavLink>
                            <NavLink to="/mypage"><span className="p-2"> <FontAwesomeIcon icon={faUser} /></span></NavLink>
                        </div>

                        {/* <!--로그인해야할때--> */}
                        <div className={isLogin ? "hidden" : ""}>
                            <NavLink to="/login" className="sign_in_out"><span className="p-2" id="login">로그인</span></NavLink>
                            <NavLink to="/join" className=""><span className="p-2" id="join">회원가입</span></NavLink>
                            <NavLink to="/cart"><span className="p-2"> <CartSVG /> </span></NavLink>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <!--//로고 있는 top nav--> */}

            {/* <!--메인 nav--> */}
            <Container className='mb-4 mt-4'>
                <div className="row">
                    <div className="left_nav col-6 ps-3 pt-2">
                        <NavLink to="/item_list" className="pe-lg-3 pe-md-1 pe-sm-2"><span>장보기</span></NavLink>
                        <NavLink to="/board" className="pe-lg-3 pe-md-1 pe-sm-2"><span>게시판</span></NavLink>
                        <NavLink to="#" className="pe-lg-3 pe-md-1 pe-sm-2"><span>콘텐츠</span></NavLink>
                        <NavLink to="#" className="pe-lg-3 pe-md-1 pe-sm-2"><span>제안하기</span></NavLink>
                    </div>
                    <div className="search_area col-6">
                        <div className="search_type">
                            <form action='search_result.php' method="get">
                                <input className="search_word ps-3" name="search_word" id="search_word" type="text" placeholder="Search" onkeypress="enterkey();" style={navStyle} />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying_glass_icon' />
                            </form>
                        </div>
                        {/* <!--//search_type--> */}
                    </div>
                    {/* <!--//search_area--> */}
                </div>
            </Container>
            {/* <!--//메인 nav--> */}
            {/* <!--//nav--> */}
        </header>
    )
}