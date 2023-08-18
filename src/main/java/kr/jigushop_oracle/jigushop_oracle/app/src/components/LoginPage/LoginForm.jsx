import React from 'react';

export default function LoginForm() {
    const styles = {
        marginTop: "200px",
    }
    return (
        <>
            <div className="container mb-5 pb-5" style={styles}>
                <div className="img_box text-center">
                    <img className="w-25 mx-auto" src="https://cdn.imweb.me/thumbnail/20200516/bd6d0ab83943e.jpg" alt="Logo" />
                </div>
                <form className="w-100" method="post" action="join_process.php">
                    <div className="mt-2 mb-1 row justify-content-center">

                        <div className="mb-3 col-sm-12 col-lg-6 row">
                            <div className="info_secret mb-1">
                                <div className="mb-2">
                                    <input type="text" className="form-control" id="id" name="id" placeholder="아이디" />
                                </div>
                                <div className="mb-1">
                                    <input type="password" className="form-control" id="pass" name="pass" placeholder="비밀번호" />
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

