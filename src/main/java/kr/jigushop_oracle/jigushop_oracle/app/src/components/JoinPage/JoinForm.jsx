import React from 'react';

export default function JoinForm() {
    return (
        <div className="join container">
            <form className="w-100" method="post" action="join_process.php">
                <div className="mt-5 mb-1 row justify-content-lg-center">
                    <div className="mb-3 col-sm-12 col-lg-6 row">
                        <div className="info_secret mb-1">
                            <div className="name mb-4">
                                <label className="form-label">아이디<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="text" className="form-control mb-4" id="id" name="id" placeholder="아이디" />
                            </div>
                            {/* <!--//id--> */}
                            <div className="name mb-4">
                                <label className="form-label">비밀번호<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="password" className="form-control mb-1" id="pw" name="pw" data-name="비밀번호" placeholder="문자, 숫자, 특수 문자가 들어간 최소 8자 비밀번호를 만들어주세요" />
                                <input type="password" className="form-control" id="pwcheck" name="pwcheck" data-name="비밀번호 확인" placeholder="비밀번호 확인" />
                            </div>
                            {/* <!--//pass--> */}
                        </div>
                        {/* <!--//info_secret--> */}
                        <div className="info_basic">
                            <div className="name mb-4">
                                <label className="form-label">이름<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="text" className="form-control" id="name" name="name" data-name="이름" placeholder="이름을(를) 입력하세요" />
                            </div>
                            {/* <!--//name--> */}
                            <div className="name mb-4">
                                <label className="form-label">이메일<i className="ms-1 fa-solid fa-circle-dot" style={{ color: 'skyblue' }}></i></label>
                                <input type="email" className="form-control mb-4" id="email" name="email" data-name="이메일" aria-describedby="emailHelp" placeholder="이메일" />
                            </div>
                            {/* <!--//email--> */}
                            <div className="gender mb-4">
                                <label className="form-label">성별</label>
                                <div>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        <input className="form-check-input" type="radio" name="gender" value="male" checked />
                                        남자
                                    </label>
                                    <br />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        <input className="form-check-input" type="radio" name="gender" value="female" />
                                        여자
                                    </label>
                                </div>
                            </div>
                            {/* <!--//gender--> */}
                            <div className="number mb-4">
                                <label className="form-label">연락처</label>
                                <input type="tel" className="form-control" id="number" name="number" placeholder="연락처" />
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

