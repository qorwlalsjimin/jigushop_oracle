export default function JoinForm(){
    return (
        // ChatGPT ..
        <div class="join container ">
        <form class="w-100" method="post" action="join_process.php">
            <div class="mt-5 mb-1 row justify-content-lg-center">
                <div class="mb-3 col-sm-12 col-lg-6 row">
                    <div class="info_secret mb-1">
                        <div class="name mb-4">
                            <label class="form-label">아이디<i class="ms-1 fa-solid fa-circle-dot" style="color: skyblue;"></i></label>
                            <input type="text" class="form-control mb-4" id="id" name="id" placeholder="아이디"/>
                        </div>{/* <!--//id--> */}

                        <div class="name mb-4">
                            <label class="form-label">비밀번호<i class="ms-1 fa-solid fa-circle-dot" style="color: skyblue;"></i></label>
                            <input type="password" class="form-control mb-1" id="pw" name="pw" data-name="비밀번호" placeholder="문자, 숫자, 특수 문자가 들어간 최소 8자 비밀번호를 만들어주세요"/>
                            <input type="password" class="form-control" id="pwcheck" name="pwcheck" data-name="비밀번호 확인" placeholder="비밀번호 확인"/>                            
                        </div>{/* <!--//pass--> */}
                    </div> {/* <!--//info_secret--> */}
                   

                    <div class="info_basic">
                        <div class="name mb-4">
                            <label class="form-label">이름<i class="ms-1 fa-solid fa-circle-dot" style="color: skyblue;"></i></label>
                            <input type="text" class="form-control" id="name" name="name" data-name="이름" placeholder="이름을(를) 입력하세요"/>
                            </div>{/* <!--//name--> */}

                        <div class="name mb-4">
                            <label class="form-label">이메일<i class="ms-1 fa-solid fa-circle-dot" style="color: skyblue;"></i></label>
                            <input type="email" class="form-control mb-4" id="email" name="email" data-name="이메일" aria-describedby="emailHelp" placeholder="이메일">
                            </div>{/* <!--//email--> */}

                        <div class="gender mb-4">
                            <label class="form-label">성별</label>
                            
                            <div>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <input class="form-check-input" type="radio" name="gender" value="male" checked>
                                      남자
                                </label><br>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    <input class="form-check-input" type="radio" name="gender" value="female">
                                      여자
                                </label>
                            </div>

                        </div><!--//gender-->
                        <div class="number mb-4">
                            <label class="form-label">연락처</label>
                            <input type="tel" class="form-control" id="number" name="number" placeholder="연락처">
                        </div><!--//name-->
                    </div><!--//info_basic-->
                    <div class="btn">
                        <div class="btn_join d-grid">
                            <button type="submit" class="btn btn-success">가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}