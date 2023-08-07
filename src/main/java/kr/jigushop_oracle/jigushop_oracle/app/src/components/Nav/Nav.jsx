import style from './Navbar.module.css';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
export default function Nav() {
    const navStyle = {
        outline: "none",
        cursor: "pointer"
    }

    return (
        <header>
            {/* <!--로고 있는 top nav--> */}
            <div className="top_nav container mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                <div className="row justify-content-between pt-lg-3 pt-sm-2 me-xxl-4 me-lg-0">
                    <div className="nav_logo col-4 col-xs-1 ps-lg-4">
                        <Link to="/"><img className="top_nav_logo_img mt-1 pt-md-1 wd-75"
                            src="https://cdn.imweb.me/thumbnail/20220504/5fd02ac97337a.png" alt="지구샵"
                            width="158.535211268" /></Link>
                    </div>
                    <div
                        className="nav_nav col-4 col-xs-11 col-sm-6 col-md-5 pt-lg-2 pt-md-1 pt-sm-2 mt-lg-0 me-xxl-4 me-lg-1 me-2 pe-lg-0 pe-xl-4 px-0">
                        <a href="#" className="hidden login"><i className="fa-solid fa-arrow-right-to-bracket"></i></a>

                        {/* <!--로그인되어 있을때--> */}
                        {/* <a href="#" className=""><span className="p-2" id="join" onclick="logout();">로그아웃</span></a> */}

                        {/* <!--로그인해야할때--> */}
                        <NavLink to="/login" className="sign_in_out"><span className="p-2" id="login">로그인</span></NavLink>
                        <NavLink to="/join" className=""><span className="p-2" id="join">회원가입</span></NavLink>
                        <NavLink to="/cart"><span className="p-2"><i className="fa-solid fa-bag-shopping"></i></span></NavLink>
                    </div>
                </div>
            </div>
            {/* <!--//로고 있는 top nav--> */}

            {/* <!--메인 nav--> */}
            <nav className="main_nav container mt-4 mb-3">
                <div className="row">
                    <div className="left_nav col-lg-6 ms-lg-3 ms-md-0 ms-1 ms-sm-0 ms-md-0 ms-lg-0">
                        <NavLink to="/item_list" className="pe-lg-3 pe-md-1 pe-sm-2"><span>장보기</span></NavLink>
                        <NavLink to="/board" className="pe-lg-3 pe-md-1 pe-sm-2"><span>게시판</span></NavLink>
                        <NavLink to="#" className="pe-lg-3 pe-md-1 pe-sm-2"><span>콘텐츠</span></NavLink>
                        <NavLink to="#" className="pe-lg-3 pe-md-1 pe-sm-2"><span>제안하기</span></NavLink>
                    </div>
                    <div className="search_area col-lg-3">
                        <div className="search_type">
                            <form action='search_result.php' method="get">
                                {/* <!-- TODO: enter 이벤트로도 넘어가게 하기 --> */}
                                <input name="search_word" className="ps-3" id="search_word" type="text" placeholder="Search" onkeypress="enterkey();" style={navStyle} />
                                <i className="fa-solid fa-magnifying-glass" onclick="search()" style={navStyle}></i>
                            </form>
                        </div>
                        {/* <!--//search_type--> */}
                    </div>
                    {/* <!--//search_area--> */}
                </div>
            </nav>
            {/* <!--//메인 nav--> */}
            {/* <!--//nav--> */}
        </header>
    )
}