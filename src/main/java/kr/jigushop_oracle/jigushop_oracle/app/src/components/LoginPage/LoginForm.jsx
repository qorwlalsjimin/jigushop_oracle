import React from 'react';

export default function LoginForm() {
    return (
        <>
            <div className="login_box container">
                <div className="img_box w-75">
                    <img className="w-25" src="https://cdn.imweb.me/thumbnail/20200516/bd6d0ab83943e.jpg" alt="Logo" />
                </div>
                {/* <!--img_box--> */}
                <div className="widget">
                    <form action="login_process.php" method="post">
                        <div className="naver">
                            <button type="button" className="btn_naver btn btn-outline-success mb-3 w-50" onClick={() => window.location.href = 'notice.html'}>네이버로 시작하기</button>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control w-50" id="id" name="id" placeholder="아이디" />
                        </div>
                        <div className="mb-1">
                            <input type="password" className="form-control w-50" id="pass" name="pass" placeholder="비밀번호" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">로그인상태유지</label>
                        </div>
                        <button type="submit" className="btn btn-success w-50">로그인</button>
                        <div id="loginHelp" className="loginHelp w-50 mb-5">
                            <a className="float-start" href="join.php">회원가입</a>
                            <a className="float-end" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">아이디 · 비밀번호 찾기</a>
                        </div>

                        {/* <!--모달해보쟈--> */}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">아이디 찾기</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success col-12">아이디 찾기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--끗--> */}
                        {/* <!--over_h--> */}
                        <div className="loginHelp w-50">
                            <hr />
                        </div>
                        <button type="button" className="btn btn-secondary mt-3 w-50" onClick={() => window.location.href = 'notice.html'}>비회원 주문배송 조회</button>
                    </form>
                </div>
                {/* <!--//widget--> */}
            </div>
            {/* <!--//container--> */}
        </>
    );
}

