import style from './Footer.module.css';
export default function Footer() {
    const footerStyles = {
        backgroundColor: "rgba(0,0,0,0)"
    }

    return (
        <footer>
        <div className="num_info container mt-5 pb-4 mt-lg-5 mt-md-5">
            <span className="text">대표 전화<br/></span>
            <span className="text_title">☎ 02-812-2050<br/></span>
            <span className="text"><strong>운영시간 </strong>월-금 10시 - 18시 / <strong>점심시간 </strong>12시 - 13시<br/></span>
            <span className="text">* 배송 및 온라인 고객센터 : 주말, 공휴일 휴무<br/></span>
        </div>

        <div className="under_info container mt-5 mb-5">
            <div className="left store col-2 me-2">
                <p className="text_title">지구샵 연남점</p>
                <div className="line"></div>
                <p className="text">
                    <strong>☎ 070-7721-5748<br/></strong>
                    <strong>영업일 </strong>월 - 일 (화 휴무)<br/>
                    <strong>운영시간 </strong>11시 - 21시 30분<br/>
                    * 공휴일 당일 휴무<br/>
                </p>
            </div>
            {/* <!--//store yeonnam--> */}

            <div className="left store col-2 me-2">
                <p className="text_title">지구샵 그로서리점</p>
                <div className="line"></div>
                <p className="text">
                    <strong>☎ 02-333-2050<br/></strong>
                    <strong>영업일 </strong>수 - 일 (월, 화 휴무)<br/>
                    <strong>운영시간 </strong>11시 - 18시<br/>
                    * 가오픈 기간<br/>
                </p>
            </div>
            {/* <!--//store grocery--> */}

            <div className="left store col-2 me-2">
                <p className="text_title">지구샵 상도점</p>
                <div className="line"></div>
                <p className="text">
                    <strong>☎ 070-7756-3270<br/></strong>
                    <strong>영업일 </strong>월 - 토 (일 휴무)<br/>
                    <strong>운영시간 </strong>19시 - 새벽 1시<br/>
                    * 공집합 공동 운영<br/>
                </p>
            </div>
            {/* <!--//store sangdo--> */}

            <div className="right jigushop col-2 me-2">
                <p className="text_title">지구샵</p>
                <div className="line"></div>
                <p className="text">
                    <a href="#">브랜드소개</a><br/>
                    <a href="#">비전</a><br/>
                    <a href="#">팀원</a><br/>
                    <a href="#">임팩트</a><br/>
                </p>
            </div>
            {/* <!--//jigushop--> */}

            <div className="right consumer_help col-2 me-2">
                <p className="text_title">고객 도움</p>
                <div className="line"></div>
                <p className="text">
                    <a href="#">공지사항</a><br/>
                    <a href="#">자주묻는질문</a><br/>
                    <a href="#">문의하기</a><br/>
                    <a href="#">고객후기</a><br/>
                </p>
            </div>
            {/* <!--//consumer_help--> */}

            <div className="right social col-2">
                <p className="text_title">소셜</p>
                <div className="line"></div>
                <table className="mt-3">
                    <tr>
                        <td><a href="#"><img className="w-75"
                                    src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/39d6aceb4847a.png"/></a></td>
                        <td><a href="#"><img className="w-75"
                                    src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/4f410a2d242e6.png"/></a></td>
                        <td><a href="#"><img className="w-75"
                                    src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/3b541dd905d94.png"/></a></td>
                    </tr>
                </table>
             </div> {/*<!-- //social --> */}
         </div>{/*<!-- //under_info --> */}
        <div className="last_info py-2">
            <div className="container">
                <div className="left col-3 mt-5 me-4"><img className="w-100"
                        src="https://cdn.imweb.me/thumbnail/20220217/a5d090c029b04.png"/></div>
                <div className="right col-9 col-sm-12 mt-4">
                    <ul>
                            <li className="ms-0 pe-2"><a href="#" style={footerStyles}><span>이용약관</span></a>
                        </li>
                        <li className="pe-2"><span>|</span></li>
                            <li className="pe-2"><a href="#" style={footerStyles}><span>개인정보처리방침</span></a>
                        </li>
                        <li className="pe-2"><span>|</span></li>
                        <li><a href="#" style={footerStyles}><span>도매 전용 B2B몰</span></a></li>
                    </ul>

                    <div className="etc">
                        <p>
                            · 회사명 : 주식회사 피스온테이블 | 대표자 : 김아리<br/>
                            · 주소 : 서울특별시 동작구 성대로1길 16, 1층 | 이메일 : contact@jigushop.co.kr | 팩스 : 0303-3444-2050<br/>
                            · 사업자등록번호 : 689-86-00791 | 통신판매업신고 : 제2018-서울동작-0295 <a href="#">사업자정보확인</a><br/>
                            · 개인정보보호책임자 : 김아리 | 고객센터 : 02-812-2050 | 호스팅 제공자 : ㈜아임웹<br/>
                        </p>
                    </div>
                </div> <br/>  {/*<!-- //right -->*/}
            </div>{/*<!-- //container -->*/}
        </div>{/*<!-- //last_info -->*/}
    </footer>
    )
}